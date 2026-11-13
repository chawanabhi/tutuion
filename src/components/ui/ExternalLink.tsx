import type { ReactNode } from "react";
import { EXTERNAL_LINK_REL, getSafeHref } from "@/lib/urls";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
}: ExternalLinkProps) {
  const safeHref = getSafeHref(href);

  if (!safeHref) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={safeHref}
      className={className}
      target="_blank"
      rel={EXTERNAL_LINK_REL}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
