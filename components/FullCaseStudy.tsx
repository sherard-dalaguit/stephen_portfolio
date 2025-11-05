import Image from "next/image";
import Link from "next/link";
import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import {IconHome} from "@tabler/icons-react";

type CaseStudyProps = {
  title: string;
  role: string;
  timeline: string;
  image: string;
  techStack: string[];
  overview: string;
  problem: string;
  solution: string;
  result: string;
  development: {
    title: string;
    content: string;
  }[];
  challenges: string;
  lessons: string;
  links: {
    live: string;
    github?: string | null;
  };
};

export default function FullCaseStudy({
  title,
  role,
  timeline,
  image,
  techStack,
  overview,
  problem,
  solution,
  result,
  development,
  challenges,
  lessons,
  links
}: CaseStudyProps) {
  return (
    <div className="flex flex-col mt-16 p-8 z-30 max-w-7xl mx-auto">
      <h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl text-[#d1b3ff]">
        {title}
      </h1>
      <p className="mt-4 text-center text-lg sm:text-xl lg:text-2xl text-zinc-400">{role} · {timeline}</p>

      <Link href="/#projects" className="my-8 sm:mt-0 mx-auto">
        <MagicButton
          title="Return Home"
          icon={<IconHome/>}
          position="right"
        />
      </Link>

      <Image
        src={image}
        className="rounded-lg border-2 border-[#d1b3ff] my-4 mx-auto z-100"
        alt={title}
        width={1000}
        height={500}
      />

      <section className="mt-12 mb-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#d1b3ff]">Overview</h2>
        <p className="md:text-xl whitespace-pre-line">{overview}</p>
      </section>

      <section className="my-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#d1b3ff]">Problem</h2>
        <p className="md:text-xl whitespace-pre-line">{problem}</p>
      </section>

      <section className="my-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#d1b3ff]">Solution</h2>
        <p className="md:text-xl whitespace-pre-line">{solution}</p>
      </section>

      <section className="my-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#d1b3ff]">Result</h2>
        <p className="md:text-xl whitespace-pre-line">{result}</p>
      </section>

      <section className="my-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#d1b3ff]">Development</h2>
        {development.map((section) => {
          return (
            <div key={section.title} className="mb-6">
              <h3 className="text-2xl font-semibold text-zinc-400 mb-1">{section.title}</h3>
              <p className="md:text-xl">{section.content}</p>
            </div>
          )
        })}
      </section>

      <section className="my-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#d1b3ff]">Challenges</h2>
        <p className="md:text-xl whitespace-pre-line">{challenges}</p>
      </section>

      <section className="my-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#d1b3ff]">Lessons</h2>
        <p className="md:text-xl whitespace-pre-line">{lessons}</p>
      </section>

      <section className="my-6">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 text-[#d1b3ff]">Technologies Used</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <li key={tech} className="bg-zinc-800 px-2 py-1 rounded text-lg">{tech}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
