import type { ReactNode } from "react";
import Link from "next/link";

import { profile } from "@/lib/resume";

import { SocialPills } from "./SocialPills";

// Page chrome: nav on top (links on desktop, a full-screen menu on phones) and the footer below.
// The phone menu is a native <details> element, so it opens without client JavaScript.
// Usage: <SiteFrame active="about">...page sections...</SiteFrame>

export type NavKey = "home" | "about" | "projects" | "contact";

type SiteFrameProps = { active: NavKey; children: ReactNode };

const navLinks: { key: NavKey; href: string; label: string }[] = [
  { key: "about", href: "/about", label: "About" },
  { key: "projects", href: "/projects", label: "Projects" },
  { key: "contact", href: "/contact", label: "Contacts" },
];

const menuLinks: { key: NavKey; href: string; label: string }[] = [
  { key: "home", href: "/", label: "Main" },
  ...navLinks,
];

const COPYRIGHT_YEAR = 2026;

export const pagePadding = "px-[clamp(20px,4vw,56px)]";

const MobileMenu = ({ active }: { active: NavKey }): ReactNode => (
  <details className="group md:hidden">
    <summary
      aria-label="Menu"
      className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border border-line bg-glass group-open:border-ink group-open:bg-ink group-open:text-paper [&::-webkit-details-marker]:hidden"
    >
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden className="block group-open:hidden">
        <path d="M1 1h16M1 6h16M1 11h16" />
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden className="hidden group-open:block">
        <path d="M3 3l10 10M13 3L3 13" />
      </svg>
    </summary>
    <div className="fixed inset-0 -z-10 flex flex-col bg-paper px-5 pt-[100px]">
      {menuLinks.map(({ key, href, label }, i) => (
        <Link
          key={key}
          href={href}
          aria-current={key === active ? "page" : undefined}
          className="flex items-baseline justify-between border-b border-line py-5"
        >
          <span
            className={`font-mono text-[38px] font-medium leading-none ${
              key === active ? "text-accent-deep" : ""
            }`}
          >
            {label}
          </span>
          <span className="font-mono text-[13px] text-muted">{String(i + 1).padStart(2, "0")}</span>
        </Link>
      ))}
      <div className="mt-auto flex flex-col gap-3.5 pb-7">
        <a href={`mailto:${profile.email}`} className="font-mono text-base">
          {profile.email}
        </a>
        <SocialPills align="start" />
      </div>
    </div>
  </details>
);

export const SiteFrame = ({ active, children }: SiteFrameProps): ReactNode => (
  <div className="min-h-screen bg-paper">
    <div className="relative mx-auto max-w-[1440px] overflow-x-clip">
      <nav
        className={`relative z-20 flex items-center justify-between gap-5 pt-5 pb-3.5 md:flex-wrap md:py-7 ${pagePadding}`}
      >
        <Link href="/" className="font-mono text-sm font-medium leading-tight md:text-[15px]">
          {profile.firstName}
          <br />
          {profile.lastName}
        </Link>
        <div className="hidden flex-wrap gap-7 text-sm md:flex">
          {navLinks.map(({ key, href, label }) => (
            <Link
              key={key}
              href={href}
              aria-current={key === active ? "page" : undefined}
              className={key === active ? "text-accent-deep" : "hover:text-accent-deep"}
            >
              {label}
            </Link>
          ))}
        </div>
        <MobileMenu active={active} />
      </nav>

      {children}

      <footer
        className={`relative flex flex-col gap-6 border-t border-line-soft pt-10 pb-9 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-10 md:pt-14 md:pb-10 ${pagePadding}`}
      >
        <div className="flex flex-wrap items-end gap-3.5 md:gap-5">
          <span className="font-mono text-[clamp(52px,7vw,104px)] font-medium leading-[.95]">
            {profile.firstName}
            <br />
            {profile.lastName}
          </span>
          <span className="pb-1.5 text-xs text-muted md:pb-2.5 md:text-[13px]">
            Software
            <br />
            developer
          </span>
        </div>
        <div className="flex min-w-[min(100%,320px)] flex-col gap-6 md:gap-[18px]">
          <div className="grid grid-cols-2 gap-3 text-sm md:flex md:flex-wrap md:gap-6 md:text-[13px]">
            {menuLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-accent-deep">
                {label}
              </Link>
            ))}
          </div>
          <div className="order-last flex flex-col gap-1 rounded-[18px] border border-line bg-glass px-[18px] py-3.5 font-mono text-xs text-muted md:order-none md:px-5 md:py-4">
            <span className="font-sans text-[13px] text-ink">
              Designed &amp; built by {profile.name}
            </span>
            <span>
              © {COPYRIGHT_YEAR} · {profile.city}
            </span>
          </div>
          <div className="md:hidden">
            <SocialPills align="start" />
          </div>
        </div>
        <div className="hidden w-full md:block">
          <SocialPills stretch />
        </div>
      </footer>
    </div>
  </div>
);
