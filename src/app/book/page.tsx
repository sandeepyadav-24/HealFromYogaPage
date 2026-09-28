"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CalEmbed } from "@/components/CalEmbed";
import { SiteLogo } from "@/components/ui";
import { LINKS, type BookingDuration } from "@/lib/config";

const options: {
  duration: BookingDuration;
  label: string;
  description: string;
  calLink: string;
  recommended?: boolean;
}[] = [
  {
    duration: "30",
    label: "30 minutes",
    description: "Recommended — enough time to discuss your goals and find the right program.",
    calLink: LINKS.booking.embed.primary,
    recommended: true,
  },
  {
    duration: "15",
    label: "15 minutes",
    description: "Short on time? A quick intro to see if HealFromYoga is a fit.",
    calLink: LINKS.booking.embed.quick,
  },
];

function BookPageContent() {
  const searchParams = useSearchParams();
  const initialDuration = searchParams.get("duration") === "15" ? "15" : "30";
  const [selected, setSelected] = useState<BookingDuration>(initialDuration);

  const active = options.find((o) => o.duration === selected) ?? options[0];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-sage/10 bg-background">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/">
            <SiteLogo />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-charcoal/70 transition-colors hover:text-sage"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            Book your free intro call
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-charcoal/75">
            Choose a time that works for you. Sessions are scheduled around U.S. Eastern Time.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {options.map((option) => {
            const isActive = selected === option.duration;
            return (
              <button
                key={option.duration}
                type="button"
                onClick={() => setSelected(option.duration)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  isActive
                    ? "border-sage bg-sage-light ring-2 ring-sage/30"
                    : "border-sage/15 bg-background hover:border-sage/40"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-semibold text-charcoal">
                    {option.label}
                  </span>
                  {option.recommended && (
                    <span className="rounded-full bg-terracotta px-2 py-0.5 text-xs font-semibold text-white">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-charcoal/70">{option.description}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-sage/10 bg-background shadow-sm">
          <CalEmbed key={active.calLink} calLink={active.calLink} />
        </div>

        <p className="mt-6 text-center text-sm text-charcoal/60">
          Prefer to book on Cal.com directly?{" "}
          <a
            href={selected === "15" ? LINKS.booking.quick : LINKS.booking.primary}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sage underline-offset-4 hover:underline"
          >
            Open in new tab
          </a>
        </p>
      </main>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background text-charcoal/60">
          Loading booking calendar…
        </div>
      }
    >
      <BookPageContent />
    </Suspense>
  );
}
