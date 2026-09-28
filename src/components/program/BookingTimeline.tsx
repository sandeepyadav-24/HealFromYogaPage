import {
  bookingTimeline,
  curriculumPhases,
  curriculumWeeks,
  getPhaseForWeek,
} from "@/data/curriculum";

const icons = [
  (
    <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  (
    <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  (
    <svg key="3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  (
    <svg key="4" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg key="5" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  (
    <svg key="6" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
];

export function BookingTimeline() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
            What happens after you book
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/75">
            From your first intro call to your personalized take-home plan — here&apos;s the full
            journey.
          </p>
        </div>

        <ol className="relative mt-14 space-y-0 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 lg:grid-cols-6">
          {bookingTimeline.map((item, i) => (
            <li key={item.step} className="relative flex gap-4 pb-10 md:flex-col md:pb-0 md:text-center">
              {i < bookingTimeline.length - 1 && (
                <span
                  className="absolute left-5 top-12 h-full w-px bg-teal-deep/20 md:hidden"
                  aria-hidden
                />
              )}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-deep text-white md:mx-auto">
                {icons[i]}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-marigold">
                  Step {item.step}
                </p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CurriculumIntro() {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Your 12-week curriculum, session by session
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/75">
        Select the package you&apos;re considering to see exactly which sessions are included each
        week. Thrive Membership follows the same 2×/week rotation after week 12.
      </p>
      <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-teal-deep-light p-4 text-sm text-ink/70">
        {curriculumPhases.map((phase) => (
          <p key={phase.id} className="mt-2 first:mt-0">
            <span className="font-semibold text-teal-deep">{phase.weekRange} — {phase.name}:</span>{" "}
            {phase.goal}
          </p>
        ))}
      </div>
    </div>
  );
}

/** Server-rendered week summaries for SEO (hidden visually, available to crawlers) */
export function CurriculumSeoContent() {
  return (
    <div className="sr-only" aria-hidden={false}>
      <h2>HealFromYoga 12-week PCOS yoga program curriculum</h2>
      {curriculumWeeks.map((week) => {
        const phase = getPhaseForWeek(week.weekNumber);
        return (
          <article key={week.weekNumber}>
            <h3>
              Week {week.weekNumber}: {phase?.name}
            </h3>
            {week.sessions.map((session) => (
              <div key={session.id}>
                <h4>
                  Session {session.id} — {session.focus}
                </h4>
                <p>{session.poses.join(", ")}</p>
              </div>
            ))}
          </article>
        );
      })}
    </div>
  );
}

