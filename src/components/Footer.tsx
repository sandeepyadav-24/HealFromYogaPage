import { SiteLogo } from "@/components/ui";
import { LINKS, SITE } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-sage/10 bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <SiteLogo />
            <p className="mt-2 text-sm text-charcoal/65">{SITE.tagline}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/program" className="text-charcoal/70 hover:text-sage">
              Program Details
            </a>
            <a href={LINKS.bookPage} className="text-charcoal/70 hover:text-sage">
              Book a Call
            </a>
            <a href="#pricing" className="text-charcoal/70 hover:text-sage">
              Programs
            </a>
            <a href="#faq" className="text-charcoal/70 hover:text-sage">
              FAQ
            </a>
            <a href={`mailto:${SITE.email}`} className="text-charcoal/70 hover:text-sage">
              Contact
            </a>
            <a href={LINKS.privacy} className="text-charcoal/70 hover:text-sage">
              Privacy Policy
            </a>
            <a href={LINKS.terms} className="text-charcoal/70 hover:text-sage">
              Terms
            </a>
          </nav>

          <div className="flex gap-4">
            <a
              href={LINKS.social.instagram}
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-sage transition-colors hover:bg-sage hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={LINKS.social.tiktok}
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-sage transition-colors hover:bg-sage hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-charcoal/50">
          HealFromYoga provides wellness and movement coaching, not medical advice, diagnosis,
          or treatment. Always consult a licensed healthcare provider for medical concerns.
        </p>

        <p className="mt-6 text-center text-xs text-charcoal/40">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
