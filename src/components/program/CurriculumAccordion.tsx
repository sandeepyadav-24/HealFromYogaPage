"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  curriculumPhases,
  curriculumWeeks,
  filterSessionsForPackage,
  getPhaseForWeek,
  PACKAGE_LABELS,
  PACKAGE_SESSION_MAP,
  SESSION_TYPE_LABELS,
  type CurriculumSession,
  type PackageTier,
} from "@/data/curriculum";

function formatDuration(duration: CurriculumSession["duration"]): string {
  if (duration.summary) return duration.summary;
  return [
    duration.intro,
    duration.movement,
    duration.breath,
    duration.relaxation,
    duration.qa,
  ]
    .filter(Boolean)
    .join(" · ");
}

function SessionCard({ session }: { session: CurriculumSession }) {
  const typeMeta = SESSION_TYPE_LABELS[session.sessionType];

  return (
    <div className="rounded-xl border border-teal-deep/10 bg-ivory p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold text-ink">Session {session.id}</span>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${typeMeta.className}`}>
          {typeMeta.label}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-ink">{session.focus}</p>
      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">Poses</p>
        <ul className="mt-1 space-y-1">
          {session.poses.map((pose) => (
            <li key={pose} className="text-sm text-ink/75">
              · {pose}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">Duration</p>
        <p className="mt-1 text-sm text-ink/75">{formatDuration(session.duration)}</p>
      </div>
      {session.note && (
        <p className="mt-3 rounded-lg bg-teal-deep-light/60 p-3 text-sm italic text-ink/70">
          {session.note}
        </p>
      )}
    </div>
  );
}

const PACKAGES: PackageTier[] = ["foundation", "balance", "restore"];

function parsePackage(value: string | null): PackageTier {
  if (value === "foundation" || value === "balance" || value === "restore") return value;
  return "balance";
}

function CurriculumAccordionInner() {
  const searchParams = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState<PackageTier>(
    parsePackage(searchParams.get("package"))
  );
  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(new Set([1]));

  const toggleWeek = (weekNumber: number) => {
    setExpandedWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(weekNumber)) next.delete(weekNumber);
      else next.add(weekNumber);
      return next;
    });
  };

  const sessionCount = PACKAGE_SESSION_MAP[selectedPackage].length;

  let lastPhaseId = "";

  return (
    <div>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <p className="text-sm font-medium text-ink/70">Viewing curriculum for:</p>
        <div className="inline-flex flex-wrap justify-center gap-2 rounded-full bg-teal-deep-light p-1">
          {PACKAGES.map((pkg) => (
            <button
              key={pkg}
              type="button"
              onClick={() => setSelectedPackage(pkg)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                selectedPackage === pkg
                  ? "bg-teal-deep text-white "
                  : "text-ink/70 hover:text-teal-deep"
              }`}
            >
              {PACKAGE_LABELS[pkg]}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-ink/60">
        {sessionCount} session{sessionCount !== 1 ? "s" : ""} per week · 45 minutes each
      </p>

      <div className="mt-10 space-y-3">
        {curriculumWeeks.map((week) => {
          const phase = getPhaseForWeek(week.weekNumber);
          const showPhaseHeader = phase && phase.id !== lastPhaseId;
          if (phase) lastPhaseId = phase.id;

          const filteredSessions = filterSessionsForPackage(week.sessions, selectedPackage);
          const isExpanded = expandedWeeks.has(week.weekNumber);

          return (
            <div key={week.weekNumber}>
              {showPhaseHeader && phase && (
                <div className="mb-4 mt-8 first:mt-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-marigold">
                    {phase.weekRange}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-ink">{phase.name}</h3>
                </div>
              )}

              <div className="overflow-hidden rounded-2xl border border-teal-deep/10 bg-ivory ">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => toggleWeek(week.weekNumber)}
                  aria-expanded={isExpanded}
                >
                  <div>
                    <span className="text-sm font-semibold text-teal-deep">Week {week.weekNumber}</span>
                    <p className="mt-0.5 font-medium text-ink">
                      {filteredSessions.length} session
                      {filteredSessions.length !== 1 ? "s" : ""} · {phase?.name}
                    </p>
                  </div>
                  <svg
                    className={`h-5 w-5 shrink-0 text-teal-deep transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-200 ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-3 border-t border-teal-deep/10 px-5 pb-5 pt-4">
                      {filteredSessions.map((session) => (
                        <SessionCard key={session.id} session={session} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CurriculumAccordion() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-ink/60">Loading curriculum…</div>}>
      <CurriculumAccordionInner />
    </Suspense>
  );
}

