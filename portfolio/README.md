# Arif Rachman Ramli — Portfolio

A single-page portfolio built with **React 19, Vite, Tailwind CSS v4, Lucide React and Motion**.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

Requires Node.js 20.19+ or 22.12+.

## Update content

All text, experience, projects, skills and services live in **`src/data/portfolioData.js`**.
Anything left empty (`""` or `[]`) is hidden automatically.

Fill in these before going live (search the file for `TODO`):

| What | Field |
|---|---|
| Company names | `experience[].company` |
| Graduation years | `education[].period` |
| GitHub / LinkedIn | `profile.socials[].url` |
| Project screenshots | `projects[].image` — put files in `public/projects/` |
| Demo / source links | `projects[].links` |
| CV download | add `public/cv-arif-rachman-ramli.pdf` (or change `profile.cvUrl`) |
| Show phone number | `profile.showPhone: true` |

## Photos

- `public/arif.webp`: square face crop (168×168) used as the hero avatar → `profile.photo`
- `public/arif-portrait.webp`: 4:5 portrait (800×1000) used in About → `profile.portrait`

To swap them, replace the files with new WebP images of the same shape. Clearing
`profile.portrait` hides the About photo and the bio takes the full width.

## Contact form

- **Default:** submitting opens the visitor's email app with the message pre-filled.
- **Direct delivery:** create a free form at [formspree.io](https://formspree.io), then set
  `contactConfig.formspreeId` to its ID. Messages arrive in your inbox.

## Theme

- Colors are CSS variables at the top of `src/index.css` (`:root` = light, `.dark` = dark).
  Change `--accent` to recolor the whole site.
- First visit follows the system setting; the toggle choice is saved in `localStorage`.
- An inline script in `index.html` applies the theme before React loads (no white flash).

## Project structure

```
src/
├── components/
│   ├── ui/        Button, Badge, Reveal, SectionHeading, ThemeToggle, BrandIcons
│   └── common/    Navbar, Footer, ScrollToTop, Terminal
├── sections/      Hero, About, Skills, Experience, Projects, Services, Contact
├── layout/        MainLayout
├── data/          portfolioData.js
├── hooks/         useTheme, useActiveSection, useScrolled
├── context/       ThemeContext
└── lib/           motion variants, icon map, helpers
```

To use a new Lucide icon in the data file, import it in `src/lib/icons.js` and add it to `iconMap`.

## Deploy

**Vercel:** import the repo, framework preset "Vite", done.
**Netlify:** build command `npm run build`, publish directory `dist`.

After deploying, add `public/og-image.png` (1200×630) and uncomment the `og:image` tag in
`index.html` with your full domain, so links shared on WhatsApp/LinkedIn show a preview.
