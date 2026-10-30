import type { ReactNode } from "react";

// Titled page section with an anchor id, used for every block of the portfolio.
// Usage: <Section id="skills" index="03" title="Skills">...</Section>
type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export const Section = ({ id, index, title, children }: SectionProps): ReactNode => (
  <section id={id} className="scroll-mt-20 border-t border-line py-16 sm:py-20">
    <div className="grid gap-8 md:grid-cols-[200px_1fr]">
      <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
        <span className="text-accent">{index}</span> / {title}
      </h2>
      <div>{children}</div>
    </div>
  </section>
);
