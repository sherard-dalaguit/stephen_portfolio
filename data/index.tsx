import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconFileDescription,
  IconHome,
  IconMail,
  IconUser,
  IconBriefcase,
  IconVideo,
  IconBrandAdobePhotoshop,
  IconSparkles,
  IconChartBar,
  IconSpeakerphone,
  IconPresentation,
  IconUsers,
  IconUserSearch,
  IconChartHistogram,
  IconSocial,
  IconRocket,
  IconChecklist,
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import {LinkPreview} from "@/components/ui/link-preview";

export const skills = [
  { name: 'Market Research', des: 'Analysis & Insights', icon: <IconChartBar className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Consumer Behavior', des: 'Audience Insights', icon: <IconUserSearch className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Data Analysis', des: 'Metrics & Reporting', icon: <IconChartHistogram className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Digital Marketing', des: 'Social & Online Strategy', icon: <IconSocial className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Campaign Strategy', des: 'Planning & Promotions', icon: <IconRocket className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Project Management', des: 'Timelines & Delivery', icon: <IconChecklist className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Content Creation', des: 'Video & Media', icon: <IconVideo className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Graphic Design', des: 'Photoshop & Visual Media', icon: <IconBrandAdobePhotoshop className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'AI-Assisted Research', des: 'Writing & Analysis', icon: <IconSparkles className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Community Outreach', des: 'Campaigns & Engagement', icon: <IconSpeakerphone className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Public Speaking', des: 'Presenting & Pitching', icon: <IconPresentation className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Customer Service', des: 'Client-Facing Work', icon: <IconUsers className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
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

export const certificates = [
  {
    id: 1,
    title: "Introduction to Graphic Design: Photoshop",
    subheader: "LinkedIn Learning • Issued Sep 2026",
    des: "A hands-on course covering core graphic design principles and the Adobe Photoshop workflow — layers, masking, retouching, typography, and composition — applied to building polished visual assets from scratch.",
    img: "/certificates/GraphicDesignPhotoshop.webp",
  },
  {
    id: 2,
    title: "How to Research and Write Using Generative AI Tools",
    subheader: "LinkedIn Learning • Issued Nov 2024",
    des: "A practical course on integrating generative AI into the research and writing process — prompting effectively, evaluating and fact-checking AI output, and using it responsibly to draft, refine, and strengthen written work.",
    img: "/certificates/GenerativeAIWriting.webp",
  },
];

export const timeline = [
  {
    title: "2026 – Present",
    content: (
      <div>
        <div className="flex items-center gap-4 mb-2">
          <Image
            src="/logo/cancer_capstone.png"
            alt="Pediatric Cancer Research Foundation logo"
            width={64}
            height={64}
            className="rounded-xl object-cover shrink-0"
          />
          <LinkPreview url="https://pcrf-kids.org" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#e5e5e5] hover:decoration-[#ffffff] cursor-pointer">
            <h1 className="font-bold text-[#e5e5e5] hover:text-[#ffffff] text-[32px] md:text-4xl lg:text-5xl">
              Pediatric Cancer Research Foundation (PCRF)
            </h1>
          </LinkPreview>
        </div>
        <h2 className="text-[18px] md:text-lg lg:text-xl my-4 pl-3 border-l-2 border-[#e5e5e5] text-zinc-300">
          Marketing Strategy Consultant
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Research", "Data Analysis", "Community Outreach", "Fundraising", "Public Speaking", "Project Management"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#e5e5e5]/10 text-[#e5e5e5] border border-[#e5e5e5]/30">
              {tag}
            </span>
          ))}
        </div>
        <ul className="list-disc list-outside ml-5 text-md sm:text-lg lg:text-xl mb-8 space-y-4 text-neutral-300">
          <li>
            Led a year-long capstone project with the Pediatric Cancer Research Foundation, scoping the research question, timeline, and deliverables with a faculty advisor and a foundation contact.
          </li>
          <li>
            Reviewed <span className="font-bold accent-text">30+ published studies</span> and foundation reports on pediatric cancer treatment and survivorship, synthesizing findings into a written literature review for the project.
          </li>
          <li>
            Designed and ran an outreach campaign to raise awareness of childhood cancer research funding, reaching <span className="font-bold accent-text">500+ students</span> across school events and social media.
          </li>
          <li>
            Organized fundraising efforts benefiting PCRF, coordinating volunteers, donations, and event logistics to support pediatric cancer research programs.
          </li>
          <li>
            Presented findings and campaign results to a panel of teachers and community members, translating technical research into a clear narrative for a non-specialist audience.
          </li>
        </ul>
      </div>
    ),
  },
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
          <LinkPreview url="https://www.milksha.com" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#e5e5e5] hover:decoration-[#ffffff] cursor-pointer">
            <h1 className="font-bold text-[#e5e5e5] hover:text-[#ffffff] text-[32px] md:text-4xl lg:text-5xl">
              Milksha
            </h1>
          </LinkPreview>
        </div>
        <h2 className="text-[18px] md:text-lg lg:text-xl my-4 pl-3 border-l-2 border-[#e5e5e5] text-zinc-300">
          Barista
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Customer Service", "Drink Prep", "POS Systems", "Food Safety", "Team Collaboration"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#e5e5e5]/10 text-[#e5e5e5] border border-[#e5e5e5]/30">
              {tag}
            </span>
          ))}
        </div>
        <ul className="list-disc list-outside ml-5 text-md sm:text-lg lg:text-xl mb-8 space-y-4 text-neutral-300">
          <li>
            Prepared <span className="font-bold accent-text">200+ milk tea and fruit tea drinks</span> per shift to store recipe standards, brewing fresh tea batches and cooking tapioca pearls on a rotating schedule so toppings stayed fresh through the day.
          </li>
          <li>
            Served <span className="font-bold accent-text">150+ customers</span> daily during lunch and after-school rush periods, taking orders on the POS, handling cash and card payments, and closing out the register with <span className="font-bold accent-text">99%</span> order accuracy.
          </li>
          <li>
            Walked customers through sugar, ice, and topping options and recommended seasonal drinks, adding roughly <span className="font-bold accent-text">1 extra topping</span> to a third of orders and helping the store hit its weekly promotion targets.
          </li>
          <li>
            Ran opening and closing duties including equipment setup, sanitizing prep stations, and tracking inventory of tea, milk, and toppings, flagging low stock so restocks arrived before a shortage hit the floor.
          </li>
          <li>
            Trained and supported <span className="font-bold accent-text">4 new team members</span> on drink recipes, sealing machine operation, and food safety and sanitation procedures, keeping the store compliant with every health inspection.
          </li>
        </ul>
      </div>
    ),
  },
];
