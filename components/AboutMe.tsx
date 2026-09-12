import Image from "next/image";
import Link from "next/link";
import {IconBrandGithub, IconBrandLinkedin, IconFileDescription, IconMail} from "@tabler/icons-react";
import React from "react";
import {Tooltip} from "@/components/ui/tooltip-card";

const AboutMe = () => {
	return (
		<div id="about" className="mx-auto w-full py-24 px-8 md:px-20 ">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl mb-12">
				About <span className="primary-text-gradient">Me</span>
			</h1>
			<div className="flex flex-col justify-center items-center mx-auto max-w-6xl sm:px-6 lg:px-12 pt-4 pb-8 sm:mt-4 container">
				<div className="flex flex-col md:flex-row items-center h-full my-4 ">
					<div className="w-[260px] h-[390px] flex-shrink-0 relative mb-6 md:mb-0">
						<Image
							src="/IMG_6299.jpeg"
							alt="Stephen Dalaguit"
							width={260}
							height={390}
							className="object-contain rounded-[60px] border-2 border-[#e5e5e5] shadow-lg"
						/>
					</div>

					<div className="flex flex-col items-center sm:items-start md:pl-10 gap-1">
						<h1 className="text-2xl lg:text-3xl font-bold">
							Stephen Dalaguit
						</h1>
						<h2 className="text-md lg:text-lg text-zinc-400">
							Marketing Student
						</h2>

						<div className="flex flex-wrap justify-center sm:justify-start my-2 gap-2">
							<span className="px-3 py-1 rounded-full bg-white/5 border border-[#e5e5e5]/20 text-sm lg:text-md">
								Los Angeles, California
							</span>

							<span className="px-3 py-1 rounded-full bg-white/5 border border-[#e5e5e5]/20 text-sm lg:text-md">
								Manila, Philippines
							</span>
						</div>

						<div className="max-sm:text-center text-md lg:text-[1rem] mt-2">
							B.A. Business Administration, Marketing
							<br />{" "}at <span className="accent-text font-semibold">California State University, Fullerton</span>
						</div>

						<div className="mt-4 max-w-[22rem] lg:max-w-[26rem]">
							<h3 className="max-sm:text-center text-xs uppercase tracking-widest text-zinc-500 mb-2">
								Related Coursework
							</h3>
							<div className="flex flex-wrap justify-center sm:justify-start gap-2">
								{[
									"Digital Marketing",
									"Marketing Research",
									"Marketing Technology",
									"Business Writing",
									"Financial Management",
									"Business Analytics",
								].map((course) => (
									<span
										key={course}
										className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs lg:text-sm text-neutral-400"
									>
										{course}
									</span>
								))}
							</div>
						</div>

						<div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
							<Link
								href="https://www.linkedin.com/in/stephendalaguit/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-neutral-300 hover:border-[#e5e5e5] hover:text-white hover:bg-[#e5e5e5]/10 transition-all"
							>
								<IconBrandLinkedin className="h-5 w-5" />
								LinkedIn
							</Link>
							<Link
								href="mailto:sdalaguit1@csu.fullerton.edu"
								className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-neutral-300 hover:border-[#e5e5e5] hover:text-white hover:bg-[#e5e5e5]/10 transition-all"
							>
								<IconMail className="h-5 w-5" />
								Email
							</Link>
						</div>
					</div>
				</div>

				<ul className="list-inside text-md md:text-lg lg:text-xl md:my-8 w-4/5 text-center space-y-6 hidden sm:block text-neutral-300">
					<li>
						I&apos;m a <span className="text-white font-bold">results-driven marketing student</span> with a strong foundation in
						<span className="text-white font-bold"> market research, consumer behavior, and digital marketing strategy</span>&mdash;turning
						market analysis into promotional plans that actually move the needle.
					</li>
					<li>
						I develop and execute <span className="text-white font-bold">creative marketing campaigns</span>, leveraging social media
						and <span className="text-white font-bold">data analysis</span> to drive brand engagement&mdash;backed by hands-on
						content creation and project management.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default AboutMe;
