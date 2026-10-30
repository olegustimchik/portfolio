import type { ReactNode } from "react";

import { formatLength, formatPeriod, type Job } from "@/lib/resume";

import { pagePadding } from "./SiteFrame";

// Experience table where each job expands to show its summary and highlights.
// Built on native <details>, so it works without client JavaScript. The first job starts open.
// Usage: <ExperienceAccordion jobs={experience} />
type ExperienceAccordionProps = { jobs: Job[] };

export const ExperienceAccordion = ({ jobs }: ExperienceAccordionProps): ReactNode => (
  <div className="-mx-[clamp(20px,4vw,56px)] flex flex-col border-t border-line">
    {jobs.map((job, i) => (
      <details
        key={`${job.company}-${job.start.year}`}
        open={i === 0}
        className="group border-b border-line open:bg-accent/8"
      >
        <summary
          className={`flex min-h-[76px] cursor-pointer list-none items-center gap-3 py-4 md:py-[18px] md:hover:bg-accent [&::-webkit-details-marker]:hidden ${pagePadding}`}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-[3px] md:grid md:grid-cols-[1fr_1fr_2fr] md:items-center md:gap-6">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-muted md:text-[15px] md:text-ink">
                {formatPeriod(job)}
                <span className="md:hidden"> · {formatLength(job)}</span>
              </span>
              <span className="hidden text-[11px] opacity-60 md:block">{formatLength(job)}</span>
            </div>
            <span className="text-[15px] font-semibold">{job.company}</span>
            <span className="font-mono text-[13px] md:text-sm">{job.role}</span>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-glass">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="block group-open:rotate-180">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        </summary>
        <div className={`flex flex-col gap-3.5 pb-[22px] md:max-w-[960px] ${pagePadding}`}>
          <p className="m-0 text-sm leading-relaxed text-muted">{job.summary}</p>
          {job.highlights.map((point) => (
            <div key={point} className="flex items-baseline gap-2.5 text-sm leading-[1.55]">
              <span className="h-1.5 w-1.5 shrink-0 -translate-y-0.5 rounded-full bg-accent" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </details>
    ))}
  </div>
);
