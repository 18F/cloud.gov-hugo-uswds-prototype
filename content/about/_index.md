---
title: About this prototype

# Include all "about" items in the top level About menu automatically
cascade:
  type: prose
  menu:
    main:
      parent: About
---

# Prototyping static site generators

The engineering practices guild is trying to formalize some new recommendations for static site frameworks.

We are asking for help evaluating different static site generator’s prototyping capabilities.

Thank you so much for taking the time to help!

## Project specs:

Create a static site that builds in Cloud.gov Pages with:

- A landing view that includes:
  - the USWDS banner that indicates it is a US government site.
  - A USWDS button link to a form
  - A link to a blog view
- A view with a form that can be submitted
- A form confirmation view that has some javascript elements such as:
  - hiding some div elements based on the form results, or
  - clickable elements that do something
- A blog view with several posts. ([Example](https://18f.gsa.gov/blog/))

This will allow you to evaluate: ease of getting it into production, ease of asset management, ease of incorporating javascript elements in interaction is required by a project.

Examples of prototypes/starters:

- [GSA Small Business Experience Prototype](https://github.com/18F/gsa-small-business-experience)
- [Federalist USWDS Jekyll Starter Project](https://github.com/18F/federalist-uswds-jekyll)
- [Federalist USWDS Gatsby Starter Project](https://github.com/18F/federalist-uswds-gatsby)
- [Federalist USWDS 11ty Starter Project](https://github.com/cloud-gov/11ty-uswds-template) [WIP]

These prototypes should ideally include:

- [An accessibility scan](https://github.com/18F/gsa-small-business-experience/blob/main/.github/workflows/accessibility_scan.yml)
  - If a GitHub Action is too complex for a prototype, incorporate a local accessibility scan
- Multilingual/i18n support
- [HTML Validation/broken link scan](https://engineering.18f.gov/tests/#validating-html-output)
- [An inclusive language scan](https://github.com/get-woke/woke-action)
- A CMS of some sort to allow people without specialized engineering skills to edit static content
  - Please note if this looks possible but too much work for a small prototype
  - Github backed like Netlify CMS or something headless?
- [Asset fingerprinting](https://medium.com/idealo-tech-blog/fingerprinting-and-cloud-storage-or-how-we-became-asset-delivery-champions-bb4aa558b1a6#6535) (currently missing from https://github.com/18F/uswds-jekyll)
  - Also see: [cache busting](https://www.keycdn.com/support/what-is-cache-busting)
- USWDS SCSS processing (not just inclusion of USWDS CSS, but custom theme-ready)
  - Please note [LibSass/NodeSass was deprecated a while back](https://sass-lang.com/blog/libsass-is-deprecated) but is still in common use. Check out DartSass or other SASS/SCSS compilers
- DAP integration
- Search.gov integration
- Other static analysis or vulnerability scans (ie. OWASP Zap)?
- Sitemap & common metadata

Please take notes on whatever is easy, difficult, or notable as you build your prototype!
