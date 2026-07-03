import {
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
  IconBrandTailwind,
  IconBrandOpenai,
  IconBriefcase,
  IconBrandPython,
  IconCoffee,
  IconBrandCpp,
  IconBrandJavascript,
  IconSql,
  IconHierarchy,
  IconSchema,
  IconTerminal2,
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import {LinkPreview} from "@/components/ui/link-preview";

export const skills = [
  { name: 'Python', des: 'General Purpose', icon: <IconBrandPython className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Java', des: 'Enterprise Software', icon: <IconCoffee className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'C++', des: 'System Programming', icon: <IconBrandCpp className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'JavaScript', des: 'Web Scripting', icon: <IconBrandJavascript className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'TypeScript', des: 'JavaScript but better', icon: <IconBrandTypescript className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Node.js', des: 'Runtime Environment', icon: <IconBrandNodejs className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'React', des: 'Frontend Library', icon: <IconBrandReact className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Next.js', des: 'React Framework', icon: <IconBrandNextjs className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'SQL', des: 'Database Management', icon: <IconSql className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Neo4j', des: 'Graph Database', icon: <IconHierarchy className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'MongoDB', des: 'NoSQL Database', icon: <IconBrandMongodb className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Mongoose', des: 'ODM for MongoDB', icon: <IconSchema className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Tailwind', des: 'CSS Framework', icon: <IconBrandTailwind className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'OpenAI API', des: 'AI Integration', icon: <IconBrandOpenai className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Claude Code', des: 'CLI-based AI Agent', icon: <IconTerminal2 className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
  { name: 'Git', des: 'Version Control', icon: <IconBrandGit className="h-12 w-12 text-neutral-500 dark:text-neutral-300" /> },
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
    subheader: "AI Tagalog Conversation Coach",
    des: "An AI-powered Tagalog learning coach that lets users hold real-time voice conversations with a natural-sounding AI tutor and receive instant, personalized feedback on their grammar, vocabulary, and fluency.",
    img: "/projects/TagalogAI2.webp",
    iconLists: ["/tech/re.svg", "/tech/next.svg", "/tech/openai.svg", "/tech/vapi.svg", "/tech/mongodb.png"],
    githubLink: "https://github.com/sherard-dalaguit/tagalogai",
    deployedLink: "https://www.tagalogai.com",
  },
  {
    id: 2,
    title: "Rizzlytics",
    subheader: "AI Dating App Profile Analyzer",
    des: "An AI-powered dating profile analysis system that evaluates photos and message threads using vision-based feedback pipelines and structured AI outputs.",
    img: "/projects/Rizzlytics.webp",
    iconLists: ["/tech/ts.svg", "/tech/re.svg", "/tech/next.svg", "/tech/openai.svg", "/tech/mongodb.png"],
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
];

export const timeline = [
  // {
  //   title: "Apr 2030 – Present",
  //   content: (
  //     <div>
  //       <div className="flex items-center gap-4 mb-2">
  //         <Image
  //           src="/logo/twilio.jpg"
  //           alt="Twilio logo"
  //           width={64}
  //           height={64}
  //           className="rounded-xl object-cover shrink-0"
  //         />
  //         <LinkPreview url="https://www.twilio.com" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">
  //           <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
  //             Twilio
  //           </h1>
  //         </LinkPreview>
  //       </div>
  //       <h2 className="text-[18px] md:text-lg lg:text-xl my-4 pl-3 border-l-2 border-[#d1b3ff] text-zinc-300">
  //         Software Engineer III
  //       </h2>
  //       <div className="flex flex-wrap gap-2 mb-6">
  //         {["Java", "TypeScript", "PostgreSQL", "Distributed Systems", "Event-Driven"].map((tag) => (
  //           <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#d1b3ff]/10 text-[#d1b3ff] border border-[#d1b3ff]/30">
  //             {tag}
  //           </span>
  //         ))}
  //       </div>
  //       <ul className="list-disc list-outside ml-5 text-md sm:text-lg lg:text-xl mb-8 space-y-4">
  //         <li>
  //           Led technical direction for core customer-facing communication systems supporting 10M+ monthly workflows,
  //           reducing cross-service integration issues by 30% through clearer API contracts and ownership boundaries.
  //         </li>
  //         <li>
  //           Modernized legacy backend services across multiple quarters, saving 400+ engineering hours annually by
  //           reducing manual release coordination, improving observability, and simplifying service ownership.
  //         </li>
  //         <li>
  //           Drove delivery across concurrent roadmap initiatives involving distributed APIs and event-driven workflows,
  //           increasing on-time milestone completion from 70% to 90%+ across 3 product teams.
  //         </li>
  //         <li>
  //           Designed reliability improvements for high-throughput messaging workflows, reducing recurring incident
  //           patterns by 35% and saving 120+ on-call hours annually through better alerting and failure isolation.
  //         </li>
  //         <li>
  //           Mentored 2–4 engineers through design reviews, PR feedback, and onboarding support, cutting ramp-up time
  //           by 25% and improving code quality across backend service areas.
  //         </li>
  //       </ul>
  //     </div>
  //   ),
  // },
  // {
  //   title: "Sep 2028 – Mar 2030",
  //   content: (
  //     <div>
  //       <div className="flex items-center gap-4 mb-2">
  //         <Image
  //           src="/logo/twilio.jpg"
  //           alt="Twilio logo"
  //           width={64}
  //           height={64}
  //           className="rounded-xl object-cover shrink-0"
  //         />
  //         <LinkPreview url="https://www.twilio.com" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">
  //           <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
  //             Twilio
  //           </h1>
  //         </LinkPreview>
  //       </div>
  //       <h2 className="text-[18px] md:text-lg lg:text-xl my-4 pl-3 border-l-2 border-[#d1b3ff] text-zinc-300">
  //         Software Engineer II
  //       </h2>
  //       <div className="flex flex-wrap gap-2 mb-6">
  //         {["Java", "TypeScript", "PostgreSQL", "Async Processing", "Monitoring"].map((tag) => (
  //           <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#d1b3ff]/10 text-[#d1b3ff] border border-[#d1b3ff]/30">
  //             {tag}
  //           </span>
  //         ))}
  //       </div>
  //       <ul className="list-disc list-outside ml-5 text-md sm:text-lg lg:text-xl mb-8 space-y-4">
  //         <li>
  //           Scaled distributed backend services supporting millions of daily communication events, reducing request
  //           latency by 35% through asynchronous processing, caching, and database optimization.
  //         </li>
  //         <li>
  //           Built fault-tolerant event processing pipelines handling 50M+ daily events, improving reliability to
  //           99.9%+ and reducing customer-impacting processing failures by 40%.
  //         </li>
  //         <li>
  //           Developed monitoring and debugging tools used by 80+ engineers, reducing incident investigation time by
  //           40% through centralized traces, job status visibility, and service-level error reporting.
  //         </li>
  //         <li>
  //           Improved service scalability during traffic spikes, cutting peak-hour queue backlog by 45% through
  //           optimized database access patterns, background job execution, and queue processing.
  //         </li>
  //         <li>
  //           Partnered with product, design, and senior engineers to deliver platform improvements that reduced support
  //           escalations by 20% while balancing customer impact, reliability, and technical debt.
  //         </li>
  //       </ul>
  //     </div>
  //   ),
  // },
  // {
  //   title: "Jan 2027 – Aug 2028",
  //   content: (
  //     <div>
  //       <div className="flex items-center gap-4 mb-2">
  //         <Image
  //           src="/logo/twilio.jpg"
  //           alt="Twilio logo"
  //           width={64}
  //           height={64}
  //           className="rounded-xl object-cover shrink-0"
  //         />
  //         <LinkPreview url="https://www.twilio.com" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">
  //           <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
  //             Twilio
  //           </h1>
  //         </LinkPreview>
  //       </div>
  //       <h2 className="text-[18px] md:text-lg lg:text-xl my-4 pl-3 border-l-2 border-[#d1b3ff] text-zinc-300">
  //         Software Engineer
  //       </h2>
  //       <div className="flex flex-wrap gap-2 mb-6">
  //         {["Java", "TypeScript", "PostgreSQL", "REST APIs", "Agile"].map((tag) => (
  //           <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#d1b3ff]/10 text-[#d1b3ff] border border-[#d1b3ff]/30">
  //             {tag}
  //           </span>
  //         ))}
  //       </div>
  //       <ul className="list-disc list-outside ml-5 text-md sm:text-lg lg:text-xl mb-8 space-y-4">
  //         <li>
  //           Developed backend APIs and internal platform features using Java, TypeScript, and PostgreSQL, reducing
  //           request processing time by 25% across workflows used by 30+ internal teams.
  //         </li>
  //         <li>
  //           Improved reliability for asynchronous workflows, decreasing failed job executions by 30% and saving 10+
  //           engineering hours weekly through retry logic, validation, and failure recovery.
  //         </li>
  //         <li>
  //           Built service health and debugging tooling for event-driven systems, helping engineers identify production
  //           issues faster and reducing manual incident investigation by 6+ hours per week.
  //         </li>
  //         <li>
  //           Collaborated with 5+ engineers in a remote agile team to ship production features across multiple releases,
  //           contributing to API design, code reviews, sprint planning, and launch support.
  //         </li>
  //       </ul>
  //     </div>
  //   ),
  // },
  {
    title: "Jun 2026 – Present",
    content: (
      <div>
        <div className="flex items-center gap-4 mb-2">
          <Image
            src="/logo/twilio.jpg"
            alt="Twilio logo"
            width={64}
            height={64}
            className="rounded-xl object-cover shrink-0"
          />
          <LinkPreview url="https://www.twilio.com" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">
            <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
              Twilio
            </h1>
          </LinkPreview>
        </div>
        <h2 className="text-[18px] md:text-lg lg:text-xl my-4 pl-3 border-l-2 border-[#d1b3ff] text-zinc-300">
          Software Engineer Intern
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {["TypeScript", "DynamoDB", "LLMs", "AWS"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#d1b3ff]/10 text-[#d1b3ff] border border-[#d1b3ff]/30">
              {tag}
            </span>
          ))}
        </div>
        <ul className="list-disc list-outside ml-5 text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>
            Working on AI-powered infrastructure within Twilio's internal marketing platform, developing LLM-powered content generation workflows with TypeScript and DynamoDB for campaigns reaching <span className="font-bold lavender-text">millions of users</span>.
          {/*  Engineered an LLM-powered content generation engine enabling marketers to produce AI-generated marketing assets for products used by <span className="font-bold lavender-text">300M+ global users</span>, cutting campaign creation from hours to minutes.*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  Architected a persistent state management layer using TypeScript and DynamoDB, supporting <span className="font-bold lavender-text">50K+ AI-generated marketing assets</span> through secure session persistence and resumable editing workflows.*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  Developed reusable orchestration libraries and typed service contracts powering LLM workflows across <span className="font-bold lavender-text">3+ internal applications</span>, reducing duplicated engineering effort by <span className="font-bold lavender-text">60%</span> and accelerating feature delivery.*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  Built production deployment infrastructure with feature flags, automated testing, and enterprise authentication across <span className="font-bold lavender-text">15+ production components</span>, enabling zero-downtime incremental feature rollouts.*/}
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Jan 2026 – Jun 2026",
    content: (
      <div>
        <div className="flex items-center gap-4 mb-2">
          <Image
            src="/logo/panasonic_avionics_corporation.jpg"
            alt="Panasonic Avionics logo"
            width={64}
            height={64}
            className="rounded-xl object-cover shrink-0"
          />
          <LinkPreview url="https://www.panasonic.aero" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">
            <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
              Panasonic Avionics
            </h1>
          </LinkPreview>
        </div>
        <h2 className="text-[18px] md:text-lg lg:text-xl my-4 pl-3 border-l-2 border-[#d1b3ff] text-zinc-300">
          Software Engineer Consultant
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Python", "Go", "OpenAPI", "Neo4j", "YAML"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#d1b3ff]/10 text-[#d1b3ff] border border-[#d1b3ff]/30">
              {tag}
            </span>
          ))}
        </div>
        <ul className="list-disc list-outside ml-5 text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>
            Built a Python backend validation service to prevent incompatible aircraft software deployments by enforcing
            hardware, software, and configuration constraints prior to fleet rollout.
          </li>
          <li>
            Engineered a deterministic resolution system for large-scale, distributed deployment validation, via
            dependency graph traversal across <span className="font-bold lavender-text">1,500+ aircraft</span> to deliver low-latency (<span className="font-bold lavender-text">{"<"}5s</span>) constraint evaluation.
          </li>
          <li>
            Designed OpenAPI integration contracts and Go-based validation tooling for YAML dependency manifests,
            enabling pipeline-level verification before Neo4j ingestion.
          </li>
          <li>
            Architected a Neo4j dependency graph schema supporting semantic version ranges, hard vs. soft requirements,
            and incompatibilities across <span className="font-bold lavender-text">50,000+ deployable artifacts</span>.
          </li>
          <li>
            Reduced simulated fleet-scale deployment failures by <span className="font-bold lavender-text">90%+</span> by partnering with a Principal Architect to shift
            validation to pre-deployment constraint evaluation with actionable incompatibility explanations.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "May 2025 – Sep 2025",
    content: (
      <div>
        <div className="flex items-center gap-4 mb-2">
          <Image
            src="/logo/openlyst.jpg"
            alt="OpenLyst logo"
            width={64}
            height={64}
            className="rounded-xl object-cover shrink-0"
          />
          <LinkPreview url="https://www.openlyst.io" className="font-bold underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">
            <h1 className="font-bold text-[#d1b3ff] hover:text-[#a17eff] text-[32px] md:text-4xl lg:text-5xl">
              OpenLyst
            </h1>
          </LinkPreview>
        </div>
        <h2 className="text-[18px] md:text-lg lg:text-xl my-4 pl-3 border-l-2 border-[#d1b3ff] text-zinc-300">
          Founder & Engineer
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {["TypeScript", "Next.js", "MongoDB", "GitHub Actions", "SendGrid"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm rounded-full bg-[#d1b3ff]/10 text-[#d1b3ff] border border-[#d1b3ff]/30">
              {tag}
            </span>
          ))}
        </div>
        <ul className="list-disc list-outside ml-5 text-md sm:text-lg lg:text-xl mb-8 space-y-4">
          <li>
            Launched and deployed a production remote job aggregation platform processing <span className="font-bold lavender-text">2,000+ new listings weekly</span>
            {" "}via automated GitHub Actions pipelines that scrape, normalize, and remove stale data across multiple sources.
          </li>
          <li>
            Engineered resilient ingestion pipelines with deduplication and failure handling, reducing duplicate listings
            by <span className="font-bold lavender-text">~40%</span> and ensuring consistent data quality.
          </li>
          <li>
            Designed a MongoDB-backed data model optimized for high-frequency writes and fast querying, enabling near
            real-time job updates and personalized delivery.
          </li>
          <li>
            Automated serverless email delivery workflows with Next.js API routes and Twilio SendGrid, distributing
            personalized job digests to <span className="font-bold lavender-text">100+ early users</span> with <span className="font-bold lavender-text">{">"}98% delivery success</span>.
          </li>
        </ul>
        {/*<Link*/}
        {/*  href={`/experience/nomadlyst`}*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*  className="underline underline-offset-4 decoration-2 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer"*/}
        {/*>*/}
        {/*  <MagicButton*/}
        {/*    title="Case Study"*/}
        {/*    icon={<IconBriefcase />}*/}
        {/*    position="right"*/}
        {/*  />*/}
        {/*</Link>*/}
      </div>
    ),
  },
];