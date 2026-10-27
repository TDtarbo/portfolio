# Portfolio

This portfolio is deployed automatically to GitHub Pages whenever changes are pushed to `main`.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages setup

In the repository settings, open **Pages** and set **Source** to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` then builds and deploys the site automatically.

The deployed site is available at:

`https://tdtarbo.github.io/portfolio/`
