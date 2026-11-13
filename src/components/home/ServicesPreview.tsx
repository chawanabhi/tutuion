import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SERVICES } from "@/config/site";
import { withBasePath } from "@/lib/urls";

const SERVICE_VISUALS = [
  {
    image: "/images/open-book.jpg",
    accent: "Matched guidance",
  },
  {
    image: "/images/study-atmosphere.jpg",
    accent: "Your timetable",
  },
  {
    image: "/images/hero-library.jpg",
    accent: "Clear progress",
  },
] as const;

export function ServicesPreview() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="services-preview-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10294a0d] to-transparent" />
      <div className="section-pad relative">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="section-eyebrow">Services</p>
              <h2
                id="services-preview-heading"
                className="display-title text-midnight"
              >
                Support shaped around how you learn
              </h2>
              <p className="lead mt-5">
                Planned offerings designed for personalized home tuition,
                flexible delivery, and transparent progress visibility.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 space-y-16">
            {SERVICES.map((service, index) => {
              const visual = SERVICE_VISUALS[index];
              const reverse = index % 2 === 1;

              return (
                <ScrollReveal
                  key={service.title}
                  delay={(Math.min(index + 1, 3)) as 1 | 2 | 3}
                >
                  <article
                    className={`feature-rail ${reverse ? "is-reverse" : ""}`}
                  >
                    <div className="visual-frame relative h-[18rem] sm:h-[22rem]">
                      <Image
                        src={withBasePath(visual.image)}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(max-width: 900px) 100vw, 48vw"
                        className="object-cover"
                      />
                      <div className="absolute bottom-5 left-5 z-10">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-champagne-bright">
                          {visual.accent}
                        </p>
                      </div>
                    </div>

                    <div className="editorial-panel p-8 sm:p-10">
                      <p className="section-eyebrow">0{index + 1}</p>
                      <h3 className="font-display text-3xl text-midnight sm:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="mt-14">
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#10294a1f] pt-8">
              <p className="max-w-xl text-ink-soft">
                These services describe our intended direction and are not
                presented as already fully operational features.
              </p>
              <ButtonLink href="/services" variant="primary">
                View all services
              </ButtonLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
