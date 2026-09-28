import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/FadeIn";
import { stats } from "@/lib/content";

export function Problem() {
  return (
    <section className="bg-sage-light py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="You already believe yoga could help. So why haven't you started?"
            centered
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-charcoal/80">
            Most women with PCOS know movement helps — but don&apos;t know which poses are safe,
            don&apos;t have time, or feel anxious about doing it wrong alone. HealFromYoga removes
            all three: real guidance, live correction, a plan built for exactly where you are.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="rounded-2xl bg-background p-6 text-center shadow-sm">
                <p className="font-serif text-2xl font-semibold text-sage sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
