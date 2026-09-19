import type { Metadata } from "next";
import {
  Clock,
  Footprints,
  RotateCcw,
  Smartphone,
  Bot,
  Bell,
  Rocket,
  AlertTriangle,
  DollarSign,
  ClipboardCheck,
  PackageCheck,
  WashingMachine,
  Undo2,
  ArrowRight,
} from "lucide-react";
import DeckNav from "@/components/deck/DeckNav";
import SlideLabel from "@/components/deck/SlideLabel";
import StatusBadge from "@/components/deck/StatusBadge";

export const metadata: Metadata = {
  title: "The Deck — Cyclo",
  description: "Cyclo's pre-seed pitch: robotic laundry logistics.",
};

const TOTAL = 10;

export default function DeckPage() {
  return (
    <>
      <DeckNav />

      {/* 1. Intro */}
      <section
        id="intro"
        className="flex min-h-[85vh] flex-col justify-center bg-navy px-6 py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SlideLabel index={1} total={TOTAL} title="Intro" dark />
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Cyclo
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-secondary">
            Pre-seed &middot; Robotic laundry logistics
          </p>
          <p className="mt-8 max-w-2xl text-xl font-medium text-white/80 md:text-2xl">
            &ldquo;We do hands-free laundry logistics for college students and
            hotel guests.&rdquo;
          </p>
        </div>
      </section>

      {/* 2. Problem */}
      <section id="problem" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SlideLabel index={2} total={TOTAL} title="Problem" />
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Laundry eats time nobody has.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-tint bg-pale p-6">
              <Clock size={22} className="text-primary" />
              <h3 className="mt-4 font-bold text-navy">
                It&apos;s automatic. You&apos;re still not free.
              </h3>
              <p className="mt-2 text-sm text-navy/70">
                The machine does the washing — the cost is standing by for
                it.
              </p>
            </div>
            <div className="rounded-2xl border border-tint bg-pale p-6">
              <Footprints size={22} className="text-primary" />
              <h3 className="mt-4 font-bold text-navy">Constant trips</h3>
              <p className="mt-2 text-sm text-navy/70">
                Up and down stairs to start, check, and collect a load.
              </p>
            </div>
            <div className="rounded-2xl border border-tint bg-pale p-6">
              <RotateCcw size={22} className="text-primary" />
              <h3 className="mt-4 font-bold text-navy">Forgotten loads</h3>
              <p className="mt-2 text-sm text-navy/70">
                Left too long, rewashed from scratch.
              </p>
            </div>
          </div>

          <blockquote className="mt-12 rounded-2xl border-l-4 border-primary bg-pale p-6 text-lg font-medium text-navy md:p-8 md:text-xl">
            &ldquo;I hate doing laundry — and most of the time, I&apos;m not
            even the one doing anything.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* 3. Product */}
      <section id="product" className="bg-pale px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SlideLabel index={3} total={TOTAL} title="Product" />
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Book it. Forget it. It&apos;s done.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Smartphone,
                title: "Request a pickup",
                desc: "Pick a window in the app.",
              },
              {
                icon: Bot,
                title: "Cyclo handles the rest",
                desc: "Robot collects, starts, and monitors the wash.",
              },
              {
                icon: Bell,
                title: "Notified when it's ready",
                desc: "No trips, no waiting, no forgotten loads.",
              },
            ].map((step, i) => (
              <div key={step.title} className="relative">
                <div className="h-full rounded-2xl border border-tint bg-white p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <step.icon size={22} className="mt-4 text-primary" />
                  <h3 className="mt-4 font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-navy/70">{step.desc}</p>
                </div>
                {i < 2 && (
                  <ArrowRight
                    size={20}
                    className="absolute top-1/2 -right-4 hidden -translate-y-1/2 text-tint md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section id="how-it-works" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SlideLabel index={4} total={TOTAL} title="How it works" />
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Four steps, zero effort.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ClipboardCheck, title: "Request" },
              { icon: PackageCheck, title: "Collect" },
              { icon: WashingMachine, title: "Launder" },
              { icon: Undo2, title: "Return" },
            ].map((step, i) => (
              <div key={step.title} className="relative">
                <div className="rounded-2xl border border-tint bg-pale p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary">
                    <step.icon size={22} />
                  </div>
                  <h3 className="mt-4 font-bold text-navy">{step.title}</h3>
                  {step.title === "Launder" && (
                    <p className="mt-2 text-xs text-navy/60">
                      Robot starts + monitors the wash
                    </p>
                  )}
                </div>
                {i < 3 && (
                  <ArrowRight
                    size={18}
                    className="absolute top-1/2 -right-4 hidden -translate-y-1/2 text-tint lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why now */}
      <section id="why-now" className="bg-pale px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SlideLabel index={5} total={TOTAL} title="Why now" />
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Robots are proven. People already pay more for this.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-tint bg-white p-6">
              <Rocket size={22} className="text-primary" />
              <h3 className="mt-4 font-bold text-navy">Proven</h3>
              <p className="mt-2 text-sm text-navy/70">
                Avride absorbed Starship&apos;s 21 exited campuses in 2026,
                now 25+ campuses.
              </p>
            </div>
            <div className="rounded-2xl border border-tint bg-white p-6">
              <AlertTriangle size={22} className="text-primary" />
              <h3 className="mt-4 font-bold text-navy">The catch</h3>
              <p className="mt-2 text-sm text-navy/70">
                Campus-only is seasonal — Starship&apos;s own reason for
                leaving.
              </p>
            </div>
            <div className="rounded-2xl border border-tint bg-white p-6">
              <DollarSign size={22} className="text-primary" />
              <h3 className="mt-4 font-bold text-navy">
                Already paying more
              </h3>
              <p className="mt-2 text-sm text-navy/70">
                Rinse has raised through Series D, backed by LG Electronics,
                charging $15&ndash;50/load — but skips dorms and college
                towns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who pays */}
      <section id="who-pays" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SlideLabel index={6} total={TOTAL} title="Who pays" />
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Buildings grant access. Residents pay per load.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-tint bg-pale p-8">
              <span className="text-5xl font-bold text-primary">$4</span>
              <span className="ml-2 text-lg font-semibold text-navy/70">
                / load
              </span>
              <p className="mt-4 text-sm text-navy/70">
                Charged directly to the resident at pickup.
              </p>
            </div>
            <div className="rounded-2xl border border-tint bg-pale p-8">
              <p className="text-sm text-navy/70">
                Housing offices and hotel GMs grant building access{" "}
                <span className="font-semibold text-navy">free</span>, as a
                retention differentiator.
              </p>
              <p className="mt-4 text-sm text-navy/70">
                First target:{" "}
                <span className="font-semibold text-navy">
                  Colgate Residential Life
                </span>
                , via the founder&apos;s prior role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Market */}
      <section id="market" className="bg-pale px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SlideLabel index={7} total={TOTAL} title="Market" />
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            $1.1B total addressable market.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-navy/70">
            US dorm + extended-stay hotel laundry at a $4/load fee: $1.0B
            dorm + $88M hotel.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-tint bg-white p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                Conservative
              </span>
              <p className="mt-2 text-3xl font-bold text-navy">$1.5M</p>
              <p className="mt-2 text-sm text-navy/70">
                25 campuses, 15 hotels, 15% adoption
              </p>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-white p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Base
              </span>
              <p className="mt-2 text-3xl font-bold text-navy">$5.9M</p>
              <p className="mt-2 text-sm text-navy/70">
                60 campuses, 40 hotels, 25% adoption
              </p>
            </div>
            <div className="rounded-2xl border border-tint bg-white p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                Upside
              </span>
              <p className="mt-2 text-3xl font-bold text-navy">$20.6M</p>
              <p className="mt-2 text-sm text-navy/70">
                150 campuses, 100 hotels, 35% adoption
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-tint bg-white p-4">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-primary" />
            <p className="text-sm text-navy/70">
              <span className="font-semibold text-navy">Note:</span> the
              load-frequency assumption behind these figures is a pending
              estimate, not yet confirmed by survey data.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Traction */}
      <section id="traction" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SlideLabel index={8} total={TOTAL} title="Traction" />
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Where things stand.
          </h2>

          <div className="mt-12 overflow-hidden rounded-2xl border border-tint">
            {[
              {
                item: "Beachhead identified (Colgate Residential Life, warm intro)",
                status: "In progress" as const,
              },
              {
                item: "14-question survey fielded",
                status: "Live" as const,
              },
              {
                item: "Concept demo",
                status: "In build" as const,
              },
              {
                item: "First pilot building signed",
                status: "Not started" as const,
              },
            ].map((row, i) => (
              <div
                key={row.item}
                className={`flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                  i % 2 === 0 ? "bg-pale" : "bg-white"
                } ${i > 0 ? "border-t border-tint" : ""}`}
              >
                <span className="text-sm font-medium text-navy">
                  {row.item}
                </span>
                <StatusBadge status={row.status} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Competition */}
      <section id="competition" className="bg-pale px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SlideLabel index={9} total={TOTAL} title="Competition" />
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Nobody serves the building.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-tint bg-white p-6">
              <h3 className="font-bold text-navy">Doing it yourself</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-navy/50">Cost</dt>
                  <dd className="font-semibold text-navy">Free</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-navy/50">Effort</dt>
                  <dd className="font-semibold text-navy">High</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-navy/50">Coverage</dt>
                  <dd className="font-semibold text-navy">Everywhere</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-tint bg-white p-6">
              <h3 className="font-bold text-navy">
                Human delivery <span className="text-navy/50">(Rinse, Cleanly)</span>
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-navy/50">Cost</dt>
                  <dd className="font-semibold text-navy">$15&ndash;50/load</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-navy/50">Effort</dt>
                  <dd className="font-semibold text-navy">
                    Low, but full wash-and-fold
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-navy/50">Coverage</dt>
                  <dd className="font-semibold text-navy">Mostly urban</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border-2 border-primary bg-navy p-6 text-white">
              <h3 className="font-bold">Cyclo</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Cost</dt>
                  <dd className="font-semibold">+$4/load</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Effort</dt>
                  <dd className="font-semibold">No effort</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Coverage</dt>
                  <dd className="font-semibold">Built into the building</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Team & the ask */}
      <section
        id="team-ask"
        className="flex min-h-[85vh] flex-col justify-center bg-navy px-6 py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SlideLabel index={10} total={TOTAL} title="Team & the ask" dark />
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Team &amp; the ask
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Founder
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">
                Ralph Hyacinthe
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Former Colgate Residential Life staff, with an
                infrastructure and monitoring engineering background
                (Datadog).
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                The ask
              </span>
              <p className="mt-3 text-3xl font-bold text-white">$500K</p>
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
    </>
  );
}
