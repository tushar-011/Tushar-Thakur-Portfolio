<div align="center">

<img src="public/brand-mark.svg" alt="Tushar Thakur portfolio logo" width="90" />

# 🌐 Tushar Thakur — Personal Portfolio

> **An interactive, notebook-inspired portfolio showcasing my work in Data Science, Artificial Intelligence, Automation, and Full-Stack Development.**

**MCA — Data Science · Chandigarh University**

[![React](https://img.shields.io/badge/React-19-20232A?logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![TanStack](https://img.shields.io/badge/TanStack-Start-FF4154)](https://tanstack.com/start) [![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

**Portfolio:** Deployment planned · **GitHub:** [@tushar-011](https://github.com/tushar-011)

</div>

---

## ✨ Highlights

- 🏠 Interactive home page with an introduction, profile portrait and featured work
- 🧑‍💻 About section, education and professional journey timeline
- 💻 Categorized tech stack, skills and data-inspired visual elements
- 🚀 Seven documented projects with individual GitHub repository links
- 🧭 Workflow diagrams and direct access to corresponding technical case studies
- 📝 Seven project blogs with in-page PDF reading and downloads
- 🎓 Technical, competition, leadership and social-impact certificate galleries
- 📄 Resume preview, open-in-browser and download options
- ✉️ Contact details and email-compose-based inquiry / project suggestion forms
- 🎨 Notebook-grid visuals, custom logo and favicon, subtle transitions
- ⬆️ Quick navigation, section indicator, footer links and back-to-top control
- 📱 Responsive layouts and a branded not-found page

---

# 📌 Table of Contents

- [About the Portfolio](#-about-the-portfolio)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Application Flow](#-application-flow)
- [Content and Document Management](#-content-and-document-management)
- [Featured Projects](#-featured-projects)
- [Requirements](#-requirements)
- [Configuration](#-configuration)
- [Running the Portfolio](#-running-the-portfolio)
- [Major Website Modules](#-major-website-modules)
- [Testing Checklist](#-testing-checklist)
- [Security and Privacy Notes](#-security-and-privacy-notes)
- [Future Improvements](#-future-improvements)
- [GitHub Setup](#-github-setup)
- [Deployment Notes](#-deployment-notes)
- [Project Status](#-project-status)
- [Author](#-author)

---

# 📖 About the Portfolio

This repository contains my **personal developer and data-science portfolio**, built to present not only finished work, but also the technical decisions and learning behind it. The visual direction is inspired by an **editorial notebook / engineering canvas**: graph-paper textures, annotated diagrams, modular cards, bold typography and restrained red/cyan accents.

The site is developed with **React and TypeScript**, using **TanStack Router / TanStack Start**, **Vite** and **Tailwind CSS**. Information about projects, blogs, certificates and contact details is managed through dedicated files, while images and PDF documents are served from `public/`.

The portfolio is intended for **recruiters, collaborators, project reviewers and fellow developers**.

---

# 🚀 Features

## 🏠 Home and About

A personal introduction, availability information, profile photography, areas of interest and selected work. An About section provides context about my education and interest in applying AI, data and automation to useful software.

## 💼 Projects Showcase

- Two featured projects on the homepage: **Career Compass** and **StoreLedger**
- A dedicated page showcasing **seven projects**
- Technology labels, summaries and compact workflow diagrams
- Direct project-specific GitHub links
- Links to related case studies and documentation
- An idea-sharing form that prepares an email draft for the visitor to send

## 📝 Blogs and Case Studies

Seven long-form project write-ups document problems, architecture, data flow, implementation choices, scope and learning outcomes. The blog gallery supports embedded PDF preview, opening in a new browser tab and downloading the document.

## 🎓 Certifications and Achievements

A category-filtered gallery of **technical training, competitions, leadership experiences and social impact certificates**. Certificate files can be opened in a preview, a new tab or downloaded. The content depends on the PDF assets included in `public/My_Certificates/`.

## 🛤️ My Journey and Tech Stack

A timeline presents selected educational and practical milestones. Technology cards organize programming, web, data, BI, AI, automation, database and development tools.

## 📄 Resume and Contact

The resume can be previewed or downloaded. GitHub, LinkedIn, email and phone links help visitors connect. **Email and idea forms open a prepared compose window; they do not send messages automatically or store submissions in a database.**

## ✨ Interface and Navigation

Custom branding, lightweight transitions, a compact section navigator, a shared footer, a back-to-top control and a custom 404 experience support navigation throughout the portfolio.

---

# 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Language | TypeScript |
| Routing / Application Framework | TanStack Router, TanStack Start |
| Development / Build | Vite |
| Styling | Tailwind CSS 4, global CSS |
| UI Primitives / Icons | Radix UI, Lucide React |
| Visualization | Recharts, custom UI graphics |
| Package Management | npm |
| Version Control | Git |
| Repository Hosting | GitHub |
| Editor | Visual Studio Code |
| Deployment Target | Vercel (planned; framework-compatible build must be verified) |

---

# 📁 Project Structure

```text
Tushar_Thakur_portfolio/
│
├── public/
│   ├── brand-mark.svg                # Brand mark
│   ├── favicon.svg                   # Browser favicon
│   ├── images/                       # Portraits and blog covers
│   ├── blogs/                        # Case-study PDFs
│   ├── My_Certificates/
│   │   ├── Technical/
│   │   ├── Competitions/
│   │   ├── Leadership/
│   │   └── Social_Impact/
│   └── resume/                       # Downloadable resume PDF
│
├── src/
│   ├── components/
│   │   ├── PortfolioShell.tsx         # Navigation, layout and footer
│   │   ├── PortfolioInteractions.tsx  # Navigation interactions
│   │   ├── DataVisuals.tsx            # Portfolio visuals
│   │   ├── BlogGallery.tsx            # Blog viewer
│   │   ├── CertificateGallery.tsx     # Certificate viewer
│   │   ├── JourneyTimeline.tsx        # Journey timeline
│   │   ├── TechStack.tsx              # Technology cards
│   │   ├── ResumePreview.tsx          # Resume viewer
│   │   └── ui/                        # Shared UI primitives
│   ├── lib/
│   │   ├── portfolio-data.ts         # Project and portfolio content
│   │   ├── blog-data.ts              # Blog metadata / PDF paths
│   │   ├── certification-data.ts     # Certificate metadata / paths
│   │   └── contact-info.ts           # Public contact links
│   ├── routes/
│   │   ├── __root.tsx                 # Root route and error handling
│   │   ├── index.tsx                  # Homepage
│   │   ├── projects.tsx               # Projects archive
│   │   ├── blogs.tsx                  # Blogs archive
│   │   └── certifications.tsx         # Certifications gallery
│   └── styles.css                     # Global styling
│
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
└── README.md
```

> This summarizes the main application files; auxiliary configuration files and additional UI modules may also be present.

---

# 🔄 Application Flow

```text
                    VISITOR / BROWSER
                           │
                           ▼
                 TANSTACK ROUTER / START
                           │
                           ▼
              REACT PAGES & SHARED COMPONENTS
                   │          │         │
                   ▼          ▼         ▼
                Projects     Blogs   Certificates
                   │          │         │
                   ▼          ▼         ▼
            portfolio-data  blog-data  certification-data
                   │          │         │
                   ▼          └────┬────┘
             GitHub links           ▼
                          PDF files in public/
                                   │
                                   ▼
                       Preview / Open / Download
```

### Contact flow

```text
Visitor selects Contact / Project Idea
                │
                ▼
         Fills in details
                │
                ▼
         Compose-email URL
                │
                ▼
       Visitor reviews and sends
```

> The contact form does **not** directly transmit a message to a custom backend.

---

# 🗂️ Content and Document Management

Most portfolio content is maintained in a few source files:

| File / Directory | Responsibility |
|---|---|
| `src/lib/portfolio-data.ts` | Projects, descriptions and other portfolio content |
| `src/lib/blog-data.ts` | Blog titles, summaries, covers and PDF paths |
| `src/lib/certification-data.ts` | Certificate titles, categories and document paths |
| `src/lib/contact-info.ts` | GitHub, LinkedIn, email, phone and resume location |
| `public/images/` | Portrait and cover-image assets |
| `public/blogs/` | Downloadable technical case studies |
| `public/My_Certificates/` | PDF certificate collection |
| `public/resume/` | Resume PDF |

**Asset paths:** A file at `public/blogs/LifeOS_Blog.pdf` is served as `/blogs/LifeOS_Blog.pdf`. Filenames, capitalization, spaces and extensions must match the code references exactly.

---

# 🌟 Featured Projects

| Project | Description | Repository |
|---|---|---|
| **Career Compass** | Student assessments and AI-assisted career guidance with Make.com, Gemini and Google Sheets | [GitHub](https://github.com/tushar-011/Career-Compass) |
| **StoreLedger** | Billing, inventory, customers and reporting using Flask and MySQL | [GitHub](https://github.com/tushar-011/StoreLedger) |
| **CivicMitra** | Civic issue reporting and tracking through React, Express, MySQL and mapping | [GitHub](https://github.com/tushar-011/CivicMitra) |
| **LifeOS** | Offline productivity tools, timers, notes, tasks and SQLite analytics | [GitHub](https://github.com/tushar-011/LifeOS) |
| **R-Insight Studio** | R Shiny workspace for cleaning, visualizing and analyzing datasets | [GitHub](https://github.com/tushar-011/R-Insight-Studio) |
| **SplitXpence** | Java and Spring Boot app for group expenses, balances and settlements | [GitHub](https://github.com/tushar-011/SplitXpense) |
| **AlgoBench** | Python desktop benchmark with sorting algorithms and system metrics | [GitHub](https://github.com/tushar-011/AlgoBench) |

---

# ✅ Requirements

- Node.js version compatible with the project's installed Vite and TanStack dependencies
- npm
- Git (to clone/push the repository)
- Modern browser such as Chrome, Edge or Firefox
- VS Code recommended for development

Check your installed tools:

```powershell
node -v
npm -v
git --version
```

---

# ⚙️ Configuration

Install dependencies using the committed lockfile:

```powershell
npm ci
```

The public portfolio documents, imagery and site content are supplied through the repository. No database server is required for the local portfolio features described here.

Any environment-specific credentials should be kept in local environment files and **never committed**. Existing framework or hosting settings should be reviewed before deployment, but are not changed by this README.

---

# ▶️ Running the Portfolio

### Option 1 — VS Code

1. Clone or download the portfolio repository.
2. Open the project root in VS Code (the folder containing `package.json`).
3. Open **Terminal → New Terminal**.
4. Run:

```powershell
npm ci
npm run dev
```

5. Open the URL shown by Vite in your terminal. During development the project has used `http://localhost:8080/`, but the port depends on your configuration.

### Option 2 — Command Prompt / PowerShell

```powershell
git clone https://github.com/tushar-011/tushar-thakur-portfolio.git
cd tushar-thakur-portfolio
npm ci
npm run dev
```

### Other useful commands

```powershell
npm run build      # Create production build
npm run preview    # Preview built application
npm run lint       # Check lint issues
```

---

# 🧩 Major Website Modules

```text
Personal Portfolio
│
├── Home
│   ├── Hero / About
│   ├── Featured Projects
│   ├── My Journey / Timeline
│   ├── Skills / Tech Stack
│   ├── Featured Certifications
│   ├── Featured Blogs
│   └── Contact
│
├── Projects
│   ├── Project Gallery
│   ├── Workflow Diagrams
│   ├── GitHub Links
│   └── Project Idea Form
│
├── Certifications
│   ├── Category Filters
│   └── PDF Preview / Download
│
├── Blogs
│   └── Case Study Preview / Download
│
└── Shared Experience
    ├── Navbar / Footer
    ├── Resume Preview
    ├── Floating Navigation
    ├── Back to Top
    └── Custom 404 Page
```

---

# 🧪 Testing Checklist

Before publishing, verify:

- [ ] `npm ci` completes successfully
- [ ] `npm run dev` starts and all routes load
- [ ] `npm run build` completes without errors
- [ ] Navbar links and mobile menu work
- [ ] Homepage sections render without layout overflow
- [ ] GitHub buttons open the correct repositories
- [ ] Project-to-blog links open the intended case studies
- [ ] Blog PDF preview and download work
- [ ] All certificate URLs return the intended PDFs (not a 404)
- [ ] Resume preview and download work
- [ ] Email compose and project idea forms open correctly
- [ ] Footer and Back to Top function correctly
- [ ] Keyboard access, focus indicators and modal close controls work
- [ ] Images and cards render at mobile, tablet and desktop sizes
- [ ] Unknown routes display the custom 404 page

---

# 🔒 Security and Privacy Notes

This is a **public-facing personal portfolio**, not a general-purpose user-account application.

- Never commit passwords, tokens, `.env` files or private configuration.
- Documents inside `public/` are accessible to visitors after deployment, including the resume and certificates.
- Review PDFs for personal identifiers you do not want public before committing.
- Avoid claiming external credential verification unless a genuine verification URL exists.
- The email-compose form prepares a message in the visitor's email client; it does not store information or automatically deliver messages.
- Avoid uploading unnecessary dependency folders or generated build outputs to GitHub.

---

# 🔮 Future Improvements

Potential enhancements after launch:

- Domain name and search engine optimization
- Performance and accessibility audits
- Server-delivered contact form with spam protection
- Automated build checks on GitHub
- More interactive project demos
- Additional technical articles and case studies
- Analytics with a privacy-conscious configuration

---

# 🌐 GitHub Setup

Create a **public** repository named `tushar-thakur-portfolio` (without initializing it with another README), then from the project root:

```powershell
git init
git add .
git status
git commit -m "Add completed Tushar Thakur portfolio"
git branch -M main
git remote add origin https://github.com/tushar-011/tushar-thakur-portfolio.git
git push -u origin main
```

If the folder is already a Git repository, **skip `git init`**. If `origin` already exists, inspect it with `git remote -v` before changing it.

---

# ☁️ Deployment Notes

**Deployment target: Vercel (planned).** This project uses **TanStack Start**, so the deployment must support its server/runtime output. Before going live:

1. Verify `npm run build` locally.
2. Import the GitHub repository into Vercel.
3. Confirm the correct TanStack Start/Vercel integration and settings for the installed package versions.
4. Deploy and test the production website, route refreshes, PDF assets and social links.
5. Add the verified live URL to this README and to the GitHub repository's **About → Website** field.

> This README does not claim the website has been deployed yet.

---

# 🏁 Project Status

**Portfolio feature development:** Implemented locally based on the project work completed so far.  
**GitHub publication:** Pending.  
**Production deployment:** Pending Vercel configuration and verification.

The portfolio represents ongoing learning and practical projects in **AI, data analytics, automation, software engineering and web development**.

---

# 👨‍💻 Author

### Tushar Thakur

**MCA — Data Science**  
**Chandigarh University**

[![GitHub](https://img.shields.io/badge/GitHub-tushar--011-181717?logo=github)](https://github.com/tushar-011)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Tushar%20Thakur-0A66C2?logo=linkedin)](https://www.linkedin.com/in/tushar-thakur-8848a7396/)
[![Email](https://img.shields.io/badge/Email-artificial.thakur%40gmail.com-EA4335?logo=gmail)](mailto:artificial.thakur@gmail.com)

---

<div align="center">

### Designed with curiosity · Built with purpose

**© Tushar Thakur**

</div>
