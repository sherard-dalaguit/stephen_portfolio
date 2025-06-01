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
  IconShieldLock, IconBrandOpenai
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import CaseStudy from "@/components/CaseStudy";

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
    // href: 'https://drive.google.com/file/d/1Gtb8nAcj5zEV3Thb6IZKVMDJ7ndvlSTT/view',
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
    title: "Sleepify",
    subheader: "Sleep-Tracker App",
    des: "A web application, build in Angular & Ionic, that helps people understand and visualize their sleep habits by tracking their sleep patterns and levels of tiredness each day.",
    img: "/Sleepify.png",
    iconLists: ["js.svg", "/angular_gradient.png", "/ionic.svg"],
    githubLink: "https://github.com/sherard-dalaguit/Sleepify",
    deployedLink: "",
  },
  {
    id: 5,
    title: "ICSearch",
    subheader: "Information Retrieval Search Engine",
    des: "Python Search Engine that efficiently organizes and retrieves over 55,000 documents while presenting clear, ranked results through an intuitive graphical interface.",
    img: "/ICSearch.png",
    iconLists: ["/python.svg"],
    githubLink: "https://github.com/sherard-dalaguit/ICSearch",
    deployedLink: "",
  },
];

export const timeline = [
  {
    title: "Aug 2025 – Present",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          Remote Radar
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-6">
          Chief Technology Officer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
          <li>Engineered and deployed a full-stack automated job platform using Next.js, TailwindCSS, and PostgreSQL,
            continuously scraping over 300 new remote job postings per week from major remote job boards.
          </li>
          <li>Integrated GPT-4 API to automate resume optimization and personalized cover letter generation,
            reducing application preparation time by approximately 70% per job
          </li>
          <li>Built a user-friendly dashboard allowing job filtering, bookmarking, and export functionalities,
            resulting in streamlined workflow and a 2x increase in targeted job application volume within the first month.
          </li>
        </ul>
        <Image
          src="/ICSearch.png"
          alt="ICSearch"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
        <CaseStudy
          steps={[
            {
              title: "Problem",
              description: "Most students' problem...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/TeamSync.png"
            },
            {
              title: "Solution",
              description: "How it was solved...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/TeamSync.png"
            },
            {
              title: "Result",
              description: "The outcome...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/TeamSync.png"
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "May 2025 – Sept 2025",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          Clarius AI
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-6">
          Front-End Software Engineer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
          <li>Engineered and launched a responsive, full-stack website using Next.js, TypeScript, and TailwindCSS for an early-stage SAAS business,
            achieving 50+ early access signups within 2 weeks of launch.
          </li>
          <li>Developed user authentication and subscription-management features, reducing initial customer onboarding friction and
            increasing returning user logins by approximately 25%.
          </li>
          <li>Architected a scalable backend infrastructure with MongoDB, optimizing database queries to
            consistently achieve average response times of under 100ms during typical user activity.
          </li>
        </ul>
        <Image
          src="/TeamSync.png"
          alt="TeamSync"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
        <CaseStudy
          steps={[
            {
              title: "Problem",
              description: "Friend's SaaS Startup's problem...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/TeamSync.png"
            },
            {
              title: "Solution",
              description: "How it was solved...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/TeamSync.png"
            },
            {
              title: "Result",
              description: "The outcome...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/TeamSync.png"
            },
          ]}
        />
      </div>
    ),
  },
];