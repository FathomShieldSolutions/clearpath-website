# Veteran ClearPath website

A standalone static marketing site using plain HTML, CSS, and JavaScript. No packages, backend, credentials, or build step are required. The ClearPath application remains separate at https://app.veteranclearpath.com.

## Preview locally

Open `index.html`, or run `python -m http.server 8000` from this folder and visit http://localhost:8000.

## Deploy on Vercel

Import this repository, choose **Other** as the framework preset, leave the build command empty, and use the repository root as the output directory. No environment variables are required. Deploy a preview and review it before attaching your production domain. `vercel.json` configures security headers and clean URLs. Vercel deployment was not performed during site creation.

## Editing

- `index.html`: content, navigation, FAQ, and app/contact links.
- `styles.css`: responsive layout and ClearPath light/dark theme tokens.
- `site.js`: mobile navigation, accessible workflow tabs, theme control.
- `theme.js`: restores the selected theme before first paint.
- `assets/clearpath-mark.png`: existing ClearPath brand artwork.
- `404.html`: standalone not-found page.

The workflow graphic is labeled as an illustration, not a product screenshot. Contact links open an email client for general inquiries; there is no data-collection form or analytics. Do not put medical information, API keys, private product documents, or real user records in this repository.

Inspired by the structure of the Fathom Shield Solutions website, with the existing Veteran ClearPath palette and icon. Product copy intentionally avoids guaranteed outcomes, VA endorsement, and claims of certifications.
