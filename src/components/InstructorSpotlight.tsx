import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/FadeIn";

export function InstructorSpotlight() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Meet your instructor" centered />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mx-auto mt-12 max-w-lg overflow-hidden rounded-2xl bg-background shadow-sm ring-1 ring-sage/10">
            <div className="aspect-[4/3] bg-sage-light flex items-center justify-center">
              <div className="text-center text-charcoal/40">
                <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="mt-2 text-sm">Instructor photo placeholder</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                [Placeholder]
              </p>
              <h3 className="mt-1 font-serif text-2xl font-semibold text-charcoal">
                Priya Sharma, RYT-500
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                [Placeholder bio] Priya is a Yoga Alliance–certified instructor trained in
                Rishikesh, India, with specialized training in therapeutic and prenatal yoga.
                She has guided hundreds of women through gentle, structured programs designed
                for hormonal wellness and body-safe movement.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
