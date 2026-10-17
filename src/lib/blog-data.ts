export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  pdf: string;
  cover: string;
};

// Add each exported cover image at public/images/blogs/<slug>.webp.
// Missing covers gracefully render a typography-based fallback card.
export const blogPosts: BlogPost[] = [
  {
    slug: "lifeos", title: "LifeOS", subtitle: "Building an Offline Personal Productivity System", category: "Python · Desktop",
    description: "How I connected tasks, planning, notes, focus timers, and productivity analytics in one offline Python workspace powered by SQLite.",
    tags: ["Python", "CustomTkinter", "SQLite", "Analytics"], pdf: "/blogs/LifeOS_Blog.pdf", cover: "/images/blogs/lifeos.webp",
  },
  {
    slug: "storeledger", title: "StoreLedger", subtitle: "Building a Database-Driven Billing & Inventory System", category: "DBMS · Full Stack",
    description: "A behind-the-scenes look at building billing, stock management, customer wallets, and reporting with Flask and MySQL transactions.",
    tags: ["Flask", "MySQL", "Transactions", "Inventory"], pdf: "/blogs/StoreLedger_Blog.pdf", cover: "/images/blogs/storeledger.webp",
  },
  {
    slug: "civicmitra", title: "CivicMitra", subtitle: "A Digital Bridge Between Citizens and Civic Action", category: "Civic Tech · Full Stack",
    description: "Explore the design of a citizen-first issue reporting prototype with maps, photo evidence, tracking IDs, React, Express, and MySQL.",
    tags: ["React", "Express", "MySQL", "Maps"], pdf: "/blogs/CivicMitra_Blog.pdf", cover: "/images/blogs/civicmitra.webp",
  },
  {
    slug: "career-compass", title: "Career Compass", subtitle: "Designing an AI-Assisted Career Guidance Experience", category: "AI · Automation",
    description: "From student assessments to career roadmaps: the frontend and Make.com workflow behind an AI-assisted guidance prototype using Gemini.",
    tags: ["JavaScript", "Make.com", "Gemini", "Google Sheets"], pdf: "/blogs/Career_Compass_Blog.pdf", cover: "/images/blogs/career-compass.webp",
  },
  {
    slug: "algobench", title: "AlgoBench", subtitle: "Benchmarking System Performance with Algorithms", category: "Algorithms · Python",
    description: "Turning sorting algorithms, CPU and memory tests, and live system metrics into a desktop benchmarking tool with saved history.",
    tags: ["Python", "Algorithms", "psutil", "SQLite"], pdf: "/blogs/AlgoBench_Blog.pdf", cover: "/images/blogs/algobench.webp",
  },
  {
    slug: "r-insight-studio", title: "R-Insight Studio", subtitle: "Building an Offline Data Analysis Studio", category: "Data Science · R",
    description: "A modular R Shiny app that takes datasets from import and cleaning through statistics, charts, regression, and export in one reactive flow.",
    tags: ["R", "Shiny", "ggplot2", "Statistics"], pdf: "/blogs/RInsightStudio_Blog.pdf", cover: "/images/blogs/r-insight-studio.webp",
  },
  {
    slug: "splitxpence", title: "SplitXpence", subtitle: "Building a Smarter Group Expense Sharing System", category: "Java · Full Stack",
    description: "How group expenses become equal shares, balances, settlements, and reports in a Java Spring Boot application backed by MySQL.",
    tags: ["Java", "Spring Boot", "Hibernate", "MySQL"], pdf: "/blogs/SplitXpence_Blog.pdf", cover: "/images/blogs/splitxpence.webp",
  },
];
