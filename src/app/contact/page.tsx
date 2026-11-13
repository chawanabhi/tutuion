import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Academic3DBackground } from "@/components/visuals/Academic3DBackground";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { BUSINESS, SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} by phone, email, WhatsApp, or visit our Hyderabad address.`,
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Academic3DBackground variant="subtle" />
      <>
        <PageHero
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Reach out for student or tutor registration questions, scheduling discussions, or general enquiries."
        imageSrc="/images/study-atmosphere.jpg"
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <article className="editorial-panel h-full p-8 sm:p-10">
              <p className="section-eyebrow">Direct contact</p>
              <h2 className="font-display text-3xl text-midnight sm:text-4xl">
                Speak with Narahari Home Tuition Point
              </h2>
              <ul className="mt-8 space-y-6">
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-champagne-deep">
                    Phone
                  </p>
                  <a
                    className="mt-1 inline-block text-xl font-semibold text-midnight underline-offset-4 hover:underline"
                    href={`tel:${BUSINESS.phoneTel}`}
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-champagne-deep">
                    Email
                  </p>
                  <a
                    className="mt-1 inline-block break-all text-xl font-semibold text-midnight underline-offset-4 hover:underline"
                    href={`mailto:${BUSINESS.email}`}
                  >
                    {BUSINESS.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-champagne-deep">
                    Address
                  </p>
                  <address className="mt-1 not-italic leading-relaxed text-ink-soft">
                    {BUSINESS.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
                <li>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-champagne-deep">
                    Registered under
                  </p>
                  <p className="mt-1 text-ink">{BUSINESS.registeredUnder}</p>
                </li>
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <article className="relative min-h-[28rem] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/hero-library.jpg"
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/30" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                <h2 className="font-display text-3xl text-white">
                  WhatsApp & registration
                </h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Prefer messaging? Use WhatsApp for a direct conversation, or
                  join the channel for broader updates. Registration forms are
                  currently placeholder links and will be replaced with live
                  Google Forms when ready.
                </p>
                <div className="mt-7 flex flex-col gap-3">
                  <ButtonLink
                    href={BUSINESS.whatsappUrl}
                    variant="gold"
                    external
                    ariaLabel="Open WhatsApp chat (opens in a new tab)"
                  >
                    Chat on WhatsApp
                  </ButtonLink>
                  <ButtonLink
                    href={BUSINESS.whatsappChannelUrl}
                    variant="ghost"
                    external
                    ariaLabel="Join WhatsApp Channel (opens in a new tab)"
                  >
                    Join WhatsApp Channel
                  </ButtonLink>
                  <ButtonLink href="/register/student" variant="ghost">
                    Student registration
                  </ButtonLink>
                  <ButtonLink href="/register/tutor" variant="ghost">
                    Tutor registration
                  </ButtonLink>
                </div>
                <p className="mt-5 text-xs text-white/55">
                  Channel:{" "}
                  <ExternalLink
                    href={BUSINESS.whatsappChannelUrl}
                    className="break-all underline underline-offset-2"
                  >
                    {BUSINESS.whatsappChannelUrl}
                  </ExternalLink>
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
