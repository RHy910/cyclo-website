import Link from "next/link";
import { ArrowRight, Clock, Footprints, RotateCcw, Bot } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="glow-orb -top-24 left-1/2 h-96 w-96 -translate-x-2/3 bg-primary/30" />
        <div className="glow-orb top-10 left-1/2 h-72 w-72 translate-x-1/3 bg-secondary/30" />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
          <h1 className="text-gradient text-5xl font-bold tracking-tight md:text-7xl">
            Cyclo
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-navy/80 md:text-xl">
            Hands-free laundry logistics for college students and hotel
            guests.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/about" className="btn-primary">
              See the pitch
              <ArrowRight size={16} />
            </Link>
            <Link href="/demo" className="btn-glass">
              See the product
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem / Solution snapshot */}
      <section className="relative overflow-hidden border-t border-white/60">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                The problem
              </span>
              <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
                Laundry eats time nobody has.
              </h2>
              <p className="mt-4 text-navy/70">
                The machine does the washing. The real cost is standing by
                for it: trips up and down stairs to start, check, and collect
                a load, or loads left too long and rewashed from scratch.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { icon: Clock, label: "Time lost standing by for a machine" },
                  { icon: Footprints, label: "Constant trips to start, check, collect" },
                  { icon: RotateCcw, label: "Forgotten loads, rewashed from scratch" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm font-medium text-navy/80"
                  >
                    <span className="glass flex h-9 w-9 shrink-0 items-center justify-center !rounded-xl text-primary">
                      <item.icon size={16} />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                The solution
              </span>
              <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
                A robot picks up, monitors, and returns it.
              </h2>
              <p className="mt-4 text-navy/70">
                Book a pickup and forget about it. Cyclo collects your
                laundry, starts and monitors the wash, and lets you know the
                moment it&apos;s ready: no trips, no waiting, no forgotten
                loads.
              </p>
              <div className="glass mt-6 flex items-center gap-3 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                  <Bot size={18} />
                </span>
                <p className="text-sm font-medium text-navy/80">
                  Request a pickup. Cyclo handles the rest. Get notified when
                  it&apos;s done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-navy">
        <div className="bg-grid-dark absolute inset-0" />
        <div className="glow-orb top-0 left-1/2 h-80 w-80 -translate-x-1/2 bg-secondary/25" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Curious how it all works?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Dig into the pitch, or watch the product in action.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/about" className="btn-primary">
              See the pitch
              <ArrowRight size={16} />
            </Link>
            <Link href="/demo" className="btn-glass-dark">
              See the product
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
