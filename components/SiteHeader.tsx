import type { ReactNode } from "react";

// Sticky top bar with the owner's name and in-page navigation links.
// Usage: <SiteHeader name="Oleh Ustymchyk" />
type SiteHeaderProps = {
  name: string;
};

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const SiteHeader = ({ name }: SiteHeaderProps): ReactNode => (
  <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur">
    <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
      <a href="#top" className="font-mono text-sm font-semibold uppercase tracking-wider">
        {name}
      </a>
      <nav aria-label="Sections" className="hidden gap-6 sm:flex">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);
