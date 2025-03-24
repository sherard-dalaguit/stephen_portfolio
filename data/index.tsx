import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconCode,
	IconFileDescription,
	IconHome,
	IconMail,
	IconUser
} from "@tabler/icons-react";

export const navBarLinks = [
	{
    title: 'Home',
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#',
  },
  {
    title: 'Projects',
    icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#projects',
  },
  {
    title: 'About',
    icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#about',
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
    href: 'https://drive.google.com/file/d/192B1GdGXjombyfjweBDObl5J_W-belzW/view',
  }
]

export const projects = [
  {
    id: 1,
    title: "DevExchange",
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
    subheader: "Custom Information Retrieval Search Engine",
    des: "Python Search Engine that retrieves relevant information from a collection of documents using the Vector Space Model and Cosine Similarity.",
    img: "/ICSearch.png",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/convex.webp", "/shadcn.ico"],
    githubLink: "https://github.com/sherard-dalaguit/TeamSync",
    deployedLink: "",
  },
];