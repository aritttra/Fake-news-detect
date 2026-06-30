"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

import Navbar from "../../components/Navbar";
import PageWrapper from "../../components/PageWrapper";

export default function AboutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✔");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.log(error);
      setStatus("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <PageWrapper>
      <Navbar />

      <section className="relative min-h-screen overflow-hidden px-5 pt-24 pb-16">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-[10%] w-[240px] h-[240px] bg-white/5 blur-[90px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Hero */}
          <div className="mb-20">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/40 mb-4">
              About Truth Archive
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.07em] leading-[0.95] mb-6">
              Understanding
              <br />
              Information.
            </h1>

            <div className="w-20 h-[1px] bg-white/20 mb-6" />

            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Truth Archive is an intelligence-driven platform focused on
              misinformation detection, narrative analysis, and media literacy.
              Built with cinematic interfaces and AI-assisted systems to help
              users decode modern information ecosystems.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-24">
            {[
              {
                title: "AI Analysis",
                text: "Advanced AI systems evaluate credibility and contextual reliability.",
              },
              {
                title: "Narrative Mapping",
                text: "Track information flow and emotional influence across media.",
              },
              {
                title: "Media Literacy",
                text: "Helping users critically evaluate digital information in real time.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                <h3 className="text-xl font-medium mb-3 tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="text-white/50 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/40 mb-4">
                Contact
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.05em] leading-tight mb-5">
                Let’s Build
                <br />
                Better Information.
              </h2>

              <p className="text-white/55 leading-relaxed max-w-md mb-8 text-sm md:text-base">
                For collaborations, research discussions, or project inquiries,
                connect through the form or platforms below.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {/* Gmail */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aritrakundu.in@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                >
                  <Mail size={18} />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/aritttra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aritra-kundu-a811a8311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-white/50 mb-2 block">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/50 mb-2 block">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/50 mb-2 block">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message..."
                    className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-white text-black text-sm font-medium py-3 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>

                {status && (
                  <p className="text-xs text-white/50 text-center">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 px-5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35 tracking-wide">
            © 2026 Truth Archive — Intelligence Against Misinformation
          </p>

          <div className="flex items-center gap-4 text-white/50">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aritrakundu.in@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Mail size={16} />
            </a>

            <a
              href="https://github.com/aritttra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/aritra-kundu-a811a8311"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </PageWrapper>
  );
}