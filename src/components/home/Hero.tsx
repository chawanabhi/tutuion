"use client";

import Image from "next/image";
import { HeroAtmosphere } from "@/components/home/HeroAtmosphere";
import { RealisticBooks } from "@/components/home/RealisticBooks";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BUSINESS } from "@/config/site";
import { usePointerParallax } from "@/hooks/usePointerParallax";

export function Hero() {
  const heroRef = usePointerParallax<HTMLElement>({ intensity: 1 });

  return (
    <section
      ref={heroRef}
      className="cinematic-hero"
      aria-labelledby="hero-heading"
    >
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/images/hero-library.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="hero-veil" aria-hidden="true" />

      <div className="hero-scene" aria-hidden="true">
        <div className="hero-cursor-light" />
        <HeroAtmosphere />
        <RealisticBooks />
      </div>

      <div className="hero-content">
        <p className="hero-kicker">Learn Smart. Excel Bright.</p>
        <h1 id="hero-heading" className="hero-title font-display">
          Welcome to Narahari Home Tuition Point
        </h1>
        <p className="hero-copy">
          Connecting students with qualified tutors for personalized home
          tuition, online sessions, and academic support.
        </p>
        <div className="hero-actions">
          <ButtonLink href="/register/student" variant="gold">
            Find a Tutor
          </ButtonLink>
          <ButtonLink href="/register/tutor" variant="ghost">
            Register as Tutor
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            Explore Services
          </ButtonLink>
          <ButtonLink
            href={BUSINESS.whatsappUrl}
            variant="ghost"
            external
            ariaLabel="Contact via WhatsApp (opens in a new tab)"
          >
            Contact via WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
