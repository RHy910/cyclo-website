"use client";

import { useState } from "react";
import { Play, Smartphone, Bot, Activity, PackageCheck } from "lucide-react";

const stages = [
  {
    id: "pickup",
    caption: "Requesting a pickup",
    description: "A resident opens the app and books a pickup window.",
    icon: Smartphone,
  },
  {
    id: "collection",
    caption: "Robot collection",
    description: "Cyclo navigates to the room and collects the laundry.",
    icon: Bot,
  },
  {
    id: "monitoring",
    caption: "Live wash monitoring",
    description: "The wash is started and monitored in real time.",
    icon: Activity,
  },
  {
    id: "return",
    caption: "Return & notification",
    description: "Clean laundry is returned and the resident is notified.",
    icon: PackageCheck,
  },
];

export default function VideoGallery() {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <div>
      {/* Main player */}
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-2xl border border-tint bg-navy text-white">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <Play size={26} className="ml-0.5 text-white/70" />
        </div>
        <div className="text-center">
          <p className="font-semibold">{current.caption}</p>
          <p className="mt-1 text-sm text-white/50">Video coming soon</p>
        </div>
      </div>

      {/* Filmstrip */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stages.map((stage, i) => (
          <button
            key={stage.id}
            type="button"
            onClick={() => setActive(i)}
            className={`group flex flex-col items-center gap-3 rounded-xl border bg-white p-4 text-center transition-colors ${
              active === i
                ? "border-primary ring-1 ring-primary"
                : "border-tint hover:border-primary/50"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                active === i
                  ? "bg-primary text-white"
                  : "bg-pale text-primary group-hover:bg-tint/60"
              }`}
            >
              <stage.icon size={18} />
            </div>
            <span className="text-xs font-semibold text-navy">
              {stage.caption}
            </span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-navy/60">
        {current.description}
      </p>
    </div>
  );
}
