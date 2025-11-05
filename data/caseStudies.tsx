export const caseStudyContent = {
  'aurumis-ai': {
    title: 'Aurumis AI',
    role: 'Front-End Software Engineer (Freelance)',
    timeline: 'June 2025 – August 2025',
    image: '/projects/AurumisAI.png',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vercel', 'Lighthouse'],

    overview: 'Aurumis AI is a boutique B2B agency offering AI consulting and services to enterprise clients. Their team approached me to build a custom portfolio website that would reflect their expertise, build trust with clients, and boost their online discoverability. They previously relied on a generic no-code site, which lacked polish, loaded slowly, and had near-zero SEO value. I was hired to design and develop a fast, responsive, SEO-optimized platform that would elevate the brand and convert leads.\n' +
      '\n' +
      'As the sole developer, I led the architecture, design implementation, frontend development, animation layer, and deployment. I worked closely with the founder through three iterative rounds of design and layout feedback. The final product scored 98 on Lighthouse, saw a 25% increase in organic impressions, and a 2x increase in CTA clicks within the first month of launch.',

    problem: 'The original Aurumis AI website had been built with a drag-and-drop builder, resulting in excessive DOM nesting, poor mobile performance, and a bloated bundle size. Page speed was slow (~3.2s LCP), and the branding was inconsistent across devices. Worse, the website lacked proper HTML semantics and meta tags, preventing Google from indexing any content effectively.\n' +
      '\n' +
      'From a user experience perspective, the layout was visually bland, the calls-to-action were buried beneath unnecessary sections, and there was no animation or interactivity to reflect the modernity of an AI-focused brand.\n' +
      '\n' +
      'The founder was aware the site didn’t make a strong first impression and wanted a solution that not only performed better technically but also "looked like something built by a Silicon Valley startup."',

    solution: 'To build a site that met performance and design goals without sacrificing developer speed, I chose Next.js (App Router) for its SSR capabilities, routing system, and integration with Vercel. Styling was done using TailwindCSS, allowing for rapid prototyping and pixel-level control. I layered in Framer Motion for page transitions and subtle microinteractions that added life without hurting performance.\n' +
      '\n' +
      'I rebuilt the IA (information architecture) from scratch: reorganizing the content hierarchy to ensure the homepage clearly communicated (1) what Aurumis does, (2) why it matters, and (3) how to get in touch. I reduced the original page from ~10 sections to 5 focused ones — each optimized to drive a specific user action.\n' +
      '\n' +
      'Accessibility and SEO were baked in from the start. I used semantic HTML5 elements (<section>, <article>, <main>, etc.), included meta tags for all pages, generated Open Graph preview images for better link previews, and implemented proper heading structures for screen readers.\n' +
      '\n' +
      'Each component was developed responsively from the ground up, using Tailwind’s mobile-first breakpoints. I paid close attention to spacing and font scaling to ensure the site felt polished across all device widths.',

    result: 'After launch, Lighthouse performance scores immediately jumped to 98–100 across all metrics, including LCP, FCP, and TTI. The new layout cut LCP from 3.2s to 0.9s, largely thanks to server-side rendering, image optimization, and layout streamlining.\n' +
      '\n' +
      'Within the first 30 days, Google Search Console showed a 25% increase in organic impressions and a 15% boost in click-through rate compared to the old site — this was attributed to proper indexing, better meta descriptions, and fast load times.\n' +
      '\n' +
      'From a business perspective, the redesigned site drove a 200% increase in user clicks to contact forms and CTA buttons. The founder also reported that several clients specifically complimented the site\'s modern, high-trust look.',

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

    challenges: 'One technical challenge was managing animations across different breakpoints. On mobile, Framer Motion’s default transitions caused minor lag during scroll, particularly with larger hero sections. To fix this, I used the useInView() hook to defer animation triggers until elements were in view, and I replaced keyframe-based transitions with GPU-accelerated transforms like translateY().\n' +
      '\n' +
      'I also had to resolve an issue where font scaling appeared inconsistent across different browsers. The solution involved normalizing the base font size and implementing Tailwind\'s clamp() function for responsive typography that worked across both Chrome and Safari.',

    lessons: 'Working directly with a founder emphasized the importance of fast iteration cycles and getting early feedback. Rather than spend days polishing visuals, I shipped wireframes early, collected notes, and adjusted based on real feedback. This saved hours of rework and gave the founder more ownership in the design process.\n' +
      '\n' +
      'From a technical standpoint, this project deepened my understanding of fine-grained performance tuning, accessibility best practices, and animation optimization.',

    links: {
      live: 'https://www.aurumisai.com',
      github: null // optional
    }
  },
	'nomadlyst': {
    title: 'Nomadlyst',
    role: 'Founding Software Engineer',
    timeline: 'July 2025 – Present',
    image: '/projects/remote_radar.png',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB', 'SendGrid', 'Vercel', 'CronJobs'],

    overview: 'Remote Radar is a personal full-stack project I built to solve a real pain I experienced while job hunting as a digital nomad: manually checking dozens of remote job boards every day. The project aggregates job listings, allows filtering/bookmarking, and sends personalized email digests to subscribers.\n' +
      '\n' +
      'This is not just a demo app — it\'s a functioning platform used by over 200+ active subscribers, pulling in 1500+ new jobs per week via automated scrapers. The project helped me solidify skills in full-stack architecture, scraping strategies, email workflows, and building user-centric UIs with real engagement metrics.',

    problem: 'Finding high-quality remote jobs is tedious. Most job boards don’t filter for your exact tech stack, and many job aggregators scrape expired or irrelevant listings. There’s no way to bookmark jobs, track which ones you\'ve applied to, or receive tailored updates.\n' +
      '\n' +
      'As a job seeker, I found myself opening 6+ tabs daily and manually scanning them — which felt like a part-time job. I wanted a platform that did the heavy lifting for me.',

    solution: 'I built Remote Radar from scratch using Next.js (frontend + backend) and MongoDB to power a full-stack remote job board with bookmarking, tracking, and subscription features.\n' +
      '\n' +
      'Custom web scrapers run on a cron job schedule to pull job listings from sources like WeWorkRemotely, RemoteOK, and RemoteTechJobs.\n' +
      '\n' +
      'All data is stored in a normalized MongoDB schema and deduplicated using hash-based IDs.\n' +
      '\n' +
      'Users can filter jobs by role, salary, or keyword, and mark jobs as "applied" to track their progress.\n' +
      '\n' +
      'A daily and weekly email digest system delivers curated jobs to subscribers using SendGrid, dynamically based on their saved preferences.\n' +
      '\n' +
      'The UI is fully responsive, dark-mode friendly, and built using TailwindCSS. I also added a landing page, about section, and subtle animations to polish the product for potential public release.',

    result: '200+ active email subscribers in the first 4 weeks\n' +
      '\n' +
      '20% boost in engagement after adding bookmark & export features\n' +
      '\n' +
      '95+ Lighthouse scores across all pages\n' +
      '\n' +
      'Several job seekers reported saving 5+ hours/week and increased their interview rates\n' +
      '\n' +
      'Remote Radar evolved from a personal solution into a lightweight SaaS prototype. It laid the foundation for future monetization via gated features (e.g., auto-apply, premium filters, resume templates).',

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

    challenges: 'The biggest challenge was scraper reliability. Many boards used inconsistent HTML structures or changed DOM patterns frequently. I had to build fallback selectors, add schema validation, and implement alerts for failed scrapes. Another challenge was preventing job duplicates — solved via hashing logic.\n' +
      '\n' +
      'Handling SendGrid rate limits and email design across clients (Gmail, Outlook, Apple Mail) also required testing across environments and simplifying markup.',

    lessons: 'I learned the importance of designing for scale from the beginning — including how to structure databases, normalize content, and build scraper architecture that’s modular and extendable. I also gained hands-on experience in building engagement-driven features, such as reminders, saved filters, and performance-tracked CTAs.\n' +
      '\n' +
      'More than anything, I experienced what it feels like to build a full-stack product with real users and measurable impact — far beyond the scope of a student portfolio project.',

    links: {
      live: 'https://www.remoteradar.io',
      github: null // private or unreleased
    }
  },
};
