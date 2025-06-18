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
  IconShieldLock, IconBrandOpenai
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import CaseStudy from "@/components/CaseStudy";
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
    // href: 'https://drive.google.com/file/d/1zlTZ-HZOx8RJT1mkQE3g2qmn7pPiZxlW/view',
    href: 'https://drive.google.com/file/d/1JGZ10xseERVZ6v3PkFqpF4MdQ90NN2Dr/view',
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
    title: "Rizzlytics",
    subheader: "AI Tinder Analyzer",
    des: "An AI-powered Tinder analyzer built with React and Next.js that leverages the OpenAI API to give you actionable insights on your profile photos and message threads.",
    img: "/in_progress.webp",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/convex.webp"],
    githubLink: "https://github.com/sherard-dalaguit/DevExchange",
    deployedLink: "https://dev-exchange-sherard-dalaguits-projects.vercel.app/",
    delayed: "August 2025"
  },
  {
    id: 2,
    title: "SWEOverflow",
    subheader: "StackOverflow Clone App",
    des: "A platform where developers can share insights, collaborate on projects, and engage in peer-to-peer learning to enhance their skills and foster innovation.",
    img: "/DevExchange_3.webp",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/c.svg", "/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/DevExchange",
    deployedLink: "https://dev-exchange-sherard-dalaguits-projects.vercel.app/",
  },
  {
    id: 3,
    title: "KapeChat",
    subheader: "Tinder But For Job Seekers",
    des: "A web application that connects job seekers with potential employers through a swipe-based interface, allowing users to match and chat with companies that align with their career goals.",
    img: "/KapeChat.webp",
    iconLists: ["/re.svg", "/js.svg", "/tail.svg", "/firebase.svg"],
    githubLink: "https://github.com/Jollibuilders/FIP_Project",
    deployedLink: "",
  },
  {
    id: 4,
    title: "ICSearch",
    subheader: "Information Retrieval Search Engine",
    des: "Python Search Engine that efficiently organizes and retrieves over 55,000 documents while presenting clear, ranked results through an intuitive graphical interface.",
    img: "/ICSearch.webp",
    iconLists: ["/python.svg"],
    githubLink: "https://github.com/sherard-dalaguit/ICSearch",
    deployedLink: "",
  },
];

export const timeline = [
  {
    title: "June 2025 – Present",
    content: (
      <div>
        <Link
          href="https://www.remoteradar.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Remote Radar"
          className="underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer"
        >
          <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
            Remote Radar
          </h1>
        </Link>
        <h2 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl my-2 sm:my-6">
          Technical Founder
        </h2>
        <ul className="list-disc list-inside text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>Engineered and deployed a full-stack automated job platform using Next.js, TailwindCSS, and PostgreSQL,
            continuously <span className="text-[#d1b3ff] font-bold">scraping over 300 new remote job postings</span> per week from major remote job boards.
          </li>
          <li>Integrated an email subscription service using Next.js API routes and SendGrid, delivering daily and
            weekly curated <span className="text-[#d1b3ff] font-bold">remote job listings to 100+ subscribers, boosting platform engagement by 20%</span>.
          </li>
          <li>Built a user-friendly dashboard allowing job filtering, bookmarking, and export functionalities, streamlining workflow and
            driving a <span className="text-[#d1b3ff] font-bold">2x increase in targeted job application volume</span> within the first month.
          </li>
          <li>Attracted an initial user base of <span className="text-[#d1b3ff] font-bold">150+ beta users within the first two weeks</span>,
            validating demand and incorporating feedback into iterative feature improvements.
          </li>
        </ul>
        <Image
          src="/remote_radar.png"
          alt="remote radar"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
        <CaseStudy
          steps={[
            {
              title: "Problem",
              description: "Most digital nomads' problem...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/remote_radar.png"
            },
            {
              title: "Solution",
              description: "How it was solved...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/remote_radar.png"
            },
            {
              title: "Result",
              description: "The outcome...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/remote_radar.png"
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "April 2025 – Present",
    content: (
      <div>
        <Link
          href="https://www.clariusai.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Remote Radar"
          className="underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer"
        >
          <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
            Clarius AI
          </h1>
        </Link>
        <h2 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl my-2 sm:my-6">
          Front-End Software Engineer
        </h2>
        <ul className="list-disc list-inside text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>Engineered and launched a responsive B2B AI Agency landing page using Next.js, TypeScript, TailwindCSS, and Framer Motion,
            <span className="text-[#d1b3ff] font-bold"> decreasing initial rendering time to under 1 second</span>.
          </li>
          <li>Designed intuitive UI aligned with the agency’s branding, <span className="text-[#d1b3ff] font-bold">boosting initial test-session
            user session duration by over 35%</span>.
          </li>
          <li>Enhanced the site’s visibility through SEO optimizations, <span className="text-[#d1b3ff] font-bold">achieving a 98/100 Lighthouse score </span>
            and <span className="text-[#d1b3ff] font-bold">increasing organic search impressions by 25%</span> in initial indexing.
          </li>
          <li>Partnered directly with the founder through <span className="text-[#d1b3ff] font-bold">5+ rounds of design iterations</span>, refining layout and copy to align with business goals and
            contributing to a <span className="text-[#d1b3ff] font-bold">200% increase in user click-throughs to key CTA sections</span>.
          </li>
        </ul>
        <Image
          src="/DevExchange_3.webp"
          alt="TeamSync"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
        <CaseStudy
          steps={[
            {
              title: "Problem",
              description: "Clarius AI's problem...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/DevExchange_3.webp"
            },
            {
              title: "Solution",
              description: "How it was solved...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/DevExchange_3.webp"
            },
            {
              title: "Result",
              description: "The outcome...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/DevExchange_3.webp"
            },
          ]}
        />
      </div>
    ),
  },
];