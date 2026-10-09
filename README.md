# Personal Portfolio

Personal developer portfolio website.

## Current Scope

This project currently contains a landing page and a routed portfolio area with a fixed sidebar. Portfolio content pages are still placeholders and will be rebuilt step by step.

## Live Site

https://zjiexu.github.io/personal-portfolio/

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- GitHub Pages
- React Router

## Project Structure

```text
src/
  components/
    CopyrightNotice.tsx
    PortfolioSidebar.tsx
    ProfileAvatar.tsx
    SocialLinks.tsx
  layouts/
    PortfolioLayout.tsx
  pages/
    BlogPage.tsx
    LandingPage.tsx
    PortfolioHome.tsx
    ProjectsPage.tsx
    SkillsPage.tsx
  App.tsx
  App.css
  index.css
  main.tsx
  profile.ts
```

- `src/pages/` contains page-level route components.
- `src/layouts/` contains shared page layouts.
- `src/components/` contains reusable UI components.
- `src/profile.ts` stores shared personal profile and social link data.

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

```bash
npm run deploy
```
