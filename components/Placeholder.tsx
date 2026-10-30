import type { ReactNode } from "react";

// Neutral block standing in for an image until a real one is added.
// Usage: <Placeholder label="Project cover" />
type PlaceholderProps = { label: string; dark?: boolean };

export const Placeholder = ({ label, dark = false }: PlaceholderProps): ReactNode => (
  <div
    className={`flex h-full w-full items-center justify-center font-mono text-xs ${
      dark ? "bg-[#3a3833] text-[#a39e94]" : "bg-canvas text-muted"
    }`}
  >
    {label}
  </div>
);
