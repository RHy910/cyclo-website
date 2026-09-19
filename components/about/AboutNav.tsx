"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "problem", label: "Problem" },
  { id: "product", label: "Product" },
  { id: "how-it-works", label: "How it works" },
  { id: "why-now", label: "Why now" },
  { id: "who-pays", label: "Who pays" },
  { id: "market", label: "Market" },
  { id: "traction", label: "Traction" },
  { id: "competition", label: "Competition" },
  { id: "team-ask", label: "Team & ask" },
];

export default function AboutNav() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-40 px-4">
      <nav className="glass-chrome mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto rounded-2xl px-4 py-2.5 text-sm shadow-lg shadow-navy/5">
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 font-medium whitespace-nowrap transition-all ${
              active === section.id
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/25"
                : "text-navy/60 hover:bg-white/60 hover:text-primary"
            }`}
          >
            <span className="text-xs opacity-60">
              {String(i + 1).padStart(2, "0")}
            </span>
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
