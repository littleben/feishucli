import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { localeMiddleware } from './middlewares/localeMiddleware';
import { i18n } from './app/i18n-config';

// Public paths that never need auth check — skip auth middleware entirely
const publicPathPatterns = [
  // Homepage
  new RegExp(`^\\/(${i18n.locales.join('|')})$`),
  // Blog
  new RegExp(`^\\/(${i18n.locales.join('|')})\\/blog(\\/.*)?$`),
  // Pricing
  new RegExp(`^\\/(${i18n.locales.join('|')})\\/pricing$`),
  // Terms & Privacy
  new RegExp(`^\\/(${i18n.locales.join('|')})\\/terms$`),
  new RegExp(`^\\/(${i18n.locales.join('|')})\\/privacy$`),
  // Changelog
  new RegExp(`^\\/(${i18n.locales.join('|')})\\/changelog$`),
  // API auth routes (better-auth handles its own auth)
  /^\/api\/auth\//,
  // API health
  /^\/api\/health$/,
  // API blog (public read)
  /^\/api\/blog(\/.*)?$/,
];

function isPublicPath(pathname: string): boolean {
  return publicPathPatterns.some(pattern => pattern.test(pathname));
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // --- Skip static files and images ---
  if (
    /^\/(_next|images)\/.*$/.test(pathname) ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // --- Locale Handling ---
  const localeResponse = localeMiddleware(request);
  if (localeResponse) {
    return localeResponse;
  }

  // --- Skip auth for public paths ---
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // --- Authentication Check (lazy import to avoid DB init when not needed) ---
  try {
    const { authMiddleware } = await import('./middlewares/authMiddleware');
    const authResponse = await authMiddleware(request);
    if (authResponse) {
      return authResponse;
    }
  } catch (error) {
    // If auth fails (e.g., no database), let the request through
    // The page/API will handle its own error
    console.error('Auth middleware error:', error);
  }

  return NextResponse.next();
}

export const config = {
  runtime: 'nodejs',
  matcher: [
    '/((?!_next|images|[\\w-]+\\.\\w+).*)',
  ],
};
