export const caseStudyContent = {
  nomadlyst: {
    title: "Nomadlyst",
    role: "Founding Software Engineer",
    timeline: "May 2025 – September 2025",
    image: "/projects/nomadlyst.webp",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "SendGrid",
      "Vercel",
      "CronJobs",
    ],

    tagline:
      "Automated remote-job aggregation + personalized email digests so job searching isn’t a daily tab-opening ritual.",

    // Keep these concise — sections carry the depth
    overview:
      "Nomadlyst is a full-stack remote job aggregation platform that scrapes multiple job boards, deduplicates and normalizes listings, and delivers personalized email digests based on user preferences.\n\nIt started as a personal solution to eliminate repetitive daily browsing, and evolved into a lightweight SaaS-style prototype focused on retention through saved filters, bookmarking, and scheduled digests.",

    problem:
      "Searching for high-quality remote roles is fragmented across many job boards, each with different filters and inconsistent data quality. Manually checking listings every day is time-consuming, and most aggregators include duplicates, expired posts, or irrelevant roles.\n\nI wanted one place to (1) discover relevant jobs, (2) track what I saved/applied to, and (3) get recurring updates automatically.",

    solution:
      "I built a scraper-driven ingestion pipeline that pulls jobs from multiple sources on a schedule, normalizes fields into a single schema, and prevents duplicates using hash-based IDs.\n\nOn top of that, I implemented a dashboard that supports filtering, bookmarking, and application tracking. A digest system generates daily/weekly emails based on saved user preferences and sends them through SendGrid.",

    impact:
      "200+ active subscribers within the first month\n\n1,500+ new jobs ingested per week via automated scrapers\n\n+20% engagement after introducing bookmarking + export workflows\n\n95+ Lighthouse scores across key pages\n\nUsers reported saving multiple hours per week by replacing manual browsing with personalized digests.",

    // You can keep development optional; if you include it, keep it “engineering” not story-time
    development: [
      {
        title: "Ingestion & Normalization",
        content:
          "Cron-scheduled scraper jobs fetch listings from multiple boards, parse HTML into a common shape, and normalize job fields (title, company, tags, URL, postedAt). Each record is assigned a stable hash-based ID to avoid duplicates across sources.",
      },
      {
        title: "Search + Tracking UX",
        content:
          "The dashboard supports keyword filtering and role-based browsing. Users can bookmark roles and mark jobs as applied to maintain a clean application workflow. Export support enables a lightweight ‘pipeline’ outside the app.",
      },
      {
        title: "Email Digest System",
        content:
          "Users opt into daily/weekly digests generated from their saved preferences. Digest generation queries relevant listings and sends curated results via SendGrid with templates tested across common email clients.",
      },
    ],

    challenges:
      "Scraper reliability was the biggest risk. Job boards change DOM structures, introduce anti-bot protections, and sometimes return partial/empty results. I mitigated this with fallback selectors, schema validation, and basic monitoring signals (jobs ingested per run, error rate).\n\nEmail delivery also required careful testing. SendGrid rate limits and inconsistent email-client rendering meant simplifying markup and validating templates across Gmail, Outlook, and Apple Mail.",

    lessons:
      "This project reinforced that reliability matters more than ‘cool features’ when data ingestion is involved. A scraper that breaks silently kills trust.\n\nIt also taught me that retention comes from workflows: saved filters, bookmarking, and scheduled digests created recurring value that a static job board doesn’t.",

    nextSteps:
      "Add monitoring + alerts for scraper failures, introduce a retry/dead-letter flow for failed ingestions, and build a lightweight admin panel for debugging sources.\n\nLonger term: premium features like role matching, spam filtering, and intelligent ranking could support monetization.",

    stats: [
      { label: "Active subscribers", value: "200+" },
      { label: "New jobs/week", value: "1,500+" },
      { label: "Avg Lighthouse", value: "95+" },
      { label: "Engagement lift", value: "+20%" },
    ],

    decisions: [
      {
        decision: "Cron-driven scrapers + normalized storage + dedupe hashing",
        why: "Keeps listings fresh, avoids duplicates across sources, and supports adding more job boards without rewriting the app.",
        tradeoffs: ["Scrapers can break; requires monitoring + alerting"],
      },
      {
        decision: "Preference-based digest generation (daily/weekly)",
        why: "Creates recurring value and retention by delivering relevant roles automatically instead of relying on manual browsing.",
        tradeoffs: ["Email deliverability, template testing, and rate limits become real concerns"],
      },
    ],

    highlights: [
      {
        title: "Scraper Pipeline",
        bullets: [
          "Source-specific parsers normalize job fields into a common schema",
          "Hash-based IDs prevent duplicates across sources",
          "Fallback selectors reduce breakage from DOM drift",
        ],
        image: {
          src: "/projects/nomadlyst-scraper.png",
          alt: "Scraper pipeline overview",
        },
      },
      {
        title: "Digest System",
        bullets: [
          "User preferences generate personalized daily/weekly digests",
          "Templates tested across Gmail / Outlook / Apple Mail",
        ],
        image: {
          src: "/projects/nomadlyst-digest.png",
          alt: "Email digest preview",
        },
      },
      {
        title: "Job Tracking UX",
        bullets: [
          "Bookmark + applied tracking to reduce repeated scanning",
          "Export to CSV to support external application workflows",
        ],
        image: {
          src: "/projects/nomadlyst-dashboard.png",
          alt: "Dashboard screenshot",
        },
      },
    ],

    sections: [
      {
        type: "diagram",
        title: "System Architecture",
        image: {
          src: "/diagrams/nomadlyst-architecture.png",
          alt: "Architecture: scrapers -> DB -> API -> UI -> SendGrid",
          caption:
            "Scrapers feed normalized storage; UI + digests query the same source of truth.",
        },
        notes:
          "Include: cron scheduler, scraper workers, MongoDB, Next.js API routes, UI, SendGrid, and monitoring/alerts.",
      },
      {
        type: "bullets",
        title: "Monitoring & Reliability",
        bullets: [
          "Alerts on scraper failures (DOM change / blocked requests / empty runs)",
          "Retry strategy for failed scrapes (even if simple)",
          "Basic metrics: jobs ingested per run, dedupe rate, email send success",
        ],
      },
      {
        type: "gallery",
        title: "Product Screenshots",
        images: [
          {
            src: "/projects/nomadlyst-home.png",
            alt: "Nomadlyst landing page",
            caption: "Clear value prop + CTA",
          },
          {
            src: "/projects/nomadlyst-filters.png",
            alt: "Job filters UI",
            caption: "Filter + bookmark flow",
          },
          {
            src: "/projects/nomadlyst-job.png",
            alt: "Job detail card",
            caption: "Save + track status",
          },
        ],
      },
    ],

    links: {
      "live": { label: "Live App", href: "https://www.nomadlyst.com", kind: "primary" },
      "home": { label: "Back to Home", href: "/#experience", kind: "secondary" },
    },
  },
};
