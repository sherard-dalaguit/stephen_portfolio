import Image from "next/image";
import Link from "next/link";
import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import { IconHome, IconExternalLink, IconBrandGithub } from "@tabler/icons-react";

type CaseStudyImage = { src: string; alt: string; caption?: string };

type Decision = { decision: string; why: string; tradeoffs?: string[] };

type Stat = { label: string; value: string };

type Highlight = {
  title: string;
  bullets: string[];
  image?: CaseStudyImage;
};

type CaseStudyLink = {
  label: string;
  href: string;
  kind: string;
  external?: boolean; // optional override
  icon?: "external" | "github" | "home"; // optional, purely for UI
};

type CaseStudyLinks = Partial<{
  live: CaseStudyLink;
  github: CaseStudyLink;
  home: CaseStudyLink;
  docs: CaseStudyLink;
  demo: CaseStudyLink;
}>;

type CaseStudyProps = {
  // existing...
  title: string;
  tagline?: string;
  role: string;
  timeline: string;
  image: string;

  techStack: string[];
  stats?: Stat[];

  overview: string;
  problem: string;
  solution: string;
  impact: string;

  development?: { title: string; content: string }[];

  challenges: string;
  lessons: string;
  nextSteps?: string;

  responsibilities?: string[];
  decisions?: Decision[];
  architecture?: { image: CaseStudyImage; notes?: string };
  highlights?: Highlight[];
  gallery?: CaseStudyImage[];

  links: CaseStudyLinks
};


function Section({
                   id,
                   title,
                   children,
                 }: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold primary-text-gradient mb-3">
        {title}
      </h2>
      <div className="text-zinc-200/90 leading-relaxed md:text-lg whitespace-pre-line">
        {children}
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-sm text-zinc-200">
      {children}
    </span>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
      <div className="text-sm text-zinc-400">{stat.label}</div>
      <div className="mt-1 text-xl font-semibold text-zinc-100">
        {stat.value}
      </div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((item, idx) => (
        <li key={`${idx}-${item}`} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e5e5e5]" />
          <span className="text-zinc-200/90 md:text-lg leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SubtleCard({
                      title,
                      children,
                    }: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
      <div className="text-lg font-semibold text-zinc-100">{title}</div>
      <div className="mt-3 text-zinc-200/90 whitespace-pre-line">{children}</div>
    </div>
  );
}

function Figure({ img }: { img: CaseStudyImage }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40">
      <Image
        src={img.src}
        alt={img.alt}
        width={1400}
        height={900}
        className="h-auto w-full"
      />
      {img.caption ? (
        <figcaption className="border-t border-zinc-800 px-4 py-3 text-sm text-zinc-400">
          {img.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function LinkButton({
                      link,
                      defaultIcon,
                    }: {
  link: CaseStudyLink;
  defaultIcon: React.ReactNode;
}) {
  const external = link.external ?? isExternalHref(link.href);

  const icon =
    link.icon === "github" ? <IconBrandGithub /> :
      link.icon === "home" ? <IconHome /> :
        defaultIcon;

  const btn = (
    <MagicButton
      title={link.label}
      icon={icon}
      position="right"
    />
  );

  if (external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex"
      >
        {btn}
      </a>
    );
  }

  return (
    <Link href={link.href} className="inline-flex">
      {btn}
    </Link>
  );
}

export default function FullCaseStudy(props: CaseStudyProps) {
  const {
    title,
    tagline,
    role,
    timeline,
    image,
    techStack,
    stats,
    overview,
    problem,
    solution,
    impact,
    development,
    challenges,
    lessons,
    nextSteps,
    links,
  } = props;

  const nav = [
    { id: "overview", label: "Overview" },
    ...(props.responsibilities?.length ? [{ id: "responsibilities", label: "Responsibilities" }] : []),
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    ...(props.decisions?.length ? [{ id: "decisions", label: "Key Decisions" }] : []),
    ...(props.architecture ? [{ id: "architecture", label: "Architecture" }] : []),
    ...(props.highlights?.length ? [{ id: "highlights", label: "Highlights" }] : []),
    ...(props.gallery?.length ? [{ id: "gallery", label: "Gallery" }] : []),
    { id: "impact", label: "Impact" },
    ...(development?.length ? [{ id: "deep-dive", label: "Deep Dive" }] : []),
    { id: "challenges", label: "Challenges" },
    { id: "lessons", label: "Lessons" },
    ...(nextSteps ? [{ id: "next", label: "Next Steps" }] : []),
    { id: "tech", label: "Tech Stack" },
  ];


  return (
    <div className="relative z-30 mx-auto max-w-screen-2xl px-6 pb-24 pt-20">
      {/* HERO */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight primary-text-gradient md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-zinc-300 md:text-lg">
              {role} <span className="text-zinc-600">·</span> {timeline}
            </p>
            {tagline ? (
              <p className="mt-4 text-zinc-200/90 md:text-xl">{tagline}</p>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Live */}
              {props.links?.live ? (
                <LinkButton link={{ ...props.links.live, icon: props.links.live.icon ?? "external" }} defaultIcon={<IconExternalLink />} />
              ) : null}

              {/* GitHub */}
              {props.links?.github ? (
                <LinkButton link={{ ...props.links.github, icon: props.links.github.icon ?? "github" }} defaultIcon={<IconBrandGithub />} />
              ) : null}

              {/* Home */}
              {props.links?.home ? (
                <LinkButton link={{ ...props.links.home, icon: props.links.home.icon ?? "home" }} defaultIcon={<IconHome />} />
              ) : (
                // Optional fallback if you still want it even when content doesn't specify it
                <Link href="/#certificates" className="inline-flex">
                  <MagicButton title="Return Home" icon={<IconHome />} position="right" />
                </Link>
              )}
            </div>

          </div>

          {/* Optional stats */}
          {stats?.length ? (
            <div className="grid w-full gap-3 md:w-[360px]">
              {stats.slice(0, 6).map((s) => (
                <StatCard key={`${s.label}-${s.value}`} stat={s} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800">
          <Image
            src={image}
            alt={title}
            width={1400}
            height={720}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      {/* BODY */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6">
            <div className="text-sm font-semibold text-zinc-300">
              Jump to section
            </div>
            <nav className="mt-4 flex flex-col gap-2">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900/60"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-6">
              <div className="text-sm font-semibold text-zinc-300">
                Technologies
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {techStack.slice(0, 10).map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="space-y-10">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
            <Section id="overview" title="Overview">
              {overview}
            </Section>
          </div>

          {props.responsibilities?.length ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <Section id="responsibilities" title="Responsibilities">
                <Bullets items={props.responsibilities} />
              </Section>
            </div>
          ) : null}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
            <Section id="problem" title="Problem">
              {problem}
            </Section>
          </div>

          {props.decisions?.length ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <Section id="decisions" title="Key Decisions & Tradeoffs">
                <div className="mt-2 space-y-4">
                  {props.decisions.map((d) => (
                    <SubtleCard key={d.decision} title={d.decision}>
                      <>
                        <div>{d.why}</div>
                        {d.tradeoffs?.length ? (
                          <div className="mt-4">
                            <div className="text-sm font-semibold text-zinc-300">
                              Tradeoffs
                            </div>
                            <Bullets items={d.tradeoffs} />
                          </div>
                        ) : null}
                      </>
                    </SubtleCard>
                  ))}
                </div>
              </Section>
            </div>
          ) : null}

          {props.architecture ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <Section id="architecture" title="System Architecture">
                <div className="mt-4 space-y-4">
                  <Figure img={props.architecture.image} />
                  {props.architecture.notes ? (
                    <div className="text-zinc-200/90 md:text-lg whitespace-pre-line">
                      {props.architecture.notes}
                    </div>
                  ) : null}
                </div>
              </Section>
            </div>
          ) : null}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
            <Section id="solution" title="Solution">
              {solution}
            </Section>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
            <Section id="impact" title="Impact">
              {impact}
            </Section>
          </div>

          {props.highlights?.length ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <Section id="highlights" title="Feature Highlights">
                <div className="mt-2 space-y-6">
                  {props.highlights.map((h) => (
                    <div
                      key={h.title}
                      className="grid gap-5 lg:grid-cols-[1fr_420px] lg:items-start"
                    >
                      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
                        <div className="text-xl font-semibold text-zinc-100">
                          {h.title}
                        </div>
                        <Bullets items={h.bullets} />
                      </div>
                      {h.image ? <Figure img={h.image} /> : null}
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          ) : null}

          {development?.length ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <Section id="deep-dive" title="Deep Dive">
                <div className="mt-2 space-y-4">
                  {development.map((d) => (
                    <details
                      key={d.title}
                      className="group rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5"
                    >
                      <summary className="cursor-pointer list-none text-lg font-semibold text-zinc-200">
                        {d.title}
                        <span className="ml-2 text-zinc-500 group-open:hidden">
                          (expand)
                        </span>
                      </summary>
                      <p className="mt-3 text-zinc-200/90 whitespace-pre-line">
                        {d.content}
                      </p>
                    </details>
                  ))}
                </div>
              </Section>
            </div>
          ) : null}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
            <Section id="challenges" title="Challenges">
              {challenges}
            </Section>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
            <Section id="lessons" title="Lessons">
              {lessons}
            </Section>
          </div>

          {props.gallery?.length ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <Section id="gallery" title="Gallery">
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {props.gallery.map((img) => (
                    <Figure key={img.src} img={img} />
                  ))}
                </div>
              </Section>
            </div>
          ) : null}

          {nextSteps ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
              <Section id="next" title="Next Steps">
                {nextSteps}
              </Section>
            </div>
          ) : null}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
            <Section id="tech" title="Tech Stack">
              <div className="mt-2 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Section>
          </div>
        </main>
      </div>
    </div>
  );
}
