import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/FadeIn";
import { differentiators } from "@/lib/content";

export function WhyHealFromYoga() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Why HealFromYoga" centered />
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {differentiators.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className="text-center md:text-left">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-sage md:mx-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
