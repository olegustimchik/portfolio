import type { ReactNode } from "react";

// Small stroked icons used by buttons and pills.
// Usage: <ArrowRight size={16} />

type IconProps = { size?: number };

const Stroke = ({
  size = 16,
  viewBox = "0 0 16 16",
  d,
}: IconProps & { viewBox?: string; d: string }): ReactNode => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="block shrink-0"
  >
    <path d={d} />
  </svg>
);

export const ArrowRight = ({ size }: IconProps): ReactNode => (
  <Stroke size={size} d="M3 8h10M9 4l4 4-4 4" />
);

export const ArrowLeft = ({ size }: IconProps): ReactNode => (
  <Stroke size={size} d="M13 8H3M7 4L3 8l4 4" />
);

export const ArrowUpRight = ({ size }: IconProps): ReactNode => (
  <Stroke size={size} d="M4.5 11.5l7-7M5.5 4.5h6v6" />
);

export const PathIcon = ({ size, d }: IconProps & { d: string }): ReactNode => (
  <Stroke size={size} viewBox="0 0 24 24" d={d} />
);
