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

Defined in `app/globals.css` (Portfolio v3, dark): paper `#121212` (page surface), field `#181818` (inputs), canvas `#1F1F1F` (image placeholders), ink `#F5F5F5` (text and highlighted fills), muted `#A6A6A6`, line `#3D3D3D`, line-soft `#2A2A2A`. There is no accent colour: highlighted cards, chips and hovers invert to a light fill with dark text. Fonts are Fira Code (headings, labels) and Open Sans (body), loaded with `next/font`.
