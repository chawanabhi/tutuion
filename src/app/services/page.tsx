import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Academic3DBackground } from "@/components/visuals/Academic3DBackground";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SERVICES, SITE_NAME } from "@/config/site";
import { withBasePath } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore planned tutoring services from ${SITE_NAME}.`,
};

const VISUALS = [
  "/images/open-book.jpg",
  "/images/study-atmosphere.jpg",
  "/images/hero-library.jpg",
] as const;

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Academic3DBackground variant="subtle" />
      <>
        <PageHero
        eyebrow="Services"
        title="Academic support, designed around you"
        description="These planned services describe how we intend to support students and tutors. Availability and delivery details will be confirmed as registration opens."
        imageSrc="/images/hero-library.jpg"
      />

      <section className="section-pad">
        <div className="mx-auto max-w-6xl">
          <div className="placeholder-banner mb-12" role="note">
            <p className="text-sm font-semibold text-midnight">
              Planned offerings
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              The services below reflect our intended direction. They are not
              presented as already fully operational features.
            </p>
          </div>

          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const reverse = index % 2 === 1;
              return (
                <ScrollReveal
                  key={service.title}
                  delay={(Math.min(index + 1, 3)) as 1 | 2 | 3}
                >
                  <article
                    className={`feature-rail ${reverse ? "is-reverse" : ""}`}
                  >
                    <div className="visual-frame relative h-[18rem] sm:h-[24rem]">
                      <Image
                        src={withBasePath(VISUALS[index])}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(max-width: 900px) 100vw, 48vw"
                        className="object-cover transition duration-700 hover:scale-[1.03]"
                      />
                    </div>
                    <div className="editorial-panel p-8 sm:p-10">
                      <p className="section-eyebrow">Service 0{index + 1}</p>
                      <h2 className="font-display text-3xl text-midnight sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="mt-16">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-midnight">
              <Image
                src={withBasePath("/images/study-atmosphere.jpg")}
                alt=""
                fill
                loading="lazy"
                className="object-cover opacity-40"
                sizes="100vw"
              />
              <div className="relative flex flex-col gap-5 px-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
                <div>
                  <h2 className="font-display text-3xl text-white">
                    Interested in joining?
                  </h2>
                  <p className="mt-2 max-w-xl text-white/75">
                    Register your interest as a student or tutor while form
                    links are being finalized.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/register/student" variant="gold">
                    Student registration
                  </ButtonLink>
                  <ButtonLink href="/register/tutor" variant="ghost">
                    Tutor registration
                  </ButtonLink>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </>
    </div>
  );
}
