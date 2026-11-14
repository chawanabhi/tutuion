"use client";

import { useEffect, useState } from "react";
import { SITE_NAME } from "@/config/site";

const LOADER_KEY = "nhtp-cinematic-loader-seen";
const SHOW_DELAY_MS = 0;
const FINISH_MS = 3800;
const SAFETY_MS = 5200;

type LoaderPhase = "idle" | "show" | "done";

export function BookLoader() {
  const [phase, setPhase] = useState<LoaderPhase>("idle");
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const alreadySeen = sessionStorage.getItem(LOADER_KEY) === "1";

    if (media.matches || alreadySeen) {
      return;
    }

    let finished = false;

    const finish = () => {
      if (finished) {
        return;
      }
      finished = true;
      sessionStorage.setItem(LOADER_KEY, "1");
      setPhase("done");
    };

    const startTimer = window.setTimeout(() => {
      setPhase("show");
    }, SHOW_DELAY_MS);

    const endTimer = window.setTimeout(finish, FINISH_MS);
    const safetyTimer = window.setTimeout(finish, SAFETY_MS);

    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", onChange);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(endTimer);
      window.clearTimeout(safetyTimer);
      media.removeEventListener("change", onChange);
    };
  }, []);

  if (phase === "idle") {
    return null;
  }

  return (
    <div
      className={`book-loader ${phase === "done" ? "is-done" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Opening a world of learning"
    >
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="loader-stage" aria-hidden="true">
          <div className="loader-glow" />
          <div className={`loader-book ${reducedMotion ? "loader-reduced" : ""}`}>
            {/* Closed hardcover book: spine on left edge */}
            <div
              className={`loader-book-spine ${
                reducedMotion ? "loader-reduced" : ""
              }`}
            />
            <div
              className={`loader-book-cover ${
                reducedMotion ? "loader-reduced" : ""
              }`}
            />
            <div
              className={`loader-book-pages ${
                reducedMotion ? "loader-reduced" : ""
              }`}
            />
            {/* Pages turning open */}
            <div
              className={`loader-book-page ${
                reducedMotion ? "loader-reduced" : ""
              }`}
            />
            <div
              className={`loader-book-page ${
                reducedMotion ? "loader-reduced" : ""
              }`}
            />
            <div
              className={`loader-book-page ${
                reducedMotion ? "loader-reduced" : ""
              }`}
            />
          </div>
        </div>
        <div
          className={`loader-brand ${reducedMotion ? "loader-reduced" : ""}`}
        >
          <strong>{SITE_NAME}</strong>
          <span>Opening a world of learning...</span>
        </div>
      </div>
    </div>
  );
}
