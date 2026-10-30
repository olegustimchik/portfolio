import { Suspense, type ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { PairButton } from "@/components/PairButton";
import { Placeholder } from "@/components/Placeholder";
import { SiteFrame, pagePadding } from "@/components/SiteFrame";
import { projects, type Project } from "@/lib/resume";

// Projects list with search and stack filter. Filtering runs on the server from
// ?q= and ?skill= (a plain GET form and links), so the page needs no client JavaScript.

export const metadata: Metadata = { title: "Projects" };

type Filter = { q: string; skill: string };

const allStack = [...new Set(projects.flatMap((p) => p.stack))];

const matches = (p: Project, { q, skill }: Filter): boolean => {
  const query = q.trim().toLowerCase();
  const text = [p.title, p.type, p.summary, ...p.tags, ...p.stack].join(" ").toLowerCase();
  return (!skill || p.stack.includes(skill)) && (!query || text.includes(query));
};

const chipHref = (q: string, skill: string): { pathname: string; query: Record<string, string> } => ({
  pathname: "/projects",
  query: Object.fromEntries(Object.entries({ q, skill }).filter(([, v]) => v)),
});

const ProjectRow = ({ project, index }: { project: Project; index: number }): ReactNode => (
  <article className={`flex flex-wrap items-center gap-10 ${index % 2 ? "flex-row-reverse" : ""}`}>
    <div className="flex max-w-[440px] flex-[1_1_300px] flex-col gap-[18px]">
      <span className="font-mono text-xs text-muted">
        {String(index + 1).padStart(2, "0")} · {project.year}
      </span>
      <h2 className="m-0 font-mono text-[clamp(26px,2.8vw,38px)] font-medium leading-[1.1]">
        {project.title}
      </h2>
      {(project.tags.length > 0 || project.stack.length > 0) && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-line bg-glass px-3.5 py-1.5 font-mono text-xs leading-tight whitespace-nowrap">
              {t}
            </span>
          ))}
          {project.stack.map((t) => (
            <span key={t} className="rounded-full border border-ink bg-ink px-3.5 py-1.5 font-mono text-xs leading-tight whitespace-nowrap text-paper">
              {t}
            </span>
          ))}
        </div>
      )}
      <p className="m-0 text-[15px] leading-[1.65] text-pretty text-muted">{project.summary}</p>
      <div className="pt-1">
        <PairButton href={`/projects/${project.slug}`} label="View case" arrow="up-right" />
      </div>
    </div>
    <div className="grid flex-[2_1_420px] grid-cols-[2fr_1fr] grid-rows-[auto_auto] gap-3.5">
      <div className="row-span-2 aspect-[4/3] overflow-hidden rounded-3xl">
        <Placeholder label="Main screen" />
      </div>
      <div className="aspect-square overflow-hidden rounded-[20px]">
        <Placeholder label="Detail" />
      </div>
      <div className="aspect-square overflow-hidden rounded-[20px]">
        <Placeholder label="Detail" />
      </div>
    </div>
  </article>
);

const ProjectList = ({ q, skill }: Filter): ReactNode => {
  const filtered = projects.filter((p) => matches(p, { q, skill }));
  const hasFilter = Boolean(q || skill);
  return (
    <>
      <div className="-mt-[clamp(40px,6vw,90px)] flex flex-col gap-[18px]">
        <form action="/projects" className="flex max-w-[560px] items-center gap-3 rounded-full border border-line bg-white px-[22px] focus-within:border-ink">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6E6A63" strokeWidth="1.6" strokeLinecap="round" aria-hidden className="block shrink-0">
            <circle cx="7" cy="7" r="5" />
            <path d="M11 11l3.5 3.5" />
          </svg>
          <input
            name="q"
            defaultValue={q}
            placeholder="Search projects, skills, tools"
            aria-label="Search projects"
            className="min-w-0 flex-1 border-0 bg-transparent py-3.5 text-[15px] outline-none"
          />
          {skill && <input type="hidden" name="skill" value={skill} />}
          {hasFilter && (
            <Link href="/projects" className="font-mono text-xs text-muted">
              Clear
            </Link>
          )}
        </form>
        <div className="flex flex-wrap gap-2">
          {["", ...allStack].map((v) => (
            <Link
              key={v || "all"}
              href={chipHref(q, v)}
              className={`shrink-0 rounded-full border px-4 py-2 font-mono text-xs leading-tight whitespace-nowrap hover:border-ink ${
                skill === v ? "border-accent bg-accent" : "border-line bg-glass"
              }`}
            >
              {v || "All"}
            </Link>
          ))}
        </div>
        <span className="font-mono text-xs text-muted">
          {filtered.length} of {projects.length} projects
        </span>
      </div>
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3.5 rounded-3xl border border-dashed border-line bg-glass p-12 text-center">
          <span className="font-mono text-xl">No projects match</span>
          <Link
            href="/projects"
            className="rounded-full border border-line bg-glass px-[18px] py-2.5 font-mono text-[13px] hover:border-accent hover:bg-accent"
          >
            Show all
          </Link>
        </div>
      ) : (
        filtered.map((p, i) => <ProjectRow key={p.slug} project={p} index={i} />)
      )}
    </>
  );
};

const FilteredList = async ({
  searchParams,
}: Pick<PageProps<"/projects">, "searchParams">): Promise<ReactNode> => {
  const { q, skill } = await searchParams;
  return (
    <ProjectList
      q={typeof q === "string" ? q : ""}
      skill={typeof skill === "string" ? skill : ""}
    />
  );
};

const Projects = ({ searchParams }: PageProps<"/projects">): ReactNode => (
  <SiteFrame active="projects">
    <main className={`relative flex flex-col gap-[clamp(80px,10vw,140px)] pt-6 pb-20 ${pagePadding}`}>
      <h1 className="m-0 font-mono text-[clamp(44px,8vw,120px)] font-medium leading-none tracking-[-.02em]">
        Projects
      </h1>
      <Suspense fallback={<ProjectList q="" skill="" />}>
        <FilteredList searchParams={searchParams} />
      </Suspense>
    </main>
  </SiteFrame>
);

export default Projects;
