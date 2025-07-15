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
    <div className="p-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-zinc-400 mb-4">{role} · {timeline}</p>

      <img src={image} className="rounded-lg border my-4" alt={title} />

      <section>
        <h2 className="text-2xl font-semibold mb-2">Problem</h2>
        <p>{problem}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Solution</h2>
        <p>{solution}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Result</h2>
        <p>{result}</p>
      </section>

      <section className="mt-6">
        <h3 className="font-bold">Technologies Used</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <li key={tech} className="bg-zinc-800 px-2 py-1 rounded text-sm">{tech}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
