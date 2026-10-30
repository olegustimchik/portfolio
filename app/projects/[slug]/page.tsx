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
      <main className={`relative flex flex-col gap-6 pt-5 pb-10 md:gap-[clamp(56px,7vw,96px)] md:pt-6 md:pb-20 ${pagePadding}`}>
        <div className="flex flex-col gap-4 md:gap-6">
          <Link href="/projects" className="inline-flex items-center gap-2 self-start font-mono text-[13px] text-muted hover:text-accent-deep">
            <ArrowLeft size={14} />
            All projects
          </Link>
          <span className="hidden items-center gap-2.5 font-mono md:inline-flex text-[13px] font-medium tracking-[.08em] uppercase">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            Case study {String(index + 1).padStart(2, "0")}
          </span>
          <h1 className="m-0 font-mono text-[40px] font-medium leading-[1.05] tracking-[-.02em] md:text-[clamp(40px,7vw,104px)] md:leading-none">
            {cs.title}
          </h1>
          <p className="m-0 max-w-[640px] text-[15px] md:text-[clamp(17px,1.6vw,20px)] leading-relaxed text-pretty text-muted">
            {cs.summary}
          </p>
        </div>
        <div className="grid grid-cols-2 border-y border-line md:grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))]">
          {facts.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1 py-4 md:gap-1.5 md:py-[22px]">
              <span className="font-mono text-[11px] text-muted md:text-xs">{label}</span>
              <span className="text-sm font-semibold md:text-[15px]">{value}</span>
            </div>
          ))}
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-[22px] md:aspect-[16/8] md:rounded-[28px]">
          <Placeholder label="Case study hero" />
        </div>
        <div className="flex flex-col border-t border-line">
          {cs.steps.map(({ label, text }) => (
            <div key={label} className="flex flex-col gap-2.5 border-b border-line py-6 md:grid md:grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] md:gap-x-12 md:gap-y-4 md:py-9">
              <span className="font-mono text-[22px] font-medium md:text-[clamp(22px,2.2vw,30px)]">{label}</span>
              <p className="m-0 text-[15px] md:col-span-2 md:text-base leading-[1.7] text-pretty text-muted">{text}</p>
            </div>
          ))}
        </div>
        <div className="hidden grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-4 md:grid">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <Placeholder label="Process" />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <Placeholder label="Result" />
          </div>
        </div>
        <Link
          href={`/projects/${next.slug}`}
          className="mt-2 flex items-center justify-between gap-4 rounded-3xl border border-line bg-glass p-[22px] md:mt-0 md:flex-wrap md:gap-6 md:rounded-[28px] md:p-8 transition-colors hover:border-accent hover:bg-accent"
        >
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] opacity-60 md:text-xs">Next project</span>
            <span className="font-mono text-[22px] font-medium md:text-[clamp(24px,3vw,40px)]">{next.title}</span>
          </div>
          <span className="grid h-12 w-12 shrink-0 md:h-14 md:w-14 place-items-center rounded-full border border-current">
            <ArrowRight size={20} />
          </span>
        </Link>
      </main>
    </SiteFrame>
  );
};

export default CaseStudy;
