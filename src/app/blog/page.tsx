import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Academic3DBackground } from "@/components/visuals/Academic3DBackground";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BUSINESS, SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Updates and articles from ${SITE_NAME} will appear here.`,
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Academic3DBackground variant="subtle" />
      <>
        <PageHero
        eyebrow="Educational Blog"
        title="Insights coming soon"
        description="This space will share learning tips, tutoring guidance, and platform updates. No articles have been published yet."
        imageSrc="/images/open-book.jpg"
      />

      <section className="section-pad">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <article className="grid overflow-hidden rounded-[1.75rem] border border-[#10294a14] bg-white/60 shadow-[0_24px_60px_rgba(7,20,38,0.08)] md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[18rem]">
                <Image
                  src="/images/study-atmosphere.jpg"
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="section-eyebrow">No posts yet</p>
                <h2 className="font-display text-3xl text-midnight sm:text-4xl">
                  The journal is being prepared
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  When articles are ready, they will appear on this page. Until
                  then, you can reach us directly or follow the WhatsApp channel
                  for announcements.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="primary">
                    Contact us
                  </ButtonLink>
                  <ButtonLink
                    href={BUSINESS.whatsappChannelUrl}
                    variant="outline"
                    external
                    ariaLabel="Join WhatsApp Channel (opens in a new tab)"
                  >
                    Join WhatsApp Channel
                  </ButtonLink>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>
      </>
    </div>
  );
}
