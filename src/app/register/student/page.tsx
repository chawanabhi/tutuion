import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Academic3DBackground } from "@/components/visuals/Academic3DBackground";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

import { REGISTRATION_FORMS, SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: "Student Details | " + SITE_NAME,
  description:
    "Share student and parent details to arrange a tuition demo with Narahari Home Tuition Point.",
};

const STUDENT_DETAILS = [
  "Student Name",
  "Class & Syllabus",
  "School Name",
  "Subjects Required",
  "Parent Name",
  "Contact Number",
  "Complete Address",
  "Google Maps Location",
  "Preferred Tuition Timings",
  "Any specific requirements/instructions for the tutor",
] as const;

export default function StudentRegistrationPage() {
  const studentForm = REGISTRATION_FORMS.student;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Academic3DBackground variant="calm" />
      <>
        <PageHero
        eyebrow="Students & parents"
        title="Student Details"
        description="To arrange the tuition demo, kindly share the following details."
        imageSrc="/images/open-book.jpg"
      />

      <section className="section-pad pt-10">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <article className="editorial-panel p-8 sm:p-12">
              <p className="section-eyebrow">Student Registration</p>
              <h1 className="font-display text-3xl text-midnight sm:text-5xl">
                {SITE_NAME} – STUDENT DETAILS
              </h1>

              <p className="mt-6 leading-relaxed text-ink-soft">
                Dear Parent,
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                To arrange the tuition demo, kindly share the following details:
              </p>

              <ol className="mt-6 space-y-3 text-ink-soft leading-relaxed list-decimal list-inside">
                {STUDENT_DETAILS.map((detail) => (
                  <li key={detail} className="text-sm sm:text-base">
                    {detail}
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-[1rem] border border-champagne/30 bg-gradient-to-b from-champagne/5 to-transparent p-6 sm:p-8">
                <p className="text-sm font-semibold text-midnight sm:text-base">
                  Important next step
                </p>
                <p className="mt-2 text-sm text-ink-soft sm:text-base leading-relaxed">
                  After the tutor is confirmed, kindly complete the
                  Student/Parent Registration Form to finalize the tuition
                  registration.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink
                  href={studentForm.url}
                  variant="gold"
                  external
                  ariaLabel={`Open ${studentForm.label} form (opens in a new tab)`}
                >
                  Fill Student Registration Form
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  Contact us instead
                </ButtonLink>
              </div>

              <p className="mt-10 text-xs text-ink-soft leading-relaxed">
                Thank you for choosing Narahari Home Tuition Point.
              </p>
              <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                Best Regards,<br />
                Narahari Home Tuition Point<br />
                Phone: 9603552240
              </p>

              <div className="mt-10 rounded-[0.9rem] border border-midnight/10 bg-midnight/5 p-6 sm:p-8">
                <p className="text-xs font-semibold text-midnight">
                  Privacy notice
                </p>
                <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                  The details above are collected only to arrange your tuition
                  demo and are submitted through the official Student/Parent
                  Registration Form. Narahari Home Tuition Point does not store
                  or share your personal information on this website. All form
                  submissions are handled by the external registration form and
                  are accessible only to authorized business personnel.
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>
      </>
    </div>
  );
}
