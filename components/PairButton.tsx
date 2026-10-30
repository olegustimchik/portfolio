import type { ReactNode } from "react";
import Link from "next/link";

import { ArrowRight, ArrowUpRight } from "./Icons";

// Dark pill with a round arrow button next to it; both turn orange together on hover.
// Usage: <PairButton href="/projects" label="Projects" />
type PairButtonProps = {
  href: string;
  label: string;
  variant?: "dark" | "light";
  arrow?: "right" | "up-right";
  italic?: boolean;
  wide?: boolean;
};

export const PairButton = ({
  href,
  label,
  variant = "dark",
  arrow = "right",
  italic = false,
  wide = false,
}: PairButtonProps): ReactNode => {
  const pill =
    variant === "dark"
      ? "bg-ink text-paper"
      : "bg-paper text-ink";
  const circle =
    variant === "dark" ? "border-ink" : "border-paper text-paper";
  return (
    <div className="pair flex items-center gap-2.5">
      <Link
        href={href}
        className={`rounded-full transition-colors ${pill} ${
          italic ? "text-[15px] italic" : "text-sm font-semibold"
        } ${wide ? "px-[clamp(32px,6vw,80px)] py-3" : "px-[26px] py-2.5"}`}
      >
        {label}
      </Link>
      <Link
        href={href}
        aria-label={label}
        className={`grid place-items-center rounded-full border transition-colors ${circle} ${
          wide ? "h-[46px] w-[46px] bg-ink text-paper" : "h-10 w-10"
        }`}
      >
        {arrow === "right" ? <ArrowRight /> : <ArrowUpRight size={14} />}
      </Link>
    </div>
  );
};
