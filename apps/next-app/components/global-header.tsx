"use client";

/**
 * Known Issue: Radix UI Hydration Mismatch
 * 
 * DropdownMenu components may cause hydration warnings due to Radix UI
 * generating different IDs on server vs client with React 19.2's useId hook.
 * This is a known upstream issue and does not affect functionality.
 * 
 * @see https://github.com/radix-ui/primitives/issues/3700
 */

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import { usePathname } from "next/navigation";
import { config } from "@config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Check, Globe } from "lucide-react";
import { type SupportedLocale, locales } from "@libs/i18n";
import { useTranslation } from "@/hooks/use-translation";
import { ThemeToggle, ColorSchemeToggle } from "@/components/theme-toggle";
import { getLocalizedPath } from "@/lib/locale-path";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale: currentLocale } = useTranslation();

  const handleLanguageChange = (locale: SupportedLocale) => {
    // Don't change if it's the same locale
    if (locale === currentLocale) return;

    // Get the current path without the locale prefix
    const pathWithoutLocale = currentLocale === config.app.i18n.defaultLocale
      ? pathname || '/'
      : pathname.replace(`/${currentLocale}`, '') || '/';

    // Store the preference first
    document.cookie = `${config.app.i18n.cookieKey}=${locale}; path=/; max-age=31536000`;

    // Navigate to the new locale path using window.location to ensure full page reload
    // This prevents theme state issues during navigation
    window.location.href = getLocalizedPath(locale, pathWithoutLocale);
  };

  return (
    <header className={`w-full bg-background/90 backdrop-blur-sm border-b border-border sticky top-0 z-40 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href={getLocalizedPath(currentLocale, '/')}>
              <Logo size="lg" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <a href={`${getLocalizedPath(currentLocale, '/')}#use-cases`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t.header.navigation.useCases}
            </a>
            <a href={`${getLocalizedPath(currentLocale, '/')}#quickstart`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t.header.navigation.quickstart}
            </a>
            <Link href={getLocalizedPath(currentLocale, '/blog')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t.header.navigation.blog}
            </Link>
            <Link href={getLocalizedPath(currentLocale, '/changelog')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t.header.navigation.changelog}
            </Link>
          </nav>

          {/* User menu or Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Color Scheme Selector */}
            <ColorSchemeToggle />

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 px-3">
                  <Globe className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    {currentLocale === 'en' ? t.header.language.english : t.header.language.chinese}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((locale) => (
                  <DropdownMenuItem
                    key={locale}
                    onClick={() => handleLanguageChange(locale)}
                  >
                    <span>{locale === 'en' ? t.header.language.english : t.header.language.chinese}</span>
                    {currentLocale === locale && <Check className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {/* Mobile Navigation Links */}
            <a href={`${getLocalizedPath(currentLocale, '/')}#use-cases`} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
              {t.header.navigation.useCases}
            </a>
            <a href={`${getLocalizedPath(currentLocale, '/')}#quickstart`} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
              {t.header.navigation.quickstart}
            </a>
            <Link href={getLocalizedPath(currentLocale, '/blog')} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
              {t.header.navigation.blog}
            </Link>
            <Link href={getLocalizedPath(currentLocale, '/changelog')} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
              {t.header.navigation.changelog}
            </Link>
            <div className="border-t border-border my-2" />
            {/* Mobile Theme and Language Controls */}
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium text-foreground">{t.header.mobile.themeSettings}</span>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <ColorSchemeToggle />
              </div>
            </div>
            <div className="px-3 py-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{t.header.mobile.languageSelection}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Globe className="mr-2 h-4 w-4" />
                      {currentLocale === 'en' ? t.header.language.english : t.header.language.chinese}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {locales.map((locale) => (
                      <DropdownMenuItem
                        key={locale}
                        onClick={() => handleLanguageChange(locale)}
                      >
                        <span>{locale === 'en' ? t.header.language.english : t.header.language.chinese}</span>
                        {currentLocale === locale && <Check className="ml-auto h-4 w-4" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 