JENNAVI: UPLOAD GUIDE (v2)
==========================

WHAT CHANGED IN THIS VERSION
1. Five new URLs were renamed (the five that Google had not crawled). Old URL -> new URL:
   linkedin-services.html                    -> linkedin-solutions.html
   linkedin-outreach-services.html           -> linkedin-outreach-agency.html
   executive-linkedin-services.html          -> linkedin-for-executives.html
   linkedin-thought-leadership-services.html -> linkedin-thought-leadership.html
   linkedin-newsletter-services.html         -> linkedin-newsletter-writing.html
   Every page, canonical, schema, link and the sitemap use the new URLs. Do NOT upload the old files.
2. Your 17 existing pages were updated for internal linking (originals are untouched; the updated copies are in 02-updated-existing-pages):
   - A "Services" link was added to the main navigation.
   - A "LinkedIn Services" row of 17 links was added to the footer.
   - A contextual "Explore" section (6 links, written for each page) was added on every page except the three legal pages.
   - The homepage also received an ItemList structured-data block listing the service pages.
   - DC.modified and ai-last-updated meta dates were set to 2026-10-15.
   No existing content, scripts, forms or tracking were changed.
3. The 16 new pages now use your live footer.

FOLDERS (upload everything to the SITE ROOT)
01-new-pages               16 pages
02-updated-existing-pages  17 pages. NOTE: insights-index.html must be uploaded as insights/index.html
03-images                  6 images used on the results page
04-redirect-stubs          5 files at the OLD URLs that forward to the new ones
_redirects                 server-side 301 rules (Netlify and Cloudflare Pages read this file; GitHub Pages ignores it, which is why the stubs exist)
sitemap.xml                replaces your current sitemap

UPLOAD ORDER
1. Images (03) first.
2. New pages (01), then updated existing pages (02).
3. Redirect stubs (04) and _redirects.
4. sitemap.xml last.
5. Test on the live site: Cal.com booking, WhatsApp button, audit form (homepage, lead-generation, profile-optimization), pricing tabs and checkout, the Health Check pop-up, and the new navigation and footer links.

INDEXING (do this the same day)
- Search Console: submit sitemap.xml. Use URL Inspection > Request Indexing on the five renamed URLs first, then linkedin-results, linkedin-lead-generation, how-jennavi-works, linkedin-for-founders and the homepage.
- If the old URLs appear in Search Console, do not submit them again. They only redirect.
- Bing Webmaster Tools: submit the same sitemap. Bing coverage matters for several AI assistants.
- Every new page now has 37 or more internal links pointing to it from pages Google already crawls (homepage, hire page, tools, insights hub and every footer). That discovery signal is the strongest lever we control.
- Nobody can guarantee crawl, indexing or ranking timelines.

TWO LINKS TO DELETED PAGES STILL EXIST IN YOUR PAGES (not changed, needs your decision)
- index.html links to /free-crickets.html (in the Executive tier CRICKETS note).
- linkedin-health-check.html links to /free-client.html (FAQ text and FAQ schema).
When you delete those pages, point or remove these links so they do not return a 404.

STILL TO DO
- Send the current llms.txt so the new pages can be merged into it.
- Send the new articles for review; the sitemap has a clearly marked block for them.
