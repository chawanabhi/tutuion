import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Academic3DBackground } from "@/components/visuals/Academic3DBackground";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  BUSINESS,
  COPYRIGHT_YEAR,
  SITE_NAME,
} from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | " + SITE_NAME,
  description: `Privacy policy of ${SITE_NAME}. Information about student and tutor registration, Google Forms, and data handling.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Academic3DBackground variant="calm" />
      <PageHero
        eyebrow="Privacy Policy"
        title="Your Privacy Matters"
        description="How Narahari Home Tuition Point handles information collected through student and tutor registration."
        imageSrc="/images/open-book.jpg"
      />

      <section className="section-pad pt-10">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <article className="editorial-panel p-8 sm:p-12">
              <p className="section-eyebrow">Privacy Policy</p>
              <h1 className="font-display text-3xl text-midnight sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-xs text-ink-soft font-semibold uppercase tracking-wider">
                Effective {COPYRIGHT_YEAR} &bull; Narahari Home Tuition Point
              </p>

              <p className="mt-8 leading-relaxed text-ink-soft">
                Narahari Home Tuition Point respects your privacy and is
                committed to being transparent about how information is handled
                through this website. This privacy notice explains what
                information is collected, why it is collected, and how it is
                used.
              </p>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  Information we collect through this website
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  This website does not collect or store personal information
                  directly. It is a static informational site with no backend,
                  database, login system, or user accounts. No student, parent,
                  or tutor personal data is stored in browser localStorage or
                  sessionStorage by this website.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  Student and tutor registration (Google Forms)
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Student and tutor registration is handled entirely through
                  external Google Forms. When you click a registration button,
                  you are directed to the official registration form:
                </p>
                <ul className="mt-4 space-y-3 text-ink-soft list-disc list-inside leading-relaxed">
                  <li>
                    <strong>Student registration:</strong> directs to the
                    Student/Parent Registration Form configured in{" "}
                    <code className="rounded bg-midnight/5 px-1.5 py-0.5 text-xs">
                      src/config/site.ts
                    </code>
                    .
                  </li>
                  <li>
                    <strong>Tutor registration:</strong> directs to the Tutor
                    Registration Form configured in{" "}
                    <code className="rounded bg-midnight/5 px-1.5 py-0.5 text-xs">
                      src/config/site.ts
                    </code>
                    .
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  All information you enter on those forms &mdash; including
                  names, contact details, addresses, qualifications, and any
                  documents &mdash; is submitted to Google Forms and may be
                  stored in Google Sheets controlled by the business. Narahari
                  Home Tuition Point does not have access to form responses
                  beyond what Google makes available to the form owner.
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Identity documents (such as Aadhaar, PAN or Driving Licence)
                  and payment screenshots must <strong>not</strong> be uploaded
                  to this website. They are collected only through the official
                  Google Form if its file-upload settings and access
                  permissions are properly configured.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  How information is used
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Registration details submitted through Google Forms are used
                  solely to arrange tuition demos, match students with tutors,
                  and manage tuition registrations. Narahari Home Tuition Point
                  does not sell, rent, or share personal information with third
                  parties for marketing purposes.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  Information about minors
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  This website serves students, including minors, through their
                  parents or guardians. Parents or guardians should review and
                  consent to any information submitted on behalf of a student.
                  Narahari Home Tuition Point does not knowingly collect
                  personal information from minors directly without parental
                  involvement.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  Data access and security recommendations
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  We recommend that the business owner restrict access to the
                  Google Forms response sheets to authorized personnel only.
                  Google Forms and Google Sheets provide access controls that
                  should be configured so that only authorized business
                  personnel can view registration responses.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  External links
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  This website links to external services including WhatsApp,
                  WhatsApp Channel, and Google Business. Those services have
                  their own privacy policies and terms of service. Narahari
                  Home Tuition Point is not responsible for the privacy
                  practices of those external services.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  No legal compliance claim
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  This privacy notice is a good-faith disclosure of website
                  practices. It does not claim compliance with any specific
                  law, regulation, or certification that has not been
                  independently verified. For legal advice about data
                  protection obligations, consult a qualified legal
                  professional.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  Contact
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  If you have questions about this privacy notice or about how
                  your information is handled, please contact us:
                </p>
                <ul className="mt-4 space-y-2 text-ink-soft list-disc list-inside">
                  <li>
                    Phone:&nbsp;
                    <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phoneDisplay}</a>
                  </li>
                  <li>
                    Email:&nbsp;
                    <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                  </li>
                </ul>
              </section>

              <div className="mt-12 pt-8 border-t border-[#10294a1f] text-xs text-ink-soft">
                © {COPYRIGHT_YEAR} {SITE_NAME}. All rights reserved.
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}