"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    concern: "",
  });

  const [toast, setToast] = useState<null | "success" | "error">(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_obbqdvf",
        "template_k6x0b7g",
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          concern: formData.concern,
        },
        "Jkr6JdoCrHYeiNbqg",
      )
      .then(
        () => {
          setToast("success");
          setFormData({
            name: "",
            email: "",
            company: "",
            concern: "",
          });
          setTimeout(() => setToast(null), 4000);
        },
        () => {
          setToast("error");
          setTimeout(() => setToast(null), 4000);
        },
      );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* LEFT */}
      <div className="md:w-1/2 bg-black text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/370/800/1200')] bg-cover bg-center opacity-30" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Talk.
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Just a thoughtful conversation about where you want to go next.
          </p>

          <div className="space-y-4">
            <a href="mailto:grow@all4ps.co" className="block font-bold">
              grow@all4ps.co
            </a>
            <a href="tel:+919871749916" className="block font-bold">
              +91 98717 49916
            </a>

            <p>Bangalore, Karnataka</p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-lg mx-auto w-full"
        >
          <input
            name="name"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Work email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border"
          />

          <input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-4 border"
          />

          <textarea
            name="concern"
            rows={4}
            placeholder="Tell us more"
            value={formData.concern}
            onChange={handleChange}
            className="w-full p-4 border"
          />

          <button
            type="submit"
            className="w-full bg-brand-purple text-white font-bold py-4"
          >
            Let's talk growth
          </button>
        </form>
      </div>

      {toast && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="bg-white p-8">
            {toast === "success"
              ? "Message sent successfully"
              : "Something went wrong"}
          </div>
        </div>
      )}
    </div>
  );
}
