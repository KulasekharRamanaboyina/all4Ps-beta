"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      isBackground: boolean;
    }> = [];

    const parent = canvas.parentElement;
    if (!parent) return;

    // Use full scroll height of document to compute initial bounds, anticipating scrollable height
    const initialWidth = parent.offsetWidth || window.innerWidth;
    const documentHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      parent.offsetHeight,
      window.innerHeight
    );

    let hasResized = false;
    let lastHeight = 0;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = parent.offsetWidth;
        const height = parent.offsetHeight;
        
        canvas.width = width;
        canvas.height = height;

        // Re-disperse particles if page height changes significantly (e.g. dynamic timeline/images loading)
        if (Math.abs(height - lastHeight) > 100 && width >= 100 && height >= 100) {
          lastHeight = height;
          hasResized = true;
          particles.forEach((p) => {
            p.x = Math.random() * width;
            p.y = Math.random() * height;
          });
        }
      }
    });
    resizeObserver.observe(parent);

    // Initialize particles: background bokeh vs sharp foreground
    const parentArea = initialWidth * documentHeight;
    const computedCount = Math.floor(parentArea / 9500);
    const particleCount = window.innerWidth < 768
      ? Math.max(Math.min(computedCount, 220), 65)
      : Math.max(Math.min(computedCount, 550), 130);

    particles = Array.from({ length: particleCount }).map(() => {
      const isBackground = Math.random() > 0.65;
      return {
        x: Math.random() * initialWidth,
        y: Math.random() * documentHeight,
        vx: (Math.random() - 0.5) * (isBackground ? 0.35 : 0.85),
        vy: (Math.random() - 0.5) * (isBackground ? 0.35 : 0.85),
        radius: isBackground ? Math.random() * 3.5 + 2 : Math.random() * 1.5 + 1.2,
        alpha: isBackground ? Math.random() * 0.12 + 0.04 : Math.random() * 0.35 + 0.2,
        isBackground,
      };
    });

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!hasResized || canvas.width < 100 || canvas.height < 100) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // 1. Draw Mouse Spotlight Radial Glow
      if (mouse.active) {
        const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        glowGrad.addColorStop(0, "rgba(168, 85, 247, 0.09)");
        glowGrad.addColorStop(0.5, "rgba(168, 85, 247, 0.03)");
        glowGrad.addColorStop(1, "rgba(168, 85, 247, 0)");
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw connections (only for sharp foreground particles)
      const maxDistance = 115;
      const maxDistanceSq = maxDistance * maxDistance;
      const particlesLength = particles.length;

      for (let i = 0; i < particlesLength; i++) {
        const p1 = particles[i];
        if (p1.isBackground) continue;

        for (let j = i + 1; j < particlesLength; j++) {
          const p2 = particles[j];
          if (p2.isBackground) continue;

          const dx = p1.x - p2.x;
          // Simple bounding box checks to skip math checks for far away particles
          if (Math.abs(dx) >= maxDistance) continue;

          const dy = p1.y - p2.y;
          if (Math.abs(dy) >= maxDistance) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistanceSq) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Scaled thickness and gradient line based on distance
            const factor = 1 - dist / maxDistance;
            ctx.strokeStyle = `rgba(168, 85, 247, ${factor * 0.13})`;
            ctx.lineWidth = factor * 0.7;
            ctx.stroke();
          }
        }
      }

      // 3. Draw and update particles
      const mouseRadius = 180;
      for (let i = 0; i < particlesLength; i++) {
        const p = particles[i];

        // Foreground particles interact with mouse gravity
        if (!p.isBackground && mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          
          // Bounding box pre-check for mouse gravity
          if (Math.abs(dx) < mouseRadius && Math.abs(dy) < mouseRadius) {
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouseRadius) {
              const force = (mouseRadius - dist) / mouseRadius;
              // Attract towards mouse
              p.x += (dx / dist) * force * 0.45;
              p.y += (dy / dist) * force * 0.45;
              
              // Draw connection line to mouse
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(217, 70, 239, ${force * 0.16})`; // fuchsia connections to cursor
              ctx.lineWidth = force * 0.7;
              ctx.stroke();
            }
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        if (p.isBackground) {
          // Blur / Bokeh effect for background particles
          ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
          ctx.shadowBlur = 12;
          ctx.shadowColor = "rgba(168, 85, 247, 0.4)";
        } else {
          // Sharp foreground particles
          ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow blur
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
