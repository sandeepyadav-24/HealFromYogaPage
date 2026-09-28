import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SiteLogo } from "@/components/ui";
import { BookingTimeline, CurriculumIntro, CurriculumSeoContent } from "@/components/program/BookingTimeline";
import { CurriculumAccordion } from "@/components/program/CurriculumAccordion";
import { ProgramFAQ } from "@/components/program/ProgramFAQ";
import { StickyProgramCTA } from "@/components/program/StickyProgramCTA";
import { LINKS } from "@/lib/config";

export const metadata: Metadata = {
  title: "12-Week PCOS Yoga Program — Full Curriculum | HealFromYoga",
  description:
    "See exactly what happens after you book and every session across all 12 weeks of the HealFromYoga PCOS yoga program. Foundation, Balance, and Restore packages explained week by week.",
  openGraph: {
    title: "12-Week PCOS Yoga Program — Full Curriculum | HealFromYoga",
    description:
      "Full transparency on the HealFromYoga 12-week PCOS yoga program — booking journey, session-by-session curriculum, and what's included in each package.",
    url: "https://healfromyoga.com/program",
    type: "website",
  },
};

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="border-b border-sage/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/">
            <SiteLogo />
          </Link>
          <Link
            href={LINKS.bookPage}
            className="rounded-full bg-sage px-4 py-2 text-sm font-semibold text-white transition hover:bg-sage/90"
          >
            Book Free Intro Call
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Program Details
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
            What you&apos;ll experience, week by week
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/75">
            Full transparency on what happens after you book and exactly what you&apos;ll be
            taught in every session — so you know precisely what you&apos;re investing in.
          </p>
        </div>
      </div>

      <BookingTimeline />

      <section className="border-t border-sage/10 bg-sage-light/40 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <CurriculumIntro />
          <Suspense
            fallback={
              <div className="py-12 text-center text-charcoal/60">Loading curriculum…</div>
            }
          >
            <CurriculumAccordion />
          </Suspense>
        </div>
      </section>

      <ProgramFAQ />

      <CurriculumSeoContent />
      <StickyProgramCTA />
    </div>
  );
}
