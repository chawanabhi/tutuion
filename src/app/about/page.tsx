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
              Bridging Parents and Tutors. Building Better Learning
              </h2>
    
<p className="lead mt-5">
  {SITE_NAME} is a professional tuition service provider connecting parents
  with qualified tutors for personalized home tuition and online learning.
</p>

<p className="mt-4 leading-relaxed text-ink-soft">
  We coordinate the entire process, from registration and demo classes to
  feedback and official tuition confirmation, ensuring a smooth and reliable
  experience for parents, students, and tutors.
</p>

<p className="mt-5 leading-relaxed text-ink-soft">
  <strong className="text-midnight">Our Mission:</strong> Making quality
  education accessible through trusted connections between parents and tutors.
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

      <section
        id="registration"
        className="section-pad pt-0"
        aria-labelledby="registration-heading"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <ScrollReveal>
            <div>
              <p className="section-eyebrow">Our credentials</p>
              <h2
                id="registration-heading"
                className="display-title text-midnight"
              >
                Registered. Recognised. Committed to Education.
              </h2>
              <p className="lead mt-5">
                Narahari Home Tuition Point holds an Udyam Registration
                Certificate issued under the Ministry of Micro, Small and
                Medium Enterprises, Government of India.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                We believe in transparent operations and building trust with
                students, parents, and tutors.
              </p>
              <a
                href={withBasePath("/images/udyam-registration-certificate.jpg")}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline mt-7"
              >
                View full certificate
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <a
              href={withBasePath("/images/udyam-registration-certificate.jpg")}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Udyam Registration Certificate in a new tab"
              className="editorial-panel mx-auto block max-w-[34rem] p-3 transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={withBasePath("/images/udyam-registration-certificate.jpg")}
                alt="Udyam Registration Certificate for Narahari Home Tuition Point"
                width={884}
                height={1280}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="h-auto w-full rounded-lg"
              />
              <span className="block px-3 py-3 text-center text-sm font-semibold text-midnight">
                Udyam Registration Certificate · Select to enlarge
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
      </>
    </div>
  );
}
