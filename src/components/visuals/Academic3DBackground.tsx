// "use client";

// import { useSyncExternalStore } from "react";

// type BackgroundVariant = "hero" | "subtle" | "calm" | "footer";

// const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
// const MOBILE_QUERY = "(max-width: 640px)";

// function subscribeToMediaQuery(query: string, onChange: () => void) {
//   const media = window.matchMedia(query);
//   media.addEventListener("change", onChange);
//   return () => media.removeEventListener("change", onChange);
// }

// const subscribeToReducedMotion = (onChange: () => void) =>
//   subscribeToMediaQuery(REDUCED_MOTION_QUERY, onChange);
// const subscribeToMobile = (onChange: () => void) =>
//   subscribeToMediaQuery(MOBILE_QUERY, onChange);
// const getReducedMotionSnapshot = () =>
//   window.matchMedia(REDUCED_MOTION_QUERY).matches;
// const getMobileSnapshot = () => window.matchMedia(MOBILE_QUERY).matches;
// const getServerSnapshot = () => false;

// export function Academic3DBackground({
//   variant = "subtle",
// }: { variant?: BackgroundVariant }) {
//   const reducedMotion = useSyncExternalStore(
//     subscribeToReducedMotion,
//     getReducedMotionSnapshot,
//     getServerSnapshot,
//   );
//   const isMobile = useSyncExternalStore(
//     subscribeToMobile,
//     getMobileSnapshot,
//     getServerSnapshot,
//   );

//   // Book count scales by variant and device
//   const bookCount = variant === "hero" ? (isMobile ? 3 : 5) : variant === "subtle" ? (isMobile ? 1 : 3) : 1;
//   const particleCount = variant === "hero" ? (isMobile ? 8 : 18) : variant === "subtle" ? (isMobile ? 4 : 9) : 0;
//   const pageCount = variant === "hero" ? (isMobile ? 2 : 4) : variant === "subtle" ? (isMobile ? 1 : 3) : 0;

//   const bookConfigs = [
//     { top: "10%", left: "8%", delay: "0s", rotateY: "-25deg", rotateX: "16deg", variant: "navy" as const },
//     { top: "30%", left: "55%", delay: "-2s", rotateY: "-15deg", rotateX: "12deg", variant: "burgundy" as const },
//     { top: "55%", left: "12%", delay: "-4s", rotateY: "-30deg", rotateX: "20deg", variant: "forest" as const },
//     { top: "70%", left: "60%", delay: "-1s", rotateY: "-10deg", rotateX: "14deg", variant: "sand" as const },
//     { top: "40%", left: "78%", delay: "-3s", rotateY: "-20deg", rotateX: "10deg", variant: "navy" as const },
//   ].slice(0, bookCount);

//   const pageConfigs = [
//     { top: "15%", left: "45%", delay: "0s", rotate: "8deg" },
//     { top: "40%", left: "70%", delay: "-2s", rotate: "-12deg" },
//     { top: "65%", left: "30%", delay: "-4s", rotate: "6deg" },
//     { top: "80%", left: "55%", delay: "-1s", rotate: "-8deg" },
//   ].slice(0, pageCount);

//   const particleStyles = Array.from({ length: particleCount }, (_, index) => ({
//     key: String(index),
//     left: `${10 + ((index * 37) % 80)}%`,
//     top: `${15 + ((index * 29) % 70)}%`,
//     delay: `-${index * 0.5}s`,
//     duration: `${6 + (index % 5)}s`,
//     size: 2 + (index % 3),
//   }));

//   return (
//     <>
//       {/* Decorative layer — never interactive, never covers content */}
//       <div
//         className="academic-bg-layer"
//         aria-hidden="true"
//         style={{
//           zIndex: variant === "footer" ? 0 : -1,
//           pointerEvents: "none",
//         }}
//       >
//         {/* Soft volumetric lighting glow */}
//         <div
//           className="academic-glow"
//           aria-hidden="true"
//           style={{
//             opacity: variant === "hero" ? 0.35 : variant === "subtle" ? 0.15 : 0.06,
//           }}
//         />

//         {/* Floating open books and pages */}
//         {pageConfigs.map((page) => (
//           <div
//             key={page.delay}
//             className={`academic-page ${
//               reducedMotion ? "static" : "floating"
//             } ${isMobile ? "hidden-md" : ""}`}
//             style={{
//               top: page.top,
//               left: page.left,
//               animationDelay: page.delay,
//               transform: `rotate(${page.rotate})`,
//               opacity: variant === "hero" ? 0.6 : variant === "subtle" ? 0.4 : 0,
//             }}
//             aria-hidden="true"
//           >
//             <div className="page-cover" />
//             <div className="page-lines" />
//           </div>
//         ))}

//         {/* Hardcover 3D books */}
//         {bookConfigs.map((book) => (
//           <div
//             key={book.delay}
//             className={`academic-book ${
//               reducedMotion ? "static" : "bobbing"
//             } ${isMobile ? "hidden-md" : ""}`}
//             data-variant={book.variant}
//             style={{
//               top: book.top,
//               left: book.left,
//               animationDelay: book.delay,
//               "--rotate-y": book.rotateY,
//               "--rotate-x": book.rotateX,
//               opacity:
//                 variant === "hero"
//                   ? 0.9
//                   : variant === "subtle"
//                     ? 0.5
//                     : 0.25,
//             } as React.CSSProperties}
//             aria-hidden="true"
//           >
//             <div className="book-face book-cover" />
//             <div className="book-face book-spine" />
//             <div className="book-face book-pages" />
//             <div className="book-face book-back" />
//           </div>
//         ))}

//         {/* Golden particles */}
//         {particleStyles.map((p) => (
//           <span
//             key={p.key}
//             className={`academic-particle ${
//               reducedMotion ? "static" : "drifting"
//             } ${isMobile ? "hidden-md" : ""}`}
//             style={{
//               left: p.left,
//               top: p.top,
//               animationDelay: p.delay,
//               animationDuration: p.duration,
//               width: `${p.size}px`,
//               height: `${p.size}px`,
//               opacity: variant === "hero" ? 0.6 : variant === "subtle" ? 0.4 : 0,
//             }}
//             aria-hidden="true"
//           />
//         ))}
//       </div>
//     </>
//   );
// }

"use client";

import {
  useEffect,
  useRef,
  useSyncExternalStore,
  type CSSProperties,
} from "react";

type BackgroundVariant = "hero" | "subtle" | "calm" | "footer";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MOBILE_QUERY = "(max-width: 640px)";

function subscribeToMediaQuery(query: string, onChange: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const subscribeToReducedMotion = (onChange: () => void) =>
  subscribeToMediaQuery(REDUCED_MOTION_QUERY, onChange);

const subscribeToMobile = (onChange: () => void) =>
  subscribeToMediaQuery(MOBILE_QUERY, onChange);

const getReducedMotionSnapshot = () =>
  window.matchMedia(REDUCED_MOTION_QUERY).matches;

const getMobileSnapshot = () => window.matchMedia(MOBILE_QUERY).matches;
const getServerSnapshot = () => false;

export function Academic3DBackground({
  variant = "subtle",
}: {
  variant?: BackgroundVariant;
}) {
  const layerRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot,
  );

  const isMobile = useSyncExternalStore(
    subscribeToMobile,
    getMobileSnapshot,
    getServerSnapshot,
  );

  const bookCount =
    variant === "hero" ? (isMobile ? 3 : 5) :
    variant === "subtle" ? (isMobile ? 1 : 3) : 1;

  const particleCount =
    variant === "hero" ? (isMobile ? 8 : 18) :
    variant === "subtle" ? (isMobile ? 4 : 9) : 0;

  const pageCount =
    variant === "hero" ? (isMobile ? 2 : 4) :
    variant === "subtle" ? (isMobile ? 1 : 3) : 0;

  const bookConfigs = [
    {
      top: "10%",
      left: "8%",
      delay: "0s",
      rotateY: "-25deg",
      rotateX: "16deg",
      variant: "navy",
    },
    {
      top: "30%",
      left: "55%",
      delay: "-2s",
      rotateY: "-15deg",
      rotateX: "12deg",
      variant: "burgundy",
    },
    {
      top: "55%",
      left: "12%",
      delay: "-4s",
      rotateY: "-30deg",
      rotateX: "20deg",
      variant: "forest",
    },
    {
      top: "70%",
      left: "60%",
      delay: "-1s",
      rotateY: "-10deg",
      rotateX: "14deg",
      variant: "sand",
    },
    {
      top: "40%",
      left: "78%",
      delay: "-3s",
      rotateY: "-20deg",
      rotateX: "10deg",
      variant: "navy",
    },
  ] as const;

  const pageConfigs = [
    { top: "15%", left: "45%", delay: "0s", rotate: "8deg" },
    { top: "40%", left: "70%", delay: "-2s", rotate: "-12deg" },
    { top: "65%", left: "30%", delay: "-4s", rotate: "6deg" },
    { top: "80%", left: "55%", delay: "-1s", rotate: "-8deg" },
  ].slice(0, pageCount);

  const particleStyles = Array.from(
    { length: particleCount },
    (_, index) => ({
      key: String(index),
      left: `${10 + ((index * 37) % 80)}%`,
      top: `${15 + ((index * 29) % 70)}%`,
      delay: `-${index * 0.5}s`,
      duration: `${6 + (index % 5)}s`,
      size: 2 + (index % 3),
    }),
  );

  // Mouse movement and scrolling update the decorative elements only.
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const elements = Array.from(
      layer.querySelectorAll<HTMLElement>("[data-parallax-depth]"),
    );

    if (reducedMotion) {
      elements.forEach((element) => {
        element.style.setProperty("--parallax-x", "0px");
        element.style.setProperty("--parallax-y", "0px");
      });
      return;
    }

    let pointerX = 0;
    let pointerY = 0;
    let scrollY = window.scrollY;
    let frame = 0;

    const updateElements = () => {
      frame = 0;

      elements.forEach((element) => {
        const depth = Number(element.dataset.parallaxDepth || 1);

        const x = pointerX * depth * 13;
        const y = pointerY * depth * 9 - Math.min(scrollY, 900) * depth * 0.055;

        element.style.setProperty("--parallax-x", `${x.toFixed(2)}px`);
        element.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
      });
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateElements);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;

      scheduleUpdate();
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      scheduleUpdate();
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      scheduleUpdate();
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    scheduleUpdate();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [reducedMotion]);

  return (
    <div
      ref={layerRef}
      className="academic-bg-layer"
      aria-hidden="true"
    >
      <div
        className="academic-glow"
        data-parallax-depth="0.25"
        style={{
          opacity:
            variant === "hero" ? 0.35 :
            variant === "subtle" ? 0.15 : 0.06,
        }}
      />

      {pageConfigs.map((page, index) => (
        <div
          key={page.delay}
          className={`academic-page ${
            reducedMotion ? "static" : "floating"
          }`}
          data-parallax-depth={0.65 + index * 0.12}
          style={{
            top: page.top,
            left: page.left,
            animationDelay: page.delay,
            transform: `rotate(${page.rotate})`,
            opacity: variant === "hero" ? 0.6 : 0.4,
          }}
        >
          <div className="page-cover" />
          <div className="page-lines" />
        </div>
      ))}

      {bookConfigs.slice(0, bookCount).map((book, index) => (
        <div
          key={book.delay}
          className={`academic-book ${
            reducedMotion ? "static" : "bobbing"
          }`}
          data-variant={book.variant}
          data-parallax-depth={1 + index * 0.16}
          style={
            {
              top: book.top,
              left: book.left,
              animationDelay: book.delay,
              "--rotate-y": book.rotateY,
              "--rotate-x": book.rotateX,
              opacity:
                variant === "hero" ? 0.9 :
                variant === "subtle" ? 0.5 : 0.25,
            } as CSSProperties
          }
        >
          <div className="book-face book-cover" />
          <div className="book-face book-spine" />
          <div className="book-face book-pages" />
          <div className="book-face book-back" />
        </div>
      ))}

      {particleStyles.map((particle, index) => (
        <span
          key={particle.key}
          className={`academic-particle ${
            reducedMotion ? "static" : "drifting"
          }`}
          data-parallax-depth={1.5 + (index % 3) * 0.25}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: variant === "hero" ? 0.6 : 0.4,
          }}
        />
      ))}
    </div>
  );
}
