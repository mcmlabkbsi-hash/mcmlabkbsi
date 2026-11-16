# MCM Lab @ KBSI website

Static site (no build needed to deploy): index.html, assets/styles.css, robots.txt, sitemap.xml.

- Photos: drop files in these folders and they replace the generated artwork automatically
  images/instruments/<slug>.jpg  e.g. waters-synapt-g2.jpg, agilent-6495d-triple-quadrupole-ms.jpg
  images/team/<slug>.jpg         e.g. sungho-yun.jpg, kun-cho.jpg
  images/research/<slug>.jpg     e.g. proteomics.jpg, lipidomics.jpg
  (slug = lowercase name with dashes; see slug() in index.html)
- If you add new Tailwind classes, rebuild CSS:
  npx tailwindcss@3 -c tailwind.config.js -i input.css -o assets/styles.css --minify
  (input.css is in the repo root)

## Publish on www.mcmlabkbsi.com
Upload this folder to any static host (Cloudflare Pages / Netlify / GitHub Pages),
add the custom domain there, then at your domain registrar set DNS:
  CNAME  www  ->  <host-provided target>
and redirect the bare domain (mcmlabkbsi.com) to https://www.mcmlabkbsi.com.
HTTPS is issued automatically by those hosts.
