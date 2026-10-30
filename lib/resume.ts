// Resume content rendered by the portfolio page. Edit this file to update the site.

export type Contact = {
  location: string;
  email: string;
  phone: string;
  linkedin: { label: string; href: string };
};

export type Job = {
  role: string;
  company: string;
  place: string;
  period: string;
  highlights: string[];
};

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  href?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Education = {
  degree: string;
  school: string;
  year: string;
};

export const profile = {
  name: "Oleh Ustymchyk",
  title: "Software Developer",
  summary:
    "Backend-focused developer with 3+ years building scalable Node.js services and APIs, plus experience in PHP (Laravel/Symfony). Specialises in microservices architecture and high-throughput backend systems, with hands-on containerisation in every role: Dockerising services and databases, automating image builds and pushes to remote container registries, and deploying microservices each in their own container. Cloud experience primarily on AWS, with exposure to Azure and GCP. Writes test-covered, well-documented, maintainable code.",
};

export const contact: Contact = {
  location: "Antwerp, Belgium",
  email: "oleh.ustymchyk@gmail.com",
  phone: "+32471844196",
  linkedin: {
    label: "linkedin.com/in/oleh-ustymchyk",
    href: "https://www.linkedin.com/in/oleh-ustymchyk",
  },
};

export const experience: Job[] = [
  {
    role: "Software Developer",
    company: "Wearable Health Monitoring App",
    place: "Freelance, Remote",
    period: "May 2026 – September 2026",
    highlights: [
      "Built a full BLE (Bluetooth Low Energy) data pipeline, from a wearable device through custom native iOS/Android modules in React Native to a NestJS backend, streaming real-time health data (heart rate, steps, fall detection).",
      "Developed native BLE modules for iOS and Android in React Native to receive and parse real-time sensor data from the device at 10 readings/second (1 req/100ms), integrating with C++ firmware code.",
      "Designed an adaptive sync strategy where the app forwarded routine health data to the backend once per minute per user to reduce server load, while triggering immediate transmission on fall-detection events for critical alerting.",
      "Designed a NestJS backend to ingest, validate, and store streaming health metrics, supporting multi-user access so family members could view a user's live health statistics and share data directly with their doctors.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Red Rocket",
    place: "Remote",
    period: "October 2025 – May 2026",
    highlights: [
      "Collaborated within a 5-person backend team, owning task breakdown and coordinating closely with frontend and PM teams to keep delivery on track.",
      "Systematized documentation of microservices and system architectures, cutting onboarding time for new engineers and improving long-term codebase maintainability.",
      "Deployed and configured the microservices with Docker, each service running in its own container; automated pulling and pushing of images to the remote container registry as part of the delivery flow.",
      "Identified backend performance bottlenecks through usage and performance analysis, then reduced API response times by introducing targeted caching for high-traffic endpoints.",
      "Designed a microservices architecture using gRPC and RabbitMQ, cutting inter-service communication latency by ~20%.",
      "Integrated AWS services including S3, Lambda and EC2 to build scalable, cost-effective serverless solutions.",
      "Maintained 90–100% unit test coverage of backend logic using Jest.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Orange Team",
    place: "Kyiv, Ukraine",
    period: "May 2024 – August 2025",
    highlights: [
      "Built a full-stack CRM system using Laravel and Vue.js with deep Facebook Ads API integration, enabling real-time tracking of 60000+ user interactions per day on landing pages.",
      "Owned the full deployment lifecycle on VPS: installing, configuring, and optimizing Apache and Nginx with custom proxy setups.",
      "Architected a content platform using Next.js and NestJS with server-side rendering (SSR), improving SEO performance and cutting page load times.",
      "Set up an automated CI/CD pipeline for iOS and Google Play releases (build signing, versioning, store submission), reducing release turnaround from manual multi-step submissions to a repeatable, automated flow.",
      "Built and shipped cross-platform React Native apps for iOS and Android, including App Store/Google Play publishing, with low-latency WebSocket synchronization for live data updates, tuning platform-specific styling and native modules to deliver a consistent user experience.",
      "Maintained 90–100% unit test coverage across frontend (React Testing Library) and backend logic using the Sinon/Chai suite.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Lambda Team",
    place: "Remote",
    period: "May 2023 – May 2024",
    highlights: [
      "Integrated complex third-party APIs, including banking systems, OpenWeather, and cryptocurrency markets.",
      "Built and deployed scalable web applications on AWS (Lambda, S3, DynamoDB, RDS, Cognito), supporting 1000+ users with secure authentication.",
      "Developed high-performance REST APIs in Express, using SQS for async task queuing.",
    ],
  },
];

// Placeholder entries: replace name, summary and stack with your own project write-ups.
export const projects: Project[] = [
  {
    name: "Project one",
    summary: "Project description coming soon.",
    stack: [],
  },
  {
    name: "Project two",
    summary: "Project description coming soon.",
    stack: [],
  },
  {
    name: "Project three",
    summary: "Project description coming soon.",
    stack: [],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "TypeScript", "JavaScript", "PHP", "Laravel"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue", "React Native", "JSX/TSX", "Tailwind CSS", "SCSS"],
  },
  {
    label: "Cloud & Infra",
    items: [
      "AWS (Lambda, S3, SQS, DynamoDB, RDS, Cognito)",
      "Google Cloud Platform",
      "Nginx",
      "Apache",
      "VPS",
    ],
  },
  {
    label: "APIs & Messaging",
    items: ["REST", "GraphQL", "gRPC", "Protobuf", "Twirp", "RabbitMQ", "Microservices"],
  },
  {
    label: "Data",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "MongoDB",
      "DynamoDB",
      "TypeORM",
      "Prisma",
      "Sequelize",
      "Drizzle ORM",
    ],
  },
  {
    label: "Testing",
    items: ["Jest", "React Testing Library", "Sinon", "Chai", "PHPUnit"],
  },
  {
    label: "Languages",
    items: ["English (B2)", "Ukrainian (Native)"],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    school: "Igor Sikorsky Kyiv Polytechnic Institute",
    year: "Graduated 2024",
  },
];
