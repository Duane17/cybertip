// src/data/sampleReports.ts

export const sampleReports = [
  {
    id: 1,
    website: "malawibank.mw",
    bugType: "SQL Injection",
    reportedDate: "January 15, 2025",
    status: "resolved" as const,
    description:
      "Critical SQL injection vulnerability found in login form allowing unauthorized database access and potential data breach.",
  },
  {
    id: 2,
    website: "tnm.co.mw",
    bugType: "Cross-Site Scripting (XSS)",
    reportedDate: "January 12, 2025",
    status: "in-review" as const,
    description:
      "Stored XSS vulnerability in customer portal comments section could allow malicious script execution.",
  },
  {
    id: 3,
    website: "airtel.mw",
    bugType: "Broken Authentication",
    reportedDate: "January 10, 2025",
    status: "open" as const,
    description:
      "Weak session management allows session hijacking and unauthorized account access through predictable tokens.",
  },
  {
    id: 4,
    website: "unima.ac.mw",
    bugType: "Insecure Direct Object Reference",
    reportedDate: "January 8, 2025",
    status: "resolved" as const,
    description:
      "Student records accessible by manipulating URL parameters, exposing sensitive academic and personal information.",
  },
  {
    id: 5,
    website: "malawi.gov.mw",
    bugType: "Cross-Site Request Forgery",
    reportedDate: "January 5, 2025",
    status: "in-review" as const,
    description:
      "CSRF vulnerability in admin panel allows unauthorized actions to be performed on behalf of authenticated users.",
  },
  {
    id: 6,
    website: "standardbank.co.mw",
    bugType: "File Upload Vulnerability",
    reportedDate: "January 3, 2025",
    status: "open" as const,
    description:
      "Unrestricted file upload in document submission form could allow malicious file execution on server.",
  },
  {
    id: 7,
    website: "mzuni.ac.mw",
    bugType: "Information Disclosure",
    reportedDate: "December 28, 2024",
    status: "resolved" as const,
    description:
      "Sensitive configuration files and database credentials exposed through misconfigured web server directory listing.",
  },
  {
    id: 8,
    website: "nbm.mw",
    bugType: "Broken Access Control",
    reportedDate: "December 25, 2024",
    status: "in-review" as const,
    description:
      "Privilege escalation vulnerability allows regular users to access administrative functions and sensitive data.",
  },
  {
    id: 9,
    website: "escom.mw",
    bugType: "Security Misconfiguration",
    reportedDate: "December 22, 2024",
    status: "open" as const,
    description:
      "Default credentials and exposed admin interfaces create multiple attack vectors for unauthorized system access.",
  },
];
