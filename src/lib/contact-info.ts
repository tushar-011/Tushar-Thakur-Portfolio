/** Single source of truth for public portfolio contact details. */
export const contactInfo = {
  name: "Tushar Thakur",
  email: "artificial.thakur@gmail.com",
  phoneDisplay: "+91 9056866336",
  phoneHref: "tel:+919056866336",
  github: "https://github.com/tushar-011",
  linkedin: "https://www.linkedin.com/in/tushar-thakur-8848a7396/",
  resume: "/resume/Tushar-Thakur-Resume.pdf",
} as const;

export const emailHref = `mailto:${contactInfo.email}`;

/** Browser-based Gmail compose; visitors sign in to their own Gmail account. */
export function gmailComposeUrl(subject = "", body = "") {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: contactInfo.email });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export const gmailComposeHref = gmailComposeUrl();
