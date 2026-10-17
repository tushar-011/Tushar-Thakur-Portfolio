/**
 * Certificate registry. Paths map to files in public/My_Certificates/.
 * Keep spelling, capitalization and underscores exactly as the real files.
 * URLs are encoded per filename so spaces and & work in browser PDF viewers.
 */
export type CertificateCategory = "Technical" | "Competitions" | "Leadership" | "Social Impact";
export type Certificate = {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  category: CertificateCategory;
  file: string;
  verifyUrl?: string;
  featured?: boolean;
};

const file = (folder: string, filename: string) =>
  `/My_Certificates/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;

export const certificates: Certificate[] = [
  // Technical — 14 files
  { id: "deloitte", title: "Data Analytics Job Simulation", issuer: "Deloitte Australia (Forage)", date: "2025", category: "Technical", file: file("Technical", "DeloitteJobSim-25.pdf"), featured: true },
  { id: "infosys-deep", title: "Deep Learning", issuer: "Infosys Springboard", date: "2026", category: "Technical", file: file("Technical", "infosys-deeplearn-26.pdf"), featured: true },
  { id: "build-ai", title: "Build with AI", date: "2026", category: "Technical", file: file("Technical", "BuildwithAI-26.pdf"), featured: true },
  { id: "ai-be10x", title: "AI Tools Workshop", issuer: "be10x", date: "2025", category: "Technical", file: file("Technical", "AI BE10X Certificate.pdf") },
  { id: "fullstack", title: "AI Fullstack", date: "2026", category: "Technical", file: file("Technical", "AIFullstack-26.pdf") },
  { id: "ds-ml", title: "Data Science & Machine Learning", date: "2025", category: "Technical", file: file("Technical", "DataScience&ML-25.pdf") },
  { id: "infosys-ai", title: "Artificial Intelligence", issuer: "Infosys Springboard", date: "2026", category: "Technical", file: file("Technical", "infosys-ai-26.pdf") },
  { id: "infosys-cv", title: "Computer Vision", issuer: "Infosys Springboard", date: "2026", category: "Technical", file: file("Technical", "infosys-cv-26.pdf") },
  { id: "infosys-ds", title: "Data Science", issuer: "Infosys Springboard", date: "2026", category: "Technical", file: file("Technical", "infosys-ds-26.pdf") },
  { id: "infosys-nlp", title: "Natural Language Processing", issuer: "Infosys Springboard", date: "2026", category: "Technical", file: file("Technical", "infosys-nlp-26.pdf") },
  { id: "infosys-robo", title: "Robotics", issuer: "Infosys Springboard", date: "2026", category: "Technical", file: file("Technical", "infosys-robo-26.pdf") },
  { id: "ai-assistant", title: "AI Assistant", date: "2025", category: "Technical", file: file("Technical", "AI-Assistant-25.pdf") },
  { id: "tushar-certificate", title: "AI Master", issuer: "Outskill", date: "2026", category: "Technical", file: file("Technical", "Tushar_Thakur_Certificate.pdf") },
  { id: "webtech", title: "Web Technology Webinar", date: "2025", category: "Technical", file: file("Technical", "Webtech-25.pdf") },

  // Competitions — 5 files
  { id: "promptcraft", title: "AI Promptcraft Competition", issuer: "Chandigarh University", date: "2026", category: "Competitions", file: file("Competitions", "AI_Promptcraft-26.pdf"), featured: true },
  { id: "tekathon", title: "Tekathon — Internal SIH Round Winner", issuer: "Chandigarh University", date: "2026", category: "Competitions", file: file("Competitions", "Tekathon-26.pdf") },
  { id: "ai-competition", title: "AI Competition", date: "2026", category: "Competitions", file: file("Competitions", "AI_Competition-26.pdf") },
  { id: "excel-competition", title: "Excel Competition", date: "2025", category: "Competitions", file: file("Competitions", "Excel_Competition-25.pdf") },
  { id: "hackathon", title: "Hackathon", date: "2025", category: "Competitions", file: file("Competitions", "Hackathon-25.pdf") },

  // Leadership — 2 files
  { id: "ncc", title: "National Cadet Corps", issuer: "NCC", date: "2020", category: "Leadership", file: file("Leadership", "NCC-20.pdf") },
  { id: "military-literature", title: "Military Literature Festival", date: "2018", category: "Leadership", file: file("Leadership", "military_litreture-18.pdf") },

  // Social impact — 4 files
  { id: "dkms", title: "DKMS Volunteering", issuer: "DKMS", category: "Social Impact", file: file("Social_Impact", "DKMS Certificate.pdf") },
  { id: "blood-24", title: "Blood Donation", issuer: "PGIMER", date: "2024", category: "Social Impact", file: file("Social_Impact", "Blood_Donation-24.pdf") },
  { id: "blood-25", title: "Blood Donation", issuer: "PGIMER", date: "2025", category: "Social Impact", file: file("Social_Impact", "Blood_Donation-25.pdf") },
  { id: "blood-26", title: "Blood Donation", issuer: "PGIMER", date: "2026", category: "Social Impact", file: file("Social_Impact", "Blood_Donation-26.pdf") },
];

export const featuredCertificates = certificates.filter((certificate) => certificate.featured);
export const certificateCategories = ["All", "Technical", "Competitions", "Leadership", "Social Impact"] as const;
