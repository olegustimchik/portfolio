import type { ReactNode } from "react";
import type { Metadata } from "next";

import { ArrowUpRight } from "@/components/Icons";
import { SiteFrame, pagePadding } from "@/components/SiteFrame";
import { profile } from "@/lib/resume";

// Contact page: headline and direct contact details.

export const metadata: Metadata = { title: "Contacts" };

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { label: "Location", value: profile.location },
];

const Contact = (): ReactNode => (
  <SiteFrame active="contact">
    <main className={`relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-14 pt-6 pb-20 ${pagePadding}`}>
      <div className="flex flex-col gap-7">
        <h1 className="m-0 font-mono text-[clamp(44px,7vw,104px)] font-medium leading-none tracking-[-.02em]">
          Let&apos;s work together
        </h1>
        <p className="m-0 max-w-[440px] text-base leading-[1.65] text-muted">
          Tell me about the role or project. I usually reply within{" "}
          <em className="font-semibold text-ink">one working day</em>.
        </p>
        <a href={`mailto:${profile.email}`} className="mt-auto self-start font-mono text-[clamp(18px,2vw,24px)] hover:text-accent-deep">
          {profile.email}
        </a>
      </div>
      <div className="flex flex-col gap-3.5 rounded-[28px] border border-line bg-glass p-[clamp(24px,3vw,40px)]">
        {channels.map(({ label, value, href }) => {
          const body = (
            <>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-muted">{label}</span>
                <span className="text-[15px] break-all">{value}</span>
              </div>
              {href && (
                <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full border border-line">
                  <ArrowUpRight size={14} />
                </span>
              )}
            </>
          );
          const row = "flex items-center justify-between gap-3 rounded-[22px] border border-line px-[22px] py-4";
          return href ? (
            <a
              key={label}
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`${row} transition-colors hover:border-accent hover:bg-accent`}
            >
              {body}
            </a>
          ) : (
            <div key={label} className={row}>
              {body}
            </div>
          );
        })}
      </div>
    </main>
  </SiteFrame>
);

export default Contact;
