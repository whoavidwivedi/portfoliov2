# Avi Dwivedi — Portfolio Website

A modern portfolio website built with **Next.js App Router**, **React 19**, **Tailwind CSS v4**, and **Bun**.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Runtime / Package Manager:** Bun
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + custom global styles
- **Animations / Icons:** Framer Motion, Lucide React

## Prerequisites

- [Bun](https://bun.sh) `1.2+`
- Node.js `22` (see `.nvmrc`)

## Local Development

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `bun run dev` — start local development server
- `bun run build` — create production build
- `bun run start` — start production server
- `bun run lint` — run lint checks

## Project Structure

```text
app/
  layout.tsx          # Root layout and global metadata
  page.tsx            # Home page entry
  warning/page.tsx    # Warning route
  globals.css         # Global styles and Tailwind theme tokens

components/           # Reusable UI sections and components
```

## Deployment (Vercel)

This repository is configured for Vercel via `vercel.json`.

Recommended project settings:

- **Framework Preset:** `Next.js`
- **Node.js Version:** `22.x`
- **Install Command:** `bun install`
- **Build Command:** `bun run build`
- **Output Directory:** default (leave empty)

## Notes

- This is a Bun-first setup (`packageManager` is pinned in `package.json`).
- Keep dependencies updated regularly for security and compatibility.
