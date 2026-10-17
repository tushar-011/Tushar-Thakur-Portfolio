export type PortfolioRoute = "/" | "/projects" | "/certifications" | "/blogs";

export type NavItem = {
  label: string;
  to: PortfolioRoute;
  hash?: string;
};

export const navItems: readonly NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/", hash: "about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/", hash: "skills" },
  { label: "Certifications", to: "/certifications" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/", hash: "contact" },
] as const;

export const heroSkills = [
  "DATA SCIENCE",
  "GENERATIVE AI",
  "PYTHON",
  "AUTOMATION",
  "VISUALIZATION",
  "JAVA",
] as const;

export const scrollSections = [
  { id: "home", label: "01 — INTRO" },
  { id: "about", label: "02 — ABOUT" },
  { id: "skills", label: "03 — SKILLS" },
  { id: "projects", label: "04 — WORK" },
  { id: "services", label: "05 — SERVICES" },
  { id: "education", label: "06 — EDUCATION" },
  { id: "contact", label: "07 — CONTACT" },
] as const;

export type ScrollSectionLabel = (typeof scrollSections)[number]["label"];

export const interests = [
  "AI",
  "Data",
  "Automation",
  "Visualization",
  "GenAI",
  "Web Development",
  "Experimentation",
] as const;

export const education = [
  {
    title: "MCA — Data Science",
    place: "Chandigarh University",
    detail: "Master of Computer Applications · Specialization: Data Science",
    status: "Currently pursuing",
  },
  {
    title: "Bachelor of Computer Applications",
    place: "DAV College Chandigarh",
    detail: "Affiliated with Panjab University",
    status: "Graduated: 2026",
  },
] as const;

export const explorations = [
  {
    title: "Deloitte Virtual Internship",
    label: "virtual industry exposure",
    copy: "Practical learning through professional problem-solving and industry-oriented tasks.",
  },
  {
    title: "Independent Project Development",
    label: "build → test → learn",
    copy: "Personal projects, automation experiments, hackathon work, web applications and data-focused builds.",
  },
  {
    title: "Freelance Journey",
    label: "open now",
    copy: "Currently open to first serious freelance collaborations around Data, AI, automation and development.",
  },
] as const;

export const skillNodes = [
  {
    title: "Data Science",
    tools: ["Python", "R", "MySQL", "Data analysis"],
    className: "md:col-start-2 md:row-start-1",
  },
  {
    title: "Data Visualization",
    tools: ["Power BI", "Tableau", "Excel"],
    className: "md:col-start-4 md:row-start-1",
  },
  {
    title: "AI Automation",
    tools: ["Make.com", "AI models", "Workflow automation"],
    className: "md:col-start-1 md:row-start-2",
  },
  {
    title: "Generative AI",
    tools: ["Prompt systems", "AI workflows", "Tooling"],
    className: "md:col-start-5 md:row-start-2",
  },
  {
    title: "Python",
    tools: ["Automation", "Data utilities", "Scripts"],
    className: "md:col-start-2 md:row-start-3",
  },
  {
    title: "Java",
    tools: ["OOP", "Problem solving", "Backend logic"],
    className: "md:col-start-4 md:row-start-3",
  },
] as const;

export const secondarySkills = [
  "JavaScript",
  "HTML",
  "C",
  "C++",
  "Full-stack development",
  "Database",
  "MongoDB",
  "MySQL",
  "Excel",
  "Tableau",
  "Power BI",
  "Make.com",
] as const;

export const services = [
  {
    title: "Data Analysis & Dashboards",
    copy: "Transform raw data into clear business insight.",
    tools: ["Power BI", "Tableau", "Excel", "Python"],
  },
  {
    title: "AI Automation",
    copy: "Build intelligent automated workflows and pipelines.",
    tools: ["Make.com", "AI models", "Generative AI", "Automation pipelines"],
  },
  {
    title: "Generative AI Solutions",
    copy: "Develop AI-assisted workflows, tools and intelligent applications.",
    tools: ["GenAI", "Workflow design", "Smart tools"],
  },
  {
    title: "Python Automation",
    copy: "Automate repetitive processes and build data-processing utilities.",
    tools: ["Python", "Scripts", "Data processing"],
  },
  {
    title: "Excel Automation",
    copy: "Create efficient workbooks, automated reports and analytical workflows.",
    tools: ["Excel", "Reports", "Dashboards"],
  },
  {
    title: "Full-Stack Web Development",
    copy: "Build complete websites with frontend, backend, database and authentication.",
    tools: ["Frontend", "Backend", "Database", "Auth", "Automation"],
  },
] as const;

export const projects = [
  {
    slug: "career-compass",
    title: "Career Compass",
    label: "AI-Assisted Career Guidance · Student Assessment & Automation",
    category: "AI",
    description: "A student-focused career guidance prototype connecting assessments, Make.com workflows, Gemini AI and Google Sheets to produce personalized career direction and roadmap content.",
    problem: "Students need structured ways to evaluate skills, interests and career possibilities.",
    solution: "Connect assessment responses to automation, AI-assisted guidance, Sheets records and email workflows.",
    tags: ["GEMINI AI", "MAKE.COM", "GOOGLE SHEETS", "JAVASCRIPT", "AUTOMATION"],
    flow: ["Student Assessment", "Make.com Webhook", "Gemini + Sheets", "Career Guidance"],
    github: "https://github.com/tushar-011/Career-Compass",
    blogSlug: "career-compass",
    accent: "cyan",
    status: "Academic prototype · Integrations require configuration",
  },
  {
    slug: "storeledger",
    title: "StoreLedger",
    label: "Full-Stack Billing & Inventory · Flask + MySQL",
    category: "WEB",
    description: "A store-management web application connecting billing, inventory, customer wallets, suppliers and reports with transaction-safe MySQL logic.",
    problem: "Disconnected stock, billing and customer records make store operations harder to reconcile.",
    solution: "Use Flask and relational MySQL transactions, stored routines and views to keep operational records consistent.",
    tags: ["PYTHON", "FLASK", "MYSQL", "TRANSACTIONS", "INVENTORY"],
    flow: ["Create Bill", "Validate Cart", "MySQL Transaction", "Update Stock + Invoice"],
    github: "https://github.com/tushar-011/StoreLedger",
    blogSlug: "storeledger",
    accent: "signal",
    status: "Local web application",
  },
  {
    slug: "civicmitra",
    title: "CivicMitra",
    label: "Citizen-Focused Civic Issue Reporting · React + Express",
    category: "HACKATHONS",
    description: "A civic-tech prototype for submitting issues with locations and evidence, generating tracking IDs and exploring reports on interactive maps.",
    problem: "Civic problems are hard to submit, track and visualize using fragmented reporting channels.",
    solution: "Connect a responsive citizen interface with report uploads, an Express API, MySQL records and Leaflet maps.",
    tags: ["REACT", "EXPRESS", "MYSQL", "LEAFLET", "HACKATHONS"],
    flow: ["Report Issue", "Attach Location", "Store in MySQL", "Track by ID"],
    github: "https://github.com/tushar-011/CivicMitra",
    blogSlug: "civicmitra",
    accent: "signal",
    status: "Hackathon prototype · Not a production civic service",
  },
  {
    slug: "lifeos",
    title: "LifeOS",
    label: "Offline Personal Productivity System · Python Desktop",
    category: "EXPERIMENTS",
    description: "An offline productivity workspace for tasks, planning, notes, focus timers, activity history and performance insights.",
    problem: "Productivity tasks get scattered across disconnected applications.",
    solution: "Keep tasks, timer sessions, notes and analytics connected through CustomTkinter and SQLite.",
    tags: ["PYTHON", "CUSTOMTKINTER", "SQLITE", "ANALYTICS"],
    flow: ["Plan Tasks", "Run Focus Timer", "Save to SQLite", "Review Analytics"],
    github: "https://github.com/tushar-011/LifeOS",
    blogSlug: "lifeos",
    accent: "signal",
    status: "Offline Windows desktop application",
  },
  {
    slug: "r-insight-studio",
    title: "R-Insight Studio",
    label: "Interactive Data Analysis Studio · R Shiny",
    category: "DATA",
    description: "An offline R Shiny application for importing and cleaning datasets, exploring statistics, generating charts, testing hypotheses and exporting results.",
    problem: "Repeatedly cleaning and analyzing data in scripts makes exploratory work fragmented.",
    solution: "Use a shared reactive dataset that feeds data cleaning, statistical analysis, visualization and CSV export.",
    tags: ["R", "SHINY", "GGPLOT2", "STATISTICS", "DATA"],
    flow: ["Import Dataset", "Clean + Transform", "Analyze + Plot", "Export CSV"],
    github: "https://github.com/tushar-011/R-Insight-Studio",
    blogSlug: "r-insight-studio",
    accent: "cyan",
    status: "Local R Shiny application",
  },
  {
    slug: "splitxpence",
    title: "SplitXpence",
    label: "Group Expense Sharing · Java Spring Boot",
    category: "WEB",
    description: "A Java full-stack application for tracking group expenses, equal splits, balances, settlements and financial reports with MySQL persistence.",
    problem: "Shared expenses become difficult to reconcile as groups grow.",
    solution: "Model friends, groups, transactions and participant shares using Spring Boot, Hibernate and MySQL.",
    tags: ["JAVA", "SPRING BOOT", "HIBERNATE", "MYSQL", "WEB"],
    flow: ["Create Group", "Record Expense", "Calculate Shares", "Settle Balances"],
    github: "https://github.com/tushar-011/SplitXpense",
    blogSlug: "splitxpence",
    accent: "signal",
    status: "Local full-stack web application",
  },
  {
    slug: "algobench",
    title: "AlgoBench",
    label: "Desktop System Benchmarking · Python + Algorithms",
    category: "EXPERIMENTS",
    description: "A desktop benchmarking tool that connects CPU and memory workloads, sorting algorithm comparisons, stress tests, charts and SQLite history.",
    problem: "Algorithm demos rarely show real system impact or keep accessible results.",
    solution: "Run repeatable tests in a responsive Python interface and summarize results with weighted scores.",
    tags: ["PYTHON", "ALGORITHMS", "PSUTIL", "SQLITE", "DATA"],
    flow: ["Choose Benchmark", "Run Workloads", "Monitor System", "Save Results"],
    github: "https://github.com/tushar-011/AlgoBench",
    blogSlug: "algobench",
    accent: "signal",
    status: "Offline Windows desktop application",
  },
] as const;

export const certifications = [
  {
    name: "Certification placeholder",
    issuer: "Issuing organization",
    date: "Date to be added",
    credential: "Credential link pending",
    skills: ["Skill 01", "Skill 02"],
  },
  {
    name: "Data / AI certificate slot",
    issuer: "Provider name pending",
    date: "Date to be added",
    credential: "Credential link pending",
    skills: ["Data", "AI"],
  },
  {
    name: "Automation certificate slot",
    issuer: "Provider name pending",
    date: "Date to be added",
    credential: "Credential link pending",
    skills: ["Automation", "Workflows"],
  },
] as const;

export const blogPlaceholders = [
  {
    date: "Draft slot",
    category: "Automation",
    title: "How Automation Can Make Student Career Planning Smarter",
    readingTime: "4 min read",
    excerpt: "Placeholder note for a future learning article. Replace with Tushar's real post when ready.",
  },
  {
    date: "Draft slot",
    category: "Data Science",
    title: "What I Learned Building Data-First Student Projects",
    readingTime: "5 min read",
    excerpt: "A future article slot for project lessons, experiments and reflections.",
  },
  {
    date: "Draft slot",
    category: "Generative AI",
    title: "Using GenAI Workflows Without Losing Practicality",
    readingTime: "3 min read",
    excerpt: "A placeholder for notes from hands-on AI workflow exploration.",
  },
] as const;
/**
 * Compatibility for the existing LabStrip in DataVisuals.tsx.
 * The former "future projects" cards are gone; the strip now shows real skills.
 * Keep this export until LabStrip is refactored to use heroSkills directly.
 */
export const futureProjectSlots: readonly string[] = heroSkills;
