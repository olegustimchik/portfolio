import type { ReactNode } from "react";

// Neutral block standing in for an image until a real one is added.
// `dark` is the deeper shade used behind text overlays (project slider).
// Usage: <Placeholder label="Project cover" />
type PlaceholderProps = { label: string; dark?: boolean };

export const Placeholder = ({ label, dark = false }: PlaceholderProps): ReactNode => (
  <div
    className={`flex h-full w-full items-center justify-center font-mono text-xs text-muted ${
      dark ? "bg-[#2a2a2a]" : "bg-canvas"
    }`}
  >
    {label}
  </div>
);
