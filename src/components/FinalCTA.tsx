import { Button } from "@/components/ui";
import { FadeIn } from "@/components/FadeIn";
import { LINKS } from "@/lib/config";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl bg-sage px-6 py-16 text-center sm:px-12">
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
              Your first session is one call away.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
              Book a free intro call to talk through your goals, ask questions, and find the
              right program for where you are today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Button
                href={LINKS.bookPage}
                variant="secondary"
                className="bg-white text-sage hover:bg-white/90"
              >
                Book Your Free Intro Call
              </Button>
              <a
                href={`${LINKS.bookPage}?duration=15`}
                className="text-sm text-white/75 underline-offset-4 hover:text-white hover:underline"
              >
                Or book a 15-minute quick call
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
