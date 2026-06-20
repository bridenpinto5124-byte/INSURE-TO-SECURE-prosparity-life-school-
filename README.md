# Insure To Secure by Dr. Maria Pramila

Premium multi-insurance click-through landing page built with React, Vite, Tailwind CSS, React Router, and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

If using pnpm:

```bash
pnpm install
pnpm dev
```

## GitHub Pages

This project is configured for GitHub Pages:

- Vite `base` is set to `/INSURE-TO-SECURE-prosparity-life-school-/` for the GitHub Pages repository path.
- React uses `HashRouter`, so subpages use URLs like `/#/health-insurance` and do not 404 on refresh.
- The advisor image is served from `public/images/dr-maria-pramila.jpg` through `import.meta.env.BASE_URL`.

For GitHub Pages, build with:

```bash
pnpm build
```

Then deploy the generated `dist/` folder using GitHub Pages or GitHub Actions.

## Main routes

- `/`
- `/health-insurance`
- `/nri-health-insurance`
- `/parents-insurance`
- `/senior-citizen-health-insurance`
- `/life-insurance`
- `/accidental-insurance`
- `/vehicle-insurance`
- `/retirement-plans`
- `/travel-insurance`
- `/business-insurance`
- `/keyman-insurance`
- `/employer-employee-insurance`
- `/group-health-insurance`
- `/group-term-life-insurance`
- `/group-accidental-insurance`

Legacy URLs `/term-life-insurance`, `/personal-accident-insurance`, and `/super-top-up-health-insurance` are kept working through route aliases.

## Placeholder replacements

Edit `src/data/insuranceProducts.js`:

- Calendly currently points to the on-page form CTA: `#lead-forms`
- WhatsApp is set to `918073384729`
- Advisor photo is set to `/images/dr-maria-pramila.jpg`
- `[ADD_LICENSE_OR_REGISTRATION_DETAILS]`
- `[ADD_GOOGLE_SHEETS_WEBHOOK_LATER]`
- Social links are hidden until Facebook, Instagram, and YouTube URLs are added.
- `[ADD_OPEN_GRAPH_IMAGE_PLACEHOLDER]`
- `[ADD_ORGANIZATION_SCHEMA_DETAILS]`
- `[ADD_BREADCRUMB_SCHEMA_DETAILS]`
- `[ADD_FAQ_SCHEMA_DETAILS]`

Also review footer disclosures in `src/components/Footer.jsx` and Open Graph image placeholder in `src/App.jsx`.
