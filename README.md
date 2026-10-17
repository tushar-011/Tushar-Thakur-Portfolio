<div align="center">

<img src="public/brand-mark.svg" alt="Tushar Thakur portfolio monogram" width="86" />

# Tushar Thakur — Personal Portfolio

**Data Science · AI · Automation · Full-Stack Development**

An interactive portfolio built as a digital engineering notebook: a place for projects, technical case studies, certifications, and the journey behind them.

[![React](https://img.shields.io/badge/React-19-20232a?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<!-- After deployment, replace the placeholder below with your actual URL. -->
**Live Website:** Coming soon · **GitHub:** [@tushar-011](https://github.com/tushar-011)

</div>

---

## Overview

This is the source code for my personal portfolio, designed to show **what I build, how I approach problems, and what I learn along the way**. Its visual style draws on graph paper, technical diagrams, annotations, and interactive data-inspired details instead of a conventional portfolio template.

The website is built with **React, TypeScript, TanStack Router/Start, Vite, and Tailwind CSS**. It features responsive pages, reusable components, route navigation, and previews for locally hosted PDF documents.

## Highlights

- **Home & About:** Introduction, background, interests, and ways to connect.
- **Featured Projects:** Selected work with descriptions, technical stacks, workflows, and direct repository links.
- **Projects Archive:** Seven projects covering AI automation, full-stack apps, data analytics, algorithms, and desktop software.
- **Technical Case Studies:** Blog gallery with PDF previews, open-in-browser, and download options.
- **Certifications:** Category-organized credentials, competitions, leadership, and social-impact records, with document previews.
- **My Journey:** Education, projects, and experience presented as a timeline.
- **Tech Stack:** Technologies and tools grouped by domain.
- **Resume:** Preview and download from the portfolio.
- **Contact:** Public links to GitHub, LinkedIn, email, and project idea submissions.
- **Interaction & Navigation:** Animated interfaces, a compact section navigator, footer navigation, back-to-top button, and custom error page.

## Featured Work

| Project | What it explores | Source |
|---|---|---|
| **Career Compass** | AI-assisted career guidance with assessments, Make.com, Gemini, and Google Sheets | [Repository](https://github.com/tushar-011/Career-Compass) |
| **StoreLedger** | Flask and MySQL billing, inventory, transactions, and reports | [Repository](https://github.com/tushar-011/StoreLedger) |
| **CivicMitra** | Civic issue reporting, maps, uploads, and tracking | [Repository](https://github.com/tushar-011/CivicMitra) |
| **LifeOS** | Offline Python productivity workspace | [Repository](https://github.com/tushar-011/LifeOS) |
| **R-Insight Studio** | Interactive data cleaning, analytics, and visualization in R Shiny | [Repository](https://github.com/tushar-011/R-Insight-Studio) |
| **SplitXpence** | Shared-expense groups, splitting, balances, and settlements in Spring Boot | [Repository](https://github.com/tushar-011/SplitXpense) |
| **AlgoBench** | Desktop algorithm benchmarking and system monitoring | [Repository](https://github.com/tushar-011/AlgoBench) |

## Technology

**Frontend:** React 19, TypeScript, Tailwind CSS 4, Radix UI, Lucide React  
**Application & routing:** TanStack Router / TanStack Start  
**Build & development:** Vite 8, Node.js, npm  
**Visual elements:** Recharts, CSS animations, custom React components

## Run Locally

**Requirements:** Node.js and npm compatible with the project's dependency versions.

```bash
# Clone your own portfolio repository after you publish it
git clone https://github.com/tushar-011/tushar-thakur-portfolio.git
cd tushar-thakur-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the **local address shown in the terminal** (port can vary).

### Useful Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Lint code
```

> **Deployment note:** This app uses TanStack Start. Use a hosting configuration compatible with the project’s runtime and server output; do not assume it can be deployed as an ordinary static Vite site.

## Project Organization

```text
public/
  brand-mark.svg          # Portfolio logo
  favicon.svg             # Browser icon
  images/                 # Portfolio images and blog covers
  blogs/                  # PDF case studies
  My_Certificates/        # Certificate PDFs grouped by category
  resume/                 # Resume PDF
src/
  components/             # Reusable UI and feature components
  lib/                    # Portfolio, blog, certificate and contact data
  routes/                 # Home, projects, blogs, certifications and root pages
  styles.css              # Global styles
```

**Content maintenance:** Most project metadata lives in `src/lib/portfolio-data.ts`; blogs in `src/lib/blog-data.ts`; certifications in `src/lib/certification-data.ts`; and public contact details in `src/lib/contact-info.ts`. PDF files and images are served from `public/`.

## Design Direction

The interface combines an **editorial notebook** with a **technical workspace**: warm neutrals, charcoal type, red and cyan highlights, grid textures, modular cards, and lightweight motion. The goal is to keep it expressive while still readable for recruiters, collaborators, and visitors.

## Contact

- **Email:** [artificial.thakur@gmail.com](mailto:artificial.thakur@gmail.com)
- **GitHub:** [github.com/tushar-011](https://github.com/tushar-011)
- **LinkedIn:** [Tushar Thakur](https://www.linkedin.com/in/tushar-thakur-8848a7396/)

---

<div align="center">

*Designed with curiosity · Built with purpose.*

**© Tushar Thakur**

</div>
