// Resume content rendered across the portfolio. Edit this file to update the site.

export type YearMonth = { year: number; month: number };

export type Job = {
  role: string;
  company: string;
  place: string;
  start: YearMonth;
  end: YearMonth;
  summary: string;
  highlights: string[];
};

export type ProjectStep = { label: string; text: string };

export type Project = {
  slug: string;
  title: string;
  year: string;
  type: string;
  tags: string[];
  stack: string[];
  summary: string;
  role: string;
  timeline: string;
  team: string;
  steps: ProjectStep[];
};

export type SkillGroup = { label: string; items: string[] };

export type Education = { period: string; degree: string; school: string };

export type Social = { label: string; href: string; icon: string };

export const profile = {
  firstName: "Oleh",
  lastName: "Ustymchyk",
  name: "Oleh Ustymchyk",
  title: "Software Developer",
  location: "Antwerp, Belgium",
  city: "Antwerp",
  email: "oleh.ustymchyk@gmail.com",
  phone: "+32471844196",
  linkedin: "https://www.linkedin.com/in/oleh-ustymchyk",
  linkedinLabel: "linkedin.com/in/oleh-ustymchyk",
  summary:
    "Backend-focused developer with 3+ years building scalable Node.js services and APIs, plus experience in PHP (Laravel/Symfony). Specialises in microservices architecture and high-throughput backend systems, with hands-on containerisation in every role: Dockerising services and databases, automating image builds and pushes to remote container registries, and deploying microservices each in their own container. Cloud experience primarily on AWS, with exposure to Azure and GCP. Writes test-covered, well-documented, maintainable code.",
};

// SVG path data (24x24 viewBox, stroked) for the social pills.
export const socials: Social[] = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: "M4 3.5h16a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5M8 10.5v6M8 7.5v.01M12 16.5v-6M12 13a2.5 2.5 0 0 1 5 0v3.5",
  },
  {
    label: "GitHub",
    href: "https://github.com/olegustimchik",
    icon: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "M4 5.5h16a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5M3.5 6.5l8.5 6.5l8.5-6.5",
  },
  {
    label: "Phone",
    href: `tel:${profile.phone}`,
    icon: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  },
];

export const experience: Job[] = [
  {
    role: "Software Developer",
    company: "Wearable Health Monitoring App",
    place: "Freelance, Remote",
    start: { year: 2026, month: 5 },
    end: { year: 2026, month: 9 },
    summary:
      "Built the BLE data pipeline from a wearable device through React Native to a NestJS backend, streaming real-time health data.",
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
    start: { year: 2025, month: 10 },
    end: { year: 2026, month: 5 },
    summary:
      "Backend developer in a 5-person team building microservices with gRPC, RabbitMQ, Docker and AWS.",
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
    start: { year: 2024, month: 5 },
    end: { year: 2025, month: 8 },
    summary:
      "Built a Laravel and Vue.js CRM, a Next.js and NestJS content platform and React Native apps, and owned their deployment.",
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
    start: { year: 2023, month: 5 },
    end: { year: 2024, month: 5 },
    summary:
      "Built web applications on AWS and REST APIs in Express with banking, weather and crypto integrations.",
    highlights: [
      "Integrated complex third-party APIs, including banking systems, OpenWeather, and cryptocurrency markets.",
      "Built and deployed scalable web applications on AWS (Lambda, S3, DynamoDB, RDS, Cognito), supporting 1000+ users with secure authentication.",
      "Developed high-performance REST APIs in Express, using SQS for async task queuing.",
    ],
  },
];

// Placeholder entries: replace every field with your own project write-ups.
const placeholderSteps: ProjectStep[] = [
  { label: "01 Problem", text: "Description coming soon." },
  { label: "02 Process", text: "Description coming soon." },
  { label: "03 Outcome", text: "Description coming soon." },
];

export const projects: Project[] = ["one", "two", "three", "four"].map((n) => ({
  slug: `project-${n}`,
  title: `Project ${n}`,
  year: "Year",
  type: "Project type",
  tags: [],
  stack: [],
  summary: "Project description coming soon.",
  role: "Role",
  timeline: "Timeline",
  team: "Team",
  steps: placeholderSteps,
}));

export const skills: SkillGroup[] = [
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "TypeScript", "JavaScript", "PHP", "Laravel"],
  },
  {
    label: "APIs & Messaging",
    items: ["REST", "GraphQL", "gRPC", "Protobuf", "Twirp", "RabbitMQ", "Microservices"],
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
    label: "Frontend",
    items: ["React", "Next.js", "Vue", "React Native", "JSX/TSX", "Tailwind CSS", "SCSS"],
  },
  { label: "Testing", items: ["Jest", "React Testing Library", "Sinon", "Chai", "PHPUnit"] },
  { label: "Languages", items: ["English (B2)", "Ukrainian (Native)"] },
];

export const education: Education[] = [
  {
    period: "Graduated 2024",
    degree: "Bachelor of Computer Science",
    school: "Igor Sikorsky Kyiv Polytechnic Institute",
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthIndex = ({ year, month }: YearMonth): number => year * 12 + (month - 1);

export const formatMonths = (total: number): string => {
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [
    years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "",
    months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "",
  ];
  return parts.filter(Boolean).join(" ");
};

// "May 2026 – Sep 2026"
export const formatPeriod = ({ start, end }: Job): string =>
  `${MONTHS[start.month - 1]} ${start.year} – ${MONTHS[end.month - 1]} ${end.year}`;

// Inclusive length of a job, e.g. "1 year 4 months".
export const formatLength = ({ start, end }: Job): string =>
  formatMonths(monthIndex(end) - monthIndex(start) + 1);

// Total distinct months worked across all jobs, so overlapping months count once.
export const totalExperience = (jobs: Job[]): string => {
  const months = new Set<number>();
  jobs.forEach(({ start, end }) => {
    for (let m = monthIndex(start); m <= monthIndex(end); m += 1) months.add(m);
  });
  return formatMonths(months.size);
};
