# Julio Mayaudon - Portfolio

Personal portfolio built with [Astro](https://astro.build). Multi-page, bilingual (English default with a Spanish toggle), and shipped with two visual themes you can switch live: **Editorial** and **Minimal**. Ready to deploy on Railway.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321 (or just double-click `start-portafolio.bat` on Windows).

Build and preview the production output:

```bash
npm run build
npm start
```

## Pages

```
/                 Home (hero, stats, featured projects, contact)
/what-i-do        The three verticals: ABM & Growth, Software, Technical PM
/projects         All projects
/projects/<slug>  Project detail (problem, solution, architecture, results, gallery)
/experience       Career timeline
/stack            Tools, certifications, education
```

## Two themes + two languages

The site ships with two looks. A toggle in the top bar switches between them live, and
the choice is remembered (localStorage). This lets you and colleagues compare both on the
same deployed site.

- **Editorial**: serif headings, hairlines, restrained. Elegant / studio feel.
- **Minimal**: monospace labels, squared grid, monochrome accents. Technical feel.

Language works the same way (EN / ES toggle). Both are pure CSS driven by the
`data-style` and `data-lang` attributes on `<html>`; the logic lives in `Base.astro` and
`global.css`. When you decide on one theme to ship, you can remove the other from the
toggle in `src/components/Nav.astro`.

## Adding / editing a project

Everything lives in `src/data/projects.ts`. Add an object to the `projects` array and a
detail page is generated automatically at `/projects/<slug>`. Each project has bilingual
`en` / `es` fields for every text.

### Adding architecture diagrams, photos, and a cover

Per project, create a folder under `public/`:

```
public/projects/<slug>/
  cover.jpg          main image
  diagram.svg        <- export your Excalidraw board as SVG here
  gallery/shot1.png  screenshots
  gallery/shot2.png
```

Then point the project at them in `src/data/projects.ts`:

```ts
cover:   '/projects/meduco/cover.jpg',
diagram: '/projects/meduco/diagram.svg',
gallery: ['/projects/meduco/gallery/shot1.png', '/projects/meduco/gallery/shot2.png'],
```

Until you set these, the page shows tasteful placeholders, so nothing ever looks broken.
For the Excalidraw diagrams: draw the board on excalidraw.com, then File -> Export image ->
SVG, and drop the file at the path above.

## Deploy on Railway

Uses the Astro Node adapter (standalone), so the build produces a self-contained server at
`dist/server/entry.mjs` that reads `HOST` and `PORT` from the environment. Railway sets
`PORT` automatically.

**Nixpacks (no Docker):** push to GitHub, then in Railway do New Project -> Deploy from
GitHub repo. It runs `npm install` and `npm run build`; set the start command to `npm start`
if not auto-detected. Add your domain under Settings -> Networking.

**Docker:** a `Dockerfile` is included; set the Railway builder to Dockerfile.

No environment variables are required to run.
