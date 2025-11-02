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
import CaseStudy from "@/components/CaseStudy";
import { caseStudyContent } from "./caseStudies";

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
    deployedLink: "https://dev-exchange-sherard-dalaguits-projects.vercel.app/",
    delayed: "February 2026"
  },
  {
    id: 2,
    title: "Rizzlytics",
    subheader: "AI Tinder Analyzer",
    des: "An AI-powered Tinder analyzer built with React and Next.js that leverages the OpenAI API to give you actionable insights on your profile photos and message threads.",
    img: "/projects/in_progress.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/tail.svg", "/tech/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/DevExchange",
    deployedLink: "https://dev-exchange-sherard-dalaguits-projects.vercel.app/",
    delayed: "December 2025"
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
    title: "KapeChat",
    subheader: "Tinder But For Job Seekers",
    des: "A web application that connects job seekers with potential employers through a swipe-based interface, allowing users to match and chat with companies that align with their career goals.",
    img: "/projects/KapeChat.webp",
    iconLists: ["/tech/js.svg", "/tech/re.svg", "/tech/tail.svg", "/tech/firebase.svg"],
    githubLink: "https://github.com/Jollibuilders/FIP_Project",
    deployedLink: "",
  },
  {
    id: 5,
    title: "ICSearch",
    subheader: "Information Retrieval Search Engine",
    des: "Python Search Engine that efficiently organizes and retrieves over 55,000 documents while presenting clear, ranked results through an intuitive graphical interface.",
    img: "/projects/ICSearch.webp",
    iconLists: ["/tech/python.svg"],
    githubLink: "https://github.com/sherard-dalaguit/ICSearch",
    deployedLink: "",
  },
];

export const timeline = [
  {
    title: "July 2025 – Present",
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
          <li>Launched and scaled a full-stack remote job aggregation platform that automates scraping 2,000+ new listings weekly across
            major remote-work sites, driving rapid early traction and product-market validation.
          </li>
          <li>Architected end-to-end systems for scraping, data cleaning, and storage in MongoDB, enabling near real-time updates and a
            seamless discovery experience for users.
          </li>
          <li>Built automated email digests with SendGrid and serverless Next.js API routes, delivering personalized daily and
            weekly job recommendations to 300+ early subscribers with {">"}98% delivery success.
          </li>
          <li>Led growth-driven iteration cycles, refining data pipelines and UX based on user engagement analytics
            to improve job relevance and retention.
          </li>
        </ul>
        <Image
          src="/projects/nomadlyst.webp"
          alt="remote radar"
          width={800}
          height={500}
          className="rounded-lg mb-4 border-2 border-[#d1b3ff]"
        />
        {/*<CaseStudy*/}
        {/*  link="/remote-radar"*/}
        {/*  name="Remote Radar"*/}
        {/*  steps={[*/}
        {/*    {*/}
        {/*      title: "Problem",*/}
        {/*      description: "Most digital nomads' problem...",*/}
        {/*      content: caseStudyContent['remote-radar'].problem,*/}
        {/*      img: "/projects/remote_radar.png"*/}
        {/*    },*/}
        {/*    {*/}
        {/*      title: "Solution",*/}
        {/*      description: "How it was solved...",*/}
        {/*      content: caseStudyContent['remote-radar'].solution,*/}
        {/*      img: "/projects/remote_radar.png"*/}
        {/*    },*/}
        {/*    {*/}
        {/*      title: "Result",*/}
        {/*      description: "The outcome...",*/}
        {/*      content: caseStudyContent['remote-radar'].result,*/}
        {/*      img: "/projects/remote_radar.png"*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*/>*/}
      </div>
    ),
  },
  // {
  //   title: "May 2025 - June 2025",
  //   content: (
  //     <div>
  //       <Link
  //         href="https://www.aurumisai.com"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         aria-label="Remote Radar"
  //         className="underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer"
  //       >
  //         <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
  //           Aurumis AI
  //         </h1>
  //       </Link>
  //       <h2 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl my-2 sm:my-6">
  //         Freelance Software Engineer
  //       </h2>
  //       <ul className="list-disc list-inside text-md sm:text-lg lg:text-xl mb-8 space-y-4">
  //         <li>Developed a responsive portfolio site for a B2B AI Agency using Next.js, TypeScript, TailwindCSS, and Framer Motion,
  //           ensuring fast load times and polished UI animations.
  //         </li>
  //         <li>Enhanced the site’s visibility through SEO optimizations, <span className="text-[#d1b3ff] font-bold">achieving a 98/100 Lighthouse score </span>
  //           and <span className="text-[#d1b3ff] font-bold">increasing organic search impressions by 25%</span> in initial indexing.
  //         </li>
  //       </ul>
  //       <Image
  //         src="/projects/AurumisAI.png"
  //         alt="Aurumis AI"
  //         width={800}
  //         height={500}
  //         className="rounded-lg mb-4 border-2 border-[#d1b3ff]"
  //       />
  //       {/*<CaseStudy*/}
  //       {/*  link="/aurumis-ai"*/}
  //       {/*  name="Aurumis AI"*/}
  //       {/*  steps={[*/}
  //       {/*    {*/}
  //       {/*      title: "Problem",*/}
  //       {/*      description: "Aurumis AI's problem...",*/}
  //       {/*      content: caseStudyContent['aurumis-ai'].problem,*/}
  //       {/*      img: "/projects/AurumisAI.png"*/}
  //       {/*    },*/}
  //       {/*    {*/}
  //       {/*      title: "Solution",*/}
  //       {/*      description: "How it was solved...",*/}
  //       {/*      content: caseStudyContent['aurumis-ai'].solution,*/}
  //       {/*      img: "/projects/AurumisAI.png"*/}
  //       {/*    },*/}
  //       {/*    {*/}
  //       {/*      title: "Result",*/}
  //       {/*      description: "The outcome...",*/}
  //       {/*      content: caseStudyContent['aurumis-ai'].result,*/}
  //       {/*      img: "/projects/AurumisAI.png"*/}
  //       {/*    },*/}
  //       {/*  ]}*/}
  //       {/*/>*/}
  //     </div>
  //   ),
  // },

];