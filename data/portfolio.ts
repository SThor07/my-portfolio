import {
  BrainCircuit,
  CloudCog,
  Database,
  GitBranch,
  Layers3,
  LucideIcon,
  Rocket,
  ScanSearch
} from "lucide-react";

export type Stat = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  year: string;
  headline: string;
  description: string;
  metrics: string[];
  stack: string[];
};

export type ProjectItem = {
  id: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  accent: string;
  href?: string;
  demoHref?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
  icon: LucideIcon;
};

// Central content file for fast customization of copy, links, metrics, and section data.
export const profile = {
  name: "Shrivatsasingh Rathore",
  headline: [
    "Building intelligent products across AI, backend systems, and user experience.",
    "Software engineer for product-grade AI tools, backend workflows, and high-signal user experiences.",
    "Shipping polished systems where performance, architecture, and product judgment all matter."
  ],
  intro:
    "I build product-facing systems at the intersection of backend engineering, applied AI, and data infrastructure. The work I care about most sits where architecture has to be clean, performance has to be measurable, and the end result still has to feel sharp to the user.",
  location: "Tempe, Arizona",
  email: "shrivrath9@gmail.com",
  github: "https://github.com/SThor07",
  linkedin: "https://www.linkedin.com/in/shrivatsasingh-rathore/",
  resume: "/files/Shrivatsasingh_Rathore_Resume.pdf",
  // Replace this if you move the contact form to a different Formspree inbox.
  formspreeEndpoint: "https://formspree.io/f/xldnjpjq"
};

export const heroStats: Stat[] = [
  { value: "35%", label: "lower search latency in production" },
  { value: "40%", label: "faster data processing on AWS workflows" },
  { value: "<300ms", label: "response latency across core product flows" }
];

export const quickStats: Stat[] = [
  { value: "Python · AWS · SQL", label: "core engineering stack" },
  { value: "LLM · RAG · ML", label: "AI systems and model-driven products" },
  { value: "Backend + Product", label: "systems built with shipping mindset" },
  { value: "MS @ ASU", label: "Data Science, Analytics and Engineering" }
];

export const focusAreas = [
  "AI systems and LLM workflows",
  "Backend engineering and reliability",
  "Scalable product architecture",
  "Data platforms and experimentation pipelines"
];

export const tickerItems = [
  "Python",
  "TypeScript",
  "REST APIs",
  "AWS",
  "RAG",
  "Firebase",
  "Query Optimization",
  "Node.js",
  "Chrome Extensions",
  "System Design",
  "Product Engineering",
  "Data Pipelines"
];

export const about = {
  heading:
    "M.S. in Data Science at Arizona State University, building backend systems, AI-powered tools, and product-focused software with a strong systems mindset.",
  paragraphs: [
    "I gravitate toward work where software engineering, AI applications, and product thinking overlap. That means low-latency APIs, scalable data flows, recommendation logic, local and cloud model integration, and application architecture that can survive beyond a prototype.",
    "Recent work includes production search optimization in a Flutter product, AWS-backed experimentation infrastructure for machine learning research, and AI-assisted developer tooling with local inference and browser-native UX. I care about performance, usability, and practical impact in equal measure."
  ],
  currentlyFocused: [
    "Product engineering for intelligent applications",
    "Backend performance, observability, and reliability",
    "Practical AI tooling for real user workflows"
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "superstars",
    company: "Superstars Inc.",
    role: "Software Developer Intern",
    period: "Sep 2025 - Dec 2025",
    year: "2025",
    headline: "Optimized production search systems and backend reliability in a live cross-platform product.",
    description:
      "Designed optimized search APIs, improved caching and query execution workflows, and worked on backend architecture, debugging, and deployments inside an active Flutter product environment.",
    metrics: [
      "35% lower application search latency",
      "Better scalability through improved models and API handling",
      "Higher production reliability through logging, root cause analysis, and monitoring"
    ],
    stack: ["Flutter", "Backend APIs", "Caching", "Structured Logging", "Agile"]
  },
  {
    id: "research",
    company: "Dr. D. Y. Patil Unitech Society",
    role: "Research Assistant",
    period: "Aug 2023 - Jun 2024",
    year: "2023-2024",
    headline: "Built backend and cloud infrastructure for machine learning experimentation at scale.",
    description:
      "Developed automated ingestion pipelines, modular benchmarking workflows, and AWS-backed services that made experimentation faster, more repeatable, and easier to evaluate across deep learning architectures.",
    metrics: [
      "40% faster data processing through EC2, S3, and Lambda optimization",
      "Scalable experimentation via Node.js and Express backend pipelines",
      "Peer-reviewed research published on CNN-based plant disease detection"
    ],
    stack: ["Node.js", "Express", "AWS EC2", "AWS S3", "AWS Lambda", "CNNs"]
  },
  {
    id: "bajaj",
    company: "Bajaj Auto Ltd.",
    role: "Engineering Intern",
    period: "Feb 2023 - Mar 2023",
    year: "2023",
    headline: "Turned operational data into faster reporting and decision-ready business visibility.",
    description:
      "Built Power BI dashboards and workflow automation that reduced reporting friction and helped stakeholders act on financial and operational signals with less manual effort.",
    metrics: [
      "40% improvement in reporting efficiency",
      "30% reduction in manual data processing",
      "Clearer stakeholder decisions through operational and financial analysis"
    ],
    stack: ["Power BI", "Data Transformation", "Analytics", "Reporting Automation"]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "wardrobe",
    name: "AI-Powered Wardrobe & Outfit Recommendation App",
    category: "Featured product build",
    summary: "A full-stack recommendation product designed to make wardrobe decisions faster, more contextual, and production-ready.",
    problem:
      "Choosing outfits is repetitive and slow when wardrobe data is unstructured and recommendations lack context.",
    solution:
      "Built a full-stack Flutter application with Firebase Auth, Firestore, and Cloud Storage, paired with a structured rule-based recommendation engine and scalable data modeling.",
    impact: [
      "Reduced outfit selection time by 40%",
      "Improved recommendation relevance by 30%",
      "Maintained sub-300 ms latency across core workflows",
      "Led end-to-end delivery from backend integration to production architecture"
    ],
    stack: ["Flutter", "Firebase Auth", "Firestore", "Cloud Storage", "State Management"],
    accent: "from-[#7df2d2]/20 via-[#0f1825] to-[#0f1825]"
  },
  {
    id: "kai",
    name: "Kai.v3: AI-Powered LeetCode Problem-Solving Mentor",
    category: "Open-source AI tool",
    summary: "An AI coding mentor built to guide problem solving inside the browser without collapsing into solution dumping.",
    problem:
      "Coding practice tools often either dump solutions or force users to context switch out of the problem-solving flow.",
    solution:
      "Built a Manifest V3 Chrome extension with injected overlays, background workers, and a Node.js + Express local inference server using Ollama to deliver guided hints without solution dumping.",
    impact: [
      "Delivered real-time hints, debugging guidance, and optimization nudges",
      "Reduced context-switch friction directly inside LeetCode problem pages",
      "Enabled low-latency local LLM inference with controlled prompt pipelines",
      "Added post-submission feedback, explanation modes, and instant snapshot hotkeys"
    ],
    stack: ["Chrome Extension", "Manifest V3", "Node.js", "Express", "Ollama", "LLMs"],
    accent: "from-[#8ea5ff]/20 via-[#0f1825] to-[#0f1825]",
    href: "https://github.com/SThor07/kai_leetcodementor"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Dart", "Java", "SQL"],
    icon: BrainCircuit
  },
  {
    category: "Backend",
    items: ["REST APIs", "Backend Services", "Modular Architecture", "System Integration"],
    icon: Layers3
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Firebase Firestore", "Relational Modeling", "Query Optimization"],
    icon: Database
  },
  {
    category: "Cloud",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "Firebase", "GCP Fundamentals"],
    icon: CloudCog
  },
  {
    category: "Tools",
    items: ["Git", "Debugging", "Logging", "Testing", "CI/CD", "Agile/Scrum"],
    icon: GitBranch
  }
];

export const education = [
  {
    school: "Arizona State University",
    degree: "M.S. in Data Science, Analytics and Engineering",
    period: "Aug 2024 - May 2026"
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "B.Tech. in Computer Science",
    period: "Aug 2020 - Apr 2024"
  }
];

export const closing = {
  line: "Interested in software engineering, backend, AI/ML, data, and startup-focused roles where strong systems and product judgment matter.",
  links: [
    { label: "GitHub", href: profile.github, icon: Rocket },
    { label: "LinkedIn", href: profile.linkedin, icon: ScanSearch },
    { label: "Email", href: `mailto:${profile.email}`, icon: BrainCircuit }
  ]
};
