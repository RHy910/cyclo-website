"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const CONTACT_EMAIL = "rhyacinthe@colgate.edu";

const subjects = [
  "Investment / partnership",
  "Pilot / building interest",
  "Press / media",
  "Other",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `${message}\n\n---\nFrom: ${name} (${email})`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[Cyclo] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const inputClass =
    "w-full rounded-xl border border-white/20 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-secondary";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Investor"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@fund.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
          Subject
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-navy text-white">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
        <Send size={16} />
      </button>
    </form>
  );
}
