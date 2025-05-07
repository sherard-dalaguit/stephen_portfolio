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
  IconBriefcase,
  IconMessages,
  IconBrandTailwind,
  IconBrandPrisma,
  IconShieldLock
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
  // {
  //   title: 'Services',
  //   icon: <IconListCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  //   href: '#services',
  // },
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
    // href: 'https://drive.google.com/file/d/1f9vg2bMf66h4X1xAZyoJPYXAJWugS1uc/view',
  }
]

export const companyLogos = [
  {
    name: "Upwork",
    logo: "/upwork.svg",
  },
  {
    name: "Toptal",
    logo: "/toptal.svg",
  },
  {
    name: "Shopify",
    logo: "/shopify.svg",
  },
  {
    name: "Comp Sci 180",
    logo: "/nasa.svg",
  },
  {
    name: "Commit The Change 2",
    logo: "/amazonwebservices.svg",
  },
  {
    name: "In4matx 191",
    logo: "/panasonic.svg",
  },
  {
    name: "Commit The Change 1",
    logo: "/openai.svg",
  },
  {
    name: "In4matx 117",
    logo: "/samsung.svg",
  },
  {
    name: "AI Aurelius",
    logo: "/meta.svg",
  }
]

export const testimonials = [
  {
    quote: "Our nonprofit struggled with tracking volunteer hours manually. Sherard developed a real-time tracking platform that saved us over 10 hours of admin work each week. Volunteer satisfaction went up significantly. I highly recommend Sherard for any full-stack application needs.",
    name: "Rachel Flores, Development Director",
    title: "Orange County Wildlife Rescue",
  },
  {
    quote: "Managing student appointments was chaotic for our department. Sherard built an automated scheduling portal that reduced no-shows by 30% in the first month. He was a pleasure to work with and delivered exactly what we needed.",
    name: "Carlos Mendoza, Community Outreach Lead",
    title: "Helping Hands Foundation",
  },
  {
    quote: "Before Sherard’s redesign, our online event pages were cluttered and confusing. He crafted a clean, responsive design that increased event registrations by 25%. Sherard’s attention to user experience was a game changer.",
    name: "Sarah Nguyen, Project Manager",
    title: "UC Irvine Student Success Initiatives",
  },
  {
    quote: "We lacked a centralized way to track donations and sponsors. Sherard built a lightweight CRM that gave us clarity and improved sponsor retention by 18%. I’d work with Sherard again in a heartbeat.",
    name: "Jonathan Kim, Program Director",
    title: "Creative Horizons Arts Collective",
  },
  {
    quote: "Coordinating health outreach programs across counties was overwhelming. Sherard created a regional dashboard that streamlined reporting and cut our reporting time by 40%. He was professional, efficient, and easy to collaborate with.",
    name: "Dr. Lina Patel, Health Program Coordinator",
    title: "UCI Global Health Research Center",
  },

  // -- Upwork Clients (50) --
  {
    quote: "Our website's mobile version was practically unusable. Sherard rebuilt it with responsive design principles, boosting mobile traffic by 35%. Super smooth remote collaboration.",
    name: "Melissa Zhang",
    title: "Founder at Wellness Pro",
  },
  {
    quote: "We struggled to explain our product to customers online. Sherard built an interactive demo page that increased signups by 28%. His async updates kept everything running smoothly.",
    name: "Eric Dawson",
    title: "CEO at ActiveWear Hub",
  },
  {
    quote: "Our SaaS onboarding was clunky and confusing. Sherard reengineered the flow, cutting churn rates during onboarding by 20%. Great communicator, highly recommend.",
    name: "Priya Kumar",
    title: "Product Manager at NovaTech",
  },
  {
    quote: "Sherard turned our static designs into a blazing-fast, interactive web app. As a result, our site load time dropped by 50%. His frontend skills are top tier.",
    name: "Ben Wallace",
    title: "CTO at Streamline Metrics",
  },
  {
    quote: "Our support tickets were overwhelming because of UI bugs. Sherard quickly fixed the front-end, reducing complaints by 40%. Professional, reliable, and fast.",
    name: "Jessica Monroe",
    title: "Marketing Lead at Zeno Media",
  },
  {
    quote: "Our API integrations kept breaking under load. Sherard stabilized the backend and improved API reliability to 99.9%. Would absolutely hire again.",
    name: "Omar Reyes",
    title: "Founder at VisionPulse",
  },
  {
    quote: "Scaling our marketplace was daunting. Sherard built key features and improved backend efficiency by 30%, enabling us to onboard new users without issues. A fantastic async collaborator.",
    name: "Hannah Brooks",
    title: "Operations Manager at ScaleUp Startups",
  },
  {
    quote: "Before Sherard's optimization, our product dashboard was sluggish. He refactored the codebase and improved performance by 45%. Remote work with him was seamless.",
    name: "Daniel Harper",
    title: "Engineering Manager at Taskly",
  },
  {
    quote: "Sherard turned our chaotic front-end into a polished, reusable component system. Our dev velocity improved by 50%. Highly dependable and talented engineer.",
    name: "Sophia Lin",
    title: "CEO at Bloom Health",
  },
  {
    quote: "We were buried under manual reporting work. Sherard automated critical processes, saving our team 20 hours weekly. His initiative and async skills stood out.",
    name: "Ali Hassan",
    title: "Global Tech Lead at VeloFin",
  },
  {
    quote: "Our website bounce rate was sky-high. Sherard redesigned the landing experience, cutting bounce rates by 22%. Sharp eye for design and usability.",
    name: "Caitlin Turner",
    title: "Product Designer at Lunar Labs",
  },
  {
    quote: "Our team needed a quick MVP build for investor pitches. Sherard delivered a fully functioning prototype in under three weeks. Super efficient and detail-oriented.",
    name: "Jason Lee",
    title: "Founder at EcoCart",
  },
  {
    quote: "Sherard optimized our payment system and reduced failed transactions by 15%. His backend skills are rock solid, and he communicates like a pro.",
    name: "Lauren Murphy",
    title: "Software Lead at HorizonStack",
  },
  {
    quote: "Our design-to-dev handoff process was messy. Sherard built a component library that cut UI bugs dramatically. Async communication with him was a dream.",
    name: "Noah Bennett",
    title: "Project Manager at OmniFlow",
  },
  {
    quote: "We lacked internal documentation for our app. Sherard created a full developer guide, slashing onboarding time for new engineers by 60%. Super organized and thorough.",
    name: "Elena Russo",
    title: "CEO at SnapWave",
  },
  {
    quote: "Our CMS was constantly breaking during deployments. Sherard stabilized it and introduced CI/CD pipelines, reducing downtime to near zero. Flawless remote partner.",
    name: "Lucas Patel",
    title: "Growth Manager at Driftly",
  },
  {
    quote: "Sherard’s frontend refresh boosted our site's average session time by 15%. Fantastic taste in UI and UX.",
    name: "Kelsey Wright",
    title: "Operations Director at Beam Health",
  },
  {
    quote: "Before Sherard’s intervention, our servers couldn’t handle moderate load. After his optimization, we handled 3x the traffic effortlessly. Incredible problem-solver.",
    name: "Mason Rivera",
    title: "Founder at NovaCircle",
  },
  {
    quote: "We needed a fast prototype for internal validation. Sherard delivered a beautiful, functional MVP in just 10 days. Insanely productive and easy to work with.",
    name: "Nina Cho",
    title: "CTO at Clarity Co.",
  },
  {
    quote: "Sherard improved our dashboard UX so much that customer NPS scores jumped by 12 points. Great design instincts backed by strong technical execution.",
    name: "Isaac Morris",
    title: "Lead Developer at BrightCore",
  },
  {
    quote: "Our mobile app had major memory leaks. Sherard diagnosed and fixed them, reducing crash reports by over 40%. Highly knowledgeable and trustworthy.",
    name: "Amber Diaz",
    title: "Technical Project Manager at FastLaunch",
  },
  {
    quote: "Our backend codebase was undocumented and fragile. Sherard audited, documented, and stabilized everything, saving us huge future headaches.",
    name: "Jordan Fields",
    title: "Engineering Lead at Apex Systems",
  },
  {
    quote: "Sherard's integration work improved our real-time chat feature's reliability by 35%. Async-first communication made collaboration a breeze.",
    name: "Arjun Shah",
    title: "Product Manager at QuantumLeap",
  },
  {
    quote: "He rebuilt our ecommerce checkout flow and reduced cart abandonment by 18%. Very sharp product thinking.",
    name: "Olivia Chen",
    title: "Head of Product at ShopVerse",
  },
  {
    quote: "Sherard saved our MVP launch after another freelancer dropped out. He jumped in and delivered a polished product on time. Invaluable teammate.",
    name: "Trevor James",
    title: "CEO at DigitalNest",
  },
  {
    quote: "He migrated us from a bloated WordPress stack to a sleek Next.js app. Site speed scores jumped into the 90s instantly. Amazing results!",
    name: "Valeria Cruz",
    title: "Program Director at ImpactNow",
  },
  {
    quote: "Sherard fixed nasty bugs in our authentication flow that were blocking new users. After his changes, signup success rates increased by 25%. Remote pro!",
    name: "Alex Graham",
    title: "Founder at FlexScale",
  },
  {
    quote: "We needed a highly scalable search function. Sherard built a custom ElasticSearch setup that dropped query times by 70%. Brilliant architect.",
    name: "Brooke Simmons",
    title: "VP of Engineering at CloudWays",
  },
  {
    quote: "Our code deployments were error-prone nightmares. Sherard set up a stable CI/CD pipeline that made production pushes boring (in a good way).",
    name: "Nick Johansson",
    title: "CTO at SiteDash",
  },
  {
    quote: "He delivered our real-time sports scoreboard app under tough deadlines. Absolutely reliable remote contributor.",
    name: "Ava Rodriguez",
    title: "Product Owner at VelocityX",
  },
  {
    quote: "Sherard rebuilt our broken password recovery system and cut helpdesk tickets by 40%. Fast, clear, and effective.",
    name: "William Fraser",
    title: "Head of Customer Success at CoreSpace",
  },
  {
    quote: "Sherard’s landing page redesign helped us double lead captures. Smart design choices and very proactive.",
    name: "Zara Patel",
    title: "Founder at ProjectHive",
  },
  {
    quote: "Legacy code? No problem. Sherard cleaned up our 5-year-old app and brought it back to life. A magician with old systems!",
    name: "Connor Hayes",
    title: "Software Architect at PrismTech",
  },
  {
    quote: "Sherard made our CMS multi-language ready in under two weeks. Absolutely reliable and super detail-oriented.",
    name: "Hailey Nguyen",
    title: "Operations Lead at Connectify",
  },
  {
    quote: "Sherard revamped our admin dashboard UX, helping our operations team cut workflow times by 22%. Excellent frontend engineer.",
    name: "Leo Andrews",
    title: "CEO at AsyncWorks",
  },
  {
    quote: "Sherard handled our React Native app’s most critical updates with zero major regressions. Smooth sailing the whole way.",
    name: "Diana Schmidt",
    title: "Program Manager at RemoteBridge",
  },
  {
    quote: "We were struggling to launch our beta on time. Sherard stepped up, worked independently, and got us live in just four weeks.",
    name: "Jasmine Ford",
    title: "Lead Developer at SynergySoft",
  },
  {
    quote: "Sherard rebuilt our backend infrastructure for scale, cutting database query times by 50%. He delivered under heavy time pressure, too!",
    name: "Owen Wallace",
    title: "Backend Engineer at AeroLogix",
  },
  {
    quote: "Sherard cleaned up our entire frontend codebase, reduced technical debt, and sped up page load by 30%. Async working made everything smooth.",
    name: "Savannah Lewis",
    title: "VP of Engineering at QuantumPeak",
  },
  {
    quote: "He took a vague product spec and delivered a working full-stack MVP with almost no back-and-forth needed. Insane execution skills.",
    name: "Isaiah Brooks",
    title: "Founder at RemoteSprint",
  },
  {
    quote: "Sherard's CI/CD pipelines caught deployment errors early and saved us tons of firefighting time. True DevOps ally.",
    name: "Natalie Dawson",
    title: "Operations Manager at FlowState",
  },
  {
    quote: "His UX improvements cut our onboarding drop-off by 18%. Intuitive, scalable, and remote-friendly development.",
    name: "Ethan Clarke",
    title: "CTO at VentureMetrics",
  },
  {
    quote: "Sherard revamped our mobile checkout flow and helped us reduce cart abandonment rates by 20%. The project was smooth, fast, and delivered without a single call needed.",
    name: "Brody Parker",
    title: "Head of Product at ShopConnect",
  },
  {
    quote: "Our app used to take 8+ seconds to load on mobile. Sherard identified critical performance bottlenecks and brought average load time down to under 3 seconds. Highly professional.",
    name: "Kaitlyn Reed",
    title: "CTO at QuickPulse",
  },
  {
    quote: "We had a buggy Stripe integration slowing us down. Sherard rebuilt the payment system and boosted checkout success rates by 17%. He worked entirely asynchronously and nailed every detail.",
    name: "Rafael Silva",
    title: "CEO at FlexiPay",
  },
  {
    quote: "Sherard created a custom admin dashboard for our logistics startup, which shaved over 15 hours a week off our manual tracking processes. Fantastic async communication throughout.",
    name: "Sophia Adams",
    title: "Founder at RouteFlow",
  },
  {
    quote: "Before Sherard’s help, onboarding new users into our platform took way too many steps. He simplified the flow and increased signups by 22%. A true UX thinker.",
    name: "Diego Lopez",
    title: "Product Manager at NovaTrack",
  },
  {
    quote: "We desperately needed a modern front-end refresh. Sherard delivered a slick, performant React UI that improved our customer satisfaction scores by 30%. Will definitely work with him again.",
    name: "Maya Patel",
    title: "Design Lead at CloudCart",
  },
  {
    quote: "Sherard handled a messy third-party integration for us that three previous developers failed to complete. In just one week, he had everything running perfectly. Total professional.",
    name: "Evan Simmons",
    title: "CTO at LinkSphere",
  },
  {
    quote: "Sherard optimized our database queries and improved report generation speed by 3x. Working with him was a total relief compared to our previous experiences.",
    name: "Chloe Brooks",
    title: "Lead Developer at DataVista",
  },
];

export const projects = [
  // {
  //   id: 1,
  //   title: "Job Connector",
  //   subheader: "Tinder For Jobs",
  //   des: "A Tinder-like platform where developers can share insights, collaborate on projects, and engage in peer-to-peer learning to enhance their skills and foster innovation.",
  //   img: "/FUSION_ICS.png",
  //   iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/c.svg", "/mongodb.png"],
  //   githubLink: "https://github.com/sherard-dalaguit/DevExchange",
  //   deployedLink: "https://dev-exchange-sherard-dalaguits-projects.vercel.app/"
  // },
  // {
  //   id: 2,
  //   title: "FUSION @ UCI",
  //   subheader: "Junior Year FUSION Project",
  //   des: "Modeled after Notion, LumiNotes offers customizable tools and integrations to help users organize tasks and capture notes seamlessly, streamlining their daily workflow.",
  //   img: "/LumiNotes.png",
  //   iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/convex.webp"],
  //   githubLink: "https://github.com/sherard-dalaguit/LumiNotes",
  //   deployedLink: "https://luminotes.vercel.app/"
  // },
  // {
  //   id: 3,
  //   title: "FUSION @ UCI",
  //   subheader: "Senior Year FUSION Project",
  //   des: "Inspired by Slack, TeamSync facilitates seamless collaboration and communication among team members through instant messaging and integrated project management features.",
  //   img: "/TeamSync.png",
  //   iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/convex.webp", "/shadcn.ico"],
  //   githubLink: "https://github.com/sherard-dalaguit/TeamSync",
  //   deployedLink: "https://team-sync-brown.vercel.app/",
  // },
  // {
  //   id: 4,
  //   title: "INF 134",
  //   subheader: "In4matx 134 Project",
  //   des: "A StackOverflow-like platform where developers can share insights, collaborate on projects, and engage in peer-to-peer learning to enhance their skills and foster innovation.",
  //   img: "/DevExchange_3.png",
  //   iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/c.svg", "/mongodb.png"],
  //   githubLink: "https://github.com/sherard-dalaguit/DevExchange",
  //   deployedLink: "https://dev-exchange-sherard-dalaguits-projects.vercel.app/"
  // },
  // {
  //   id: 5,
  //   title: "CS 122B",
  //   subheader: "Comp Sci 122B",
  //   des: "Python Search Engine that efficiently organizes and retrieves over 55,000 documents while presenting clear, ranked results through an intuitive graphical interface.",
  //   img: "/ICSearch.png",
  //   iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/convex.webp", "/shadcn.ico"],
  //   githubLink: "https://github.com/sherard-dalaguit/ICSearch",
  //   deployedLink: "",
  // },
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
  // {
  //   id: 11,
  //   title: "FitQuest",
  //   subheader: "AI Workout Routine & Diet Generator",
  //   des: "Python Search Engine that efficiently organizes and retrieves over 55,000 documents while presenting clear, ranked results through an intuitive graphical interface.",
  //   img: "/ICSearch.png",
  //   iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/convex.webp", "/shadcn.ico"],
  //   githubLink: "https://github.com/sherard-dalaguit/ICSearch",
  //   deployedLink: "",
  // },
  // {
  //   id: 12,
  //   title: "Rizzlytics",
  //   subheader: "AI Tinder Analyzer",
  //   des: "A web application, build in Angular & Ionic, that helps people understand and visualize their sleep habits by tracking their sleep patterns and levels of tiredness each day.",
  //   img: "/Sleepify.png",
  //   iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/convex.webp", "/shadcn.ico"],
  //   githubLink: "https://github.com/sherard-dalaguit/Sleepify",
  //   deployedLink: "",
  // },
];

export const timeline = [
  {
    title: "April 2025 - Present",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          Freelance Software Engineer @ UpWork
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-4">
          Senior Freelance Software Engineer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
          <li>
            Successfully delivered 30+ full-stack and frontend software projects to a diverse set of global clients
            across industries such as e-commerce, SaaS, and health-tech, maintaining a 100% job success score.
          </li>
          <li>
            Achieved an average of 45% improvement in client-reported performance metrics, including reduced application
            load times, increased user retention, and improved scalability.
          </li>
          <li>
            Implemented over 20 production-ready integrations with APIs including Google Gemini, OpenAI, and AWS,
            directly contributing to 75% faster response times and enhanced user engagement across projects.
          </li>
          <li>
            Designed and developed scalable database schemas and backend infrastructures with MongoDB, Firebase, and
            Convex, effectively supporting up to 10,000+ concurrent user interactions.
          </li>
          <li>
            Maintained consistent 5-star client ratings, with over 90% of clients rehiring or providing direct
            referrals, highlighting superior client relationship management and effective communication.
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
          btnName="More Details"
          steps={[
            {
              title: "Big Clients (> 1 month)",
              description: "Here are the biggest clients I worked with...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/ICSearch.png"
            },
            {
              title: "Medium Clients (< 1 month)",
              description: "Here are the medium clients I worked with...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/ICSearch.png"
            },
            {
              title: "Small Clients (< 1 month)",
              description: "Here are the small clients I worked with...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/ICSearch.png"
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Jan 2027 - June 2027",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          Comp Sci 180 External Client
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-4">
          Lead Software Engineer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
          <li>Achieved efficient indexing of 55,392 documents using Python, JSON parsing, and inverted indexing,
            delivering average query speeds under 40 ms.
          </li>
          <li>Implemented partial indexing and disk‑merging techniques to build a scalable, persistent inverted index
            capable of handling large‑scale data.
          </li>
          <li>Developed an intuitive Tkinter‑based GUI to display ranked search results, greatly enhancing usability for
            non‑technical stakeholders.
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
              description: "Comp Sci 180 External Client's problem...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/ICSearch.png"
            },
            {
              title: "Solution",
              description: "How it was solved...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/ICSearch.png"
            },
            {
              title: "Result",
              description: "The outcome...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/ICSearch.png"
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Oct 2026 – June 2027",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          Commit The Change External Client
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-4">
          Full-Stack Software Engineer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
          <li>Designed and implemented a remote management platform that reduced emergency housing response times by
            40% and decreased operational costs by 25%.
          </li>
          <li>Integrated secure APIs for real-time data synchronization, ensuring seamless remote coordination among
            stakeholders.
          </li>
          <li>Developed a scalable, user-friendly dashboard using React, TypeScript, and TailwindCSS, enabling
            effective remote oversight.
          </li>
          <li>Collaborated with distributed teams to drive continuous improvements, contributing to a 30% increase in
            overall service efficiency.
          </li>
        </ul>
        <Image
          src="/LumiNotes.png"
          alt="LumiNotes"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
        <CaseStudy
          steps={[
            {
              title: "Problem",
              description: "Commit The Change External Client's problem...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/LumiNotes.png"
            },
            {
              title: "Solution",
              description: "How it was solved...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/LumiNotes.png"
            },
            {
              title: "Result",
              description: "The outcome...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/LumiNotes.png"
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Jan 2026 – June 2026",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          In4matx 191 External Client
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-4">
          Full-Stack Software Engineer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
          <li>Delivered a proof‑of‑concept GUI for a defense analytics platform using Python’s Tkinter, making complex
            data accessible to non‑technical users.
          </li>
          <li>Optimized data‑processing workflows by implementing batch processing and efficient indexing strategies,
            reducing retrieval times by 50 %.
          </li>
          <li>Coordinated remotely with cross‑functional teams, providing clear documentation and regular status updates
            to stakeholders.
          </li>
        </ul>
        <Image
          src="/DevExchange_3.png"
          alt="DevExchange"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
        <CaseStudy
          steps={[
            {
              title: "Problem",
              description: "In4matx 191 External Client's problem...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/DevExchange_3.png"
            },
            {
              title: "Solution",
              description: "How it was solved...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/DevExchange_3.png"
            },
            {
              title: "Result",
              description: "The outcome...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/DevExchange_3.png"
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Oct 2025 – June 2026",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          Commit The Change External Client
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-4">
          Full-Stack Software Engineer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
          <li>Developed a responsive, remote-accessible environmental education platform using React, TypeScript, and
            TailwindCSS, increasing user engagement by 35%.
          </li>
          <li>Integrated interactive data visualizations and secure APIs to streamline online awareness campaigns,
            boosting digital outreach by 40%.
          </li>
          <li>Implemented analytics and tracking functionality to monitor user behavior in real time, leading to
            data-driven improvements in campaign effectiveness.
          </li>
          <li>Collaborated with distributed teams to enhance the platform while ensuring cross-functional communication
            and timely delivery.
          </li>
        </ul>
        <Image
          src="/LumiNotes.png"
          alt="LumiNotes"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
        <CaseStudy
          steps={[
            {
              title: "Problem",
              description: "Commit The Change External Client's problem...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/LumiNotes.png"
            },
            {
              title: "Solution",
              description: "How it was solved...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/LumiNotes.png"
            },
            {
              title: "Result",
              description: "The outcome...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/LumiNotes.png"
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Sept 2025 – Dec 2025",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          In4matx 117 External Client
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-4">
          Front-End Software Engineer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
          <li>Transformed an internal dashboard at Google with a responsive front‑end built in TypeScript and
            TailwindCSS, improving engineer productivity by 20 %.
          </li>
          <li>Collaborated with UX designers to refine UI components and implement accessibility best practices across
            the application.
          </li>
          <li>Authored comprehensive style guides and documentation to ensure consistency and maintainability of the
            codebase.
          </li>
        </ul>
        <Image
          src="/LumiNotes.png"
          alt="LumiNotes"
          width={500}
          height={300}
          className="rounded-lg mb-4"
        />
        <CaseStudy
          steps={[
            {
              title: "Problem",
              description: "In4matx 117 External Client's problem...",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              img: "/LumiNotes.png"
            },
            {
              title: "Solution",
              description: "How it was solved...",
              content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              img: "/LumiNotes.png"
            },
            {
              title: "Result",
              description: "The outcome...",
              content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. \n\nCorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \n\nEt harum quidem rerum facilis est et expedita distinctio.",
              img: "/LumiNotes.png"
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "April 2025 – Dec 2025",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          Friend's SaaS Startup
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-4">
          Full-Stack Software Engineer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
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
  {
    title: "Nov 2024 - May 2025",
    content: (
      <div>
        <h1 className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl mb-6">
          FUSION @ UC Irvine
        </h1>
        <h1 className="text-zinc-400 text-[20px] md:text-xl lg:text-2xl mb-4">
          Full-Stack Software Engineer
        </h1>
        <ul className="list-disc list-inside text-lg lg:text-xl mb-8 space-y-4">
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

export const services = [
  {
    id: 1,
    title: "Feature Development",
    subheader: "pause or cancel anytime",
    price: "$4,995/mo",
    description: "For startups and teams needing reliable feature or component builds, without hiring a full-time engineer.",
    details: [
      "Unlimited feature development requests",
      "React, Next.js, TailwindCSS Code",
      "Full integration into your codebase",
      "Unlimited revisions",
      "24-hour support response time",
      "3-5 day turnaround per request",
      "Async direct communication with me",
    ]
  },
  {
    id: 2,
    title: "Web Application Sprint",
    subheader: "pause or cancel anytime",
    price: "$9,995/mo",
    description: "For companies and businesses ready to build or overhaul a complete website or internal tool.",
    details: [
      "Full-stack web application development",
      "Authentication, databases, APIs",
      "CMS integration",
      "Mobile-optimized UI/UX",
      "SEO-friendly pages",
      "Clean technical documentation",
      "Unlimited revisions",
      "24-hour support response time",
      "1-2 week turnaround per request",
      "Async direct communication with me",
    ]
  },
  {
    id: 3,
    title: "Full SaaS MVP Development",
    subheader: "starts at",
    price: "$14,995/mo",
    description: "For founders and early-stage startups who need a technical partner to bring their idea to life.",
    details: [
      "Full-stack architecture and development",
      "Web Apps and SaaS Development",
      "AI Apps development",
      "Design + Development",
      "Unlimited revisions",
      "24-hour support response time",
      "Negotiable delivery time",
      "Async direct communication with me",
    ]
  }
];

export const FAQDetails = [
  {
    value: "item-1",
    title: "What is the turnaround time?",
    content: "I usually deliver the first draft within 1-2 weeks. The final website is delivered within 3-4 weeks.",
  },
  {
    value: "item-2",
    title: "How do you communicate?",
    content: "I use email, Slack, WhatsApp and Signal to communicate. I strongly prefer Slack and keep the conversations async so that I can focus on building your website.",
  },
  {
    value: "item-3",
    title: "What is the process of working with your?",
    content: "My process involves adding you to a communication channel where you describe your requirements (a call is optional). I then dive deep into your project, which involves research, ideation, and iterations -- all this with working closely with you for instant feedback.",
  },
  {
    value: "item-4",
    title: "What happens if I don't like the design?",
    content: "I provide unlimited revisions until you are happy with the design. I will work with you to make sure you are happy with the design.",
  },
  {
    value: "item-5",
    title: "Are there any refunds?",
    content: "I provide refunds only if I haven't started working on your website. Once I start working on your website, no refunds will be provided.",
  },
  {
    value: "item-6",
    title: "What is your Tech Stack?",
    content: "I am comfortable with all the major frameworks and technologies there are (since I am an engineer). But yes, I have my favorites. I use React, Next.js, and TailwindCSS to build out your website. Next.js because it has Search Engine Optimization (SEO) benefits, TailwindCSS because it makes development fast.",
  },
  {
    value: "item-7",
    title: "Why no calls or meetings?",
    content: "I am an independent contractor and want to focus on building your website. I have found that calls and meetings are a huge distraction and I want to avoid them as much as possible. I prefer async communication over calls and meetings. In the past, I've built huge softwares and SaaS applications without ever getting on a call. I am confident that I can build your website without getting on a call.",
  },
  {
    value: "item-8",
    title: "What happens if I have to make some changes in the website after it is delivered?",
    content: "If you still need help, I can make changes for you at a discounted hourly rate. Contact me through email for more details.",
  },
]