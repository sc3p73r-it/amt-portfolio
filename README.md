# Aung Myo Thu — Network Security Engineer Portfolio

A frontend-only portfolio site built with **Next.js** and **Ant Design**, showcasing expertise in **Cisco**, **Palo Alto Networks**, and **Check Point** security platforms.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Ant Design 6](https://ant.design/) with dark theme
- TypeScript
- Tailwind CSS (utility layer)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize Content

Edit `src/data/portfolio.ts` to update:

- Contact email, phone, LinkedIn, GitHub
- Work experience and certifications
- Vendor skills and bio text

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra configuration required.
4. Click **Deploy**.

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js pages & layout
├── components/       # UI sections & layout
├── data/             # Portfolio content (edit here)
└── theme/            # Ant Design theme tokens
```
