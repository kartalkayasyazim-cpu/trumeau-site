# TRUMEAU — v9 Uttermost-style static template

What you get:
- 2-row header like Uttermost (brand tabs left, big centered logo, links right)
- category nav row with hamburger + categories + right icons
- full-width hero banner with big overlay title
- category pages (PLP) with left "Shop by ..." filter blocks and product grid placeholders

How to use:
1) Upload all files to the ROOT of your GitHub repository.
2) GitHub Pages: Settings → Pages → Deploy from a branch → main → /(root)
3) Open site with cache bust: `...?v=999`

Replace hero image:
- Put a real image in `assets/img/hero.jpg`
- In CSS: `.hero__img { background: linear-gradient(...), url('assets/img/hero.jpg') center/cover no-repeat; }`
