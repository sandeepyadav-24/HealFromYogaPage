import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/FadeIn";
import { phases } from "@/lib/content";

export function Program() {
  return (
    <section id="program" className="bg-sage-light py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="A 12-week program, not a random class"
            centered
          />
        </FadeIn>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-sage/20 lg:block" aria-hidden />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, i) => (
              <FadeIn key={phase.weeks} delay={i * 100}>
                <div className="relative flex h-full flex-col rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sage text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                    {phase.weeks}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-charcoal">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                    {phase.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-charcoal/60">
            Our program structure is modeled on published research using a similar frequency and
            duration.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
