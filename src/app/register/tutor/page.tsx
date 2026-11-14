import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Academic3DBackground } from "@/components/visuals/Academic3DBackground";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { BUSINESS, REGISTRATION_FORMS, SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: "Tutor Registration | " + SITE_NAME,
  description:
    "Register as a tutor with Narahari Home Tuition Point. Complete the tutor registration form to join our network.",
};

const TUTOR_PROFILE_FIELDS = [
  "Name",
  "Age",
  "Qualification",
  "Teaching Experience",
  "Current Location",
  "Preferred Classes: KG–PG",
  "Preferred Teaching Areas/Locations",
  "Vehicle Available: Yes / No",
  "How did you come to know about us?",
  "Reference: Friend's Name & Contact Number",
] as const;

const REQUIRED_DOCUMENTS = [
  "Recent passport-size or full-size photo.",
  "Valid ID proof (Aadhaar / PAN / Driving Licence, etc.).",
  "Registration fee payment screenshot.",
] as const;

export default function TutorRegistrationPage() {
  const tutorForm = REGISTRATION_FORMS.tutor;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Academic3DBackground variant="calm" />
      <>
        <PageHero
        eyebrow="Tutors"
        title="Tutor Registration"
        description="Join our network of educators supporting personalized home and online tuition."
        imageSrc="/images/study-atmosphere.jpg"
      />

      <section className="section-pad pt-10">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <article className="editorial-panel p-8 sm:p-12">
              <p className="section-eyebrow">Tutor Registration</p>
              <h1 className="font-display text-3xl text-midnight sm:text-5xl">
                {SITE_NAME} – TUTOR REGISTRATION
              </h1>

              {/* Section A — Tutor Profile */}
              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  Section A — Tutor Profile
                </h2>
                <ol className="mt-4 space-y-2 text-ink-soft leading-relaxed list-decimal list-inside">
                  {TUTOR_PROFILE_FIELDS.map((field) => (
                    <li key={field} className="text-sm sm:text-base">
                      {field}
                    </li>
                  ))}
                </ol>
              </section>

              {/* Section B — Required Documents */}
              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  Section B — Required Documents
                </h2>
                <ul className="mt-4 space-y-2 text-ink-soft leading-relaxed list-disc list-inside">
                  {REQUIRED_DOCUMENTS.map((doc) => (
                    <li key={doc} className="text-sm sm:text-base">
                      {doc}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-[0.9rem] border border-midnight/10 bg-midnight/5 p-4 sm:p-6">
                  <p className="text-xs font-semibold text-midnight">
                    Document submission
                  </p>
                  <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                    Do not upload identity documents on this website. Documents
                    must only be submitted through the official Google Form if
                    its file-upload settings and access permissions are properly
                    configured. Narahari Home Tuition Point does not collect or
                    store identity documents directly on this website.
                  </p>
                </div>
              </section>
              {/* Section C — Tutor Registration */}
              <section className="mt-10">
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href={tutorForm.url}
                    variant="gold"
                    external
                    ariaLabel={`Open ${tutorForm.label} form (opens in a new tab)`}
                  >
                    Complete Tutor Registration
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="outline">
                    Contact us instead
                  </ButtonLink>
                </div>
                <p className="mt-4 break-all text-xs text-ink-soft">
                  Destination:{" "}
                  <ExternalLink href={tutorForm.url} className="underline underline-offset-2">
                    {tutorForm.url}
                  </ExternalLink>
                </p>
              </section>

              {/* Section D — Registration & Service Charges */}
              <section className="mt-10 rounded-[1rem] border border-champagne/30 bg-gradient-to-b from-champagne/5 to-transparent p-6 sm:p-8">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  Section D — Registration & Service Charges
                </h2>
                <dl className="mt-4 space-y-4 text-ink-soft leading-relaxed">
                  <div>
                    <dt className="text-sm font-semibold text-midnight">
                      Registration Fee
                    </dt>
                    <dd className="mt-1 text-sm">
                      ₹500 (One-time)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-midnight">
                      Service Charge
                    </dt>
                    <dd className="mt-1 text-sm">
                      50% of the first month&apos;s tuition fee, payable only after a
                      tuition is successfully allotted.
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Section E — Payment Details */}
              <section className="mt-10">
                <h2 className="font-display text-2xl text-midnight sm:text-3xl">
                  Section E — Payment Details
                </h2>
                <dl className="mt-4 space-y-4 text-ink-soft leading-relaxed">
                  <div>
                    <dt className="text-sm font-semibold text-midnight">
                      Payment Methods
                    </dt>
                    <dd className="mt-1 text-sm">
                      PhonePe / Google Pay / Paytm
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-midnight">
                      Phone
                    </dt>
                    <dd className="mt-1 text-sm">{BUSINESS.phoneDisplay}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-midnight">
                      Account Name
                    </dt>
                    <dd className="mt-1 text-sm">{BUSINESS.registeredUnder}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                  After completing the registration and payment, please share
                  the payment screenshot for verification.
                </p>
                <p className="mt-2 text-xs text-ink-soft">
                  No QR codes, UPI IDs or bank account details are published on
                  this website. Payment instructions are shared directly upon
                  registration.
                </p>
              </section>

              {/* Section F — Google Business */}
              <section className="mt-10">
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink
                    href={BUSINESS.googleBusinessUrl}
                    variant="ghost"
                    external
                    ariaLabel="View Google Business Profile (opens in a new tab)"
                  >
                    View Google Business Profile
                  </ButtonLink>
                </div>
              </section>

              {/* Section G — Daily Tuition Updates */}
              <section className="mt-10">
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink
                    href={BUSINESS.whatsappChannelUrl}
                    variant="ghost"
                    external
                    ariaLabel="Join WhatsApp Channel (opens in a new tab)"
                  >
                    Join WhatsApp Channel
                  </ButtonLink>
                </div>
              </section>
            </article>
          </ScrollReveal>
        </div>
      </section>
      </>
    </div>
  );
}
