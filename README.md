# Oleh Ustymchyk · Portfolio

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS. Every page is server-rendered; there are no client components.

## Getting started

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm lint
pnpm build
```

## Editing content

All text lives in `lib/resume.ts`: profile, social links, experience, skills, education and projects. The four projects are placeholders; replace their fields (and add or remove entries) to update the Home slider, the Projects list and each case study page at `/projects/[slug]`.

## Pages

- `/` hero, project slider (`?slide=N`), about summary, experience table
- `/about` introduction, full experience, skills, education
- `/projects` project list with search and stack filter (`?q=`, `?skill=`)
- `/projects/[slug]` case study
- `/contact` contact details

## Design tokens

Defined in `app/globals.css`: canvas `#E4E0D8`, paper `#F4F2EE`, ink `#141414`, accent `#FF4D1F`, muted `#6E6A63`, line `#8A857C`. Fonts are Fira Code (headings, labels) and Open Sans (body), loaded with `next/font`.
