"use client";

import React, { useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Lock,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Linkedin,
  CheckCircle2,
  Users,
  Clock,
  CheckSquare,
  Target,
  ExternalLink,
  Info
} from "lucide-react";
import CtaSection from "../components/cta/CtaSection";

export default function ContactClient() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    concern: "",
  });

  const [toast, setToast] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  // Calendar State
  const [selectedDay, setSelectedDay] = useState<number>(21);
  const [selectedTime, setSelectedTime] = useState<string>("11:30 AM");

  const availableSlots = ["10:00 AM", "11:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  // May 2026 Calendar Layout
  const calendarDays = useMemo(() => {
    const offset = 5; // Sunday, Monday, Tuesday, Wednesday, Thursday are empty
    const days: (number | null)[] = [];
    for (let i = 0; i < offset; i++) {
      days.push(null);
    }
    for (let d = 1; d <= 31; d++) {
      days.push(d);
    }
    return days;
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_obbqdvf",
        "template_k6x0b7g",
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          concern: `${formData.concern}\n\n[Scheduled Consult Date: May ${selectedDay}, 2026 at ${selectedTime}]`,
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
          setLoading(false);
          setTimeout(() => setToast(null), 4000);
        },
        () => {
          setToast("error");
          setLoading(false);
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
    <div className="min-h-screen relative bg-transparent text-white overflow-x-hidden pt-16">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] bg-purple-900/5 blur-[100px] pointer-events-none z-0" />

      {/* ================= HERO & FORM SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading and Info */}
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block bg-brand-purple/20 border border-brand-purple/40 text-brand-purple text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Let's Build What's{" "}
              <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent block sm:inline">
                Next.
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Have a project in mind or want to explore how we can accelerate your growth? We'd love to hear from you.
            </p>

            {/* Direct Contacts List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple/20 transition-all duration-300 flex-shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Email Us</p>
                  <a href="mailto:grow@all4ps.co" className="text-white hover:text-brand-purple text-sm font-semibold transition-colors">
                    grow@all4ps.co
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple/20 transition-all duration-300 flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Call Us</p>
                  <a href="tel:+919871749916" className="text-white hover:text-brand-purple text-sm font-semibold transition-colors">
                    +91 98717 49916
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple/20 transition-all duration-300 flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Our HQ</p>
                  <p className="text-white text-sm font-semibold">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Card Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/5 bg-[#0d0d14]/80 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden shadow-[0_0_50px_-12px_rgba(168,85,247,0.15)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
              
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Send us a message</h2>
              <p className="text-gray-400 text-xs mb-6">We'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">Your Name *</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Pavani K"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#07070a] border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-brand-purple transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="grow@all4ps.co"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#07070a] border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-brand-purple transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">Company Name *</label>
                  <input
                    name="company"
                    type="text"
                    required
                    placeholder="all4Ps Inc."
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#07070a] border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-brand-purple transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">Tell us more about your requirements *</label>
                  <textarea
                    name="concern"
                    rows={3}
                    required
                    placeholder="Let us know what challenges you are facing..."
                    value={formData.concern}
                    onChange={handleChange}
                    className="w-full bg-[#07070a] border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-brand-purple transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-brand-purple to-fuchsia-400 hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:scale-[1.01] flex items-center justify-center gap-2 text-sm"
                >
                  {loading ? (
                    <div className="w-5 h-5 rounded-full border-t-2 border-white border-solid animate-spin" />
                  ) : (
                    <>Let's talk growth ↗</>
                  )}
                </button>
              </form>

              {/* Form Footer Shield */}
              <div className="flex items-center gap-2.5 mt-4 border-t border-white/5 pt-4 text-gray-400 text-[10px]">
                <Lock className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
                <p>
                  Your information is safe with us. We respect your{" "}
                  <a href="/privacy" className="text-brand-purple hover:underline">
                    privacy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECONDARY WIDGETS (3 COLUMNS) ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 relative z-10 border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Column 1: Book a Strategy Call */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-[10px] text-brand-purple font-bold tracking-widest uppercase block mb-1">Book a Strategy Call</span>
              <h3 className="text-xl font-bold text-white mb-1.5">Schedule a 30-min Consultation</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Discuss your goals, challenges, and explore how all4Ps can help you grow.
              </p>
            </div>

            {/* Calendar Card Widget */}
            <div className="rounded-2xl border border-white/5 bg-[#0d0d14] p-4">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">May 2026</h4>
                <div className="flex gap-2">
                  <button className="p-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Day Labels */}
              <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, idx) => {
                  if (day === null) {
                    return <div key={`empty-${idx}`} />;
                  }
                  const isSelected = selectedDay === day;
                  return (
                    <button
                      key={`day-${day}`}
                      onClick={() => setSelectedDay(day)}
                      className={`h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-brand-purple text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Time Slots Side Panel */}
              <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-semibold text-white">Thursday, May {selectedDay}</span>
                  <span>Available slots</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {availableSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`text-[9px] font-semibold px-2.5 py-1 rounded-full transition-all border ${
                          isSelected
                            ? "bg-brand-purple border-brand-purple text-white shadow-[0_0_6px_rgba(168,85,247,0.3)]"
                            : "bg-white/5 border-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[9px] text-gray-500 italic mt-1">
                  Time zone: Asia/Kolkata (GMT +5:30)
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Other Ways to Connect */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-[10px] text-brand-purple font-bold tracking-widest uppercase block mb-1">Other Ways to Connect</span>
              <h3 className="text-xl font-bold text-white mb-1.5">Prefer instant chat?</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Connect with our teams directly across your preferred business channels.
              </p>
            </div>

            {/* List links */}
            <div className="space-y-2.5">
              <a
                href="https://wa.me/919871749916"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl border border-white/5 bg-[#0d0d14] hover:bg-white/5 hover:border-brand-purple/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8.5 h-8.5 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                    <MessageSquare className="w-4 h-4 fill-green-500/10" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">WhatsApp Chat</h4>
                    <p className="text-[9px] text-gray-500">Chat with our team instantly</p>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://linkedin.com/company/all4ps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl border border-white/5 bg-[#0d0d14] hover:bg-white/5 hover:border-brand-purple/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8.5 h-8.5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                    <Linkedin className="w-4 h-4 fill-blue-500/10" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">LinkedIn</h4>
                    <p className="text-[9px] text-gray-500">Connect with us on LinkedIn</p>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="mailto:grow@all4ps.co"
                className="flex items-center justify-between p-3 rounded-2xl border border-white/5 bg-[#0d0d14] hover:bg-white/5 hover:border-brand-purple/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8.5 h-8.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Send an Email</h4>
                    <p className="text-[9px] text-gray-500">grow@all4ps.co</p>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="tel:+919871749916"
                className="flex items-center justify-between p-3 rounded-2xl border border-white/5 bg-[#0d0d14] hover:bg-white/5 hover:border-brand-purple/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8.5 h-8.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Call Us</h4>
                    <p className="text-[9px] text-gray-500">+91 98717 49916</p>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 3: What Happens Next? */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-[10px] text-brand-purple font-bold tracking-widest uppercase block mb-1">What Happens Next?</span>
              <h3 className="text-xl font-bold text-white mb-1.5">Our Engagement Roadmap</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Here is the step-by-step process of starting a partnership with all4Ps.
              </p>
            </div>

            {/* Timeline component */}
            <div className="relative pl-6 border-l border-brand-purple/20 space-y-5.5 py-1">
              
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -left-[33px] top-0.5 w-4.5 h-4.5 rounded-full bg-[#0a0a0f] border border-brand-purple flex items-center justify-center text-brand-purple text-[8px] font-bold">
                  01
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Submit Enquiry</h4>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    Fill out the contact form or select a call slot using the consultation booking widget.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -left-[33px] top-0.5 w-4.5 h-4.5 rounded-full bg-[#0a0a0f] border border-brand-purple flex items-center justify-center text-brand-purple text-[8px] font-bold">
                  02
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Discovery Call</h4>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    We schedule an initial meeting to review your targets, technical products, and core marketing metrics.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -left-[33px] top-0.5 w-4.5 h-4.5 rounded-full bg-[#0a0a0f] border border-brand-purple flex items-center justify-center text-brand-purple text-[8px] font-bold">
                  03
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Growth Audit</h4>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    Our performance and branding teams audit your positioning, SEO coverage, and conversion funnels.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute -left-[33px] top-0.5 w-4.5 h-4.5 rounded-full bg-[#0a0a0f] border border-brand-purple flex items-center justify-center text-brand-purple text-[8px] font-bold">
                  04
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Strategy & Proposal</h4>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    We pitch a customized growth strategy, timeline details, and proposal options to begin partnership execution.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= TRUSTED BY LOGOS + METRICS (one frame) ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 relative z-10 border-t border-white/5 bg-white/[0.01]">
        {/* Logos ribbon */}
        <div className="text-center mb-5">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-brand-purple to-fuchsia-400 bg-clip-text text-transparent">
              Growth-Focused
            </span>{" "}
            Companies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center opacity-40 hover:opacity-60 transition-opacity duration-300 mb-10">
          <div className="flex justify-center text-base font-extrabold text-white select-none">A</div>
          <div className="flex justify-center text-sm font-semibold tracking-wider text-white select-none font-mono">Flexdi</div>
          <div className="flex justify-center text-xs font-bold tracking-widest text-white uppercase select-none">unbox ROBOTICS</div>
          <div className="flex justify-center text-xs font-bold tracking-widest text-white uppercase select-none">anscer ROBOTICS</div>
          <div className="flex justify-center text-sm font-extrabold tracking-widest text-white uppercase select-none">vedanta</div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl border border-white/5 bg-[#0d0d14] flex items-center gap-3 group hover:border-brand-purple/20 transition-all duration-300">
            <div className="w-9 h-9 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-white leading-tight">50+</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Companies Served</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-white/5 bg-[#0d0d14] flex items-center gap-3 group hover:border-brand-purple/20 transition-all duration-300">
            <div className="w-9 h-9 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
              <Clock className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-white leading-tight">24 hrs</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Avg Response Time</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-white/5 bg-[#0d0d14] flex items-center gap-3 group hover:border-brand-purple/20 transition-all duration-300">
            <div className="w-9 h-9 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
              <CheckSquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-white leading-tight">95%</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Retention Rate</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl border border-white/5 bg-[#0d0d14] flex items-center gap-3 group hover:border-brand-purple/20 transition-all duration-300">
            <div className="w-9 h-9 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-white leading-tight">100%</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Tailored Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OFFICE LOCATION & MAP ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-8 relative z-10 border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Embed Column */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative h-[300px] bg-[#0d0d14]">
              {/* Premium Dark Filtered Google Map Embed */}
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9712959632863!2d77.71261309999999!3d12.9736859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11d13f9fcfb5%3A0xc0788cd7ab698b63!2sEvolve%20Coworking%20Space%20Doddanakundi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(1) hue-rotate(220deg) saturate(3) brightness(0.55) contrast(1.1)",
                }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>

          {/* Office Address Details Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-white/5 bg-[#0d0d14] p-6 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <MapPin className="w-5 h-5 text-brand-purple" />
                <h3 className="font-bold text-white text-sm">Our Office</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed font-semibold">
                Evolve - Coworking Space In Whitefield, Doddanakundi, Industrial Area 2, Bengaluru, Karnataka 560048
              </p>
              <a
                href="https://maps.google.com/?q=Evolve+-+Coworking+Space+In+Whitefield,+Doddanakundi,+Industrial+Area+2,+Bengaluru,+Karnataka+560048"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-brand-purple/40 text-brand-purple hover:bg-brand-purple hover:text-white text-xs font-semibold tracking-wider transition-all duration-300"
              >
                Get Directions <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PRE-FOOTER CTA ================= */}
      <CtaSection />

      {/* ================= TOAST NOTIFICATION CONTAINER ================= */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 rounded-2xl border border-white/10 bg-[#0d0d14] p-5 shadow-2xl flex items-start gap-4 max-w-sm"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                toast === "success"
                  ? "bg-green-500/10 text-green-500 border border-green-500/20"
                  : "bg-red-500/10 text-red-500 border border-red-500/20"
              }`}
            >
              {toast === "success" ? <CheckCircle2 className="w-5 h-5" /> : <Info className="w-5 h-5" />}
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">
                {toast === "success" ? "Message Sent!" : "Submission Failed"}
              </h5>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                {toast === "success"
                  ? "Thank you for reaching out. We have received your query and will reply within 24 hours."
                  : "Something went wrong sending EmailJS query. Please email us directly at grow@all4ps.co."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
