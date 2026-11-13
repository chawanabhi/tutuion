import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Academic3DBackground } from "@/components/visuals/Academic3DBackground";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { withBasePath } from "@/lib/urls";
import {
  BUSINESS,
  OBJECTIVES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME} and our mission to connect students with qualified tutors.`,
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Academic3DBackground variant="subtle" />
      <>
        <PageHero
        eyebrow="About"
        title={SITE_NAME}
        description={`${SITE_TAGLINE} ${SITE_DESCRIPTION}`}
        imageSrc="/images/study-atmosphere.jpg"
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <ScrollReveal>
            <article>
              <p className="section-eyebrow">Who we are</p>
              <h2 className="display-title text-midnight">
                A thoughtful platform for learning relationships
              </h2>
              <p className="lead mt-5">
                {SITE_NAME} is building a refined way for students and parents
                to connect with qualified tutors for personalized home tuition,
                online sessions, and academic support across various subjects
                and grade levels.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                The platform is registered under {BUSINESS.registeredUnder} and
                is based in Hyderabad. This website shares our purpose, planned
                services, and how to reach us while registration forms are being
                prepared.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/register/student" variant="primary">
                  Register as Student
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  Contact us
                </ButtonLink>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <aside className="relative overflow-hidden rounded-[1.5rem]">
              <div className="relative h-[22rem] sm:h-full min-h-[22rem]">
                <Image
                  src={withBasePath("/images/open-book.jpg")}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-champagne-bright">
                    At a glance
                  </p>
                  <dl className="mt-4 space-y-4 text-sm">
                    <div>
                      <dt className="text-white/55">Registered under</dt>
                      <dd className="mt-1 font-semibold">
                        {BUSINESS.registeredUnder}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-white/55">Location</dt>
                      <dd className="mt-1 font-semibold leading-relaxed">
                        {BUSINESS.addressLines.join(", ")}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-white/55">Tagline</dt>
                      <dd className="mt-1 font-semibold">{SITE_TAGLINE}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="section-pad bg-gradient-to-b from-transparent via-[#10294a0a] to-transparent pt-0"
        aria-labelledby="about-objectives"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="section-eyebrow">Direction</p>
            <h2
              id="about-objectives"
              className="display-title max-w-3xl text-midnight"
            >
              What we aim to build
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {OBJECTIVES.map((objective, index) => (
              <ScrollReveal
                key={objective.title}
                delay={(index + 1) as 1 | 2 | 3}
              >
                <article className="objective-step h-full rounded-[1rem] border border-[#10294a14] bg-white/55 backdrop-blur-sm">
                  <p className="objective-index">0{index + 1}</p>
                  <h3 className="font-display text-2xl text-midnight">
                    {objective.title}
                  </h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">
                    {objective.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      </>
    </div>
  );
}
