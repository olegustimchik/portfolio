import type { Metadata } from "next";
import { Fira_Code, Open_Sans } from "next/font/google";

import "./globals.css";

// Root layout: loads the design's two typefaces and global styles.
// Pages wrap their content in <SiteFrame>, which draws the nav and footer.

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Oleh Ustymchyk · Software Developer",
    template: "%s · Oleh Ustymchyk",
  },
  description:
    "Portfolio of Oleh Ustymchyk, a backend-focused software developer working with Node.js, NestJS, microservices and AWS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${openSans.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
