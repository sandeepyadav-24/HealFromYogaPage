import { Button, SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/FadeIn";
import { LINKS } from "@/lib/config";
import { packages } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="bg-sage-light py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Programs & Pricing" centered />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.id} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-2xl bg-background p-6 shadow-sm ${
                  "popular" in pkg && pkg.popular ? "ring-2 ring-sage shadow-md" : "border border-sage/10"
                }`}
              >
                {"popular" in pkg && pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="font-serif text-xl font-semibold text-charcoal">{pkg.name}</h3>
                <p className="mt-2 font-serif text-3xl font-semibold text-sage">{pkg.price}</p>
                <p className="mt-1 text-sm text-charcoal/60">
                  {pkg.frequency} · {pkg.duration}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/75">{pkg.description}</p>

                <ul className="mt-5 flex-1 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-sage"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  href={LINKS.checkout[pkg.id]}
                  external
                  variant={"popular" in pkg && pkg.popular ? "primary" : "outline"}
                  className="mt-4 w-full"
                >
                  Choose {pkg.name}
                </Button>
                <a
                  href={`/program?package=${pkg.id === "thrive" ? "balance" : pkg.id}`}
                  className="mt-3 block text-center text-xs font-semibold text-sage underline-offset-2 hover:underline"
                >
                  See curriculum →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-2xl text-center">
            <a
              href="/program"
              className="text-sm font-semibold text-sage underline-offset-4 hover:underline"
            >
              See exactly what&apos;s included →
            </a>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-charcoal/65">
            Prefer 1-on-1 only? Upgrade any package to private sessions for $40/session — ask
            during your intro call.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
