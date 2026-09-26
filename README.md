# Lean Guitarist - Core Chord Formula landing page (Astro)

Version 1 of the Astro/Netlify sales page for the 50/50 test against the GHL sales page.

- Content: the live GHL sales page (leanguitarist.com/sales-page), rebuilt, with unverifiable items removed
  (customer quotes with no source, "only 47 spots", bonus dollar values, song and artist names).
- Every "Start" button goes to the GHL checkout (https://leanguitarist.com/checkout-page) and carries
  utm_*, fbclid and lp=astro-v1 along.
- Tracking: Meta Pixel 850574090934839 (PageView, ViewContent, InitiateCheckout on click) and PostHog
  (site = astro-ccf, cta_click events).
- Build: `npm install` then `npm run build` (output in dist/). Netlify reads netlify.toml.
- Live: https://lg-ccf.netlify.app (Netlify project lg-ccf, auto-deploys from main).
