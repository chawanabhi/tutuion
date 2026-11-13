import Link from "next/link";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  BUSINESS,
  COPYRIGHT_YEAR,
  FOOTER_TAGLINE,
  NAV_LINKS,
  SITE_NAME,
} from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold text-white">
            {SITE_NAME}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            {FOOTER_TAGLINE}
          </p>
          <p className="mt-5 text-sm text-champagne-bright">
            Registered under {BUSINESS.registeredUnder}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-champagne-bright">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/register/student">Student Registration</Link>
            </li>
            <li>
              <Link href="/register/tutor">Tutor Registration</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-champagne-bright">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>
              <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </li>
            <li>
              <address className="not-italic leading-relaxed">
                {BUSINESS.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li>
              <ExternalLink href={BUSINESS.whatsappUrl}>WhatsApp</ExternalLink>
            </li>
            <li>
              <ExternalLink href={BUSINESS.whatsappChannelUrl}>
                WhatsApp Channel
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/50 sm:px-6 sm:text-sm">
          © {COPYRIGHT_YEAR} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
