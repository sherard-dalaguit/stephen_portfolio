import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Image from "next/image";
import Link from "next/link";
import {IconBrandGithub, IconBrandLinkedin, IconFileDescription, IconMail, IconMapPinFilled} from "@tabler/icons-react";
import React from "react";
import Statistics from "@/components/Statistics";

const AboutMe = () => {
	return (
		<div id="about" className="mx-auto w-full pt-20 pb-40 px-8 md:px-20">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
				About <span className="text-[#d1b3ff]">Me</span>
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-y-8 lg:gap-x-6 mx-auto max-w-[80vw] xl:max-w-[67vw] mt-4">
				<div className="flex flex-col md:flex-row items-center lg:items-start h-full my-4">
					<div className="w-[200px] h-[200px] flex-shrink-0 relative mb-6">
						<Image
							src="/sherard.jpg"
							alt="selfie"
							width={200}
							height={200}
							className="object-cover rounded-full border-2 border-[#d1b3ff] shadow-lg mt-8 mr-4"
						/>
					</div>

					<div className="flex flex-col md:pl-8 mt-2">
						<h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">
							Sherard Dalaguit
						</h1>
						<h1 className="text-md lg:text-lg text-zinc-400">
							Full-Stack Software Engineer
						</h1>

						<div className="flex flex-row items-center mt-2">
							<IconMapPinFilled className="text-[#d1b3ff]" />
							<h1 className="text-md lg:text-lg ml-2">
								Los Angeles, California&nbsp;•&nbsp;Manila, Philippines
							</h1>
						</div>

						<h1 className="text-sm lg:text-md text-zinc-400 mt-2">
							{/*Building real products for real clients, not just more projects*/}
							Computer Science & Software Engineering<br /> at the University of California, Irvine
						</h1>

						<div className="flex flex-row items-center mt-4">
							<Link
								href="https://www.linkedin.com/in/sherard-d"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconBrandLinkedin className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
							</Link>
							<Link
								href="https://www.github.com/sherard-dalaguit"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconBrandGithub className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
							</Link>
							<Link
								href="mailto:sherarddalaguit.dev@gmail.com"
							>
								<IconMail className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
							</Link>
							<Link
								// href="https://drive.google.com/file/d/1f9vg2bMf66h4X1xAZyoJPYXAJWugS1uc/view"
								href="https://drive.google.com/file/d/1JGZ10xseERVZ6v3PkFqpF4MdQ90NN2Dr/view"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconFileDescription className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
							</Link>
						</div>
					</div>
				</div>

				<ul className="list-disc list-inside text-lg lg:text-xl my-8 space-y-4">
					<li>
						{/*I&apos;m a remote senior software engineer trusted by 30+ clients, ranging from startups to nonprofits to SaaS teams, to build clean, scalable web applications.*/}
						I am a Software Engineer with a strong background in developing innovative web solutions.
					</li>
					<li>
						{/*I specialize in delivering high-quality software solutions through async collaboration.*/}
						I specialize in the MERN Stack, and I am passionate about creating clean, efficient code that drives exceptional user experiences.
					</li>
					<li>
						{/*Although based in California, I often work remotely from Manila, Philippines, thriving in async, cross-timezone collaborations.*/}
						My work is guided by a minimalist design philosophy that emphasizes clarity and functionality.
					</li>
					<li>
						{/*No fluff, no micromanagement, no empty promises, just clear outcomes and reliable delivery.*/}
						I enjoy collaborating on projects that push the boundaries of creativity and technology.
					</li>
				</ul>
			</div>
			{/*<Statistics />*/}
			<Skills/>
			<Tools/>
		</div>
	)
}

export default AboutMe;