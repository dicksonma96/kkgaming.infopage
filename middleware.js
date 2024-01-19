import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["th-th", "en-us", "zh-cn", "ms-ms"],
  localeDetection: true,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "th-th",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
