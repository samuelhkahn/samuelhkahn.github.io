# samuelhkahn.github.io

Personal site. Static HTML and CSS, no build step. Open `index.html` in a browser to preview,
or serve the directory with any static file server.

Deployed by GitHub Pages from the `main` branch root.

## Layout

```
index.html            About
experience.html       Experience and CV link
publications.html     Papers, patent, press, theses, and writing
beyond.html           Sailing, astrophotography, mountains
blog/                 Posts
projects/             Project write-ups
assets/css/style.css  All styling, light and dark themes
assets/js/site.js     Theme toggle
assets/img/           Thumbnails and gallery images
assets/img/posts/     Figures used inside posts
assets/pdf/           CV, senior thesis, NASA report
```

`blog.html` and `projects.html` redirect to `publications.html`.

## Notes

- Dark mode follows the OS preference and can be toggled with the button in the nav. The
  choice is not persisted across page loads.
- NEO figures are hot-linked from `samuelhkahn.github.io/neo-paper/images/`. If that repo
  moves, update the image paths in `index.html` and `publications.html`.
- To add a post, copy any file in `blog/`, replace the content, and add a card to the Writing
  section of `publications.html`.
