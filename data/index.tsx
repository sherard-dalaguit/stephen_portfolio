import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconFileDescription,
  IconHome,
  IconMail,
  IconUser,
  IconBriefcase,
  IconBrandCpp,
  IconVideo,
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import {LinkPreview} from "@/components/ui/link-preview";

export const skills = [
  { name: 'C++', des: 'System Programming', icon: <IconBrandCpp className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Content Creation', des: 'Video & Media', icon: <IconVideo className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
];

export const minimalNavBarLinks = [
  {
    title: 'Home',
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '/',
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
    title: 'Contact',
    icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#contact',
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://www.linkedin.com/in/stephendalaguit/',
  },
]

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/stephendalaguit/"
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/estye._j1/"
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
    title: "Runway",
    subheader: "Cash Flow Projection Engine",
    des: "A financial planning platform that syncs transactions and balances across multiple banks through Plaid, then runs a deterministic projection engine over recurring income, expenses, and savings goals to forecast daily balances and real-time spendable cash.",
    img: "/projects/Runway.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/postgres.svg", "/tech/plaid.svg"],
    githubLink: "",
    deployedLink: "",
  },
  {
    id: 3,
    title: "Rizzlytics",
    subheader: "AI Dating App Profile Analyzer",
    des: "An AI-powered dating profile analysis system that evaluates photos and message threads using vision-based feedback pipelines and structured AI outputs.",
    img: "/projects/Rizzlytics.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/openai.svg", "/tech/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/rizzlytics",
    deployedLink: "https://www.rizzlytics.com",
  },
  {
    id: 4,
    title: "SWEOverflow",
    subheader: "StackOverflow Clone App",
    des: "A platform where developers can share insights, collaborate on projects, and engage in peer-to-peer learning to enhance their skills and foster innovation.",
    img: "/projects/SWEOverflow.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/tail.svg", "/tech/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/SWEOverflow",
    deployedLink: "https://swe-overflow.vercel.app/",
  },
];

export const timeline = [
  {
    title: "2026 – Present",
    content: (
      <div>
        <div className="flex items-center gap-4 mb-2">
          <Image
            src="/logo/milksha.jpg"
            alt="Milksha logo"
            width={64}
            height={64}
            className="rounded-xl object-cover shrink-0"
          />
          <LinkPreview url="https://www.milksha.com" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">
            <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
              Milksha
            </h1>
          </LinkPreview>
        </div>
        <h2 className="text-[18px] md:text-lg lg:text-xl my-4 pl-3 border-l-2 border-[#d1b3ff] text-zinc-300">
          Barista
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Customer Service", "Drink Prep", "POS Systems", "Food Safety", "Team Collaboration"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#d1b3ff]/10 text-[#d1b3ff] border border-[#d1b3ff]/30">
              {tag}
            </span>
          ))}
        </div>
        <ul className="list-disc list-outside ml-5 text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>
            Prepare <span className="font-bold lavender-text">200+ milk tea and fruit tea drinks</span> per shift to store recipe standards, brewing fresh tea batches and cooking tapioca pearls on a rotating schedule so toppings stay fresh through the day.
          </li>
          <li>
            Serve <span className="font-bold lavender-text">150+ customers</span> daily during lunch and after-school rush periods, taking orders on the POS, handling cash and card payments, and closing out the register with <span className="font-bold lavender-text">99%</span> order accuracy.
          </li>
          <li>
            Walk customers through sugar, ice, and topping options and recommend seasonal drinks, adding roughly <span className="font-bold lavender-text">1 extra topping</span> to a third of orders and helping the store hit its weekly promotion targets.
          </li>
          <li>
            Run opening and closing duties including equipment setup, sanitizing prep stations, and tracking inventory of tea, milk, and toppings, flagging low stock so restocks arrive before a shortage hits the floor.
          </li>
          <li>
            Train and support <span className="font-bold lavender-text">4 new team members</span> on drink recipes, sealing machine operation, and food safety and sanitation procedures, keeping the store compliant with every health inspection.
          </li>
        </ul>
      </div>
    ),
  },
];