import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BUSINESS } from "@/config/site";

export function CtaBand() {
  return (
    <section className="section-pad pt-4" aria-labelledby="cta-heading">
      <ScrollReveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem]">
          <div className="absolute inset-0">
            <Image
              src="/images/study-atmosphere.jpg"
              alt=""
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/88 to-deep-blue/75" />
          </div>

          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne-bright">
              Get started
            </p>
            <h2
              id="cta-heading"
              className="mt-4 font-display text-3xl text-white sm:text-5xl"
            >
              Ready to begin your learning journey?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Register as a student or tutor, explore our planned services, or
              stay connected on WhatsApp for updates.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/register/student" variant="gold">
                Register as Student
              </ButtonLink>
              <ButtonLink href="/register/tutor" variant="ghost">
                Register as Tutor
              </ButtonLink>
              <ButtonLink
                href={BUSINESS.whatsappUrl}
                variant="ghost"
                external
                ariaLabel="Chat on WhatsApp (opens in a new tab)"
              >
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
