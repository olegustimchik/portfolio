import type { ReactNode } from "react";

import type { Job } from "@/lib/resume";

// One job entry: role, company, period and bullet highlights.
// Usage: <ExperienceItem job={job} />
type ExperienceItemProps = {
  job: Job;
};

export const ExperienceItem = ({
  job: { role, company, place, period, highlights },
}: ExperienceItemProps): ReactNode => (
  <article className="py-8 first:pt-0 last:pb-0">
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <h3 className="text-lg font-semibold">
        {role} <span className="font-normal text-muted">· {company}</span>
      </h3>
      <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted">{period}</p>
    </div>
    <p className="mt-1 text-sm text-muted">{place}</p>
    <ul className="mt-4 space-y-2">
      {highlights.map((item) => (
        <li key={item} className="relative pl-5 leading-relaxed text-foreground/85">
          <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  </article>
);
