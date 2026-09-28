import { Button, SiteLogo, TextLink } from "@/components/ui";
import { LINKS } from "@/lib/config";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-12 lg:px-8">
        <header className="mb-16 flex items-center justify-between">
          <SiteLogo />
          <Button href={LINKS.bookPage} className="hidden sm:inline-flex">
            Book Free Intro Call
          </Button>
        </header>

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-terracotta">
              Live PCOS Yoga · 12-Week Program
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Safe, guided PCOS yoga — from real experts, from anywhere.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80 sm:text-xl">
              Live 1-on-1 style sessions with India-trained, certified yoga instructors,
              built around a 12-week program shown to support hormone balance and reduce PCOS
              symptoms.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href={LINKS.bookPage}>Book Your Free Intro Call</Button>
                <TextLink href="#pricing">See Programs &amp; Pricing</TextLink>
              </div>
              <TextLink href={`${LINKS.bookPage}?duration=15`} className="text-sm text-charcoal/60">
                Short on time? Book a 15-minute call
              </TextLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
