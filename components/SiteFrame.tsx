import type { ReactNode } from "react";
import Link from "next/link";

import { profile } from "@/lib/resume";

import { SocialPills } from "./SocialPills";

// Page chrome from the design: rounded paper card with the nav on top and the footer below.
// Usage: <SiteFrame active="about">...page sections...</SiteFrame>

export type NavKey = "home" | "about" | "projects" | "contact";

type SiteFrameProps = { active: NavKey; children: ReactNode };

const navLinks: { key: NavKey; href: string; label: string }[] = [
  { key: "about", href: "/about", label: "About" },
  { key: "projects", href: "/projects", label: "Projects" },
  { key: "contact", href: "/contact", label: "Contacts" },
];

const footerLinks = [{ href: "/", label: "Main" }, ...navLinks];

const COPYRIGHT_YEAR = 2026;

export const pagePadding = "px-[clamp(20px,4vw,56px)]";

export const SiteFrame = ({ active, children }: SiteFrameProps): ReactNode => (
  <div className="mx-auto my-4 max-w-[1440px] px-4">
    <div className="relative overflow-hidden rounded-[32px] border border-line-soft bg-paper">
      <nav
        className={`relative z-20 flex flex-wrap items-center justify-between gap-5 py-7 ${pagePadding}`}
      >
        <Link href="/" className="font-mono text-[15px] font-medium leading-tight">
          {profile.firstName}
          <br />
          {profile.lastName}
        </Link>
        <div className="flex flex-wrap gap-7 text-sm">
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
      </nav>

      {children}

      <footer
        className={`relative flex flex-wrap items-end justify-between gap-10 border-t border-line-soft pt-14 pb-10 ${pagePadding}`}
      >
        <div className="flex flex-wrap items-end gap-5">
          <span className="font-mono text-[clamp(48px,7vw,104px)] font-medium leading-[.95]">
            {profile.firstName}
            <br />
            {profile.lastName}
          </span>
          <span className="pb-2.5 text-[13px] text-muted">
            Software
            <br />
            developer
          </span>
        </div>
        <div className="flex min-w-[min(100%,320px)] flex-col gap-[18px]">
          <div className="flex flex-wrap gap-6 text-[13px]">
            {footerLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-accent-deep">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1 rounded-[18px] border border-line bg-glass px-5 py-4 font-mono text-xs text-muted">
            <span className="font-sans text-[13px] text-ink">
              Designed &amp; built by {profile.name}
            </span>
            <span>
              © {COPYRIGHT_YEAR} · {profile.city}
            </span>
          </div>
        </div>
        <SocialPills stretch />
      </footer>
    </div>
  </div>
);
