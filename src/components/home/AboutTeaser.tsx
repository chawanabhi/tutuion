import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BUSINESS, SITE_DESCRIPTION, SITE_NAME } from "@/config/site";

export function AboutTeaser() {
  return (
    <section className="section-pad pt-0" aria-labelledby="about-teaser-heading">
      <div className="mx-auto max-w-6xl">
        <div className="feature-rail">
          <ScrollReveal>
            <div className="visual-frame relative h-[22rem] sm:h-[28rem]">
              <Image
                src="/images/open-book.jpg"
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 900px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div>
              <p className="section-eyebrow">About Narahari</p>
              <h2
                id="about-teaser-heading"
                className="display-title text-midnight"
              >
                An education brand rooted in care and clarity
              </h2>
              <p className="lead mt-5">{SITE_DESCRIPTION}</p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Registered under {BUSINESS.registeredUnder} and based in
                Hyderabad, {SITE_NAME} is building a thoughtful way for families
                and tutors to connect.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/about" variant="primary">
                  Discover our story
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  Contact us
                </ButtonLink>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
