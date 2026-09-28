"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/FadeIn";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Frequently asked questions" centered />
        </FadeIn>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={faq.question} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-sage/10 bg-background shadow-sm">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-charcoal">{faq.question}</span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-sage transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-200 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-charcoal/75">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
