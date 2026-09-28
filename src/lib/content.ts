export const stats = [
  { value: "85%", label: "believe yoga helps PCOS symptoms" },
  { value: "Only 7%", label: "actually practice it" },
  { value: "We close", label: "that gap" },
] as const;

export const steps = [
  {
    title: "Book a free intro call",
    description: "Tell us about your symptoms and goals so we can understand where you're starting from.",
  },
  {
    title: "Get matched",
    description: "We pair you with a certified instructor and a buddy partner at a similar stage in the program.",
  },
  {
    title: "12 weeks, live",
    description: "Structured sessions that build week over week — with real-time guidance and correction.",
  },
  {
    title: "Keep going",
    description: "Optional ongoing membership after you finish, so your practice stays supported.",
  },
] as const;

export const phases = [
  {
    weeks: "Weeks 1–3",
    title: "Foundation & Safety",
    description: "Build baseline strength and breath basics in a pace that feels safe for your body.",
  },
  {
    weeks: "Weeks 4–6",
    title: "Circulation & Reproductive Health",
    description: "Hip-opening, blood-flow-focused poses to support reproductive wellness.",
  },
  {
    weeks: "Weeks 7–9",
    title: "Metabolism & Insulin Sensitivity",
    description: "Active flow targeting the core mechanisms many women with PCOS experience.",
  },
  {
    weeks: "Weeks 10–12",
    title: "Hormone Balance & Sustainable Practice",
    description: "Restorative work and a take-home routine you can carry forward on your own.",
  },
] as const;

export const differentiators = [
  {
    title: "Real instructors, real credentials",
    description:
      "Yoga Alliance–certified, India-trained instructors specialized in therapeutic and prenatal/postnatal yoga.",
  },
  {
    title: "Personal, not anonymous",
    description:
      "Small buddy-session format with just 2 clients — not a big group class where you're lost in the crowd.",
  },
  {
    title: "Built around your safety",
    description:
      "Every session is designed around what's actually safe for your body and stage, with live adjustments.",
  },
] as const;

export const packages = [
  {
    id: "foundation" as const,
    name: "Foundation",
    frequency: "1×/week",
    duration: "12 weeks",
    price: "$199",
    description: "A gentle start for building consistency and confidence in guided movement.",
    includes: [
      "Live buddy sessions (1×/week)",
      "Free intake call",
      "WhatsApp community access",
      "Take-home practice plan",
    ],
  },
  {
    id: "balance" as const,
    name: "Balance",
    frequency: "2×/week",
    duration: "12 weeks",
    price: "$349",
    popular: true,
    description: "Our most chosen plan — enough frequency to feel real progress without overwhelm.",
    includes: [
      "Live buddy sessions (2×/week)",
      "Free intake call",
      "WhatsApp community access",
      "Take-home practice plan",
    ],
  },
  {
    id: "restore" as const,
    name: "Restore",
    frequency: "3×/week",
    duration: "12 weeks",
    price: "$499",
    description: "Maximum support for women ready to commit to a deeper, more frequent practice.",
    includes: [
      "Live buddy sessions (3×/week)",
      "Free intake call",
      "WhatsApp community access",
      "Take-home practice plan",
    ],
  },
  {
    id: "thrive" as const,
    name: "Thrive Membership",
    frequency: "2×/week",
    duration: "Ongoing monthly",
    price: "$99/mo",
    description: "Continue your practice after the 12-week program with ongoing live support.",
    includes: [
      "Live buddy sessions (2×/week)",
      "WhatsApp community access",
      "Updated take-home plans",
      "Flexible monthly billing",
    ],
  },
] as const;

export const faqs = [
  {
    question: "Is this safe if I've never done yoga before?",
    answer:
      "Yes. Every program starts at Foundation level and is guided by a certified instructor who adjusts to your ability. You never have to keep up with anyone else — we meet you where you are.",
  },
  {
    question: "What time will my sessions be?",
    answer:
      "Sessions are scheduled around U.S. Eastern Time, with mornings and evenings available. We'll find times that work for your schedule during your intro call.",
  },
  {
    question: "Is this a replacement for medical treatment?",
    answer:
      "No. HealFromYoga is a wellness and movement coaching service, not medical care. Please continue seeing your doctor for diagnosis and treatment of PCOS; we're here to support your movement and lifestyle alongside that care.",
  },
  {
    question: "What's a 'buddy session'?",
    answer:
      "You're paired with one other client at a similar stage in the program, so you get real individual attention and coaching in a smaller, more personal setting than a group class.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer:
      "Yes. Sessions can be rescheduled up to 24 hours in advance through your booking page. For membership plans, you can cancel anytime before your next billing cycle.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "[Placeholder] I was nervous about yoga with PCOS, but having a real instructor watch and adjust me made all the difference. I finally feel like I'm moving in a way that's safe for my body.",
    name: "Sarah M.",
    descriptor: "PCOS, 6 months in",
  },
  {
    quote:
      "[Placeholder] The buddy format is perfect — I get personal attention without the pressure of a 1-on-1. The 12-week structure kept me showing up even on hard weeks.",
    name: "Jessica R.",
    descriptor: "PCOS, completed program",
  },
  {
    quote:
      "[Placeholder] I tried YouTube yoga before and always worried I was doing something wrong. Here, someone actually sees me and helps. That alone was worth it.",
    name: "Amanda K.",
    descriptor: "PCOS, 3 months in",
  },
] as const;
