import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import myphoto from "@/app/assets/namanKumar.png";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naman Kumar - Backend & Blockchain Developer",
  description:
    "Experienced Backend and Blockchain Developer with over 2 years of expertise in building scalable, secure, and high-performance solutions.",
  keywords: [
    "Naman Kumar",
    "Backend Developer",
    "Blockchain Developer",
    "Web3",
    "Node.js",
    "Rust",
    "Solidity",
    "ICP",
    "Portfolio",
    "Personal Website",
    "Developer Portfolio",
    "Web Development",
    "Blockchain Technology",
    "Decentralized Applications",
    "Smart Contracts",
    "Internet Computer Protocol",
    "ICP Developer",
    "Web3 Developer",
    "Backend Web Developer",
    "Software Engineer",
    "Tech Portfolio",
    "Modern Portfolio",
    "Responsive Design",
    "Dark Theme",
    "Neumorphism",
    "Glassmorphism",
    "Tailwind CSS",
    "Framer Motion",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Backend Development",
    "API Development",
    "Database Management",
    "Cloud Computing",
    "DevOps",
    "Agile Development",
    "Software Development",
    "UI/UX Design",
    "User Interface",
    "User Experience",
    "Web Applications",
    "Mobile Applications",
    "Cross-Platform Development",
    "Open Source",
    "GitHub",
    "Portfolio Website",
    "Personal Branding",
    "Tech Stack",
    "Developer Skills",
    "Programming Languages",
    "Software Development Life Cycle",
    "SDLC",
    "Continuous Integration",
    "Continuous Deployment",
    "CI/CD",
    "Version Control",
    "Git",
    "Agile Methodology",
    "Scrum",
    "Kanban",
    "Project Management",
    "Software Architecture",
    "Microservices",
    "RESTful APIs",
    "GraphQL",
    "Web Security",
    "Performance Optimization",
    "Scalability",
    "Responsive Web Design",
    "Accessibility",
    "SEO Optimization",
    "Search Engine Optimization",
    "Content Management Systems",
    "CMS",
    "E-commerce Development",
    "Content Delivery Networks",
    "CDN",
    "Progressive Web Apps",
    "PWA",
    "Single Page Applications",
    "SPA",
    "Serverless Architecture",
    "Cloud Services",
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "GCP",
    "Docker",
    "Kubernetes",
    "Containerization",
    "Virtualization",
    "Infrastructure as Code",
    "IaC",
    "Monitoring and Logging",
    "Application Performance Monitoring",
    "APM",
    "User Authentication, Authorization",
    "OAuth",
    "JWT",
    "Session Management",
    "Data Privacy",
    "Data Protection",
    "Compliance",
    "GDPR",
    "HIPAA",
    "PCI DSS",
    "Software Testing",
    "Unit Testing",
    "Integration Testing",
    "End-to-End Testing",
    "Test Automation",
    "Quality Assurance",
    "QA",
    "Debugging Techniques",
    "Code Review",
    "Pair Programming",
    "Software Documentation",
    "Technical Writing",
    "Developer Community",
    "Tech Conferences",
    "Hackathons",
    "Open Source Contributions",
    "Networking",
    "Career Development",
    "Professional Growth",
    "Lifelong Learning",
    "Online Courses",
    "Web Development Trends",
    "Blockchain Trends",
    "Web3 Trends",
    "Future of Web Development",
    "Future of Blockchain",
    "Future of Web3",
  ],
  authors: [{ name: "Naman Kumar" }],
  creator: "Naman Kumar",
  publisher: "Naman Kumar",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://namankumar.live"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Naman Kumar - Backend & Blockchain Developer",
    description:
      "Experienced Backend and Blockchain Developer with over 2 years of expertise",
    url: "https://namankumar.live",
    siteName: "Naman Kumar Portfolio",
    images: [
      {
        url: myphoto.src,
        width: 1200,
        height: 630,
        alt: "Naman Kumar - Backend & Blockchain Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Kumar - Backend & Blockchain Developer",
    description:
      "Experienced Backend and Blockchain Developer with over 2 years of expertise",
    images: [{ url: myphoto.src }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="canonical" href="https://namankumar.live/" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
