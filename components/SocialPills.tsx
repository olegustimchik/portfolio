import type { ReactNode } from "react";

import { socials } from "@/lib/resume";

import { PathIcon } from "./Icons";

// Row of rounded social links. `stretch` makes them fill the row (desktop footer);
// `align="start"` left-aligns them (phone layouts).
// Usage: <SocialPills stretch />
type SocialPillsProps = { stretch?: boolean; align?: "center" | "start" };

export const SocialPills = ({ stretch = false, align = "center" }: SocialPillsProps): ReactNode => (
  <div
    className={`flex flex-wrap gap-2 md:gap-2.5 ${
      stretch ? "w-full justify-between" : align === "start" ? "justify-start" : "justify-start md:justify-center"
    }`}
  >
    {socials.map(({ label, href, icon }) => {
      const external = href.startsWith("http");
      return (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`inline-flex h-10 items-center justify-center gap-2 rounded-full border border-line bg-glass px-4 text-[13px] transition-colors hover:border-accent hover:bg-accent md:h-auto md:px-5 md:py-[9px] ${
            stretch ? "flex-[1_1_120px]" : ""
          }`}
        >
          <PathIcon d={icon} />
          <span>{label}</span>
        </a>
      );
    })}
  </div>
);
