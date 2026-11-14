"use client";

import { useEffect, useRef } from "react";

type ParallaxOptions = {
  intensity?: number;
  disabled?: boolean;
};

export function usePointerParallax<T extends HTMLElement>({
  intensity = 1,
  disabled = false,
}: ParallaxOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || disabled) {
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let frame = 0;
    let enabled = !media.matches && finePointer.matches;
    let x = 0;
    let y = 0;
    let cursorX = node.clientWidth / 2;
    let cursorY = node.clientHeight * 0.45;
    let targetX = 0;
    let targetY = 0;
    let targetCursorX = cursorX;
    let targetCursorY = cursorY;

    const renderPosition = () => {
      node.style.setProperty("--mx", x.toFixed(3));
      node.style.setProperty("--my", y.toFixed(3));
      node.style.setProperty("--hero-shift-x", `${(x * 18).toFixed(2)}px`);
      node.style.setProperty("--hero-shift-y", `${(y * 12).toFixed(2)}px`);
      node.style.setProperty("--book-shift-x", `${(x * 12).toFixed(2)}px`);
      node.style.setProperty("--book-shift-y", `${(y * 8).toFixed(2)}px`);
      node.style.setProperty("--paper-shift-x", `${(x * 5).toFixed(2)}px`);
      node.style.setProperty("--paper-shift-y", `${(y * 4).toFixed(2)}px`);
      node.style.setProperty("--tilt-x", `${(x * 2).toFixed(2)}deg`);
      node.style.setProperty("--tilt-y", `${(y * 1.5).toFixed(2)}deg`);
      node.style.setProperty("--cursor-x", `${cursorX.toFixed(1)}px`);
      node.style.setProperty("--cursor-y", `${cursorY.toFixed(1)}px`);
    };

    const animate = () => {
      frame = 0;
      if (!enabled || document.hidden) {
        return;
      }

      const ease = 0.12;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      cursorX += (targetCursorX - cursorX) * ease;
      cursorY += (targetCursorY - cursorY) * ease;

      if (Math.abs(targetX - x) < 0.001) x = targetX;
      if (Math.abs(targetY - y) < 0.001) y = targetY;
      if (Math.abs(targetCursorX - cursorX) < 0.25) cursorX = targetCursorX;
      if (Math.abs(targetCursorY - cursorY) < 0.25) cursorY = targetCursorY;
      renderPosition();

      if (
        x !== targetX ||
        y !== targetY ||
        cursorX !== targetCursorX ||
        cursorY !== targetCursorY
      ) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const requestAnimation = () => {
      if (enabled && !document.hidden && !frame) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const onMove = (event: PointerEvent) => {
      if (!enabled || event.pointerType === "touch") {
        return;
      }

      const rect = node.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        return;
      }

      targetX = Math.max(
        -1,
        Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2),
      ) * intensity;
      targetY = Math.max(
        -1,
        Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2),
      ) * intensity;
      targetCursorX = event.clientX - rect.left;
      targetCursorY = event.clientY - rect.top;
      requestAnimation();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      targetCursorX = node.clientWidth / 2;
      targetCursorY = node.clientHeight * 0.45;
      requestAnimation();
    };

    const onVisibilityChange = () => {
      node.dataset.pageVisible = String(!document.hidden);
      if (document.hidden && frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      } else {
        requestAnimation();
      }
    };

    const onPreferenceChange = () => {
      enabled = !media.matches && finePointer.matches;
      if (!enabled) {
        targetX = 0;
        targetY = 0;
        x = 0;
        y = 0;
        cursorX = node.clientWidth / 2;
        cursorY = node.clientHeight * 0.45;
        targetCursorX = cursorX;
        targetCursorY = cursorY;
        renderPosition();
        if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      } else {
        requestAnimation();
      }
    };

    node.dataset.pageVisible = String(!document.hidden);
    renderPosition();
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    media.addEventListener("change", onPreferenceChange);
    finePointer.addEventListener("change", onPreferenceChange);

    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      media.removeEventListener("change", onPreferenceChange);
      finePointer.removeEventListener("change", onPreferenceChange);
      delete node.dataset.pageVisible;
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [disabled, intensity]);

  return ref;
}
