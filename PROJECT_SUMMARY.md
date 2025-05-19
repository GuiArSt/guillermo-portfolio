# Project Summary: Guillermo A. Stumpf Portfolio Website

This document provides a summary of the structure, components, and key files for the Guillermo A. Stumpf personal portfolio website.

## Overview

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **UI Library:** [Shadcn UI](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Purpose:** Personal portfolio website showcasing professional skills, projects, publications, and providing contact/commission information.
*   **Language:** TypeScript

## Key Directories

*   `app/`: Contains the core application logic, pages, and routing using the Next.js App Router convention. Each subdirectory typically corresponds to a URL path.
*   `components/`: Houses reusable React components used throughout the application.
    *   `components/ui/`: Contains the specific Shadcn UI components added to the project via the CLI.
*   `public/`: Stores static assets like images, fonts, etc., accessible directly via URL.
*   `styles/`: (Potentially contains global or specific styles - *confirm presence if needed*) - Currently contains `app/globals.css`.
*   `lib/`: Likely contains utility functions and helper modules (standard convention).
*   `hooks/`: Likely contains custom React hooks (standard convention).
*   `Legacy/`: Contains older content, not directly part of the Next.js build but relevant context.
    *   `Legacy/Blog/`: Contains personal blog posts and writings (`blog.md`).
    *   `Legacy/Lebenslauf/`: Contains CV/Resume information (`CV.md`).

## Page Structure & Routing (`app/`)

The website pages are defined by the directory structure within `app/`:

*   `/` (Homepage): `app/page.tsx`
*   `/about`: `app/about/page.tsx` (or similar)
*   `/commission`: `app/commission/page.tsx` (or similar)
*   `/portfolio`: `app/portfolio/page.tsx` (or similar)
*   `/publications`: `app/publications/page.tsx` (or similar)

The root layout is defined in `app/layout.tsx`.

## Core Layout & Navigation

*   **Layout (`app/layout.tsx`):** Defines the root HTML structure, includes the global CSS (`globals.css`), sets up the `ThemeProvider` for light/dark mode, and renders the `Navbar` and `Footer` components around the main page content (`children`).
*   **Navigation Bar (`components/navbar.tsx`):**
    *   Sticky header component displayed on all pages.
    *   Includes links to Home (via site title), Portfolio, Publications, About Me.
    *   Highlights the active page link.
    *   Contains the `ThemeToggle` component.
    *   Includes a "Commission Me" button linking to `/commission`.
    *   Uses Tailwind CSS for styling and responsiveness (hides main links on mobile).

## Custom Components (`components/`)

These are bespoke components created for this project:

*   `navbar.tsx`: Main site navigation (as described above).
*   `footer.tsx`: Website footer section.
*   `theme-provider.tsx`: Wraps the application to provide theme context (from `next-themes`).
*   `theme-toggle.tsx`: Button component to switch between light and dark themes.
    *   **Usage:** `components/navbar.tsx`
*   `filter-pill.tsx`: Small UI element for filtering content (e.g., portfolio items).
    *   **Usage:** Currently unused in `app/**/*.tsx`.
*   `mini-timeline.tsx`: A compact version of the timeline component.
    *   **Usage:** Currently unused in `app/**/*.tsx`.
*   `publication-card.tsx`: Card layout for displaying individual blog posts or articles.
    *   **Usage:** Currently unused in `app/**/*.tsx`.
*   `reader-preview.tsx`: Component for showing a preview of text content.
    *   **Usage:** `app/portfolio/page.tsx`
*   `service-card.tsx`: Card layout for displaying offered services.
    *   **Usage:** Currently unused in `app/**/*.tsx`.
*   `skill-tag.tsx`: Small UI element for displaying individual skills.
    *   **Usage:** `app/about/page.tsx` (used multiple times)
*   `timeline.tsx`: Component for displaying events or experience chronologically.
    *   **Usage:** `app/about/page.tsx`

## Shadcn UI Components (`components/ui/`)

The project utilizes the following components from the Shadcn UI library:

*   `accordion`
*   `alert-dialog`
*   `alert`
*   `aspect-ratio`
*   `avatar`
*   `badge`
*   `breadcrumb`
*   `button`
*   `calendar`
*   `card`
*   `carousel`
*   `chart`
*   `checkbox`
*   `collapsible`
*   `command`
*   `context-menu`
*   `dialog`
*   `drawer`
*   `dropdown-menu`
*   `form`
*   `hover-card`
*   `input-otp`
*   `input`
*   `label`
*   `menubar`
*   `navigation-menu`
*   `pagination`
*   `popover`
*   `progress`
*   `radio-group`
*   `resizable`
*   `scroll-area`
*   `select`
*   `separator`
*   `sheet`
*   `sidebar`
*   `skeleton`
*   `slider`
*   `sonner`
*   `switch`
*   `table`
*   `tabs`
*   `textarea`
*   `toast`, `toaster`, `use-toast`
*   `toggle-group`
*   `toggle`
*   `tooltip`
*   `use-mobile`

## Design System & Styling

This section explains how visual styles and design tokens are managed.

### Color Palette

*   **Shadcn UI / Tailwind:** Colors are defined semantically using CSS variables in `app/globals.css`. The standard names (`--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`) have separate HSL values defined for light (`:root`) and dark (`.dark`) themes.
*   **Tailwind Configuration (`tailwind.config.ts`):** The `theme.extend.colors` section maps Tailwind color names (e.g., `primary`, `secondary`) to these CSS variables (`hsl(var(--primary))`). This allows using standard Tailwind classes like `bg-primary` which automatically adapt to the current theme.
*   **Custom Colors:** Additional custom color variables (`--navy`, `--navy-light`, `--navy-lighter`, `--navy-dark`, `--paper`, `--gold`, `--crimson`) are defined in `app/globals.css`. Helper classes (e.g., `.bg-navy`, `.text-gold`) are also defined there for easy application.
*   **Custom Backgrounds:** Complex background patterns (e.g., `.bg-mystical-geometric-*`) are defined in `app/globals.css` using CSS gradients and the custom color variables.

### Modifying Styles

*   **Global Styles & Base Values:** Modify `app/globals.css` for base HTML element styles, font imports, or global CSS rules.
*   **Theme Colors (Light/Dark):** Change the HSL values for the CSS variables under `:root` and `.dark` in `app/globals.css`.
*   **Custom Colors:** Add or modify the custom CSS variables (`--navy`, etc.) and associated utility classes in `app/globals.css`.
*   **Tailwind Theme (Spacing, Fonts, etc.):** Modify the `theme` object in `tailwind.config.ts`.
*   **Shadcn Component Base Styles:** Shadcn components are styled using Tailwind utilities. To change their *fundamental* look across the site (beyond color), you might need to adjust the CSS variables (`--radius`, `--border`, etc.) in `app/globals.css` or, in more advanced cases, copy the component code from `node_modules` into `components/ui` and modify its Tailwind classes directly (though this deviates from the standard Shadcn approach).
*   **Component-Specific Styles:** Add or modify Tailwind classes directly within individual component files (`.tsx` files in `components/` or `app/`).

## Key Exports & Reusable Logic

*   **`lib/utils.ts`:**
    *   Exports `cn`: A helper function combining `clsx` and `tailwind-merge` for conditionally applying Tailwind classes. Essential for building dynamic components.
*   **Component Files (`components/**/*.tsx`):**
    *   Typically export the React component function as the default export.
    *   May also export associated TypeScript types/interfaces if defined within the same file.
*   **Page Files (`app/**/page.tsx`):**
    *   Export the page component function as the default export, which Next.js uses for routing.
*   **Hooks (`hooks/`):
    *   `use-toast.ts`: Related to the Shadcn UI `Sonner`/`Toast` component system.
    *   `use-mobile.tsx`: (Purpose needs inspection if required - likely checks screen size).

## Styling

*   **Tailwind CSS:** Used for utility-first styling throughout the components and pages. Configuration is in `tailwind.config.ts`.
*   **Global Styles:** Base styles and Tailwind directives are in `app/globals.css`.
*   **CSS Variables:** Shadcn UI relies heavily on CSS variables for theming, defined in `app/globals.css`.

## Configuration Files

*   `next.config.mjs`: Next.js configuration file.
*   `package.json`: Lists project dependencies, scripts, and metadata.
*   `tsconfig.json`: TypeScript configuration.
*   `postcss.config.mjs`: PostCSS configuration (used by Tailwind).
*   `tailwind.config.ts`: Tailwind CSS theme and plugin configuration.
*   `components.json`: Shadcn UI configuration file.
*   `.gitignore`: Specifies intentionally untracked files for Git.
*   `pnpm-lock.yaml`: PNPM lock file for deterministic dependency installation.

This summary should provide a good starting point for navigating the codebase. 