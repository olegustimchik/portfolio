import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft, ArrowRight } from "@/components/Icons";
import { Placeholder } from "@/components/Placeholder";
import { SiteFrame, pagePadding } from "@/components/SiteFrame";
import { projects } from "@/lib/resume";

// Case study page for one project, prerendered for every slug in lib/resume.ts.

export const generateStaticParams = (): { slug: string }[] =>
  projects.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project" };
};

const CaseStudy = async ({ params }: PageProps<"/projects/[slug]">): Promise<ReactNode> => {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const cs = projects[index];
  const next = projects[(index + 1) % projects.length];
  const facts = [
    { label: "Role", value: cs.role },
    { label: "Timeline", value: cs.timeline },
    { label: "Team", value: cs.team },
    { label: "Year", value: cs.year },
  ];

  return (
    <SiteFrame active="projects">
      <main className={`relative flex flex-col gap-[clamp(56px,7vw,96px)] pt-6 pb-20 ${pagePadding}`}>
        <div className="flex flex-col gap-6">
          <Link href="/projects" className="inline-flex items-center gap-2 self-start font-mono text-[13px] text-muted hover:text-accent-deep">
            <ArrowLeft size={14} />
            All projects
          </Link>
          <span className="inline-flex items-center gap-2.5 font-mono text-[13px] font-medium tracking-[.08em] uppercase">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            Case study {String(index + 1).padStart(2, "0")}
          </span>
          <h1 className="m-0 font-mono text-[clamp(40px,7vw,104px)] font-medium leading-none tracking-[-.02em]">
            {cs.title}
          </h1>
          <p className="m-0 max-w-[640px] text-[clamp(17px,1.6vw,20px)] leading-relaxed text-pretty text-muted">
            {cs.summary}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] border-y border-line">
          {facts.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1.5 py-[22px]">
              <span className="font-mono text-xs text-muted">{label}</span>
              <span className="text-[15px] font-semibold">{value}</span>
            </div>
          ))}
        </div>
        <div className="aspect-[16/8] overflow-hidden rounded-[28px]">
          <Placeholder label="Case study hero" />
        </div>
        <div className="flex flex-col border-t border-line">
          {cs.steps.map(({ label, text }) => (
            <div key={label} className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-12 gap-y-4 border-b border-line py-9">
              <span className="font-mono text-[clamp(22px,2.2vw,30px)] font-medium">{label}</span>
              <p className="col-span-2 m-0 text-base leading-[1.7] text-pretty text-muted">{text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-4">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <Placeholder label="Process" />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <Placeholder label="Result" />
          </div>
        </div>
        <Link
          href={`/projects/${next.slug}`}
          className="flex flex-wrap items-center justify-between gap-6 rounded-[28px] border border-line bg-glass p-8 transition-colors hover:border-accent hover:bg-accent"
        >
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs opacity-60">Next project</span>
            <span className="font-mono text-[clamp(24px,3vw,40px)] font-medium">{next.title}</span>
          </div>
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-current">
            <ArrowRight size={20} />
          </span>
        </Link>
      </main>
    </SiteFrame>
  );
};

export default CaseStudy;
