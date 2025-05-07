import {tools} from "@/data";

const Tools = () => {
  return (
    <section id="skills" className="max-w-screen-xl mx-auto pb-15 md:px-20">
      <h1 className="text-center font-bold text-[32px] md:text-3xl lg:text-4xl mb-10">
        My <span className="text-[#d1b3ff]">Tools</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
        {tools.map((tool, index) => (
          <div key={index} className="break-inside-avoid flex flex-row items-center w-full h-18 rounded-xl border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)]">
            <span className="mx-4">{tool.icon}</span>
            <h1 className="text-lg">{tool.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;