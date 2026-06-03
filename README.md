# COGXP

COGXP is a standalone React/Vite workshop card tool using the COGAI® Human Experience Cards deck.

## What it does

- Selects three unique random cards from the full 50-card deck.
- Keeps the workshop free and login-free.
- Stores the current workshop in `localStorage`.
- Provides Risk, Discussion, Requirements and Actions tabs.
- Copies a Markdown workshop summary.
- Exports a PDF workshop summary using `html2pdf.js`.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Structure

```text
src/
  components/
    Tabs.jsx
    card/
      HECCard.jsx
      HECCardBack.jsx
  data/cards/index.json
  pages/WorkshopPage.jsx
  styles/main.css
```

## Notes

This is intentionally standalone and does not require COGAI login, backend APIs, Stripe, roles, or accounts. It is designed as a free COGAI funnel and workshop experience.
# cogxp
