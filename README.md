# XpansionIT Portfolio Setup Guide

This project uses **Next.js**, **TypeScript**, **TailwindCSS**, **next-intl** for internationalization, and **pnpm** as the package manager.

# Installing The Project

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd <your-project-folder>
pnpm install
```

### 2. Run the Development Server

```bash
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### 3. Build for Production

```bash
pnpm run build
pnpm run start
```

# Localization (i18n) Setup

This project uses [`next-intl`](https://next-intl-docs.vercel.app/) for internationalization.

### File Structure for Locales

```
/i18n
    /content
        en.json
        fr.json
        .
        .
```

```json
// en.json
{
  "SiteHeader": {
    "services": "Services",
    "about": "About",
    "portfolio": "Portfolio",
    "testimonials": "Testimonials",
    "contact": "Contact",
    "getStartedButton": "Get Started"
  },
  "HomePage": {
    "heroBadge": "Innovative Software Solutions",
    .
    .
}
```

```json
// fr.json
{
  "SiteHeader": {
    "services": "Services",
    "about": "À propos",
    "portfolio": "Portefeuille",
    "testimonials": "Témoignages",
    "contact": "Contact",
    "getStartedButton": "Commencer"
  },
  "HomePage": {
    "heroBadge": "Solutions logicielles innovantes",
    .
    .
}
```

Each JSON file contains translation keys and values for a specific pages. The keys must be identical across all language files.

### Translation API Usage

#### Server Side (use `getTranslations`)

Use this in server components or `page.tsx` files:

```ts
import { getTranslations } from "next-intl/server";

const MyComponent = () => {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <div>
      <h1>{t("heroTitle")}</h1>
    </div>
  );
};

export default MyComponent;
```

#### Client Side (use `useTranslations`)

Use this in client components (`"use client"` at the top):

```ts
"use client";
import { useTranslations } from "next-intl";

const MyComponent = () => {
  const t = useTranslations("SiteHeader");

  return (
    <div>
      <h1>{t("services")}</h1>
    </div>
  );
};
```

### Adding a New Language

1. Create a new file under `/content` with the language code (e.g., `es` for Spanish).
2. Copy the JSON structure from `en.json` and translate values.
3. Add the new locale to your `i18n/routing.ts` config file.

```ts
export const routing = defineRouting({
  locales: ["en", "fr", "es"],
  defaultLocale: "en",
});
```

4. Add new locale type in `types/i18n.ts` for type safety.

```ts
export type Locale = "en" | "fr" | "es";
```

# Animation Plugins ( Tailwind CSS Based )

### [tailwindcss-intersect](https://github.com/heidkaemper/tailwindcss-intersect)

This plugin provides a way to animate elements as they come into view using the Intersection Observer API.

#### Example usage:

```html
<div className="intersect:animate-fade-up intersect-once">
  I will fade in when I come into view. I animated only once.
</div>
```

---

### [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)

This plugin brings animation utilities to Tailwind.

#### Example usage:

```html
<div class="animate-fade-up animate-delay-100">Delayed fade up animation.</div>
```
