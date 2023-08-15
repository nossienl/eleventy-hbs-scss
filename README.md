## Eleventy Boilerplate - HBS & SCSS Edition
#### Created by Nossie

This is a boilerplate for Eleventy, using Handlebars and SCSS. It's a simple starting point for a static site, with a few useful features:

- SCSS compilation
- Handlebars templating

### Getting Started

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev` to start the development server and watch for changes
4. Run `npm run build` to build the site for static hosting / deployment

### Structure

- `src/` - This is where all the source files live
- `src/assets/` - This is where all the static assets live
- `src/assets/scss/` - This is where all the SCSS files live
- `src/assets/scss/main.scss` - This is the main SCSS file, which is compiled to `dist/assets/css/main.css`
- `src/assets/js/` - This is where all the JS files live
- `src/assets/js/main.js` - This is the main JS file, which is compiled to `dist/assets/js/main.js`
- `src/assets/img/` - This is where all the image files live
- `src/assets/fonts/` - This is where all the font files live

### SCSS

The SCSS is compiled using `sass` and the structure is as follows:

- `src/assets/css/main.scss` - This is the main SCSS file, which imports all the other SCSS files
- `src/assets/css/_reset.scss` - This is where all the reset styles live
- `src/assets/css/_base.scss` - This is where all the base styles live, such as body and typography
- `src/assets/css/_variables.scss` - This is where all the SCSS variables live
- `src/assets/css/_mixins.scss` - This is where all the SCSS mixins live
- `src/assets/csss/pages` - This is where all the page-specific SCSS files live base on `data-page="page-name"` attribute on the first `<div>` tag on specific page
