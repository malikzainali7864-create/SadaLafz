# SadaLafz — Blog Website

A complete, ready-to-host blog website: homepage, 6 sample articles across
Lifestyle, Technology, Food, Travel, Money and Health, plus About, Contact
and Privacy Policy pages. Pure HTML/CSS/JS — no build step, no database.

## What's included
```
index.html              Homepage
about.html               About page
contact.html             Contact form (front-end only, see note below)
privacy-policy.html      Required for AdSense approval
blog/*.html              6 full sample articles
css/style.css            Design system
js/main.js               Mobile nav + form interactions
robots.txt               Tells search engines what to crawl
sitemap.xml               Lists all pages for Google Search Console
ads.txt                  Placeholder for AdSense verification
```

## 1. Get it online (pick one, all free to start)
- **Netlify**: drag this whole folder onto app.netlify.com/drop → live in seconds.
- **GitHub Pages**: push this folder to a GitHub repo → Settings → Pages → deploy from branch.
- **Vercel**: `vercel` CLI or drag-and-drop, similar to Netlify.

Then buy a domain (e.g. sadalafz.com) from Namecheap, GoDaddy, or a local
registrar, and point it at your host (each host has a "custom domain" guide).

## 2. Before you go live — update these
- Replace every `https://www.sadalafz.com` in the HTML files, `sitemap.xml`,
  and `robots.txt` with your real domain once you've bought one.
- Update the email address in `contact.html` and `privacy-policy.html`.
- Add a real favicon (a small `.ico` or `.png` linked in `<head>`).
- Review `privacy-policy.html` — it's a starting template, not legal advice.

## 3. Get found on Google (SEO)
1. Create a free Google Search Console account (search.google.com/search-console).
2. Verify your domain (each host has instructions for this).
3. Submit `https://yourdomain.com/sitemap.xml` under Sitemaps.
4. Every page already has: unique title, meta description, canonical URL,
   Open Graph tags, and Article/WebSite structured data (JSON-LD) — these
   are the basics Google looks for.
5. Keep publishing: search traffic grows with consistent new content, not
   a one-time launch. Aim for 2-4 new articles a week if earning is the goal.
6. Internal links matter: each new article should link to 1-2 older ones.

## 4. Turn on Google AdSense (the earning part)
1. Apply at google.com/adsense once your site has real content (the 6
   sample articles are a starting point — write more original content
   before applying; Google rejects thin sites).
2. You need real traffic and genuine content — approval can take days
   to weeks, and a brand-new site with only 6 posts may be asked to add more.
3. Once approved, Google gives you a publisher ID like `ca-pub-1234567890123456`.
   - Replace the placeholder in `ads.txt` with your real ID.
   - Paste your AdSense script tag in the `<head>` of every page (a
     placeholder comment marks exactly where, in `index.html`).
   - Replace the dashed `.ad-slot` boxes with your actual `<ins class="adsbygoogle">` ad units, or turn on Auto ads in AdSense and skip manual placement.
4. Traffic is what actually drives AdSense earnings — SEO (step 3) and
   consistent publishing matter more than the ad setup itself.

## 5. Making the contact form actually work
Right now the contact form only shows a confirmation message in the browser
— it doesn't send anywhere. Easiest fixes with no backend code:
- **Formspree** (formspree.io): sign up free, replace the `<form>` tag's
  attributes with the snippet they give you.
- **Netlify Forms**: if hosting on Netlify, just add `netlify` as a form
  attribute and it works automatically.

## 6. Adding new blog posts
Copy any file in `/blog/` as a template, rewrite the title/content, add a
new `<article class="card ...">` block on `index.html`, and add the new
URL to `sitemap.xml`. Keep the same header/footer structure so navigation
stays consistent site-wide.
