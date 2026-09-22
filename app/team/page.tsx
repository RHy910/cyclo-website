import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/team/ContactForm";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export const metadata: Metadata = {
  title: "Team - Cyclo",
  description: "The founder behind Cyclo, and the pre-seed ask.",
};

export default function TeamPage() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-navy px-6 py-24">
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

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/ralph-hyacinthe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
              <a
                href="mailto:rhyacinthe@colgate.edu"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy"
              >
                <Mail size={14} />
                rhyacinthe@colgate.edu
              </a>
              <a
                href="tel:+19415921078"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy"
              >
                <Phone size={14} />
                (941) 592-1078
              </a>
            </div>
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

        <div className="glass-dark mt-6 p-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Get in touch
          </span>
          <h2 className="mt-3 text-xl font-bold text-white">
            Questions, pilots, or just want to talk laundry robots?
          </h2>
          <p className="mt-2 text-sm text-white/70">
            This opens an email to {"rhyacinthe@colgate.edu"} with everything
            filled in.
          </p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
