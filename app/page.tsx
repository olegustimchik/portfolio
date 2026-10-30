import type { ReactNode } from "react";

import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import { contact, education, experience, profile, projects, skills } from "@/lib/resume";

// Portfolio home page. Fully server-rendered; all content comes from lib/resume.ts.
const Home = (): ReactNode => (
  <>
    <SiteHeader name={profile.name} />
    <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
      <section className="py-20 sm:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">{profile.title}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Backend-focused developer building scalable Node.js services, microservices and APIs.
          Based in {contact.location}.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
          <a
            href={contact.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <Section id="about" index="01" title="About">
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/85">{profile.summary}</p>
      </Section>

      <Section id="experience" index="02" title="Experience">
        <div className="divide-y divide-line">
          {experience.map((job) => (
            <ExperienceItem key={`${job.company}-${job.period}`} job={job} />
          ))}
        </div>
      </Section>

      <Section id="projects" index="03" title="Projects">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" index="04" title="Skills">
        <dl className="grid gap-6 sm:grid-cols-2">
          {skills.map(({ label, items }) => (
            <div key={label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{label}</dt>
              <dd className="mt-2 leading-relaxed">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="education" index="05" title="Education">
        {education.map(({ degree, school, year }) => (
          <div key={degree}>
            <h3 className="text-lg font-semibold">{degree}</h3>
            <p className="mt-1 text-muted">
              {school} · {year}
            </p>
          </div>
        ))}
      </Section>

      <Section id="contact" index="06" title="Contact">
        <dl className="grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">Email</dt>
            <dd className="mt-2">
              <a href={`mailto:${contact.email}`} className="hover:text-accent">
                {contact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">Phone</dt>
            <dd className="mt-2">
              <a href={`tel:${contact.phone}`} className="hover:text-accent">
                {contact.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">LinkedIn</dt>
            <dd className="mt-2">
              <a
                href={contact.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {contact.linkedin.label}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">Location</dt>
            <dd className="mt-2">{contact.location}</dd>
          </div>
        </dl>
      </Section>
    </main>
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-4 py-8 font-mono text-xs text-muted sm:px-6">
        © {profile.name}
      </div>
    </footer>
  </>
);

export default Home;
