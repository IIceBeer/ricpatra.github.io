# Ric Patra Website

Premium portfolio website for `Ric Patra`, built with `Next.js`, `React`, and a custom orange-white visual system.

## Local development

```bash
cd "/Volumes/Extreme SSD/02_Development/03_Ric Patra web"
npm install
npm run dev
```

What happens:

- starts the Next.js dev server
- chooses a free port starting from `3000`
- opens Safari automatically

## Production build

```bash
npm run build
npm run start
```

## Contact form

The `Hire Me` form submits to a real local API route.

Saved submissions go to:

`data/submissions.json`

## Launch on Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Set this environment variable in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. Deploy.

No extra Vercel config is required because this is a standard Next.js app.

## Main structure

- `app/`
- `components/`
- `lib/`
- `public/`
- `data/`

## Notes

- `public/norwester.otf` is the live website font file.
- `robots.ts` and `sitemap.ts` are included for launch readiness.
