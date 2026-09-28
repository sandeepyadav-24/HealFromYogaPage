import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/FadeIn";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-sage-light py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="What women are saying" centered />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col rounded-2xl bg-background p-6 shadow-sm">
                <svg className="h-8 w-8 text-sage/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/80 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-sage/10 pt-4">
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-xs text-charcoal/60">{t.descriptor}</p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
