"use client";

import { useEffect } from "react";

/**
 * Lightweight global pointer lighting, card tilt and reading progress.
 * Decorative effects are disabled for touch and reduced-motion users.
 */
export function PremiumPointerEffects() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const progress = document.createElement("div");
    progress.className = "premium-reading-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    let aura: HTMLDivElement | null = null;
    if (finePointer && !reducedMotion) {
      aura = document.createElement("div");
      aura.className = "premium-pointer-aura";
      aura.setAttribute("aria-hidden", "true");
      document.body.appendChild(aura);
    }

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let scrollProgress = 0;
    let activeTarget: HTMLElement | null = null;

    const resetTarget = () => {
      if (!activeTarget) return;
      activeTarget.style.setProperty("--tilt-x", "0deg");
      activeTarget.style.setProperty("--tilt-y", "0deg");
      activeTarget.classList.remove("pointer-tilt");
      activeTarget = null;
    };

    const render = () => {
      frame = 0;
      if (aura) {
        aura.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
        aura.classList.add("is-visible");
      }
      progress.style.setProperty("--progress", `${scrollProgress}`);
    };

    const scheduleRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerX = event.clientX;
      pointerY = event.clientY;

      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "article.editorial-panel, article.premium-card, .objective-step",
      ) ?? null;

      if (activeTarget !== target) {
        resetTarget();
        activeTarget = target;
        activeTarget?.classList.add("pointer-tilt");
      }

      if (target) {
        const rect = target.getBoundingClientRect();
        const x = rect.width ? (event.clientX - rect.left) / rect.width : 0.5;
        const y = rect.height ? (event.clientY - rect.top) / rect.height : 0.5;
        target.style.setProperty("--tilt-x", `${((x - 0.5) * 5).toFixed(2)}deg`);
        target.style.setProperty("--tilt-y", `${((0.5 - y) * 4).toFixed(2)}deg`);
        target.style.setProperty("--spot-x", `${(x * 100).toFixed(1)}%`);
        target.style.setProperty("--spot-y", `${(y * 100).toFixed(1)}%`);
      }

      scheduleRender();
    };

    const onPointerLeave = () => {
      if (aura) aura.classList.remove("is-visible");
      resetTarget();
    };

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      scheduleRender();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      resetTarget();
      progress.remove();
      aura?.remove();
    };
  }, []);

  return null;
}
