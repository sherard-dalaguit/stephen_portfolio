import {skills} from "@/data";

const Skills = () => {
  return (
    <section id="skills" className="max-w-screen-xl mx-auto py-15 xl:px-20">
      <h1 className="text-center font-bold text-[32px] md:text-3xl lg:text-4xl mb-8">
        Current <span className="text-[#d1b3ff]">Technologies</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="break-inside-avoid flex flex-row items-center w-full h-18 rounded-xl border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)]">
            <span className="mx-4">{skill.icon}</span>
            <div className="flex flex-col">
              <h1 className="text-lg">{skill.name}</h1>
              <h1 className="text-sm text-gray-400">{skill.des}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;