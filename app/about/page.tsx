import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Placeholder } from "@/components/Placeholder";
import { SiteFrame, pagePadding } from "@/components/SiteFrame";
import { education, experience, formatLength, formatPeriod, profile, skills } from "@/lib/resume";

// About page: introduction, full experience with highlights, skills and education.

export const metadata: Metadata = { title: "About" };

const sectionHeading = "m-0 font-mono font-medium leading-none text-[40px] md:text-[clamp(40px,6vw,88px)]";

const About = (): ReactNode => (
  <SiteFrame active="about">
    <main className={`relative flex flex-col gap-12 pt-7 pb-14 md:gap-[clamp(72px,9vw,120px)] md:pt-6 md:pb-20 ${pagePadding}`}>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-end gap-12">
        <div className="flex flex-col gap-[18px] md:gap-7">
          <h1 className={sectionHeading}>About me</h1>
          <p className="m-0 font-mono text-[22px] font-medium leading-tight md:text-[clamp(22px,2.2vw,30px)]">
            Hello, I&apos;m {profile.firstName}
          </p>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl grayscale md:hidden">
            <Placeholder label="Portrait" />
          </div>
          <p className="m-0 max-w-[520px] text-[15px] leading-[1.7] text-pretty text-muted md:text-[17px]">
            I&apos;m a software developer based in {profile.location}. I build{" "}
            <em className="font-semibold text-ink">scalable Node.js services and APIs</em>, with
            experience in PHP (Laravel/Symfony), and specialise in{" "}
            <em className="font-semibold text-ink">microservices and high-throughput backends</em>.
          </p>
          <p className="m-0 max-w-[520px] text-[15px] leading-[1.7] text-pretty text-muted md:text-[17px]">
            Containerisation is part of every role I&apos;ve had: Dockerising services and
            databases, automating image builds and deploying each service in its own container.
            Cloud work is mostly on <em className="font-semibold text-ink">AWS</em>, with exposure
            to Azure and GCP. I write{" "}
            <em className="font-semibold text-ink">test-covered, well-documented</em> code.
          </p>
        </div>
        <div className="hidden aspect-[4/5] w-full max-w-[460px] justify-self-end overflow-hidden rounded-[28px] grayscale md:block">
          <Placeholder label="Portrait" />
        </div>
      </section>

      <section className="flex flex-col gap-[18px] md:gap-8">
        <h2 className={`${sectionHeading} md:self-end`}>Experience</h2>
        <div className="flex flex-col border-t border-line">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.start.year}`}
              className="flex flex-col gap-1.5 border-b border-line py-5 md:grid md:grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] md:gap-x-8 md:gap-y-3 md:py-7"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-muted md:text-sm md:text-ink">
                  {formatPeriod(job)}
                  <span className="md:hidden"> · {formatLength(job)}</span>
                </span>
                <span className="hidden text-xs text-muted md:block">{formatLength(job)}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[19px] font-medium md:text-[clamp(18px,1.8vw,24px)]">{job.role}</span>
                <span className="text-sm font-semibold md:font-normal md:text-muted">
                  {job.company} · {job.place}
                </span>
              </div>
              <ul className="m-0 mt-1 flex list-none flex-col gap-2 p-0 text-sm md:mt-0 md:text-[15px] leading-[1.65] text-pretty text-muted">
                {job.highlights.map((item) => (
                  <li key={item} className="relative pl-4">
                    <span aria-hidden className="absolute top-[.7em] left-0 h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3.5 md:gap-8">
        <h2 className={sectionHeading}>Skills</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
          {skills.map(({ label, items }, i) => (
            <div
              key={label}
              className={`flex flex-col gap-2.5 rounded-[22px] border border-line px-[22px] py-5 ${
                i === 0 ? "bg-accent" : "bg-glass"
              }`}
            >
              <span className="text-[15px] font-semibold">{label}</span>
              <span className="font-mono text-xs leading-[1.7]">{items.join(" / ")}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3.5 md:gap-8">
        <h2 className={`${sectionHeading} md:self-end`}>Education</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4">
          {education.map(({ period, degree, school }, i) => (
            <div
              key={degree}
              className={`flex flex-col gap-6 rounded-[22px] border border-line p-6 md:gap-9 md:rounded-3xl md:p-8 ${
                i === 0 ? "bg-accent" : "bg-glass"
              }`}
            >
              <span className="font-mono text-xs">{period}</span>
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[21px] font-medium leading-tight md:text-[clamp(20px,2vw,28px)]">
                  {degree}
                </span>
                <span className="text-sm">{school}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  </SiteFrame>
);

export default About;
