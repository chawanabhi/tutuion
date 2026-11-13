/**
 * Safe external URL helpers — validate before rendering outbound links.
 */

const ALLOWED_PROTOCOLS = new Set(["https:", "http:", "mailto:", "tel:"]);

export function isSafeExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ALLOWED_PROTOCOLS.has(parsed.protocol);
  } catch {
    return false;
  }
}

export function getSafeHref(url: string): string | null {
  if (!isSafeExternalUrl(url)) {
    return null;
  }
  return url;
}

export const EXTERNAL_LINK_REL = "noopener noreferrer" as const;
