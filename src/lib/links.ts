export function isPlaceholderUrl(href?: string) {
  if (!href) return true;
  return href === "#" || href === "https://www.linkedin.com/" || href === "https://github.com/";
}

export function safeExternalHref(href: string) {
  // allow mailto/tel and absolute http(s)
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  try {
    const u = new URL(href);
    if (u.protocol === "http:" || u.protocol === "https:") return u.toString();
  } catch {
    // ignore
  }
  return "#";
}
