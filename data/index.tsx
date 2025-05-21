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
  IconBrandSlack,
  IconBrandFigma,
  IconBrandTrello,
  IconListCheck,
  IconBrandAws,
  IconBrandGithubCopilot,
  IconBrandNotion,
  IconBrandTailwind,
  IconBrandPrisma,
  IconShieldLock
} from "@tabler/icons-react";
import React from "react";

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
];

export const tools = [
  { name: 'Slack', des: 'Messaging Platform', icon: <IconBrandSlack className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Trello', des: 'Project Management', icon: <IconBrandTrello className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Jira', des: 'Issue Tracker', icon: <IconListCheck className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Notion', des: 'Note-taking App', icon: <IconBrandNotion className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'IntelliJ IDEA', des: 'Favorite IDE', icon: <IconCode className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'GitHub', des: 'Version Control', icon: <IconBrandGithub className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Copilot', des: 'AI Assistant', icon: <IconBrandGithubCopilot className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Figma', des: 'Design Tool', icon: <IconBrandFigma className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
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