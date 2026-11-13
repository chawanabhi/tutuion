"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons/ServiceIcons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NAV_LINKS, SITE_NAME } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [overHero, setOverHero] = useState(pathname === "/");
  const panelId = useId();

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    if (open) {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (pathname !== "/") {
      const frame = window.requestAnimationFrame(() => {
        setOverHero(false);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const onScroll = () => {
      setOverHero(window.scrollY < window.innerHeight * 0.72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${overHero && !open ? "is-over-hero" : ""}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
        >
          <span className="brand-title font-display text-xl font-semibold leading-tight sm:text-2xl">
            Narahari
          </span>
          <span className="brand-sub text-[0.68rem] font-semibold uppercase tracking-[0.16em] sm:text-xs">
            Home Tuition Point
          </span>
          <span className="sr-only">{SITE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isCurrent =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={isCurrent ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <ButtonLink
            href="/register/student"
            variant={overHero ? "ghost" : "outline"}
            className="!min-h-10 !px-4 !text-sm"
          >
            Student
          </ButtonLink>
          <ButtonLink
            href="/register/tutor"
            variant="gold"
            className="!min-h-10 !px-4 !text-sm"
          >
            Tutor
          </ButtonLink>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-[0.55rem] border p-2.5 transition lg:hidden ${
            overHero
              ? "border-white/25 text-white hover:border-champagne"
              : "border-midnight/15 text-midnight hover:border-champagne"
          }`}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`mobile-drawer ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div
          id={panelId}
          className="mobile-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-8 flex items-center justify-between">
            <p className="font-display text-xl font-semibold text-midnight">
              Menu
            </p>
            <button
              type="button"
              className="rounded-[0.55rem] border border-midnight/15 p-2 text-midnight"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Mobile primary">
            {NAV_LINKS.map((link) => {
              const isCurrent =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[0.7rem] px-3 py-2.5 text-lg font-semibold text-midnight transition hover:bg-[#ece6d8]"
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <ButtonLink href="/register/student" variant="outline">
              Register as Student
            </ButtonLink>
            <ButtonLink href="/register/tutor" variant="gold">
              Register as Tutor
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
