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

export default function DeckNav() {
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
    <div className="sticky top-[65px] z-40 border-b border-tint bg-pale/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-6 py-3 text-sm">
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 font-medium whitespace-nowrap transition-colors ${
              active === section.id
                ? "bg-primary text-white"
                : "text-navy/60 hover:text-primary"
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
