export type PackageTier = "foundation" | "balance" | "restore";

export type SessionType =
  | "active-flow"
  | "restorative"
  | "breathwork"
  | "gentle-flow"
  | "assessment"
  | "planning";

export type SessionDuration = {
  intro?: string;
  movement?: string;
  breath?: string;
  relaxation?: string;
  qa?: string;
  /** Shorthand e.g. "5-30-10-5 (warm-up / flow / breath / rest)" */
  summary?: string;
};

export type CurriculumSession = {
  id: "A" | "B" | "C";
  focus: string;
  poses: string[];
  duration: SessionDuration;
  note?: string;
  sessionType: SessionType;
};

export type CurriculumWeek = {
  weekNumber: number;
  phaseId: string;
  sessions: CurriculumSession[];
};

export type CurriculumPhase = {
  id: string;
  name: string;
  weekRange: string;
  goal: string;
};

export const SESSION_TYPE_LABELS: Record<
  SessionType,
  { label: string; className: string }
> = {
  "active-flow": {
    label: "Active Flow",
    className: "bg-sage/15 text-sage",
  },
  restorative: {
    label: "Restorative",
    className: "bg-terracotta/15 text-terracotta",
  },
  breathwork: {
    label: "Breathwork",
    className: "bg-slate-200 text-slate-600",
  },
  "gentle-flow": {
    label: "Gentle Flow",
    className: "bg-sage/10 text-sage",
  },
  assessment: {
    label: "Check-in",
    className: "bg-charcoal/10 text-charcoal/70",
  },
  planning: {
    label: "Planning",
    className: "bg-terracotta/10 text-terracotta",
  },
};

export const PACKAGE_SESSION_MAP: Record<PackageTier, CurriculumSession["id"][]> = {
  foundation: ["A"],
  balance: ["A", "B"],
  restore: ["A", "B", "C"],
};

export const PACKAGE_LABELS: Record<PackageTier, string> = {
  foundation: "Foundation (1×/week)",
  balance: "Balance (2×/week)",
  restore: "Restore (3×/week)",
};

export const bookingTimeline = [
  {
    step: 1,
    title: "Book your free intro call",
    description:
      "Pick a time that works for you; no payment required yet.",
  },
  {
    step: 2,
    title: "15-minute intro call",
    description:
      "We ask about your PCOS symptoms, current activity level, and any health considerations, so your program is matched to you specifically — not generic.",
  },
  {
    step: 3,
    title: "Get matched",
    description:
      "You're paired with a certified instructor and a buddy partner at a similar stage, in your chosen time slot.",
  },
  {
    step: 4,
    title: "Confirmation & calendar setup",
    description:
      "You receive all 12 weeks of session times, a welcome guide, and access to your private cohort WhatsApp group.",
  },
  {
    step: 5,
    title: "Week 1 begins",
    description:
      "Live 45-minute sessions via Zoom, with a short written focus-tip sent after every session.",
  },
  {
    step: 6,
    title: "Week 12: your take-home plan",
    description:
      "You finish with a personalized home-practice plan and the option to continue on the Thrive Membership.",
  },
] as const;

export const programFaqs = [
  {
    question: "Will every session be the same?",
    answer:
      "No. Each week has a specific theme, and sessions rotate between active flow, restorative work, and breathwork so your body isn't repeating the exact same sequence every time.",
  },
  {
    question: "What if I miss a session?",
    answer:
      "Sessions can be rescheduled up to 24 hours in advance; missed sessions can be made up within the same program window where possible.",
  },
  {
    question: "Do I need any equipment?",
    answer:
      "Just a yoga mat and a quiet space roughly 6×8 feet. No blocks or props required, though they can help — your instructor will suggest simple household alternatives if you don't have them.",
  },
  {
    question: "What if a pose doesn't feel right for my body?",
    answer:
      "Every pose has a modification. Instructors are trained to offer alternatives live, in real time, based on how you're feeling that day.",
  },
  {
    question: "Is this safe if I've never done yoga before?",
    answer:
      "Yes. Every program starts at Foundation level and is guided by a certified instructor who adjusts to your ability. You never have to keep up with anyone else.",
  },
  {
    question: "What's a 'buddy session'?",
    answer:
      "You're paired with one other client at a similar stage in the program, so you get real individual attention and coaching in a smaller, more personal setting than a group class.",
  },
] as const;

export const curriculumPhases: CurriculumPhase[] = [
  {
    id: "phase-1",
    name: "Foundation & Safety",
    weekRange: "Weeks 1–3",
    goal: "Build baseline strength and flexibility safely, establish breath awareness, and understand how PCOS and yoga connect physiologically. No fast-paced or high-intensity movement in this phase.",
  },
  {
    id: "phase-2",
    name: "Circulation & Reproductive Health",
    weekRange: "Weeks 4–6",
    goal: "Improve pelvic and reproductive-area blood flow through hip-opening and gentle inversion-adjacent poses.",
  },
  {
    id: "phase-3",
    name: "Metabolism & Insulin Sensitivity",
    weekRange: "Weeks 7–9",
    goal: "Introduce more active flow sequences that support insulin sensitivity — the core physiological mechanism connecting yoga to PCOS symptom improvement.",
  },
  {
    id: "phase-4",
    name: "Hormone Balance & Sustainable Practice",
    weekRange: "Weeks 10–12",
    goal: "Peak restorative work, deeper stress-reduction practices, and building a realistic take-home routine the client can sustain independently.",
  },
];

const standardDuration = {
  summary: "5 min warm-up · 30 min flow · 10 min breath · 5 min rest",
};

export const curriculumWeeks: CurriculumWeek[] = [
  // Phase 1
  {
    weekNumber: 1,
    phaseId: "phase-1",
    sessions: [
      {
        id: "A",
        focus: "Getting to know your body's baseline.",
        poses: [
          "Sukhasana (easy seated pose) with breath check-in",
          "Cat-Cow",
          "Child's Pose",
          "Gentle seated forward fold",
          "Savasana",
        ],
        duration: {
          intro: "5 min intro/check-in",
          movement: "25 min gentle movement",
          breath: "10 min breath awareness",
          relaxation: "5 min relaxation",
        },
        note: "Instructor explains what PCOS-informed yoga means and what to expect over 12 weeks.",
        sessionType: "gentle-flow",
      },
      {
        id: "B",
        focus: "Diaphragmatic breathing fundamentals.",
        poses: [
          "Reclined breathing practice",
          "Gentle spinal twists (seated)",
          "Cat-Cow",
          "Supported Child's Pose",
        ],
        duration: {
          intro: "10 min breath education",
          movement: "20 min gentle poses",
          relaxation: "10 min guided relaxation",
          qa: "5 min Q&A",
        },
        sessionType: "breathwork",
      },
      {
        id: "C",
        focus: "Building comfort with movement.",
        poses: [
          "Standing mountain pose (Tadasana) with alignment cues",
          "Gentle standing forward fold",
          "Seated wide-leg stretch",
          "Savasana",
        ],
        duration: {
          intro: "5 min warm-up",
          movement: "25 min gentle standing sequence",
          breath: "10 min stretch",
          relaxation: "5 min relaxation",
        },
        sessionType: "gentle-flow",
      },
    ],
  },
  {
    weekNumber: 2,
    phaseId: "phase-1",
    sessions: [
      {
        id: "A",
        focus: "Core breath-movement connection.",
        poses: ["Cat-Cow with breath sync", "Sukhasana twist", "Bridge pose (gentle)", "Savasana"],
        duration: standardDuration,
        sessionType: "gentle-flow",
      },
      {
        id: "B",
        focus: "Gentle hip awareness (prep for Phase 2).",
        poses: [
          "Butterfly stretch (seated, gentle)",
          "Reclined figure-4 stretch",
          "Cat-Cow",
          "Guided relaxation",
        ],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "C",
        focus: "Full-body gentle flow.",
        poses: ["Standing forward fold", "Low lunge (supported)", "Seated twist", "Savasana"],
        duration: standardDuration,
        sessionType: "gentle-flow",
      },
    ],
  },
  {
    weekNumber: 3,
    phaseId: "phase-1",
    sessions: [
      {
        id: "A",
        focus: "Consolidating the basics.",
        poses: [
          "Full gentle sequence review — Cat-Cow",
          "Seated forward fold",
          "Bridge",
          "Breath-led movement",
        ],
        duration: standardDuration,
        sessionType: "gentle-flow",
      },
      {
        id: "B",
        focus: "Extended breathwork session.",
        poses: [
          "Longer pranayama block (equal breathing, gentle alternate nostril breathing intro)",
          "Light supported stretching",
          "Savasana",
        ],
        duration: standardDuration,
        sessionType: "breathwork",
      },
      {
        id: "C",
        focus: "Phase 1 completion check-in.",
        poses: ["Full review flow"],
        duration: standardDuration,
        note: "Instructor discusses readiness to move into Phase 2 (circulation-focused work); short verbal assessment of comfort level.",
        sessionType: "assessment",
      },
    ],
  },
  // Phase 2
  {
    weekNumber: 4,
    phaseId: "phase-2",
    sessions: [
      {
        id: "A",
        focus: "Introducing hip-opening work.",
        poses: ["Baddha Konasana (butterfly pose)", "Malasana (supported garland/squat)", "Cat-Cow", "Savasana"],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "B",
        focus: "Deepening pelvic circulation.",
        poses: [
          "Supta Baddha Konasana (reclined butterfly)",
          "Gentle figure-4",
          "Seated wide-angle stretch",
        ],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "C",
        focus: "Combining breath with hip work.",
        poses: ["Baddha Konasana with breath focus", "Malasana", "Supported bridge", "Relaxation"],
        duration: standardDuration,
        sessionType: "breathwork",
      },
    ],
  },
  {
    weekNumber: 5,
    phaseId: "phase-2",
    sessions: [
      {
        id: "A",
        focus: "Building hip-opening stamina.",
        poses: [
          "Extended Baddha Konasana hold",
          "Low lunge with hip opener",
          "Malasana",
          "Savasana",
        ],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "B",
        focus: "Restorative circulation flow.",
        poses: ["Legs-up-the-wall (Viparita Karani, supported)", "Supta Baddha Konasana", "Gentle twists"],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "C",
        focus: "Active-to-restorative hip sequence.",
        poses: ["Malasana flow", "Baddha Konasana", "Bridge pose", "Guided relaxation"],
        duration: standardDuration,
        sessionType: "gentle-flow",
      },
    ],
  },
  {
    weekNumber: 6,
    phaseId: "phase-2",
    sessions: [
      {
        id: "A",
        focus: "Phase 2 integration.",
        poses: ["Full hip-opening sequence review", "Longer hold times", "Breath-led transitions"],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "B",
        focus: "Pelvic floor awareness.",
        poses: [
          "Gentle pelvic tilts",
          "Baddha Konasana",
          "Supported bridge with pelvic floor engagement cues",
        ],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "C",
        focus: "Phase 2 completion check-in.",
        poses: ["Full review flow"],
        duration: standardDuration,
        note: "Instructor discusses transition into metabolic-focused work.",
        sessionType: "assessment",
      },
    ],
  },
  // Phase 3
  {
    weekNumber: 7,
    phaseId: "phase-3",
    sessions: [
      {
        id: "A",
        focus: "Introducing active flow.",
        poses: [
          "Modified Sun Salutation (Surya Namaskar, low-impact version)",
          "Cat-Cow",
          "Seated twist",
          "Savasana",
        ],
        duration: standardDuration,
        sessionType: "active-flow",
      },
      {
        id: "B",
        focus: "Core-engaging sequence.",
        poses: ["Modified boat pose (Navasana, supported)", "Plank-to-child's-pose flow", "Gentle twist"],
        duration: standardDuration,
        sessionType: "active-flow",
      },
      {
        id: "C",
        focus: "Twist-focused metabolic flow.",
        poses: ["Ardha Matsyendrasana (seated spinal twist)", "Modified Sun Salutation", "Bridge pose"],
        duration: standardDuration,
        sessionType: "active-flow",
      },
    ],
  },
  {
    weekNumber: 8,
    phaseId: "phase-3",
    sessions: [
      {
        id: "A",
        focus: "Building active flow endurance.",
        poses: ["Full modified Sun Salutation sequence", "Standing twist", "Warrior II (gentle hold)"],
        duration: standardDuration,
        sessionType: "active-flow",
      },
      {
        id: "B",
        focus: "Core and digestion focus.",
        poses: ["Wind-relieving pose (Pawanmuktasana)", "Seated twists", "Modified boat pose"],
        duration: standardDuration,
        sessionType: "active-flow",
      },
      {
        id: "C",
        focus: "Combining strength and twist work.",
        poses: ["Modified Sun Salutation", "Ardha Matsyendrasana", "Plank hold (short)", "Savasana"],
        duration: standardDuration,
        sessionType: "active-flow",
      },
    ],
  },
  {
    weekNumber: 9,
    phaseId: "phase-3",
    sessions: [
      {
        id: "A",
        focus: "Phase 3 integration.",
        poses: ["Full active flow review with longer holds", "Breath-paced transitions"],
        duration: standardDuration,
        sessionType: "active-flow",
      },
      {
        id: "B",
        focus: "Energizing pranayama.",
        poses: ["Kapalabhati (gentle/modified pace) intro", "Seated twists", "Relaxation"],
        duration: standardDuration,
        sessionType: "breathwork",
      },
      {
        id: "C",
        focus: "Phase 3 completion check-in.",
        poses: ["Full review flow"],
        duration: standardDuration,
        note: "Instructor discusses transition into restorative/hormone-balance phase.",
        sessionType: "assessment",
      },
    ],
  },
  // Phase 4
  {
    weekNumber: 10,
    phaseId: "phase-4",
    sessions: [
      {
        id: "A",
        focus: "Introducing restorative hormone-support poses.",
        poses: ["Bhujangasana (Cobra)", "Supta Baddha Konasana", "Extended Savasana with body scan"],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "B",
        focus: "Stress and cortisol focus.",
        poses: ["Legs-up-the-wall", "Gentle seated forward fold", "Extended pranayama"],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "C",
        focus: "Combining restorative and gentle strength.",
        poses: ["Cobra", "Bridge", "Seated twist", "Guided relaxation"],
        duration: standardDuration,
        sessionType: "restorative",
      },
    ],
  },
  {
    weekNumber: 11,
    phaseId: "phase-4",
    sessions: [
      {
        id: "A",
        focus: "Deepening restorative practice.",
        poses: [
          "Extended Cobra holds",
          "Supta Baddha Konasana",
          "Longer Savasana with guided body scan",
        ],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "B",
        focus: "Yoga Nidra introduction.",
        poses: ["Full guided Yoga Nidra session", "Minimal active movement"],
        duration: standardDuration,
        sessionType: "restorative",
      },
      {
        id: "C",
        focus: "Building your home practice.",
        poses: ["Instructor walks through a simplified 15-minute home sequence drawing from all 4 phases"],
        duration: standardDuration,
        sessionType: "planning",
      },
    ],
  },
  {
    weekNumber: 12,
    phaseId: "phase-4",
    sessions: [
      {
        id: "A",
        focus: "Program review and celebration.",
        poses: ["Full-body gentle review flow covering favorite poses from all 12 weeks"],
        duration: standardDuration,
        sessionType: "gentle-flow",
      },
      {
        id: "B",
        focus: "Personalized home-practice planning.",
        poses: ["1:1-style conversation within the buddy session"],
        duration: standardDuration,
        note: "Finalize each client's take-home routine based on what worked best for them.",
        sessionType: "planning",
      },
      {
        id: "C",
        focus: "Closing session and next steps.",
        poses: ["Final restorative flow", "Yoga Nidra"],
        duration: standardDuration,
        note: "Instructor introduces the Thrive Membership option for continuing.",
        sessionType: "restorative",
      },
    ],
  },
];

export function getPhaseForWeek(weekNumber: number): CurriculumPhase | undefined {
  const week = curriculumWeeks.find((w) => w.weekNumber === weekNumber);
  if (!week) return undefined;
  return curriculumPhases.find((p) => p.id === week.phaseId);
}

export function filterSessionsForPackage(
  sessions: CurriculumSession[],
  pkg: PackageTier
): CurriculumSession[] {
  const allowed = PACKAGE_SESSION_MAP[pkg];
  return sessions.filter((s) => allowed.includes(s.id));
}
