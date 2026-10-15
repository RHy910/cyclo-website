import Link from "next/link";
import { ArrowRight, Hotel, HeartHandshake, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/team/ContactForm";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

const audiences = [
  {
    icon: Hotel,
    title: "Hotels and extended-stay",
    who: "General managers, operations and housekeeping leads",
    questions: [
      "How much staff time goes to laundry today, in-house or outsourced?",
      "When a guest asks for laundry help, what happens?",
      "What have you tried that didn't work?",
      "What would a small trial need to look like for you to say yes?",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Senior living and nursing homes",
    who: "Administrators, directors of nursing, environmental services",
    questions: [
      "Who handles resident laundry today, and how does it go?",
      "How often do items get lost, mixed up, or delayed?",
      "Which rules on infection control and resident belongings would any new service have to respect?",
      "Where is your team stretched thinnest?",
    ],
  },
];

const steps = [
  {
    title: "A short conversation",
    desc: "15 minutes by phone, video, or in person at your property.",
  },
  {
    title: "No pitch, no commitment",
    desc: "We're not selling anything yet. We ask, and we listen.",
  },
  {
    title: "We share what we learn",
    desc: "You get a summary of what we're hearing from other properties.",
  },
];

const chip =
  "inline-flex items-center gap-2 rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-white";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            For hotels and senior living communities
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-bold text-navy md:text-6xl">
            We&apos;re learning where laundry slows your team down.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy/80 md:text-xl">
            Cyclo is exploring hands-free laundry help for hotels and senior
            living communities. Before we build anything, we want to hear from
            the people who run them.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/#talk" className="btn-primary !py-4 !text-base">
              Talk to us for 15 minutes
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+19415921078"
              className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-6 py-4 text-base font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-white"
            >
              <Phone size={18} />
              Call (941) 592-1078
            </a>
          </div>

          <p className="mt-6 text-base text-navy/70">
            We&apos;re not selling anything yet. Just asking questions.
          </p>
        </div>
      </section>

      {/* Who we want to hear from */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Who we&apos;d like to hear from
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-navy/70">
            If you run a property, you know where the time goes. Here&apos;s
            what we&apos;re curious about.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-tint bg-cream p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                  <a.icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy">{a.title}</h3>
                <p className="mt-1 text-base text-navy/70">{a.who}</p>

                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
                  What we want to ask
                </p>
                <ul className="mt-3 space-y-3">
                  {a.questions.map((q) => (
                    <li
                      key={q}
                      className="flex gap-3 text-base text-navy/80"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we're asking */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-5 md:gap-16">
            <h2 className="text-3xl font-bold text-navy md:col-span-2 md:text-4xl">
              Why we&apos;re asking
            </h2>
            <div className="space-y-5 text-lg text-navy/80 md:col-span-3">
              <p>
                Cyclo started with a simple observation in college dorms: the
                washing is automatic, but the standing by for it isn&apos;t.
                Trips up and down stairs, checking whether a load is done,
                clothes left too long.
              </p>
              <p>
                We think hotels and care communities may have a version of the
                same problem. We might be wrong, or we might be solving the
                wrong part of it. That&apos;s exactly what we want to find out
                before building anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a conversation works */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            What a conversation looks like
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-tint bg-cream p-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-base font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-base text-navy/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to us */}
      <section id="talk" className="scroll-mt-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Talk to us
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-navy/70">
            Send a note, or reach Ralph directly. Whatever is easiest for you.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+19415921078" className={chip}>
              <Phone size={16} />
              (941) 592-1078
            </a>
            <a href="mailto:rhyacinthe@colgate.edu" className={chip}>
              <Mail size={16} />
              rhyacinthe@colgate.edu
            </a>
            <a
              href="https://www.linkedin.com/in/ralphhyacinthe/"
              target="_blank"
              rel="noopener noreferrer"
              className={chip}
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-tint bg-white p-8">
            <ContactForm
              tone="light"
              subjects={[
                "I run a hotel",
                "I run a senior living or nursing community",
                "I'd like to be interviewed",
                "Other",
              ]}
              messageLabel="Tell us a bit about your property"
              placeholder="Where does laundry take up the most time for your team?"
            />
          </div>
        </div>
      </section>
    </>
  );
}
