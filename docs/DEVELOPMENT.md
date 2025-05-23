# Development notes

This document describes how the project is organised and how to contribute changes.

## Directory overview

- **assets/** – SCSS and media assets used throughout the site
- **components/** – Vue components
- **composables/** – Reusable composables
- **content/** – Article content in English (`en`), Spanish (`es`) and French (`fr`)
- **locales/** – Translation files for UI strings
- **pages/** – Route components
- **public/** – Static assets copied as-is at build time

## Adding content

New articles can be placed inside the appropriate language folder under `content/`. Each Markdown file begins with front matter describing the title, slug and metadata used by Nuxt Content.

Translations of an article should share the same filename within their language folder so the dynamic routes can resolve correctly.

## Linting

Run `npm run lint` to check for formatting and style issues. The project uses ESLint with the Nuxt preset and Prettier.

## Building

To generate the production build, run `npm run generate`. The output in `dist/` is suitable for serving via any static file host.

