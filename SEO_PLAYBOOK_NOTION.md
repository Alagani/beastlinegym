# SEO Implementation Playbook

Use this document as a practical SEO reference for launching or improving any website, app, SaaS product, portfolio, landing page, or local business website. It is written for people who are new to SEO but still need a clear implementation process.

---

# How to Use This in Notion

Copy this file into Notion as a Markdown document. Notion will automatically convert headings, checklists, code blocks, and tables.

Suggested Notion setup:

- Use each `#` section as a main page section.
- Convert long explanation blocks into toggles if you want a cleaner page.
- Keep checklists as action sections.
- Keep code blocks as reusable implementation snippets.
- Keep the audit template as a reusable database or table.

Example toggle format to use in Notion:

```txt
> SEO Concept: Crawling
> Crawling means Googlebot visits your website and reads the page.
> If Google cannot crawl the page, it cannot index or rank it.
```

Example callout format to use in Notion:

```txt
Callout: Indexed does not mean ranking.
A page can be stored in Google's index but still appear very low in search results.
```

Simple SEO workflow diagram:

```txt
Build Website
     |
     v
Add Metadata + H1 + Visible Content
     |
     v
Add Schema + Sitemap + Robots.txt
     |
     v
Deploy Live Website
     |
     v
Verify in Google Search Console
     |
     v
Request Indexing
     |
     v
Monitor, Improve, and Repeat
```

---

# 1. Executive Summary

## What SEO Is

SEO means Search Engine Optimization. It is the process of making a website easier for search engines like Google to discover, understand, index, and rank.

In simple terms:

- SEO helps Google find your website.
- SEO helps Google understand what your website is about.
- SEO helps users find your website when they search for relevant terms.

SEO is not one single setting. It is a combination of technical setup, page content, metadata, structured data, brand consistency, speed, trust signals, and ongoing monitoring.

## Why SEO Matters

Most users do not know your exact website URL. They search for things like:

- "Vj's Beastline GYM"
- "gym in Mangalam Tirupati"
- "personal training near me"
- "affordable gym in Tirupati"

If your website is properly optimized, Google has a better chance of showing it for those searches.

SEO matters because it can bring free, long-term, high-intent traffic. Paid ads stop when you stop paying. SEO can keep working if your site remains useful, crawlable, and trusted.

## Crawling vs Indexing vs Ranking

These three words are important.

| Concept | Meaning | Example |
|---|---|---|
| Crawling | Googlebot visits your page and reads it. | Googlebot opens your homepage. |
| Indexing | Google stores the page in its search database. | Google confirms your homepage is indexed. |
| Ranking | Google decides where to show the page in search results. | Your page appears as result #1, #5, or #50. |

Callout: A page can be indexed but still not rank well. Indexing only means Google knows the page exists. Ranking depends on relevance, content quality, authority, competition, search intent, and trust.

## Why a Website Can Be Indexed but Still Not Rank

Common reasons:

- The brand name is inconsistent across the website.
- The H1 does not match the business name.
- The page has weak visible content.
- The title and meta description are too generic.
- Structured data does not clearly identify the business.
- There are few external brand mentions.
- Google Business Profile is missing or inconsistent.
- The website is new and has low authority.
- Competitors have stronger content or more backlinks.

## Expected SEO Timelines

SEO is not instant.

| Timeline | What Usually Happens |
|---|---|
| Same day to 1 week | Google may crawl the page after submission. |
| 1 to 4 weeks | Pages may become indexed and start appearing for exact searches. |
| 1 to 3 months | Brand and local visibility may improve. |
| 3 to 6 months | Broader keyword rankings may become more stable. |
| 6+ months | Authority, backlinks, and content growth start compounding. |

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "If Google indexed my site, it should rank first." | Indexing is not ranking. |
| "Meta keywords improve ranking." | Google does not rely on meta keywords for ranking. |
| "SEO is done once." | SEO needs monitoring and maintenance. |
| "Only technical tags matter." | Visible content and trust signals matter heavily. |
| "A sitemap guarantees indexing." | A sitemap helps discovery but does not force indexing. |

---

# 2. SEO Fundamentals

## Search Engines

Definition: Search engines are systems that discover web pages, store them, and return relevant results when users search.

Why it matters: Your site must be understandable to these systems before it can appear in results.

Example: Google reads a gym website and decides whether it is relevant for "gym in Mangalam".

## Googlebot

Definition: Googlebot is Google's crawler. It visits websites and reads pages.

Why it matters: If Googlebot cannot access your page, your page may not be indexed.

Example: If your `robots.txt` blocks Googlebot, Google may not crawl your page.

## Crawling

Definition: Crawling is the process of Googlebot visiting your website.

Why it matters: Google cannot index pages it cannot crawl.

Example: Googlebot opens `https://alagani.github.io/beastlinegym/`.

## Indexing

Definition: Indexing means Google stores your page in its search database.

Why it matters: A page must be indexed before it can appear in normal search results.

Example: Search Console says "URL is on Google".

## Ranking

Definition: Ranking is where your page appears in search results.

Why it matters: Users usually click results near the top.

Example: Your website ranks #1 for "Vj's Beastline GYM" but #15 for "gym in Tirupati".

## Domain Authority

Definition: Domain authority is a general idea of how trusted and strong a domain is. Google does not use a public "domain authority" score, but authority-like signals exist.

Why it matters: Established domains often rank more easily than new domains.

Example: A well-known gym chain may rank faster than a new local gym site.

## Backlinks

Definition: Backlinks are links from other websites to your website.

Why it matters: Good backlinks are trust signals.

Example: A local news website links to your gym website.

## Brand Signals

Definition: Brand signals help Google understand the exact identity of a business or product.

Why it matters: Brand consistency helps Google connect your website, Google Business Profile, social profiles, and mentions.

Example: Always use `Vj's Beastline GYM`, not sometimes `Vj's Beastline`, sometimes `Beastline Gym`, and sometimes `VJ Beastline`.

## Structured Data

Definition: Structured data is machine-readable data added to a page, usually as JSON-LD.

Why it matters: It helps Google understand entities such as businesses, products, articles, events, and locations.

Example: A local gym can use `SportsActivityLocation` schema with its name, URL, address, and phone number.

## Metadata

Definition: Metadata is information inside the HTML `<head>` that describes the page.

Why it matters: Title tags and meta descriptions help search engines and users understand the page.

Example:

```html
<title>Vj's Beastline Gym | Premium & Affordable Gym in Mangalam, Tirupati</title>
<meta name="description" content="Join Vj's Beastline GYM in Mangalam, Tirupati for strength training, cardio workouts, and personal coaching.">
```

## Sitemap

Definition: A sitemap is an XML file listing important pages on your website.

Why it matters: It helps Google discover pages.

Example:

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-06-02</lastmod>
  </url>
</urlset>
```

## Robots.txt

Definition: `robots.txt` is a file that tells crawlers what they can or cannot crawl.

Why it matters: A wrong robots rule can block your whole website.

Example:

```txt
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

## Canonical URLs

Definition: A canonical URL tells Google the preferred version of a page.

Why it matters: It reduces duplicate content confusion.

Example:

```html
<link rel="canonical" href="https://example.com/">
```

## Internal Links

Definition: Internal links are links from one page on your site to another page on your site.

Why it matters: They help users and crawlers find important pages.

Example: A homepage links to `/pricing`, `/about`, and `/contact`.

## External Links

Definition: External links are links from your site to another site, or from another site to your site.

Why it matters: Relevant external links can support credibility. Backlinks from other sites can improve authority.

Example: Your Google Business Profile links to your website.

## Search Intent

Definition: Search intent is what the user is trying to do when they search.

Why it matters: Google prefers pages that satisfy the user's intent.

Example:

- "Vj's Beastline GYM" means the user wants the exact brand.
- "gym in Mangalam" means the user wants local gym options.
- "gym membership price Tirupati" means the user wants pricing information.

---

# 3. Technical SEO Checklist

## Website Accessibility

Use this checklist before submitting a site to Google.

- [ ] Website loads over HTTPS.
- [ ] Website works on mobile.
- [ ] Website loads quickly.
- [ ] Main content is visible in the HTML or reliably rendered.
- [ ] Navigation links work.
- [ ] Images have useful `alt` text.
- [ ] No broken main pages.
- [ ] No blank screen after deployment.
- [ ] HTML has valid `<title>`, meta description, and canonical URL.

## HTTPS

HTTPS protects users and is expected by Google.

Check:

```txt
https://example.com/
```

Avoid:

```txt
http://example.com/
```

## Mobile Responsiveness

Google primarily uses mobile-first indexing. This means the mobile version matters heavily.

Check:

- Open the page on a phone.
- Check if text is readable.
- Check if buttons are tappable.
- Check if the layout does not overflow horizontally.

## Page Speed

Fast pages improve user experience and can help SEO.

Use:

- Google PageSpeed Insights
- Lighthouse
- GTmetrix

Basic fixes:

- Compress large images.
- Use modern formats like WebP when possible.
- Avoid unnecessary scripts.
- Lazy-load below-the-fold images.

## Valid HTML

Important HTML elements:

```html
<!doctype html>
<html lang="en">
<head>
  <title>Brand Name | Short Page Description</title>
  <meta name="description" content="Clear 120-160 character page summary.">
  <link rel="canonical" href="https://example.com/">
</head>
<body>
  <h1>Brand Name</h1>
</body>
</html>
```

## Crawlable Content

Google needs visible text that explains the page.

Good:

```html
<h1>Vj's Beastline GYM</h1>
<h2>About Vj's Beastline GYM</h2>
<p>Vj's Beastline GYM is a fitness center located in Mangalam, Tirupati.</p>
```

Weak:

```html
<h1>Welcome</h1>
<p>We help you become better.</p>
```

## Indexability

Check these files and tags:

- [ ] `robots.txt` exists.
- [ ] `robots.txt` does not block the site.
- [ ] `sitemap.xml` exists.
- [ ] Sitemap contains the correct live URLs.
- [ ] Canonical tag points to the correct URL.
- [ ] No accidental `noindex` tag exists.

Bad:

```html
<meta name="robots" content="noindex">
```

Good:

```html
<meta name="robots" content="index, follow">
```

---

# 4. Google Search Console Setup

## Step 1: Create or Open Search Console

Go to:

```txt
https://search.google.com/search-console
```

Sign in using a Google account.

Screenshot placeholder:

```txt
[Screenshot: Google Search Console homepage]
```

## Step 2: Add a Property

Choose one:

| Property Type | Best For |
|---|---|
| Domain property | Full domain ownership, includes all subdomains. |
| URL prefix property | Simple setup for a specific website URL. |

For GitHub Pages, URL prefix is often easier.

Example:

```txt
https://alagani.github.io/beastlinegym/
```

## Step 3: Verify Ownership

Common methods:

- HTML file upload
- HTML meta tag
- DNS record
- Google Analytics

For static sites, HTML file upload is simple.

Example:

```txt
google52e732484df7bcb2.html
```

After deployment, open:

```txt
https://example.com/google-verification-file.html
```

Then click Verify in Search Console.

## Step 4: Submit Sitemap

Go to:

```txt
Search Console -> Sitemaps
```

Submit:

```txt
sitemap.xml
```

Full example:

```txt
https://example.com/sitemap.xml
```

## Step 5: URL Inspection

Use the URL Inspection tool.

Paste the homepage URL:

```txt
https://example.com/
```

Search Console will tell you:

- Whether the URL is indexed.
- Whether Google can crawl it.
- Whether there are page errors.

## Step 6: Live Test

Click "Test Live URL".

This checks the current deployed version, not just Google's cached version.

## Step 7: Request Indexing

After fixing SEO issues:

1. Open URL Inspection.
2. Enter the updated URL.
3. Run Live Test.
4. Click Request Indexing.

## Step 8: Monitor Performance

Check:

- Queries
- Clicks
- Impressions
- CTR
- Average position
- Indexed pages
- Sitemap status

---

# 5. On-Page SEO Optimization

## Title Tags

Definition: The `<title>` tag is the page title shown in browser tabs and often used in Google results.

Best practices:

- Put the brand or primary keyword near the front.
- Keep it around 50-60 characters when possible.
- Make it readable.
- Avoid keyword stuffing.
- Use a unique title for every page.

Good:

```html
<title>Vj's Beastline Gym | Premium Gym in Mangalam, Tirupati</title>
```

Bad:

```html
<title>Best Gym Gym Gym Fitness Workout Cheap Gym Near Me</title>
```

For brand SEO, leading with the brand is reasonable.

## Meta Descriptions

Definition: The meta description summarizes the page.

Best practices:

- Around 120-160 characters.
- Include the brand name.
- Mention the main offer.
- Make it useful for humans.

Good:

```html
<meta name="description" content="Vj's Beastline GYM offers strength training, cardio workouts, personal coaching, and fitness programs in Mangalam, Tirupati.">
```

Bad:

```html
<meta name="description" content="Best website. Click here.">
```

## Headings

Headings create page structure.

| Heading | Purpose |
|---|---|
| H1 | Main page topic. Usually one per page. |
| H2 | Main sections. |
| H3 | Subsections under H2. |

For brand SEO:

```html
<h1>Vj's Beastline GYM</h1>
<h2>About Vj's Beastline GYM</h2>
```

Avoid:

```html
<h1>Welcome</h1>
```

## Content Optimization

Google relies heavily on visible content. The page should clearly say who you are, what you offer, and where you operate.

Use natural wording:

```html
<p>
  Vj's Beastline GYM is a fitness center located in Mangalam, Tirupati.
  At Vj's Beastline GYM, we provide strength training, cardio workouts,
  personal training, and transformation programs for all fitness levels.
</p>
```

Keyword placement checklist:

- [ ] Brand name appears in H1.
- [ ] Brand name appears in About section.
- [ ] Location appears in visible content.
- [ ] Main services appear in visible content.
- [ ] Copy reads naturally.
- [ ] No spammy repetition.

Semantic keywords for a gym:

- Strength training
- Cardio workouts
- Personal training
- Fitness center
- Workout facilities
- Gym membership
- Transformation programs
- Mangalam
- Tirupati

---

# 6. Structured Data

## What Structured Data Is

Structured data is extra information added to your page in a format search engines can understand. The most common format is JSON-LD.

It usually appears inside:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Example Brand"
}
</script>
```

## Why Google Uses It

Structured data helps Google understand:

- Business name
- Website URL
- Address
- Phone number
- Business type
- Social profiles
- Products
- Reviews
- Events

It does not guarantee ranking, but it strengthens clarity.

## Common Schema Types

| Schema Type | Use Case |
|---|---|
| Organization | General company or brand. |
| LocalBusiness | Local business with physical location. |
| SportsActivityLocation | Gyms, sports centers, fitness facilities. |
| WebSite | Website-level search and identity data. |
| Product | Product pages. |
| Article | Blog posts or news content. |

## Organization Example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Example Company",
  "url": "https://example.com/",
  "sameAs": [
    "https://www.instagram.com/example",
    "https://www.facebook.com/example"
  ]
}
</script>
```

## Local Business Example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Example Local Business",
  "url": "https://example.com/",
  "telephone": "+911234567890",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Road",
    "addressLocality": "Mangalam",
    "addressRegion": "Tirupati",
    "postalCode": "517507",
    "addressCountry": "IN"
  }
}
</script>
```

## SportsActivityLocation Example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Vj's Beastline GYM",
  "url": "https://alagani.github.io/beastlinegym/",
  "addressLocality": "Mangalam",
  "addressRegion": "Tirupati"
}
</script>
```

## WebSite Example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Example Website",
  "url": "https://example.com/"
}
</script>
```

## Validation

Use:

```txt
https://search.google.com/test/rich-results
```

Also use:

```txt
https://validator.schema.org/
```

---

# 7. Brand SEO Strategy

Brand SEO is the process of helping Google understand the exact identity of a brand.

This is especially important when users search for your exact business name.

## Exact Brand Matching

Choose one official brand name and use it everywhere.

Example official brand:

```txt
Vj's Beastline GYM
```

Use the same spelling in:

- Website H1
- About section
- Footer
- JSON-LD `name`
- Google Business Profile
- Instagram
- Facebook
- YouTube
- Google Maps
- Business directories

Avoid mixing:

```txt
Vj's Beastline
Vj's Beastline Gym
Beastline Gym
VJ Beastline
```

Minor variations can be okay for natural writing, but the official brand should appear clearly and repeatedly.

## Brand Signals Checklist

- [ ] Exact brand in H1.
- [ ] Exact brand in title or near the start of title.
- [ ] Exact brand in meta description.
- [ ] Exact brand in About section.
- [ ] Exact brand in footer.
- [ ] Exact brand in JSON-LD `name`.
- [ ] Exact brand in Google Business Profile.
- [ ] Exact brand in social profiles.
- [ ] Exact brand in local directories.
- [ ] Website URL linked from all profiles.

## Entity SEO

Google tries to understand entities. An entity is a real thing: a business, person, place, product, or organization.

For a gym, the entity includes:

- Name
- Location
- Website
- Phone
- Address
- Social profiles
- Reviews
- Photos
- Business category

The goal is to make all signals point to the same entity.

## Trust Signals

Trust signals include:

- Real address
- Phone number
- Business hours
- Google Business Profile
- Reviews
- Photos of the real location
- Social media profiles
- Consistent NAP details

NAP means:

```txt
Name
Address
Phone
```

---

# 8. Local SEO Strategy

Local SEO helps a physical business appear for location-based searches.

Examples:

- "gym near me"
- "gym in Mangalam"
- "fitness center Tirupati"
- "personal trainer near me"

## Google Business Profile

For a real local business, this is critical.

Create or claim a profile:

```txt
https://www.google.com/business/
```

Use the exact business name:

```txt
Vj's Beastline GYM
```

## Google Business Profile Checklist

- [ ] Exact business name.
- [ ] Correct address.
- [ ] Correct phone number.
- [ ] Website URL.
- [ ] Business category such as Gym or Fitness center.
- [ ] Opening hours.
- [ ] Photos of gym equipment and location.
- [ ] Services.
- [ ] Description with brand and location.
- [ ] Reviews requested from real customers.

## Address Consistency

Use the same address format everywhere.

Website:

```txt
506, AMK Arcade, Saptagiri Colony, 12-505, Mangalam, Andhra Pradesh 517507
```

Google Business Profile:

```txt
506, AMK Arcade, Saptagiri Colony, 12-505, Mangalam, Andhra Pradesh 517507
```

Avoid using different versions on different platforms unless necessary.

## Reviews

Reviews help local trust.

Ask real customers to mention natural details:

- Gym name
- Training quality
- Location
- Equipment
- Trainers

Do not write fake reviews.

## Local Citations

Local citations are listings on other websites.

Examples:

- Google Business Profile
- Justdial
- IndiaMART
- Facebook page
- Instagram profile
- Local directories
- Maps listings

Checklist:

- [ ] Same name.
- [ ] Same address.
- [ ] Same phone.
- [ ] Same website URL.

---

# 9. SEO Deployment Workflow

Use this workflow for every new website.

## Visual Checklist

- [ ] 1. Build the website.
- [ ] 2. Add title tags.
- [ ] 3. Add meta descriptions.
- [ ] 4. Add canonical URLs.
- [ ] 5. Add H1 and clear headings.
- [ ] 6. Add visible content that explains the brand, offer, and location.
- [ ] 7. Add structured data.
- [ ] 8. Create `robots.txt`.
- [ ] 9. Create `sitemap.xml`.
- [ ] 10. Deploy the site.
- [ ] 11. Open the live site and verify it loads.
- [ ] 12. Open live `robots.txt`.
- [ ] 13. Open live `sitemap.xml`.
- [ ] 14. Add the site to Google Search Console.
- [ ] 15. Verify ownership.
- [ ] 16. Submit sitemap.
- [ ] 17. Inspect homepage URL.
- [ ] 18. Run Live Test.
- [ ] 19. Request indexing.
- [ ] 20. Monitor results weekly.

## Deployment Verification Commands

Check homepage:

```txt
https://example.com/
```

Check robots:

```txt
https://example.com/robots.txt
```

Check sitemap:

```txt
https://example.com/sitemap.xml
```

Check source:

```txt
view-source:https://example.com/
```

---

# 10. Case Study: Vj's Beastline GYM

## Initial Situation

The website was already indexed by Google. That means Google had discovered and stored the page.

However, brand search visibility was weak. The goal was to make Google understand that the exact brand is:

```txt
Vj's Beastline GYM
```

## Issues Found

| Issue | Why It Mattered |
|---|---|
| H1 was `Vj's Beastline` | It did not include the full official brand name. |
| JSON-LD name used `Vj's Beastline Gym` | Brand capitalization and exact spelling were inconsistent. |
| Schema type was `ExerciseGym` | A clearer sports/location schema was preferred. |
| About section heading was generic | It did not reinforce the exact brand. |
| Visible content needed stronger brand wording | Google relies on visible content, not only hidden metadata. |
| Footer was mostly consistent | Footer already used `Vj's Beastline GYM`. |
| `robots.txt` existed | Good indexability signal. |
| `sitemap.xml` existed | Good discovery signal. |

## Actions Taken

### H1 Updated

Before:

```html
<h1>Vj's Beastline</h1>
```

After:

```html
<h1>Vj's Beastline GYM</h1>
```

This was the highest-priority fix because the H1 is a strong visible page topic signal.

### JSON-LD Updated

Important fields were updated to:

```json
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Vj's Beastline GYM",
  "url": "https://alagani.github.io/beastlinegym/",
  "addressLocality": "Mangalam",
  "addressRegion": "Tirupati"
}
```

### About Section Updated

Added visible brand-focused content:

```html
<h2>About Vj's Beastline GYM</h2>

<p>
  Vj's Beastline GYM is a fitness center located in Mangalam, Tirupati.
  At Vj's Beastline GYM, we provide strength training, cardio workouts,
  personal training, and transformation programs for all fitness levels.
</p>
```

### Footer Kept Consistent

Footer branding:

```txt
(c) 2026 Vj's Beastline GYM
```

### Robots.txt Verified

Live `robots.txt` returned `200 OK`.

### Sitemap.xml Verified

Live `sitemap.xml` returned `200 OK`.

### Build Verified

The production build passed after the SEO updates.

## Expected Outcomes

These changes should help Google better understand:

- The exact brand name.
- The local business identity.
- The business category.
- The location.
- The page's visible topic.

Expected improvements:

- Better brand recognition.
- Stronger branded search visibility.
- Stronger local entity signals.
- Clearer connection between website and business identity.

Important: Google may need days or weeks to recrawl and update search results.

## Next Steps for Beastline

- [ ] Request indexing in Google Search Console.
- [ ] Create or update Google Business Profile using `Vj's Beastline GYM`.
- [ ] Use the exact same spelling on Instagram, Facebook, and YouTube.
- [ ] Add website URL to all social profiles.
- [ ] Ask real members for Google reviews.
- [ ] Add more real gym photos.
- [ ] Monitor branded search query impressions.

---

# 11. SEO Audit Template

Use this table for any website.

| Item | Status | Priority | Description | Fix | Verification Method |
|---|---|---|---|---|---|
| Homepage loads | Not checked | High | Site must load correctly. | Fix deployment/runtime errors. | Open live URL. |
| HTTPS | Not checked | High | Site should use HTTPS. | Enable HTTPS. | Check browser URL. |
| Title tag | Not checked | High | Every page needs a clear title. | Add `<title>`. | View page source. |
| Meta description | Not checked | Medium | Search result summary. | Add 120-160 character description. | View page source. |
| H1 | Not checked | High | Main page heading. | Add one clear H1. | Inspect page/source. |
| Brand consistency | Not checked | High | Exact brand should match across signals. | Normalize brand wording. | Compare site, schema, socials. |
| Visible content | Not checked | High | Google needs readable page content. | Add useful sections. | Read live page. |
| JSON-LD | Not checked | Medium | Helps Google understand entity. | Add schema. | Rich Results Test. |
| robots.txt | Not checked | High | Must not block pages. | Add correct robots file. | Open `/robots.txt`. |
| sitemap.xml | Not checked | Medium | Helps discovery. | Add sitemap. | Open `/sitemap.xml`. |
| Canonical URL | Not checked | Medium | Preferred page URL. | Add canonical tag. | View source. |
| Mobile layout | Not checked | High | Mobile-first indexing. | Fix responsive issues. | Test phone viewport. |
| Page speed | Not checked | Medium | Affects UX and SEO. | Optimize assets. | PageSpeed Insights. |
| Search Console | Not checked | High | Needed for indexing data. | Verify property. | Search Console. |
| Google Business Profile | Not checked | High for local | Needed for local SEO. | Create or claim profile. | Google Maps/Search. |

Status options:

- Not checked
- Pass
- Needs fix
- Fixed
- Monitor

Priority options:

- High
- Medium
- Low

---

# 12. SEO Launch Checklist

Copy this before launching any website.

## Technical SEO

- [ ] Website uses HTTPS.
- [ ] Website loads on desktop.
- [ ] Website loads on mobile.
- [ ] No blank screen after deployment.
- [ ] No broken primary navigation links.
- [ ] Images are optimized.
- [ ] Important images have alt text.
- [ ] Page speed is acceptable.
- [ ] No accidental `noindex`.
- [ ] `robots.txt` exists.
- [ ] `sitemap.xml` exists.
- [ ] Canonical URL exists.

## On-Page SEO

- [ ] Homepage title is clear.
- [ ] Homepage meta description is clear.
- [ ] H1 matches the main page topic.
- [ ] H2 sections are meaningful.
- [ ] Brand name appears naturally.
- [ ] Location appears if relevant.
- [ ] Services/products are described clearly.
- [ ] Content is written for humans, not stuffed with keywords.

## Structured Data

- [ ] Correct schema type selected.
- [ ] `name` matches official brand.
- [ ] `url` is correct.
- [ ] Address is included for local businesses.
- [ ] Phone number is included when relevant.
- [ ] Social profiles are included when available.
- [ ] Schema validates.

## Search Console

- [ ] Property created.
- [ ] Ownership verified.
- [ ] Sitemap submitted.
- [ ] Homepage inspected.
- [ ] Live test passed.
- [ ] Indexing requested.

## Analytics

- [ ] Google Analytics installed if needed.
- [ ] Important conversions defined.
- [ ] Contact clicks tracked if needed.
- [ ] Form submissions tracked if needed.

## Branding

- [ ] Official brand name chosen.
- [ ] Website uses official brand name.
- [ ] Schema uses official brand name.
- [ ] Footer uses official brand name.
- [ ] Social profiles use official brand name.
- [ ] Google Business Profile uses official brand name.

## Local SEO

- [ ] Google Business Profile created or claimed.
- [ ] NAP is consistent.
- [ ] Business hours are correct.
- [ ] Photos uploaded.
- [ ] Services added.
- [ ] Reviews requested from real customers.
- [ ] Website linked from profile.

---

# 13. Troubleshooting Guide

## Website Not Indexed

Symptoms:

- Search Console says "URL is not on Google".
- `site:example.com` shows no results.

Possible causes:

- Google has not crawled the site yet.
- `robots.txt` blocks crawling.
- Page has `noindex`.
- Site is broken or blank.
- Sitemap was not submitted.

Solution:

- Open the live site.
- Check `/robots.txt`.
- Check for `noindex`.
- Submit sitemap.
- Use URL Inspection.
- Run Live Test.
- Request indexing.

## Sitemap Issues

Symptoms:

- Search Console says sitemap could not be read.
- Sitemap URL returns 404.

Possible causes:

- Sitemap is not deployed.
- Wrong path.
- Wrong XML format.
- URLs inside sitemap are incorrect.

Solution:

- Open `https://example.com/sitemap.xml`.
- Confirm it returns `200 OK`.
- Confirm URLs are live.
- Resubmit sitemap in Search Console.

## Robots.txt Issues

Symptoms:

- Pages are not crawled.
- Search Console reports blocked by robots.txt.

Bad example:

```txt
User-agent: *
Disallow: /
```

Good example:

```txt
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

Solution:

- Open `/robots.txt`.
- Remove accidental blocking rules.
- Test again in Search Console.

## Search Console Errors

Symptoms:

- Crawl errors.
- Page cannot be indexed.
- Duplicate without user-selected canonical.

Solution:

- Read the exact error.
- Fix the page or metadata.
- Validate fix.
- Request indexing again.

## Indexed but Not Ranking

Symptoms:

- Search Console says the page is indexed.
- The page does not appear for target searches.

Possible causes:

- Weak content.
- Weak brand signals.
- Low authority.
- Search intent mismatch.
- Competitors are stronger.
- Google needs more time.

Solution:

- Improve visible content.
- Strengthen title, H1, schema, and brand consistency.
- Add internal links.
- Build legitimate backlinks and citations.
- Create Google Business Profile for local businesses.
- Monitor for several weeks.

## Brand Searches Not Showing Website

Symptoms:

- Searching exact brand name does not show the website.
- Social profiles or unrelated pages rank first.

Possible causes:

- Brand name is inconsistent.
- Brand is new.
- Website has few mentions.
- Google Business Profile is missing.
- Exact brand does not appear in visible content.

Solution:

- Put exact brand in H1.
- Put exact brand in About section.
- Put exact brand in JSON-LD `name`.
- Use exact brand in footer.
- Create matching Google Business Profile.
- Link website from social profiles.
- Get local citations.

## Duplicate Content

Symptoms:

- Google chooses a different URL than expected.
- Search Console reports duplicate pages.

Possible causes:

- Same content is available at multiple URLs.
- Missing canonical tag.
- HTTP and HTTPS both accessible.
- With and without trailing slash both indexed.

Solution:

- Add canonical URL.
- Redirect duplicate versions if possible.
- Keep sitemap URLs consistent.

## Slow Indexing

Symptoms:

- Site is submitted but Google takes days or weeks.

Possible causes:

- New domain or new site.
- Low authority.
- Few links to the site.
- Google crawl queue delay.

Solution:

- Submit sitemap.
- Request indexing.
- Link from Google Business Profile and social profiles.
- Add useful content.
- Be patient and monitor Search Console.

---

# 14. Recommended Tools

## Google Search Console

Purpose: Monitor indexing, search performance, sitemap status, and crawl issues.

When to use:

- Before launch.
- After deployment.
- After SEO changes.
- Weekly monitoring.

Cost: Free.

## Google Analytics

Purpose: Track user behavior, traffic sources, and conversions.

When to use:

- To understand what users do after visiting.
- To track contact clicks, form submissions, or purchases.

Cost: Free.

## Google Rich Results Test

Purpose: Test structured data.

When to use:

- After adding JSON-LD.
- Before requesting indexing.

Cost: Free.

URL:

```txt
https://search.google.com/test/rich-results
```

## Schema Markup Validator

Purpose: Validate schema.org structured data.

When to use:

- When Rich Results Test does not show all schema details.

Cost: Free.

URL:

```txt
https://validator.schema.org/
```

## Google PageSpeed Insights

Purpose: Check speed and Core Web Vitals.

When to use:

- Before launch.
- After adding images or scripts.
- Monthly.

Cost: Free.

## Ahrefs

Purpose: Backlink analysis, keyword research, competitor research.

When to use:

- When you want to grow beyond basic brand SEO.
- When analyzing competitors.

Cost: Paid, limited free tools available.

## SEMrush

Purpose: Keyword tracking, competitor analysis, SEO audits.

When to use:

- For larger SEO campaigns.
- For marketing teams.

Cost: Paid.

## Screaming Frog

Purpose: Crawl your website like a search engine and find technical issues.

When to use:

- Larger websites.
- Multi-page sites.
- Technical SEO audits.

Cost: Free for small crawls, paid for larger use.

## GTmetrix

Purpose: Speed and performance analysis.

When to use:

- When pages feel slow.
- When optimizing images/scripts.

Cost: Free and paid plans.

---

# 15. SEO Maintenance Plan

SEO improves with consistent maintenance.

## Daily Tasks

For small websites, daily SEO work is usually not required. If the site is business-critical, quickly check:

- [ ] Website is live.
- [ ] Contact forms or phone links work.
- [ ] No major deployment issue happened.

## Weekly Tasks

- [ ] Check Google Search Console performance.
- [ ] Review clicks and impressions.
- [ ] Check branded search queries.
- [ ] Check indexing status for important pages.
- [ ] Review Google Business Profile activity.
- [ ] Respond to reviews if applicable.

## Monthly Tasks

- [ ] Update sitemap if new pages were added.
- [ ] Review PageSpeed Insights.
- [ ] Check for broken links.
- [ ] Add or improve useful content.
- [ ] Add new photos for local businesses.
- [ ] Review competitors.
- [ ] Check if brand searches are improving.

## Quarterly Tasks

- [ ] Full SEO audit.
- [ ] Review title/meta descriptions.
- [ ] Validate structured data.
- [ ] Review backlinks and citations.
- [ ] Refresh outdated content.
- [ ] Check local directory consistency.
- [ ] Review analytics conversion data.

## KPIs to Monitor

| KPI | Meaning | Why It Matters |
|---|---|---|
| Impressions | How often your site appears in search. | Shows visibility. |
| Clicks | How many users clicked your result. | Shows traffic. |
| CTR | Click-through rate. | Shows whether your result is attractive. |
| Average position | Average ranking position. | Shows ranking trend. |
| Indexed pages | Pages Google has indexed. | Shows index coverage. |
| Brand search traffic | Searches for your exact brand. | Shows brand recognition. |
| Keyword rankings | Positions for target terms. | Shows SEO growth. |
| Local actions | Calls, direction requests, website clicks. | Shows local business impact. |

---

# Quick Reference: SEO Fix Order

If you are confused, follow this order:

1. Make sure the website loads.
2. Make sure Google is allowed to crawl it.
3. Add title and meta description.
4. Add one clear H1.
5. Add useful visible content.
6. Add structured data.
7. Add sitemap and robots files.
8. Verify Search Console.
9. Submit sitemap.
10. Request indexing.
11. Monitor results.
12. Improve content and trust signals over time.

---

# Copy-Paste Starter Template

Use this as a starting point for a simple business homepage.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Brand Name | Main Service in Main Location</title>
  <meta name="description" content="Brand Name offers main service, supporting service, and another benefit in Main Location.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://example.com/">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Brand Name">
  <meta property="og:description" content="Short social sharing description.">
  <meta property="og:url" content="https://example.com/">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brand Name",
    "url": "https://example.com/",
    "telephone": "+911234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Street Address",
      "addressLocality": "City",
      "addressRegion": "Region",
      "postalCode": "Postal Code",
      "addressCountry": "IN"
    }
  }
  </script>
</head>
<body>
  <header>
    <h1>Brand Name</h1>
    <p>Clear description of what the business does and where it operates.</p>
  </header>

  <main>
    <section>
      <h2>About Brand Name</h2>
      <p>Brand Name is a business located in Main Location. Brand Name provides service one, service two, and service three for customers.</p>
    </section>
  </main>

  <footer>
    <p>(c) 2026 Brand Name. All rights reserved.</p>
  </footer>
</body>
</html>
```

---

# Final Notes

SEO works best when technical setup, visible content, brand consistency, and trust signals all support each other.

For a new site, do not expect instant rankings. First, make the site crawlable and indexable. Then make the page understandable. Then strengthen brand and local signals. After that, keep monitoring and improving based on Search Console data.
