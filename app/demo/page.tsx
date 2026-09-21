import type { Metadata } from "next";
import VideoGallery from "@/components/demo/VideoGallery";

export const metadata: Metadata = {
  title: "Demo - Cyclo",
  description: "See Cyclo's hands-free laundry logistics in action.",
};

export default function DemoPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="glow-orb -top-24 left-1/2 h-96 w-96 -translate-x-1/2 bg-primary/25" />

      <div className="relative mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Product demo
          </span>
          <h1 className="text-gradient mt-3 text-4xl font-bold md:text-5xl">
            See Cyclo in action.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-navy/70">
            A walkthrough of a full cycle, from pickup to return.
          </p>
        </div>

        <div className="mt-14">
          <VideoGallery />
        </div>
      </div>
    </section>
  );
}
