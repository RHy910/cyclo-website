import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Team - Cyclo",
  description: "The founder behind Cyclo, and the pre-seed ask.",
};

export default function TeamPage() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-navy px-6 py-24">
      <div className="bg-grid-dark absolute inset-0" />
      <div className="glow-orb -top-32 left-1/4 h-96 w-96 bg-primary/25" />
      <div className="glow-orb bottom-0 right-1/4 h-80 w-80 bg-secondary/25" />

      <div className="relative mx-auto w-full max-w-6xl">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to the pitch
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl">
          Team &amp; the ask
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="glass-dark p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Founder
            </span>
            <h2 className="mt-3 text-xl font-bold text-white">
              Ralph Hyacinthe
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Former Colgate Residential Life staff, with an infrastructure
              and monitoring engineering background (Datadog). Also a
              self-proclaimed avid laundry hater who has lost far too many
              Saturday afternoons babysitting a dorm washing machine, and
              built Cyclo so nobody else has to.
            </p>
          </div>

          <div className="glass-dark p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              The ask
            </span>
            <p className="text-gradient-light mt-3 text-3xl font-bold">
              $500K
            </p>
            <p className="mt-1 text-sm font-semibold text-white/70">
              pre-seed
            </p>
            <p className="mt-4 text-sm text-white/70">
              To build the first robot and fleet-monitoring layer, plus
              2&ndash;3 pilot partners (colleges and extended-stay hotels).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
