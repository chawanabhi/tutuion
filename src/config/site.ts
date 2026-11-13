/**
 * Central site configuration for Narahari Home Tuition Point.
 * Replace placeholder registration URLs with real Google Forms links when ready.
 */

export const SITE_NAME = "Narahari Home Tuition Point" as const;
export const SITE_TAGLINE = "Learn Smart. Excel Bright." as const;
export const SITE_DESCRIPTION =
  "To connect students with qualified tutors for personalized home tuition, online sessions, and academic support across various subjects and grade levels." as const;

export const FOOTER_TAGLINE =
  "Learn Smart. Excel Bright. Connecting students with qualified tutors for personalized academic excellence." as const;

export const COPYRIGHT_YEAR = 2026 as const;

export const BUSINESS = {
  registeredUnder: "Megavath Narahari",
  phoneDisplay: "+91 9603552240",
  phoneTel: "+919603552240",
  email: "naraharimnnit09@gmail.com",
  addressLines: [
    "2-63, Satyanarayanapuram colony",
    "Prabhat Nagar, Hyderabad",
    "RangaReddy 500060",
  ] as const,
  whatsappUrl: "https://wa.me/919603552240",
  whatsappChannelUrl:
    "https://whatsapp.com/channel/0029Vawoi1tBFLgYGYIY1609",
  googleBusinessUrl: "https://g.co/kgs/NpBKkU",
} as const;

/**
 * Registration forms.
 *
 * STUDENT: Proposed public responder URL ending in /viewform. Automated
 * verification returned HTTP 401 because Google blocks non-interactive fetches.
 * The business owner MUST manually confirm this link opens the live public
 * Google Form before publishing. Never publish an /edit URL here.
 *
 * TUTOR: https://forms.gle/ZmgfkJvDLRoFf4uG7
 */
export const REGISTRATION_FORMS = {
  student: {
    url:
      "https://docs.google.com/forms/d/1VoRvvir0MbI3BCfF45Lc8XuzZtFH2rlehQqDcTErDqo/viewform",
    label: "Student registration",
    verificationStatus: "pending-owner-confirmation" as const,
  },
  tutor: {
    url: "https://forms.gle/ZmgfkJvDLRoFf4uG7",
    label: "Tutor registration",
    verificationStatus: "pending-owner-confirmation" as const,
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const OBJECTIVES = [
  {
    title: "Find and book tutors",
    description:
      "To create an easy-to-use platform for students and parents to find and book tutors.",
  },
  {
    title: "Empower tutors",
    description:
      "To allow tutors to register, manage schedules, and conduct classes (online or offline).",
  },
  {
    title: "Unified academic hub",
    description:
      "To manage payments, feedback, and performance reports in one platform.",
  },
] as const;

export const SERVICES = [
  {
    title: "Personalized Learning",
    description:
      "Expert tutors matched to your unique academic needs.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Online or home tuition that fits your timetable.",
  },
  {
    title: "Performance Tracking",
    description:
      "Regular feedback and transparent progress reports.",
  },
] as const;
