import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { isSafeExternalUrl } from "@/lib/urls";

type ButtonVariant = "primary" | "gold" | "outline" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn btn-primary",
  gold: "btn btn-gold",
  outline: "btn btn-outline",
  ghost: "btn btn-ghost",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = `${variantClass[variant]} ${className}`.trim();
  const isExternal = external || isSafeExternalUrl(href);

  if (isExternal) {
    return (
      <ExternalLink href={href} className={classes} ariaLabel={ariaLabel}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
