import {skills} from "@/data";

const Skills = () => {
  return (
    <section id="skills" className="max-w-screen-xl mx-auto py-24 px-4 xl:px-20">
      <h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl mb-8">
        My <span className="primary-text-gradient">Skills</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 h-full min-h-20 p-4 text-center sm:text-left container">
            <span className="shrink-0">{skill.icon}</span>
            <div className="flex flex-col min-w-0">
              <h1 className="text-md sm:text-lg leading-tight text-balance">{skill.name}</h1>
              <h1 className="text-sm text-gray-400 hidden sm:block leading-tight text-balance">{skill.des}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
