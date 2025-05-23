# Breaking Barriers Nuxt Site

This repository contains the source for a multilingual static site built with **Nuxt 3** and **Nuxt Content**. The site hosts articles and resources related to advancing gender equality in STEM across English, Spanish and French.

## Features

- **Nuxt 3** with server-side rendering and static generation
- **Internationalization** provided by `nuxtjs/i18n`
- Content written in Markdown and managed through **Nuxt Content**
- Simple Pinia store and custom composables

## Requirements

- Node.js 18 or newer
- npm

## Getting started

Install the dependencies:

```bash
npm install
```

Launch a development server at `http://localhost:3000`:

```bash
npm run dev
```

Run the linter to check code style:

```bash
npm run lint
```

## Building for production

Generate a fully static version of the site:

```bash
npm run generate
```

The generated files will be available in the `dist` directory. Upload its contents to your static hosting provider (e.g. Netlify, GitHub Pages) to deploy.

See the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more details.

## Project structure

- `pages/` – Vue pages rendered by Nuxt
- `content/` – Markdown articles in multiple languages
- `locales/` – Translation files for UI strings
- `components/` – Reusable Vue components

Additional notes for contributors can be found in [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

This project is released under the [Unlicense](LICENSE).

