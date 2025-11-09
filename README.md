# AI Trial Hub — Marketplace Landing Page

AI Trial Hub is a marketing site for showcasing AI applications that offer short trial experiences before full integration. The project is built with Next.js 15 (App Router) and Tailwind CSS v4, and it ships with responsive sections for the hero, feature explanations, curated app listings, testimonials.

## Features

- **Hero & Value Proposition** – Highlights the AI marketplace mission with clear CTAs and social proof imagery.
- **How It Works** – Three-step explanation cards describing how visitors can validate tools quickly.
- **Curated AI Apps Grid** – Searchable, filterable catalogue with pagination for exploring weekly featured trials.
- **Founder Story & About Page** – Dedicated page that explains the personal mission behind the marketplace.
- **Signup Funnel** – Conversion-focused signup page with benefit highlights and FAQ accordion.
- **Fully Responsive** – Built with Tailwind utility classes to adapt to mobile, tablet, and desktop breakpoints.

## Project Structure

```text
src/
└── app/
    ├── layout.js        # Root layout with shared metadata, fonts, and global styles
    ├── globals.css      # Tailwind CSS layer configuration
    ├── page.js          # Landing page (hero, features, apps grid, testimonials, CTA)
    ├── about/page.js    # Founder background, mission, and differentiation content
    ├── apps/page.js     # App marketplace with search, filters, and pagination
    └── signup/page.js   # Signup experience with plans, benefits, and FAQ
```

Assets referenced in the UI (for example `public/me.jpeg`, `public/user1.jpg`, and placeholders under `public/`) live in the `public/` directory. Update these images to match your branding.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

> The project targets Node.js 18.18+ or 20+, which aligns with the requirements for Next.js 15 and Tailwind CSS v4.

### 2. Run the development server

```bash
npm run dev
```

This starts Next.js with Turbopack on [http://localhost:3000](http://localhost:3000). Hot Module Replacement (HMR) is enabled by default, so edits to components update automatically.

### 3. Create a production build

```bash
npm run build
```

Next.js compiles the application with Turbopack. Use `npm run start` to preview the optimized build locally after a successful build.

### 4. Lint the project

```bash
npm run lint
```

ESLint runs with the Next.js shareable config. Tailwind CSS v4 is configured through `tailwind.config.mjs` and `postcss.config.mjs` using the new PostCSS plugin entry point.

## Customization Tips

- **Content** – Update text inside `src/app/page.js`, `src/app/about/page.js`, `src/app/apps/page.js`, and `src/app/signup/page.js` to reflect your own offerings.
- **Styling** – Tailwind utility classes power the layout. For global overrides, edit `src/app/globals.css`.
- **Icons** – Icons are sourced from [`lucide-react`](https://lucide.dev/). Import new glyphs at the top of each page if you need additional visuals.
- **Analytics & Forms** – Integrate analytics, newsletter forms, or backend APIs inside dedicated client components or via API routes under `src/app/api/`.

## Deployment

Deploy the site to any provider that supports Next.js 15. Vercel is the default choice:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel and select the `main` branch.
3. Set the build command to `npm run build` and the output directory to `.next` (default).
4. Configure any environment variables through the Vercel dashboard if you add integrations.

Alternatively, use platforms such as Netlify, AWS Amplify, or Azure Static Web Apps that support Next.js with Edge/Node runtimes.

## License

This project does not currently declare a license. Add one (for example, MIT, Apache 2.0, or a proprietary license) if you plan to distribute or open-source the code.
