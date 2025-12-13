# Career Roadmap Web Application - Walkthrough

## Overview
The Career Roadmap Web Application is a modern, responsive, and interactive platform designed to guide users through various tech careers. It provides structured learning paths, curated resources, and a visual roadmap for 12+ career options.

## Features Implemented
### 1. Home Page
- **Hero Section**: Animated introduction with Framer Motion, inviting users to "Launch your tech career today".
- **Career Grid**: specific cards for 12 careers (Frontend, Backend, DevOps, AI, etc.) with hover effects and difficulty indicators.
- **CTA Section**: Encourages users to read more if they are unsure.

### 2. Career Details Page (`/career/[slug]`)
- **Dynamic Routing**: Pages are generated statically for each career defined in `careers.json`.
- **Roadmap Visualization**: A vertical, animated timeline showing stages of learning.
- **Interactive Steps**: Each step in the roadmap is expandable, showing description and recommended resources (links to docs, courses).
- **Metadata**: Dynamic SEO titles and descriptions for each career.

### 3. About Page
- **Mission Statement**: Explains the purpose of the platform.
- **Audience**: Breakdown of who the platform is for (Students, Switchers, Professionals).

### 4. Contact Page
- **Contact Form**: A functional-looking form with validation (using mock submission).
- **Contact Info**: Mock address and email details.

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data**: Static JSON files (`careers.json`, `roadmaps.json`)

## Verification
1. **Build**: Run `npm run build`. The project compiles successfully and generates static pages for all careers.
2. **Lint**: Run `npm run lint`. The project is free of linting errors.
3. **Navigation**:
   - Click "Explore Careers" on Home to scroll to grid.
   - Click any Career Card to go to `/career/[slug]`.
   - Scroll through the roadmap timeline.
   - Click a step to expand details.
   - Navigate to About and Contact pages via Navbar or Footer.

## Future Improvements
- Integrate a real backend or CMS if data needs to be dynamic.
- Add user authentication to track progress.
- Implement dark/light mode toggle (currently follows system preference or designated theme).
