import {
  IconBrandFirebase,
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
  IconBrandAws,
  IconBrandTailwind,
  IconBrandPrisma,
  IconShieldLock,
  IconBrandOpenai,
  IconBriefcase,
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const skills = [
  { name: 'TypeScript', des: 'JavaScript but better', icon: <IconBrandTypescript className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'React', des: 'JavaScript Library', icon: <IconBrandReact className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Next.js', des: 'React Framework', icon: <IconBrandNextjs className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Tailwind', des: 'CSS Framework', icon: <IconBrandTailwind className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Node.js', des: 'Backend', icon: <IconBrandNodejs className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'MongoDB', des: 'NoSQL Database', icon: <IconBrandMongodb className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Prisma', des: 'ORM Tool', icon: <IconBrandPrisma className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Firebase', des: 'BaaS Platform', icon: <IconBrandFirebase className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Auth.js', des: 'User Auth', icon: <IconShieldLock className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'AWS', des: 'Cloud Platform', icon: <IconBrandAws className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Git', des: 'Version Control', icon: <IconBrandGit className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'OpenAI API', des: 'AI Integration', icon: <IconBrandOpenai className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
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
    href: 'https://www.linkedin.com/in/sherard-d/',
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
    subheader: "AI Tagalog Coach",
    des: "An AI-powered Tagalog learning coach that lets users hold real-time voice conversations with a natural-sounding AI tutor and receive instant, personalized feedback on their grammar, vocabulary, and fluency.",
    img: "/projects/TagalogAI.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/tail.svg", "/tech/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/DevExchange",
    deployedLink: "https://www.tagalogai.com",
    delayed: "April 2026"
  },
  {
    id: 2,
    title: "Rizzlytics",
    subheader: "AI Dating App Profile Analyzer",
    des: "An AI-powered dating profile analysis system that evaluates photos and message threads using vision-based feedback pipelines and structured AI outputs.",
    img: "/projects/Rizzlytics.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/tail.svg", "/tech/mongodb.png"],
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
        <Link
          href="https://www.panasonic.aero"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nomadlyst"
          className="underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer"
        >
          <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
            Panasonic Avionics
          </h1>
        </Link>
        <h2 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl my-2 sm:my-6">
          Software Engineer
        </h2>
        <ul className="list-disc list-inside text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>
            Software engineering work completed through a University of California, Irvine industry-sponsored capstone partnership.
          </li>
          <li>
            Designing a dependency-aware backend service that validates aircraft software deployments across hardware variants,
            applications, configurations, and product features before fleet-wide rollout.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "May 2025 – Sep 2025",
    content: (
      <div>
        <Link
          href="https://www.nomadlyst.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nomadlyst"
          className="underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer"
        >
          <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
            Nomadlyst
          </h1>
        </Link>
        <h2 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl my-2 sm:my-6">
          Founding Software Engineer
        </h2>
        <ul className="list-disc list-inside text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>Launched a full-stack remote job aggregation platform that scrapes 2,000+ new listings weekly across
            major remote-work sites, driving rapid early traction and product-market validation.
          </li>
          <li>Architected end-to-end systems for scraping, data cleaning, and storage in MongoDB, enabling near real-time updates and a
            seamless discovery experience for users.
          </li>
          <li>Designed email delivery pipelines using SendGrid and serverless Next.js API routes, sending personalized daily and
            weekly job digests to 300+ early subscribers with {">"}98% delivery success.
          </li>
        </ul>
        <Image
          src="/projects/nomadlyst.webp"
          alt="nomadlyst"
          width={700}
          height={500}
          className="rounded-lg mb-4 border-2 border-[#d1b3ff]"
        />
      </div>
    ),
  },
];