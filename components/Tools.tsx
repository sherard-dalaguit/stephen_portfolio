import {tools} from "@/data";

const Tools = () => {
  return (
    <section id="skills" className="max-w-screen-xl mx-auto w-full pb-15 px-20">
      <h1 className="text-center font-bold text-[32px] md:text-4xl lg:text-5xl mb-10">
        My <span className="text-[#d1b3ff]">Tools</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center">
            {tool.icon}
            <span className="mt-2 text-lg">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;