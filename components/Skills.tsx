import {skills} from "@/data";

const Skills = () => {
  return (
    <section id="skills" className="max-w-screen-xl mx-auto w-full py-15 px-20">
      <h1 className="text-center font-bold text-[32px] md:text-4xl lg:text-5xl mb-10">
        My <span className="text-[#d1b3ff]">Skills</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {skill.icon}
            <span className="mt-2 text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;