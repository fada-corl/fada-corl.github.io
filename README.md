# FADA — Project Page

Project website for **FADA: Few-Shot Domain Adaptation via Dynamics Alignment
for Humanoid Control**. Anonymized for double-blind review.

Built with **Vite + React + TypeScript**. Deploys to GitHub Pages at the site root.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173/
```

## Build & preview

```bash
npm run build      # type-checks, then outputs static site to dist/
npm run preview    # serves the production build locally
npm run typecheck  # types only
```

## Deploy (GitHub Pages)

A workflow at `.github/workflows/deploy.yml` builds and deploys on every push to
`main`. In the repo: **Settings → Pages → Build and deployment → Source: GitHub
Actions**. Nothing else is required — `vite.config.ts` already sets `base: '/'`.

> This repo is a user/organization Pages site served from the domain root. If it
> is ever moved to a project path, update `base` in `vite.config.ts` to match
> (it must equal the URL path the site is served from, with leading + trailing slash).

## Structure

```
public/            videos (mp4), figures (png)
src/
  data/            all copy + result numbers + video manifests (edit content here)
  lib/             hooks: synced video playback, in-view, reduced-motion, asset URLs
  components/      hero, layout, media (video trio), figure, charts, sections, common, footer
  phase2/          inert placeholder for the future MuJoCo-WASM viewer (see src/phase2/README.md)
```

## Editing content

Everything content-facing lives under `src/data/` — no component edits needed:

- `content.ts` — title, abstract, method stages, BibTeX
- `authors.ts` — the Paper/arXiv/Code/Video link buttons
- `videos.ts` — task + condition manifest (and the on-disk file naming)
- `results.ts` — the numbers behind every chart

### TODOs before public (de-anonymized) launch

- Real arXiv ID + BibTeX with author list (`content.ts`, `BIBTEX`)
- Enable the Paper/arXiv/Code/Video buttons (`authors.ts`, set `disabled: false` + real `href`)
- Restore author names, affiliations, and links once review is complete

## Phase 2

The interactive in-browser MuJoCo policy viewer is stubbed in `src/phase2/`. See
`src/phase2/README.md` for the packaging, headers, and integration notes.
