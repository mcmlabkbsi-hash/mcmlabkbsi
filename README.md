# MCM Lab @ KBSI website

Static site (no build needed to deploy): index.html, assets/styles.css, robots.txt, sitemap.xml.

- Photos: put files in `images/` and set `photo:` / `image:` in the JS arrays in index.html
  (until then, self-contained grey placeholders are shown).
- If you add new Tailwind classes, rebuild CSS:
  npx tailwindcss@3 -c tailwind.config.js -i input.css -o assets/styles.css --minify
  (input.css = @tailwind base/components/utilities + the .tab-view fadeIn rule)

## Publish on www.mcmlabkbsi.com
Upload this folder to any static host (Cloudflare Pages / Netlify / GitHub Pages),
add the custom domain there, then at your domain registrar set DNS:
  CNAME  www  ->  <host-provided target>
and redirect the bare domain (mcmlabkbsi.com) to https://www.mcmlabkbsi.com.
HTTPS is issued automatically by those hosts.
