export function getLocalizedPath(locale: string, path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (locale === "zh-CN") {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${normalizedPath}`;
}
