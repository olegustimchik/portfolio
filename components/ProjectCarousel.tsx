import type { ReactNode } from "react";
import Link from "next/link";

import type { Project } from "@/lib/resume";

import { ArrowLeft, ArrowRight } from "./Icons";
import { PairButton } from "./PairButton";
import { Placeholder } from "./Placeholder";

// Home page project slider. Server-rendered: the current slide comes from ?slide=N,
// and the arrows and dots are plain links, so no client JavaScript is needed.
// Usage: <ProjectCarousel projects={projects} index={0} />
type ProjectCarouselProps = { projects: Project[]; index: number };

const SideCard = ({ project, hideOnPhone = false }: { project: Project; hideOnPhone?: boolean }): ReactNode => (
  <div className={`pointer-events-none relative flex-[0_0_min(85%,330px)] overflow-hidden rounded-3xl opacity-55 blur-[3px] md:flex-[0_0_min(78%,900px)] ${hideOnPhone ? "hidden md:block" : ""}`}>
    <Placeholder label="Project cover" dark />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0)_30%,rgba(20,20,20,.75))]" />
    <div className="absolute right-5 bottom-5 left-5 hidden flex-col gap-1.5 text-paper md:flex">
      <span className="font-mono text-[clamp(14px,1.4vw,18px)] font-medium leading-tight">
        {project.title}
      </span>
      <span className="text-xs">{project.type}</span>
    </div>
  </div>
);

const slideHref = (slide: number): { pathname: string; query: { slide: number } } => ({
  pathname: "/",
  query: { slide },
});

export const ProjectCarousel = ({ projects, index }: ProjectCarouselProps): ReactNode => {
  const n = projects.length;
  const current = ((index % n) + n) % n;
  const prev = (current + n - 1) % n;
  const next = (current + 1) % n;
  const project = projects[current];

  return (
    <section id="work" className="flex scroll-mt-6 flex-col gap-[18px] md:gap-7">
      <div className="relative -mx-[clamp(20px,4vw,56px)] overflow-hidden">
        <div className="flex h-[420px] items-stretch justify-start gap-3 px-5 md:h-[clamp(440px,34vw,480px)] md:justify-center md:gap-4 md:px-0">
          <SideCard project={projects[prev]} hideOnPhone />
          <div className="relative flex-[0_0_min(85%,330px)] overflow-hidden rounded-3xl text-paper md:flex-[0_0_min(78%,900px)]">
            <Placeholder label="Project cover" dark />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0)_25%,rgba(20,20,20,.82)_100%)]" />
            <div className="absolute right-0 bottom-0 left-0 flex max-w-[620px] flex-col gap-2.5 p-[22px] md:gap-[clamp(10px,1.2vw,14px)] md:p-[clamp(20px,3vw,40px)]">
              <span className="font-mono text-xs">
                {project.year} · {project.type}
              </span>
              <h3 className="m-0 font-mono text-[26px] font-medium leading-[1.1] md:text-[clamp(24px,3vw,40px)]">
                {project.title}
              </h3>
              <p className="m-0 text-sm leading-relaxed">{project.summary}</p>
              <div className="pt-1.5">
                <PairButton href={`/projects/${project.slug}`} label="View case" variant="light" />
              </div>
            </div>
          </div>
          <SideCard project={projects[next]} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link
          href={slideHref(prev)}
          scroll={false}
          aria-label="Previous project"
          className="hidden h-12 w-12 place-items-center rounded-full border border-line bg-glass transition-colors hover:border-accent hover:bg-accent md:grid"
        >
          <ArrowLeft />
        </Link>
        <div className="flex items-center gap-2">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={slideHref(i)}
              scroll={false}
              aria-label={p.title}
              aria-current={i === current ? "true" : undefined}
              className={`h-2 rounded-full ${i === current ? "w-8 bg-accent" : "w-2 bg-dot"}`}
            />
          ))}
        </div>
        <Link
          href={slideHref(next)}
          scroll={false}
          aria-label="Next project"
          className="hidden h-12 w-12 place-items-center rounded-full border border-line bg-glass transition-colors hover:border-accent hover:bg-accent md:grid"
        >
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
};
