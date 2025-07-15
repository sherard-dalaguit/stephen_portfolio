export const caseStudyContent = {
  'aurumis-ai': {
    title: 'Aurumis AI',
    role: 'Front-End Software Engineer (Freelance)',
    timeline: 'June 2025 – August 2025',
    image: '/projects/AurumisAI.png',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vercel', 'Lighthouse'],

    overview: `Aurumis AI is a boutique B2B agency that needed a sleek, modern website to showcase its AI solutions to enterprise clients. The founder approached me to rebuild their marketing presence from scratch with a focus on visual polish, performance, and search engine visibility. As the sole developer, I handled everything from architecture to deployment within a 6-week sprint.`,

    problem: `The client's original no-code solution was bloated, slow, and not SEO-friendly. Page load times exceeded 3 seconds, and Lighthouse scores were consistently poor. Worse, the site didn't feel premium — which was critical, since their target clients were enterprise decision-makers. They needed a professional, performant site to gain trust and drive conversions.`,

    solution: `I chose to rebuild the site using Next.js for its performance and SSR benefits, paired with TailwindCSS for scalable styling and Framer Motion for subtle animations. I restructured the layout to prioritize CTAs, integrated semantic HTML for SEO, and leveraged Vercel’s edge deployment for fast global delivery. I also worked closely with the founder through 3+ feedback loops to align the design with the brand’s identity and tone.`,

    result: `The final product scored a 98/100 on Lighthouse, with the largest contentful paint under 1 second. Organic impressions increased by 25% in the first 30 days after Google reindexed the site. Most importantly, the founder reported a 2x increase in clicks to contact and CTA sections — directly tied to layout changes and page speed improvements.`,

    development: [
      {
        title: 'Stack & Architecture',
        content: `I selected Next.js for its hybrid rendering and SEO benefits, and deployed on Vercel for its tight integration and speed. TailwindCSS ensured consistent styling, while Framer Motion added subtle transitions for a polished feel. The site is fully responsive and optimized for mobile, with minimal layout shifts.`,
      },
      {
        title: 'SEO & Performance',
        content: `I used semantic HTML, meta tags, and Open Graph configuration to improve search visibility. I also compressed assets, lazy-loaded images, and reduced render-blocking CSS. This pushed the Lighthouse score to 98 and reduced TTI to < 1s.`,
      },
      {
        title: 'Component Reusability',
        content: `All UI sections were broken into composable components (e.g., Hero, ServicesGrid, Testimonials), making the site easy to update or extend later. Animations were modularized using Framer Motion variants for reuse.`,
      }
    ],

    challenges: `One unexpected issue was ensuring scroll-based animations remained performant on low-end mobile devices. Framer Motion animations needed to be tuned to avoid jank, especially on image-heavy sections. I resolved this by using intersection observers and simplifying transitions on mobile breakpoints.`,

    lessons: `This project reinforced the value of tight feedback loops with stakeholders. The founder’s involvement during wireframing helped us avoid costly layout revisions later. I also gained a deeper understanding of performance tuning for production deployments.`,

    links: {
      live: 'https://www.aurumisai.com',
      github: null // optional
    }
  },
	'remote-radar': {
    title: 'Remote Radar',
    role: 'Technical Founder',
    timeline: 'May 2025 – Present',
    image: '/projects/remote_radar.png',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'SendGrid', 'Vercel', 'CronJobs'],

    overview: `Remote Radar is a full-stack job aggregation platform that scrapes and curates remote software engineering jobs from multiple job boards. As a digital nomad myself, I wanted to solve the pain of manually checking platforms daily and instead offer a streamlined dashboard for browsing, saving, and applying to jobs — all in one place.`,

    problem: `Remote job seekers often waste hours jumping between job boards, dealing with spammy listings, expired posts, and non-technical filters. Most aggregators either miss jobs or don't allow useful features like bookmarking or filtering by tech stack. I wanted to build a reliable source of remote jobs with actual productivity tools built in.`,

    solution: `I architected the platform using Next.js for both frontend and backend logic (API routes), integrated PostgreSQL for persistent job/user data, and built a scraping system that aggregates 300+ fresh listings every week. I added features like “mark as applied,” job saving, and filtered search. For user engagement, I built an email digest system with SendGrid to deliver personalized job updates daily and weekly.`,

    result: `The platform quickly grew to 200+ email subscribers in its first month. Lighthouse scores remained in the 95–100 range, and engagement improved by 20% after introducing bookmark/export tools. Job seekers reported saving hours per week, and the CTR for job links doubled after optimizing the dashboard UI.`,

    development: [
      {
        title: 'Stack & Infrastructure',
        content: `Built with the Next.js App Router and deployed on Vercel for streamlined CI/CD. PostgreSQL stores job data, user preferences, and interactions. Cron jobs run scraping routines daily, storing results into normalized database schemas.`,
      },
      {
        title: 'Scraper System',
        content: `Custom web scrapers fetch remote jobs from top boards like WeWorkRemotely and RemoteOK. Each scraper parses HTML, normalizes job data, and avoids duplicates by checking post hashes before insert. Cron jobs ensure fresh listings daily.`,
      },
      {
        title: 'Dashboard & Features',
        content: `The dashboard supports filtering by role, stack, and keyword. Users can bookmark jobs, mark applications as completed, and export job lists as CSV. UI is mobile-optimized with Tailwind, and logic is separated into modular components.`,
      },
      {
        title: 'Email Digest System',
        content: `Users can opt into a daily or weekly email digest powered by SendGrid. The system dynamically queries user preferences and curates personalized job lists. Emails are designed with inline Tailwind and tested for dark mode compatibility.`,
      }
    ],

    challenges: `Building a scraper that handled inconsistent HTML from multiple boards was a key challenge. I built abstracted parser functions for common layouts and fallback strategies when sites updated their DOM structure unexpectedly. I also had to sanitize and truncate long post bodies to fit the dashboard UI.`,

    lessons: `This project taught me how to design for scale early. I structured the job schema to support future expansion (e.g., job tags, salary ranges, location filters), and abstracted scraper logic to support adding new sources in <1 hour. I also gained experience integrating email automation in a production-grade app.`,

    links: {
      live: 'https://www.remoteradar.io',
      github: null // private or unreleased
    }
  },
};
