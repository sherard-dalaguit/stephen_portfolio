import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import {IconBrandGithub, IconBrandLinkedin, IconFileDescription, IconMail, IconMapPinFilled} from "@tabler/icons-react";
import React from "react";

const AboutMe = () => {
	return (
		<div id="about" className="mx-auto w-full pt-20 sm:pb-40 px-8 md:px-20 ">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl mb-12">
				About <span className="text-[#d1b3ff]">Me</span>
			</h1>
			<div className="flex flex-col justify-center items-center mx-auto max-w-6xl sm:px-6 lg:px-12 pt-4 pb-8 sm:mt-4 gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-[#d1b3ff]/20 to-slate-50/5">
				<div className="flex flex-col md:flex-row items-center lg:items-start h-full my-4 ">
					<div className="w-[200px] h-[200px] flex-shrink-0 relative mb-6">
						<Image
							src="/sherard.jpg"
							alt="selfie"
							width={200}
							height={200}
							className="object-cover rounded-full border-2 border-[#d1b3ff] shadow-lg md:mt-8 mr-4"
						/>
					</div>

					<div className="flex flex-col items-center sm:items-start md:pl-8 mt-2">
						<h1 className="text-2xl lg:text-3xl font-bold mt-4">
							Sherard Dalaguit
						</h1>
						<h2 className="text-md lg:text-lg text-zinc-400">
							Full-Stack Software Engineer
						</h2>

						<div className="flex flex-row items-center mt-2">
							<IconMapPinFilled className="text-[#d1b3ff]" />
							<p className="text-md lg:text-lg ml-2">
								Los Angeles, California
								<br className="block sm:hidden" />
								<span className="hidden sm:inline"> &bull; </span>
								Manila, Philippines
							</p>
						</div>

						<p className="text-sm lg:text-md text-zinc-400 mt-2">
							Computer Science & Software Engineering<br /> at the University of California, Irvine
						</p>

						<div className="flex flex-row items-center space-x-2 mt-4">
							<Link
								href="https://www.linkedin.com/in/sherard-d"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
							>
								<IconBrandLinkedin className="h-9 w-9 text-neutral-500 dark:text-neutral-300" />
							</Link>
							<Link
								href="https://www.github.com/sherard-dalaguit"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile"
							>
								<IconBrandGithub className="h-9 w-9 text-neutral-500 dark:text-neutral-300" />
							</Link>
							<Link
								href="mailto:sherarddalaguit.dev@gmail.com"
								aria-label="Email me"
							>
								<IconMail className="h-9 w-9 text-neutral-500 dark:text-neutral-300" />
							</Link>
							<Link
								href="https://drive.google.com/file/d/1JGZ10xseERVZ6v3PkFqpF4MdQ90NN2Dr/view"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Resume"
							>
								<IconFileDescription className="h-9 w-9 text-neutral-500 dark:text-neutral-300" />
							</Link>
						</div>
					</div>
				</div>

				<ul className="list-inside text-md md:text-lg lg:text-xl md:my-8 space-y-4 hidden sm:block">
					<li>
						I&apos;m a Computer Science and Software Engineering student at UC Irvine, passionate about building fast, responsive, and beautiful web applications.
						I specialize in modern full-stack development using Next.js, TailwindCSS, TypeScript, and Node.js--focusing on clean UI, intuitive UX, and real-world performance.
					</li>
					<li>
						Outside of coding, I&apos;m big on my own personal development--balancing the grind with daily gym sessions, consistent reading, tennis training, and getting in touch with my Filipino heritage (i&apos;m whitewashed lol).
					</li>
					<li>
						I&apos;m always pushing to create high-impact software and sharpen both my technical and personal edge.
						Let&apos;s build something meaningful together!
					</li>
				</ul>
			</div>
			<Skills/>
		</div>
	)
}

export default AboutMe;