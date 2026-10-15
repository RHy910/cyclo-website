"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const CONTACT_EMAIL = "rhyacinthe@colgate.edu";

const defaultSubjects = [
  "Investment / partnership",
  "Pilot / building interest",
  "Press / media",
  "Other",
];

export default function ContactForm({
  tone = "dark",
  subjects = defaultSubjects,
  placeholder = "What's on your mind?",
  messageLabel = "Message",
}: {
  tone?: "dark" | "light";
  subjects?: string[];
  placeholder?: string;
  messageLabel?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `${message}\n\n---\nFrom: ${name} (${email})`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[Cyclo] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const light = tone === "light";

  const inputClass = light
    ? "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-base text-navy placeholder-navy/40 outline-none transition-colors focus:border-primary"
    : "w-full rounded-xl border border-white/20 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-secondary";

  const labelClass = light
    ? "mb-1.5 block text-sm font-semibold text-navy/70"
    : "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourproperty.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          list="subject-suggestions"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Type a subject, or pick a suggestion"
          className={inputClass}
        />
        <datalist id="subject-suggestions">
          {subjects.map((s) => (
            <option key={s} value={s} />
          ))}
        </datalist>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {messageLabel}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
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
