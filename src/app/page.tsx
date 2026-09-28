import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Program } from "@/components/Program";
import { WhyHealFromYoga } from "@/components/WhyHealFromYoga";
import { Pricing } from "@/components/Pricing";
import { InstructorSpotlight } from "@/components/InstructorSpotlight";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Program />
      <WhyHealFromYoga />
      <Pricing />
      <InstructorSpotlight />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
