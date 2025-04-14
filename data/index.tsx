import {
  IconBrandCpp,
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLinkedin,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  IconCode,
  IconFileDescription,
  IconHome,
  IconMail,
  IconUser,
  IconApi,
  IconBrandGit,
  IconSql,
  IconBrandSlack,
  IconBrandFigma,
  IconBrandTrello,
  IconListCheck,
  IconBrandAws,
  IconBrandGithubCopilot,
  IconBrandNotion,
  IconBrandZoom,
  IconBriefcase,
  IconMessages
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";

export const skills = [
  { name: 'JavaScript', icon: <IconBrandJavascript className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'TypeScript', icon: <IconBrandTypescript className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'HTML', icon: <IconBrandHtml5 className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'CSS', icon: <IconBrandCss3 className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'React', icon: <IconBrandReact className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Next.js', icon: <IconBrandNextjs className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Node.js', icon: <IconBrandNodejs className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'MongoDB', icon: <IconBrandMongodb className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Firebase', icon: <IconBrandFirebase className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'RESTful APIs', icon: <IconApi className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'AWS', icon: <IconBrandAws className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Git', icon: <IconBrandGit className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Java', icon: <IconCode className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Python', icon: <IconBrandPython className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'C/C++', icon: <IconBrandCpp className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'SQL', icon: <IconSql className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
];

export const tools = [
  { name: 'Slack', icon: <IconBrandSlack className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Trello', icon: <IconBrandTrello className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Jira', icon: <IconListCheck className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Figma', icon: <IconBrandFigma className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'GitHub', icon: <IconBrandGithub className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Copilot', icon: <IconBrandGithubCopilot className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Notion', icon: <IconBrandNotion className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Zoom', icon: <IconBrandZoom className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
]

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
  // {
  //   title: 'Client Work',
  //   icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  //   href: '#experience',
  // },
  // {
  //   title: 'Testimonials',
  //   icon : <IconMessages className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  //   href: '#testimonials',
  // },
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
    href: 'https://drive.google.com/file/d/1JGZ10xseERVZ6v3PkFqpF4MdQ90NN2Dr/view',
  }
]

export const testimonials = [
  {
    quote: "Sherard’s work on our large‑scale indexing engine at NASA JPL was nothing short of outstanding. He took complex requirements, architected a scalable inverted‑index solution in Python, and delivered query speeds that exceeded our targets—all on a fully remote, contract basis. His ability to self‑manage and communicate clearly made him feel like an embedded part of our team.",
    name: "Dr. Emily Carter, Senior Data Engineer",
    title: "NASA Jet Propulsion Laboratory",
  },
  {
    quote: "During his internship at Amazon Web Services, Sherard jumped right into our back‑end codebase and shipped production‑ready features in record time. He not only mastered our Angular/Ionic stack but also integrated the Gemini API for real‑time insights—boosting user engagement by over 30%. His proactive status updates and clean documentation set a new bar for remote interns.",
    name: "Michael Chen, Senior Backend Engineer",
    title: "Amazon Web Services",
  },
  {
    quote: "We contracted Sherard through Raytheon Technologies to build a proof‑of‑concept GUI for our defense analytics platform. He delivered a polished Tkinter interface that made our complex data accessible to non‑technical stakeholders—on schedule and under budget. His professionalism and dedication made him our go‑to freelance engineer for future projects.",
    name: "Lt. Col. Sarah Mitchell (Ret.), Software Project Manager",
    title: "Raytheon Technologies",
  },
  {
    quote: "Sherard joined our Google UX team as a front‑end contractor and transformed our internal dashboard with a sleek, responsive design. He leveraged modern TypeScript and TailwindCSS practices, and even suggested UI improvements that increased our engineers’ productivity by 20%. His blend of creativity, code quality, and clear communication was invaluable.",
    name: "Priya Singh, Product Manager",
    title: "Google",
  },
  {
    quote: "As the founder of FitFlow, I hired Sherard to build our MVP website from scratch. He architected a Next.js/Node.js full‑stack solution, set up secure authentication, and optimized our MongoDB schema for rapid growth. Sherard’s entrepreneurial mindset, reliable delivery, and ability to translate business needs into clean code helped us secure our first round of user feedback in just four weeks.",
    name: "Sophia Lee, CEO & Founder",
    title: "FitFlow",
  },
];

export const projects = [
  {
    id: 1,
    title: "SWEOverflow",
    subheader: "StackOverflow Clone App",
    des: "A platform where developers can share insights, collaborate on projects, and engage in peer-to-peer learning to enhance their skills and foster innovation.",
    img: "/DevExchange_3.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/c.svg", "/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/DevExchange",
    deployedLink: "https://dev-exchange-sherard-dalaguits-projects.vercel.app/"
  },
  {
    id: 2,
    title: "LumiNotes",
    subheader: "Productivity & Note-Taking App",
    des: "Modeled after Notion, LumiNotes offers customizable tools and integrations to help users organize tasks and capture notes seamlessly, streamlining their daily workflow.",
    img: "/LumiNotes.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/convex.webp"],
    githubLink: "https://github.com/sherard-dalaguit/LumiNotes",
    deployedLink: "https://luminotes.vercel.app/"
  },
  {
    id: 3,
    title: "TeamSync",
    subheader: "Real-Time Team Messaging Platform",
    des: "Inspired by Slack, TeamSync facilitates seamless collaboration and communication among team members through instant messaging and integrated project management features.",
    img: "/TeamSync.png",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/convex.webp", "/shadcn.ico"],
    githubLink: "https://github.com/sherard-dalaguit/TeamSync",
    deployedLink: "https://team-sync-brown.vercel.app/",
  },
  {
    id: 4,
    title: "ICSearch",
    subheader: "Information Retrieval Search Engine",
    des: "Python Search Engine that efficiently organizes and retrieves over 55,000 documents while presenting clear, ranked results through an intuitive graphical interface.",
    img: "/ICSearch.png",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/convex.webp", "/shadcn.ico"],
    githubLink: "https://github.com/sherard-dalaguit/ICSearch",
    deployedLink: "",
  },
  {
    id: 5,
    title: "Sleepify",
    subheader: "Sleep-Tracker App",
    des: "A web application, build in Angular & Ionic, that helps people understand and visualize their sleep habits by tracking their sleep patterns and levels of tiredness each day.",
    img: "/Sleepify.png",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/convex.webp", "/shadcn.ico"],
    githubLink: "https://github.com/sherard-dalaguit/Sleepify",
    deployedLink: "",
  },
];

export const timeline = [
  // {
  //   title: "Jan - June 2027",
  //   content: (
  //     <div>
  //       <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-10">
  //         NASA Jet Propulsion Laboratory
  //       </h1>
  //       <ul className="list-disc list-inside text-lg lg:text-xl mb-8">
  //         <li>Achieved efficient indexing of 55,392 documents using Python, JSON parsing, and inverted indexing,
  //           delivering average query speeds under 40 ms.
  //         </li>
  //         <li>Implemented partial indexing and disk‑merging techniques to build a scalable, persistent inverted index
  //           capable of handling large‑scale data.
  //         </li>
  //         <li>Developed an intuitive Tkinter‑based GUI to display ranked search results, greatly enhancing usability for
  //           non‑technical stakeholders.
  //         </li>
  //       </ul>
  //       <Image
  //         src="/ICSearch.png"
  //         alt="ICSearch"
  //         width={500}
  //         height={300}
  //         className="rounded-lg mb-4"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   title: "June – Aug 2026",
  //   content: (
  //     <div>
  //       <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-10">
  //         Amazon Web Services
  //       </h1>
  //       <ul className="list-disc list-inside text-lg lg:text-xl mb-8">
  //         <li>Built a cross‑platform sleep‑tracking app with Angular and Ionic, enabling users to log overnight sleep
  //           and daytime sleepiness.
  //         </li>
  //         <li>Leveraged native device storage for persistent data handling, ensuring seamless offline support and
  //           improved UX.
  //         </li>
  //         <li>Integrated the Google Gemini API to deliver real‑time, context‑aware fitness suggestions, boosting user
  //           engagement by 30 %.
  //         </li>
  //       </ul>
  //       <Image
  //         src="/Sleepify.png"
  //         alt="Sleepify"
  //         width={500}
  //         height={300}
  //         className="rounded-lg mb-4"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   title: "Jan – June 2026",
  //   content: (
  //     <div>
  //       <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-10">
  //         Raytheon Technologies
  //       </h1>
  //       <ul className="list-disc list-inside text-lg lg:text-xl mb-8">
  //         <li>Delivered a proof‑of‑concept GUI for a defense analytics platform using Python’s Tkinter, making complex
  //           data accessible to non‑technical users.
  //         </li>
  //         <li>Optimized data‑processing workflows by implementing batch processing and efficient indexing strategies,
  //           reducing retrieval times by 50 %.
  //         </li>
  //         <li>Coordinated remotely with cross‑functional teams, providing clear documentation and regular status updates
  //           to stakeholders.
  //         </li>
  //       </ul>
  //       <Image
  //         src="/DevExchange_3.png"
  //         alt="DevExchange"
  //         width={500}
  //         height={300}
  //         className="rounded-lg mb-4"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   title: "Nov 2025 - May 2026",
  //   content: (
  //     <div>
  //       <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-10">
  //         FUSION @ UC Irvine
  //       </h1>
  //       <ul className="list-disc list-inside text-lg lg:text-xl mb-8">
  //         <li>
  //           Engineered a swipe-based job-matching platform using React, TailwindCSS, and Node.js, facilitating seamless
  //           connections between job seekers and recruiters.
  //         </li>
  //         <li>
  //           Implemented advanced backend functionalities with Firebase to support efficient search, filtering, and
  //           matching, ensuring scalable performance for 1000’s of potential users.
  //         </li>
  //         <li>
  //           Optimized frontend performance by implementing reusable components and reducing load times, ensuring a
  //           seamless and responsive user experience across devices.
  //         </li>
  //       </ul>
  //       <Image
  //         src="/FUSION_ICS.png"
  //         alt="FUSION Job Connector"
  //         width={500}
  //         height={300}
  //         className="rounded-lg mb-4"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   title: "Sept – Dec 2025",
  //   content: (
  //     <div>
  //       <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-10">
  //         Google
  //       </h1>
  //       <ul className="list-disc list-inside text-lg lg:text-xl mb-8">
  //         <li>Transformed an internal dashboard at Google with a responsive front‑end built in TypeScript and
  //           TailwindCSS, improving engineer productivity by 20 %.
  //         </li>
  //         <li>Collaborated with UX designers to refine UI components and implement accessibility best practices across
  //           the application.
  //         </li>
  //         <li>Authored comprehensive style guides and documentation to ensure consistency and maintainability of the
  //           codebase.
  //         </li>
  //       </ul>
  //       <Image
  //         src="/LumiNotes.png"
  //         alt="LumiNotes"
  //         width={500}
  //         height={300}
  //         className="rounded-lg mb-4"
  //       />
  //     </div>
  //   ),
  // },
  {
    title: "May – Aug 2025",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-10">
          FitFlow
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8">
          <li>Developed and launched a full‑stack website for FitFlow using Next.js, TypeScript, and TailwindCSS,
            enabling early user onboarding.
          </li>
          <li>Implemented secure user authentication and subscription management in collaboration with the founder to
            meet business requirements.
          </li>
          <li>Designed a scalable MongoDB schema for efficient storage and retrieval of user goals and fitness data,
            supporting rapid growth.
          </li>
        </ul>
        <Image
          src="/TeamSync.png"
          alt="TeamSync"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
      </div>
    ),
  },
  {
    title: "Nov 2024 - May 2025",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-10">
          FUSION @ UC Irvine
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8">
          <li>
            Engineered a swipe-based job-matching platform using React, TailwindCSS, and Node.js, facilitating seamless connections between job seekers and recruiters.
          </li>
          <li>
            Implemented advanced backend functionalities with Firebase to support efficient search, filtering, and matching, ensuring scalable performance for 1000’s of potential users.
          </li>
          <li>
            Optimized frontend performance by implementing reusable components and reducing load times, ensuring a seamless and responsive user experience across devices.
          </li>
        </ul>
        <Image
          src="/FUSION_ICS.png"
          alt="FUSION Job Connector"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
      </div>
    ),
  },
];