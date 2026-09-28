"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LINKS } from "@/lib/config";
import type { PackageTier } from "@/data/curriculum";

const CHECKOUT_MAP: Record<PackageTier, keyof typeof LINKS.checkout> = {
  foundation: "foundation",
  balance: "balance",
  restore: "restore",
};

const LABEL_MAP: Record<PackageTier, string> = {
  foundation: "Foundation",
  balance: "Balance",
  restore: "Restore",
};

function StickyCTAInner() {
  const searchParams = useSearchParams();
  const pkgParam = searchParams.get("package");
  const pkg: PackageTier =
    pkgParam === "foundation" || pkgParam === "balance" || pkgParam === "restore"
      ? pkgParam
      : "balance";

  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-teal-deep/15 bg-ivory/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">
            Ready to start with {LABEL_MAP[pkg]}?
          </p>
          <Link
            href="/#pricing"
            className="text-xs text-teal-deep underline-offset-2 hover:underline"
          >
            Compare all packages
          </Link>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="hidden rounded-full p-2 text-ink/40 hover:text-ink sm:block"
            aria-label="Dismiss"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link
            href={LINKS.checkout[CHECKOUT_MAP[pkg]]}
            className="inline-flex items-center justify-center rounded-full bg-teal-deep px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-deep/20 transition hover:bg-teal-deep/90"
          >
            Choose {LABEL_MAP[pkg]}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function StickyProgramCTA() {
  return (
    <Suspense fallback={null}>
      <StickyCTAInner />
    </Suspense>
  );
}

