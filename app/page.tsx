import { Suspense, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";

import { ExperienceAccordion } from "@/components/ExperienceAccordion";
import { ArrowUpRight } from "@/components/Icons";
import { PairButton } from "@/components/PairButton";
import { Placeholder } from "@/components/Placeholder";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { SiteFrame, pagePadding } from "@/components/SiteFrame";
import { SocialPills } from "@/components/SocialPills";
import {
  experience,
  profile,
  projects,
  skills,
  totalExperience,
} from "@/lib/resume";

// Home page: hero, project slider, short about with skills, and the experience table.
// Server-rendered; only the slider reads the URL (?slide=N), inside a Suspense boundary.

const heading = "m-0 font-mono font-medium leading-none tracking-[-.02em] text-[clamp(44px,8.4vw,124px)]";
const sectionHeading = "m-0 font-mono font-medium leading-none text-[40px] md:text-[clamp(40px,6vw,88px)]";

// Card widths stagger like the design; the first card is highlighted.
const skillWidths = ["100%", "78%", "92%", "84%"];

const intro = (
  <p className="m-0 max-w-[340px] text-[15px] leading-relaxed text-pretty text-muted">
    I build <em className="font-semibold text-ink">scalable, reliable and well-tested</em> backend
    systems that teams can <em className="font-semibold text-ink">understand and grow with</em>.
  </p>
);

const CarouselFromUrl = async ({
  searchParams,
}: Pick<PageProps<"/">, "searchParams">): Promise<ReactNode> => {
  const { slide } = await searchParams;
  const index = Number.parseInt(typeof slide === "string" ? slide : "0", 10);
  return <ProjectCarousel projects={projects} index={Number.isNaN(index) ? 0 : index} />;
};

const Home = ({ searchParams }: PageProps<"/">): ReactNode => (
  <SiteFrame active="home">
    <main
      className={`relative flex flex-col gap-12 pb-14 md:gap-[clamp(80px,10vw,140px)] md:pt-6 md:pb-20 ${pagePadding}`}
    >
      <section className="flex flex-col gap-5 pt-7 md:hidden">
        <h1 className="m-0 font-mono text-[46px] font-medium leading-none tracking-[-.02em]">
          Software
          <br />
          Developer
        </h1>
        {intro}
        <PairButton href="/projects" label="Projects" italic wide />
        <SocialPills align="start" />
      </section>

      <section className="hidden flex-col gap-8 md:flex">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className={heading}>Software</h2>
          <PairButton href="/projects" label="Projects" italic wide />
        </div>
        <div className="flex flex-wrap-reverse items-end justify-between gap-6">
          {intro}
          <h2 className={`${heading} text-right`}>Developer</h2>
        </div>
        <div className="pt-4">
          <SocialPills />
        </div>
      </section>

      <Suspense fallback={<ProjectCarousel projects={projects} index={0} />}>
        <CarouselFromUrl searchParams={searchParams} />
      </Suspense>

      <section className="flex flex-col gap-5 md:gap-14">
        <div className="flex flex-wrap items-baseline justify-between gap-5 md:gap-8">
          <h2 className={sectionHeading}>About me</h2>
          <p className="m-0 max-w-[520px] text-[17px] leading-normal md:text-[clamp(18px,1.8vw,22px)]">
            Hello! I&apos;m {profile.firstName}, a{" "}
            <em className="font-semibold">backend-focused software developer</em>. More than{" "}
            <em className="font-semibold">3 years</em> of experience.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-5 md:gap-8">
          <div className="flex flex-col gap-3.5">
            {skills.slice(0, 4).map(({ label, items }, i) => (
              <div
                key={label}
                style={{ "--card-w": skillWidths[i] } as CSSProperties}
                className={`flex flex-col gap-2 rounded-[20px] border border-line px-5 py-[18px] md:max-w-[var(--card-w)] md:gap-2.5 md:rounded-[22px] md:px-[22px] md:py-5 ${
                  i === 0 ? "bg-accent" : "bg-glass"
                }`}
              >
                <span className="text-[15px] font-semibold">{label}</span>
                <span className="font-mono text-xs leading-[1.7]">{items.join(" / ")}</span>
              </div>
            ))}
            <Link
              href="/about"
              className="mt-2 inline-flex items-center gap-1.5 self-start rounded-full border border-line bg-glass px-[18px] py-2.5 font-mono text-[13px] whitespace-nowrap transition-colors hover:border-accent hover:bg-accent"
            >
              More about me
              <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="order-first aspect-[4/5] w-full justify-self-center overflow-hidden rounded-3xl grayscale md:order-none md:w-[min(100%,380px)] md:rounded-[28px]">
            <Placeholder label="Portrait" />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col gap-5 md:gap-6">
        <h2 className={`${sectionHeading} md:text-right`}>Experience</h2>
        <ExperienceAccordion jobs={experience} />
        <div className="flex justify-between gap-0.5 text-sm md:flex-col md:items-end">
          <span className="text-muted">Total experience</span>
          <em className="font-semibold">{totalExperience(experience)}</em>
        </div>
      </section>
    </main>
  </SiteFrame>
);

export default Home;
