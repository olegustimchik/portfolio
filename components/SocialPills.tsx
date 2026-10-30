import type { ReactNode } from "react";

import { socials } from "@/lib/resume";

import { PathIcon } from "./Icons";

// Row of rounded social links. `stretch` makes them fill the row (footer style).
// Usage: <SocialPills stretch />
type SocialPillsProps = { stretch?: boolean };

export const SocialPills = ({ stretch = false }: SocialPillsProps): ReactNode => (
  <div className={`flex flex-wrap gap-2.5 ${stretch ? "w-full justify-between" : "justify-center"}`}>
    {socials.map(({ label, href, icon }) => {
      const external = href.startsWith("http");
      return (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`inline-flex items-center justify-center gap-2 rounded-full border border-line bg-glass px-5 py-[9px] text-[13px] transition-colors hover:border-accent hover:bg-accent ${
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
