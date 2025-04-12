import Skills from "@/components/Skills";
import Tools from "@/components/Tools";

const AboutMe = () => {
	return (
		<div id="about" className="max-w-screen-xl mx-auto w-full pb-40 px-20">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
				About <span className="text-[#d1b3ff]">Me</span>
			</h1>
			<p className="mt-8 text-center text-lg lg:text-xl">
				I am a Software Engineer with a strong background in developing innovative web solutions.
				I specialize in the MERN Stack (MongoDB, Express.js, React, and Node.js), and I am passionate about creating clean,
				efficient code that drives exceptional user experiences.
			</p>
			<p className="mt-4 text-center text-lg lg:text-xl">
				My work is guided by a minimalist design philosophy that emphasizes clarity and functionality.
				I enjoy collaborating on projects that push the boundaries of creativity and technology.
			</p>
			<Skills />
			<Tools />
		</div>
	)
}

export default AboutMe;