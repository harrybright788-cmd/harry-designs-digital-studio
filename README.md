# HARRY GRAPHICS — Animated Portfolio Website

## Included files
- `index.html`: website sections and content
- `styles.css`: responsive styling and animations
- `script.js`: service list, NGN pricing, filters, mobile menu, WhatsApp order form

## IMPORTANT: configure WhatsApp before publishing
1. Open `script.js` with Notepad or another text editor.
2. Find `const WHATSAPP_NUMBER = "2348000000000";`
3. Replace the placeholder with your own WhatsApp number in international digits format. Nigerian example: `08012345678` becomes `2348012345678`. Remove the first 0; do not use `+`, spaces, or hyphens.
4. Save the file.
5. Test the form locally. The website intentionally warns you until the placeholder is changed.

## Publish to GitHub Pages
1. Open your GitHub repository and back up your old files if you want to keep them.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` into the repository root (not inside a nested folder).
3. Commit to the `main` branch.
4. In Settings → Pages, select branch `main` and folder `/ (root)` if not already selected.
5. Wait for deployment and test your live site.

## Notes
- Listed prices are suggested starter rates in Nigerian naira, not binding quotes. Edit them in `script.js` to suit your experience and project scope.
- Portfolio examples are fictional demo concepts, not client work.
- The contact form prepares a WhatsApp message in the visitor's browser; this static website does not store form submissions.
- Google Fonts are used when online; fallback fonts will be used if unavailable.


## Portfolio samples added
The `images/` folder contains four sample visuals shown in the Selected Work section. They are sample/concept graphics and should not be represented as paid client work unless they were commissioned. The WhatsApp order form is set to `2349049548222`.


## Portfolio samples update
The portfolio section now displays the eight supplied individual design samples. The previous four sample images have been removed. Upload the complete `images` folder together with `index.html`, `styles.css`, and `script.js` to your GitHub Pages repository.
