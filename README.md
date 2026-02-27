<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Avi Dwivedi Portfolio (Next.js + Bun)

This project runs on Next.js App Router with Tailwind CSS v4 and Bun as the package manager.

## Requirements

- [Bun](https://bun.sh) 1.2+
- Node.js 22 (see `.nvmrc`)
- A Gemini API key (optional for AI chat feature)

## Getting Started

1. Install dependencies:
   ```bash
   bun install
   ```
2. Create `.env.local` and set:
   ```bash
   NEXT_PUBLIC_GEMINI_API_KEY=your_key_here
   ```
3. Start development server:
   ```bash
   bun run dev
   ```
4. Open http://localhost:3000

## Production

```bash
bun run build
bun run start
```

## Vercel Deployment

Recommended Vercel project settings:

- Framework Preset: `Next.js`
- Node.js Version: `22.x`
- Install Command: `bun install`
- Build Command: `bun run build`
- Output Directory: leave empty/default for Next.js
- Environment Variables:
  - `NEXT_PUBLIC_GEMINI_API_KEY` (Production/Preview/Development as needed)

These commands are also pinned in `vercel.json`.
