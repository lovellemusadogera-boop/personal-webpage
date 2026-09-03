# Lovelle K Musadogera Portfolio

Premium single-page Data Science portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy

- **Vercel:** import repository, framework preset = Vite.
- **Netlify:** build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** build with `npm run build` and deploy the `dist` folder using your preferred Pages action/workflow.

## Files created

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Skills.tsx`
- `src/components/Education.tsx`
- `src/components/Projects.tsx`
- `src/components/Toolkit.tsx`
- `src/components/WhatICanOffer.tsx`
- `src/components/CareerGoals.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/SectionHeading.tsx`
- `src/data/skills.ts`
- `src/data/projects.ts`
- `src/hooks/useTheme.ts`
- `src/config/contact.ts`

## Update personal information

Edit contact and bio text in:

- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `index.html` (SEO metadata)

## Add or update projects

Edit `src/data/projects.ts`:

- update project descriptions and results
- replace placeholder `githubUrl` and `demoUrl`
- add/remove project objects as needed

## Add a profile photograph

1. Add image to `src/assets/` (for example `profile.jpg`).
2. Replace the placeholder block in `src/components/About.tsx` with an `<img>` element.
3. Add descriptive `alt` text.

## Connect contact form to email service

1. Configure provider values in `src/config/contact.ts`.
2. Update `onSubmit` in `src/components/Contact.tsx` to POST to your backend or EmailJS/Formspree endpoint.
3. Keep client-side validation and add success/error handling from service response.

## Notes

- Dark/light mode selection is persisted in `localStorage`.
- Project links are placeholders until real links are available.
- Contact form currently validates input only and does not send messages.
