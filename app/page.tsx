import Link from "next/link";
import { ArrowRight, Clock, Footprints, RotateCcw, Bot } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
        <h1 className="text-5xl font-bold tracking-tight text-navy md:text-7xl">
          Cyclo
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-navy/80 md:text-xl">
          We do hands-free laundry logistics for college students and hotel
          guests.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/deck"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary"
          >
            See the pitch
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-lg border border-tint bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
          >
            See the product
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Problem / Solution snapshot */}
      <section className="border-t border-tint bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                The problem
              </span>
              <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
                Laundry eats time nobody has.
              </h2>
              <p className="mt-4 text-navy/70">
                The machine does the washing — the real cost is standing by
                for it. Trips up and down stairs to start, check, and collect
                a load, or loads left too long and rewashed from scratch.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-navy/80">
                  <Clock size={18} className="shrink-0 text-primary" />
                  Time lost standing by for a machine
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-navy/80">
                  <Footprints size={18} className="shrink-0 text-primary" />
                  Constant trips to start, check, collect
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-navy/80">
                  <RotateCcw size={18} className="shrink-0 text-primary" />
                  Forgotten loads, rewashed from scratch
                </li>
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
                moment it&apos;s ready — no trips, no waiting, no forgotten
                loads.
              </p>
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-tint bg-pale p-4">
                <Bot size={22} className="shrink-0 text-primary" />
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
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Curious how it all works?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Dig into the pitch, or watch the product in action.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/deck"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary"
            >
              See the pitch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-secondary hover:text-secondary"
            >
              See the product
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
