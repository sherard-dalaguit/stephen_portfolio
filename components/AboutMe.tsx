import Image from "next/image";
import Link from "next/link";
import {IconBrandGithub, IconBrandLinkedin, IconFileDescription, IconMail} from "@tabler/icons-react";
import React from "react";
import {Tooltip} from "@/components/ui/tooltip-card";

const AboutMe = () => {
	return (
		<div id="about" className="mx-auto w-full py-24 px-8 md:px-20 ">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl mb-12">
				About <span className="text-[#d1b3ff]">Me</span>
			</h1>
			<div className="flex flex-col justify-center items-center mx-auto max-w-6xl sm:px-6 lg:px-12 pt-4 pb-8 sm:mt-4 container">
				<div className="flex flex-col md:flex-row items-center lg:items-start h-full my-4 ">
					<div className="w-[200px] h-[200px] flex-shrink-0 relative mb-6">
						<Image
							src="/sherard.jpg"
							alt="selfie"
							width={200}
							height={200}
							className="rounded-[60px] border-2 border-[#d1b3ff] shadow-lg md:mt-8 mr-4"
						/>
					</div>

					<div className="flex flex-col items-center sm:items-start md:pl-8 mt-2 gap-1">
						<h1 className="text-2xl lg:text-3xl font-bold mt-4">
							Sherard Dalaguit
						</h1>
						<h2 className="text-md lg:text-lg text-zinc-400">
							Full-Stack Software Engineer
						</h2>

						<div className="flex flex-wrap justify-center sm:justify-start my-2 gap-2">
							<span className="px-3 py-1 rounded-full bg-white/5 border border-[#d1b3ff]/20 text-sm lg:text-md">
								Los Angeles, California
							</span>

							<span className="px-3 py-1 rounded-full bg-white/5 border border-[#d1b3ff]/20 text-sm lg:text-md">
								Manila, Philippines
							</span>
						</div>

						<div className="max-sm:text-center text-sm lg:text-[1rem] mt-2">
							B.S. Software Engineering & B.S. Computer Science
							<br />at the{" "}
							<Tooltip
								containerClassName="text-zinc-100"
								content="University of California, Irvine is nationally ranked #8 in Software Engineering and #25 in Computer Science by U.S. News & World Report."
							>
								<span className="font-bold lavender-text hover:text-[#a17eff] underline underline-offset-4 decoration-wavy decoration-[#d1b3ff] hover:decoration-[#a17eff] cursor-pointer">University of California, Irvine</span>
							</Tooltip>
						</div>

						<div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
							<Link
								href="https://www.linkedin.com/in/sherard-dalaguit"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-neutral-300 hover:border-[#d1b3ff] hover:text-white hover:bg-[#d1b3ff]/10 transition-all"
							>
								<IconBrandLinkedin className="h-5 w-5" />
								LinkedIn
							</Link>
							<Link
								href="https://www.github.com/sherard-dalaguit"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-neutral-300 hover:border-[#d1b3ff] hover:text-white hover:bg-[#d1b3ff]/10 transition-all"
							>
								<IconBrandGithub className="h-5 w-5" />
								GitHub
							</Link>
							<Link
								href="mailto:me@sherarddalaguit.com"
								className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-neutral-300 hover:border-[#d1b3ff] hover:text-white hover:bg-[#d1b3ff]/10 transition-all"
							>
								<IconMail className="h-5 w-5" />
								Email
							</Link>
							<Link
								href="/resume"
								className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-neutral-300 hover:border-[#d1b3ff] hover:text-white hover:bg-[#d1b3ff]/10 transition-all"
							>
								<IconFileDescription className="h-5 w-5" />
								Resume
							</Link>
						</div>
					</div>
				</div>

				<ul className="list-inside text-md md:text-lg lg:text-xl md:my-8 w-4/5 text-center space-y-6 hidden sm:block">
					<li>
						I&apos;m a <span className="text-[#d1b3ff] font-bold">software engineer</span> who designs and ships
						<span className="text-[#d1b3ff] font-bold"> production-grade full-stack systems</span>,
						with a strong focus on architecture, data modeling, and reliability using TypeScript, Next.js, Node.js, and MongoDB.
					</li>
					<li>
						I build <span className="text-[#d1b3ff] font-bold">AI-powered and full-stack products</span> across
						language learning, dating, and backend-heavy platforms—designed around real-world constraints like latency,
						correctness, and failure handling.
					</li>

					{/*<li>*/}
					{/*	I&apos;m a <span className="text-[#d1b3ff] font-bold">Mid-Level Software Engineer</span> with <span className="text-[#d1b3ff] font-bold">3 years of experience</span>,*/}
					{/*	specializing in modern full-stack development with TypeScript, React, Next.js, Node.js, and MongoDB.*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	I&apos;ve worked with <span className="text-[#d1b3ff] font-bold">20+ clients</span> across startups, nonprofits, and SaaS platforms, delivering high-quality software solutions that meet real-world needs.*/}
					{/*</li>*/}
				</ul>
			</div>
		</div>
	)
}

export default AboutMe;