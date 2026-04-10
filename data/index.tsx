import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconCode,
  IconFileDescription,
  IconHome,
  IconMail,
  IconUser,
  IconBrandGit,
  IconBrandTailwind,
  IconBrandOpenai,
  IconBriefcase,
  IconBrandPython,
  IconCoffee,
  IconBrandCpp,
  IconBrandJavascript,
  IconSql,
  IconHierarchy,
  IconSchema,
  IconTerminal2,
} from "@tabler/icons-react";
import React from "react";
import {LinkPreview} from "@/components/ui/link-preview";

export const skills = [
  { name: 'Python', des: 'General Purpose', icon: <IconBrandPython className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Java', des: 'Enterprise Software', icon: <IconCoffee className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'C++', des: 'System Programming', icon: <IconBrandCpp className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'JavaScript', des: 'Web Scripting', icon: <IconBrandJavascript className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'TypeScript', des: 'JavaScript but better', icon: <IconBrandTypescript className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Node.js', des: 'Runtime Environment', icon: <IconBrandNodejs className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'React', des: 'Frontend Library', icon: <IconBrandReact className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Next.js', des: 'React Framework', icon: <IconBrandNextjs className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'SQL', des: 'Database Management', icon: <IconSql className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Neo4j', des: 'Graph Database', icon: <IconHierarchy className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'MongoDB', des: 'NoSQL Database', icon: <IconBrandMongodb className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Mongoose', des: 'ODM for MongoDB', icon: <IconSchema className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Tailwind', des: 'CSS Framework', icon: <IconBrandTailwind className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'OpenAI API', des: 'AI Integration', icon: <IconBrandOpenai className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Claude Code', des: 'CLI-based AI Agent', icon: <IconTerminal2 className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Git', des: 'Version Control', icon: <IconBrandGit className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
];

export const minimalNavBarLinks = []

export const navBarLinks = [
	{
    title: 'Home',
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#',
  },
  {
    title: 'About',
    icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#about',
  },
  {
    title: 'Experience',
    icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#experience',
  },
  {
    title: 'Projects',
    icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#projects',
  },
  {
    title: 'Contact',
    icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#contact',
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://www.linkedin.com/in/sherard-dalaguit/',
  },
  {
    title: 'GitHub',
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://github.com/sherard-dalaguit',
  },
  {
    title: 'Resume',
    icon: <IconFileDescription className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
		href: 'https://drive.google.com/file/d/1huYFlkzMxKq45cqxBwQtL-5u_WI_CFVT/view'
  }
]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sherard-dalaguit",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sherard-d/"
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/sherard_dalaguit/"
  },
];

export const projects = [
  {
    id: 1,
    title: "TagalogAI",
    subheader: "AI Tagalog Conversation Coach",
    des: "An AI-powered Tagalog learning coach that lets users hold real-time voice conversations with a natural-sounding AI tutor and receive instant, personalized feedback on their grammar, vocabulary, and fluency.",
    img: "/projects/TagalogAI2.webp",
    iconLists: ["/tech/re.svg", "/tech/next.svg", "/tech/openai.svg", "/tech/vapi.svg", "/tech/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/tagalogai",
    deployedLink: "https://www.tagalogai.com",
  },
  {
    id: 2,
    title: "Rizzlytics",
    subheader: "AI Dating App Profile Analyzer",
    des: "An AI-powered dating profile analysis system that evaluates photos and message threads using vision-based feedback pipelines and structured AI outputs.",
    img: "/projects/Rizzlytics.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/openai.svg", "/tech/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/rizzlytics",
    deployedLink: "https://www.rizzlytics.com",
  },
  {
    id: 3,
    title: "SWEOverflow",
    subheader: "StackOverflow Clone App",
    des: "A platform where developers can share insights, collaborate on projects, and engage in peer-to-peer learning to enhance their skills and foster innovation.",
    img: "/projects/SWEOverflow.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/tail.svg", "/tech/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/SWEOverflow",
    deployedLink: "https://swe-overflow.vercel.app/",
  },
  {
    id: 4,
    title: "TeamSync",
    subheader: "Team Messaging Platform",
    des: "Inspired by Slack, TeamSync facilitates seamless collaboration and communication among team members through instant messaging and integrated project management features.",
    img: "/projects/TeamSync.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/tail.svg", "/tech/convex.webp"],
    githubLink: "https://github.com/sherard-dalaguit/TeamSync",
    deployedLink: "https://team-sync-brown.vercel.app/",
  },
];

export const timeline = [
  {
    title: "Jan 2026 – Present",
    content: (
      <div>
        <LinkPreview url="https://www.panasonic.aero" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">
          <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
            Panasonic Avionics
          </h1>
        </LinkPreview>
        <h2 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl my-2 sm:my-6">
          Software Engineering Consultant
        </h2>
        <ul className="list-disc list-inside text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>
            Designed a Python backend validation service preventing incompatible aircraft software deployments by
            modeling hardware, software, and configuration constraints prior to fleet rollout.
          </li>
          <li>
            Architected a Neo4j dependency graph schema supporting semantic version ranges, hard vs. soft requirements,
            and incompatibilities across 250,000+ deployable artifacts.
          </li>
          <li>
            Implemented a deterministic resolution engine that evaluates proposed deployments in {"<"}1s by traversing
            dependency graphs across 1,500+ aircraft targets.
          </li>
          <li>
            Shifted release validation to pre-deployment constraint evaluation, generating actionable incompatibility
            explanations and eliminating 90%+ of modeled fleet-scale failure scenarios.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "May 2025 – Sep 2025",
    content: (
      <div>
        <LinkPreview url="https://www.openlyst.io" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">
          <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
            OpenLyst
          </h1>
        </LinkPreview>
        <h2 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl my-2 sm:my-6">
          Founding Engineer
        </h2>
        <ul className="list-disc list-inside text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>
            Built and launched a production job aggregation platform by ingesting and normalizing data from
            multiple remote job sources, processing 2,000+ new listings weekly.
          </li>
          <li>
            Designed end-to-end ingestion pipelines using custom scrapers and MongoDB persistence, reducing data
            duplication and enabling consistent, near real-time updates.
          </li>
          <li>
            Implemented serverless email delivery workflows with Next.js API routes and SendGrid, delivering
            personalized job digests to 300+ subscribers with {">"}98% delivery success.
          </li>
        </ul>
      </div>
    ),
  },
];