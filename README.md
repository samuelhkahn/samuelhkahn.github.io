# samuelhkahn.github.io

Personal academic/portfolio site. Plain static HTML + CSS — no Jekyll, no build step,
no dependencies. Open `index.html` in a browser to preview locally.

## Deploying

Your GitHub account already hosts `samuelhkahn.github.io/neo-paper`, which means the NEO
project lives in a repo named `neo-paper`. A user site needs its own repo named exactly
`samuelhkahn.github.io`:

```bash
cd samuelhkahn.github.io
git init && git add -A && git commit -m "Personal site"
gh repo create samuelhkahn.github.io --public --source=. --push
```

Then in the repo: Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
Live at `https://samuelhkahn.github.io` in a couple of minutes. The existing `neo-paper`
repo keeps working at `https://samuelhkahn.github.io/neo-paper`.

## Before you publish

- [x] **Headshot.** Done. `assets/img/portrait.jpg`, centre-cropped square at 800px.
- [ ] **NVIDIA blog link.** `publications.html` has a `link to be added` placeholder in the
      Press section — paste the April 2026 article URL.
- [ ] **arXiv author page.** `index.html` links to `arxiv.org/a/kahn_s_1`. Confirm that's
      your author identifier, or drop the link.
- [ ] **CV.** `assets/pdf/Samuel_Kahn_CV.pdf` is a copy of `files/SamuelKahn_Resume.pdf`.
      Swap in whichever version you want public, and fix the Nature citation in the LaTeX
      source while you're there (see below).
- [ ] **Blog rights.** All eight posts are Tickr work, reproduced with a note at the top of
      each. Confirm you're comfortable with the ones containing client-specific figures.
      `seeing-risk-clearly.html` includes charts computed on a named beverage company.
- [ ] **Missing posts and canonical URLs.** Your author page at
      `tickr.com/blog/author/samkahn/` is JavaScript-rendered, so I couldn't enumerate your full
      published list. I confirmed and linked two originals (the AI-Augmented CPG post and the
      GPS forecasting post). If you have more posts on tickr.com, or Medium pieces under
      `medium.com/@sam.tickr`, send me the URLs and I'll add them. To add a canonical link to an
      existing post, edit the `<div class="callout">` note at the top of its page in `blog/`.

## Corrections applied from source material

- The Nature paper is **Communications Earth & Environment** (Nature Portfolio),
  published 21 July 2026, DOI `10.1038/s43247-026-03817-0` — not "Nature Environmental
  Communications", and not "accepted". Your résumé `.tex` files still say the old version.
- The senior thesis is the **UCSC undergraduate thesis** with Joel Primack, on dark matter
  halo shapes — listed under Theses on the publications page.
- The NASA progress report in `blogs and contents/NASA graphs/` describes PyBrain
  feedforward networks; the site describes the work as recurrent networks per your
  correction. If a reviewer opens the linked PDF they'll see the 2013 report, so consider
  linking a later writeup instead if one exists.

## Structure

```
index.html            About / landing
publications.html     Papers, patent, press, theses
projects.html         Six project cards
blog.html             Writing index
blog/*.html           Eight posts, converted from the Notion exports
assets/css/style.css  All styling, light + dark themes
assets/js/site.js     Theme toggle (no storage APIs)
assets/img/           Thumbnails
assets/img/posts/     Figures used inside posts
assets/pdf/           CV, senior thesis, NASA report
```

## Notes

- Dark mode follows the OS preference and can be toggled with the ☾/☀ button. The choice
  isn't persisted across page loads by design.
- NEO figures are hot-linked from `samuelhkahn.github.io/neo-paper/images/` rather than
  duplicated. If you ever rename that repo, update the `<img src>` in `index.html`,
  `publications.html`, and `projects.html`.
- The NEO figures are hot-linked from the `neo-paper` site and some are small. Banners using
  them carry the `contain` class, which centres the image on a dark field rather than upscaling
  it past its native resolution. If you ever have higher-resolution exports, drop them in
  `assets/img/` and remove `contain` for a full-bleed crop.
- Two thumbnails are generated illustrations rather than real result figures, because the
  source posts shipped without images: `blog-cpg.png` (a schematic) and
  `blog-marketing.png` / `marketing-causal-impact-illustration.png` (a synthetic
  counterfactual, captioned as an illustrative reconstruction — the post's own Figure 1 was
  simulated data too, but the original images didn't survive the export).
- To add a post: copy any file in `blog/`, swap the content, and add a card to `blog.html`.
