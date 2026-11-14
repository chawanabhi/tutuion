import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { OBJECTIVES } from "@/config/site";

export function ObjectivesSection() {
  return (
    <section className="section-pad" aria-labelledby="objectives-heading">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <ScrollReveal>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-eyebrow">Our objectives</p>
            <h2
              id="objectives-heading"
              className="display-title max-w-[12ch] text-midnight"
            >
              Building a clearer path to academic support
            </h2>
            <p className="lead mt-5">
              These goals guide how we plan to connect students, parents, and
              tutors—without noise, pressure, or empty promises.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-2">
          {OBJECTIVES.map((objective, index) => (
            <ScrollReveal
              key={objective.title}
              delay={(index + 1) as 1 | 2 | 3}
            >
              <article className="objective-step">
                <p className="objective-index">0{index + 1}</p>
                <h3 className="font-display text-2xl text-midnight sm:text-3xl">
                  {objective.title}
                </h3>
                <p className="mt-3 max-w-xl text-ink-soft leading-relaxed">
                  {objective.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
