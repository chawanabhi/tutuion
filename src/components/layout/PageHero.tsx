
import Image from "next/image";
import { withBasePath } from "@/lib/urls";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  imageSrc?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc = "/images/hero-library.jpg",
}: PageHeroProps) {
  return (
    <section
      className="page-hero relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#071426] sm:min-h-[420px]"
      aria-labelledby="page-hero-title"
    >
      {/* Background Image */}
      <div className="page-hero-media absolute inset-0 -z-20">
        <Image
          src={withBasePath(imageSrc)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="page-hero-veil absolute inset-0 -z-10 bg-gradient-to-r from-[#071426]/95 via-[#071426]/80 to-[#071426]/45"
        aria-hidden="true"
      />

      {/* Additional Contrast */}
      <div
        className="absolute inset-0 -z-10 bg-[#071426]/20"
        aria-hidden="true"
      />

      {/* Page Hero Content */}
      <div className="page-hero-content relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">

        {/* Eyebrow */}
        {eyebrow ? (
          <p className="page-hero-eyebrow mb-4 text-xs font-bold uppercase tracking-[0.22em] sm:text-sm">
            {eyebrow}
          </p>
        ) : null}

        {/* Main Title */}
        <h1
          id="page-hero-title"
          className="page-hero-title mt-3 max-w-4xl font-display text-4xl font-bold leading-tight text-[#C9A44C] drop-shadow-lg sm:text-5xl lg:text-6xl"
        >
          {title}
        </h1>

        {/* Description */}
        {description ? (
          <p className="page-hero-description mt-5 max-w-2xl text-base leading-relaxed text-[#F7F4EC] drop-shadow-md sm:text-lg">
            {description}
          </p>
        ) : null}

      </div>
    </section>
  );
}
