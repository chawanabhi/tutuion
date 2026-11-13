/**
 * Safe external URL helpers — validate before rendering outbound links.
 */

const ALLOWED_PROTOCOLS = new Set(["https:", "http:", "mailto:", "tel:"]);
const GITHUB_PAGES_BASE_PATH =
  process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/tutuion" : "";

export function withBasePath(path: string): string {
  if (
    !GITHUB_PAGES_BASE_PATH ||
    !path.startsWith("/") ||
    path.startsWith("//")
  ) {
    return path;
  }

  if (
    path === GITHUB_PAGES_BASE_PATH ||
    path.startsWith(`${GITHUB_PAGES_BASE_PATH}/`)
  ) {
    return path;
  }

  return `${GITHUB_PAGES_BASE_PATH}${path}`;
}

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
