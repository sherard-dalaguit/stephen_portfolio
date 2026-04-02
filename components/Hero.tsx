"use client";

import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Spotlight} from "@/components/ui/spotlight-new";
import { IconAward } from "@tabler/icons-react";
import {SparklesCore} from "@/components/ui/sparkles";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";
import {cn} from "@/lib/utils";
import { motion } from "framer-motion";

const Hero = () => {

	const renderButton = () => {
		return (
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 2}}
			>
				<Link href="/#experience">
					<MagicButton title="Show my work" icon={<IconAward/>} position="right"/>
				</Link>
			</motion.div>
		)
	}

	return (
		<div className="w-screen min-h-screen pb-24 pt-36 dark:bg-black">
			<div className="relative z-10" style={{transform: "translateY(-120px)"}}>
				<Spotlight/>
			</div>

			<div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.075] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
				<div className={cn(
						"absolute inset-0 z-0",
						"[background-size:100px_100px]",
						"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
						"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
					)}
				/>
				{/* Radial gradient for the container to give a faded look */}
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
			</div>

			<div className="h-[70vh] flex justify-center relative z-10">
				<div className="max-w-lg md:max-w-3xl lg:max-w-[70vw] flex flex-col items-center justify-center">
					<TextGenerateEffect
						className="font-semibold text-center text-[44px] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
						duration={1.6}
						words="Sherard Dalaguit"
					/>

					<div className="max-w-sm md:max-w-3xl flex flex-row text-sm sm:text-md md:text-lg lg:text-2xl xl:text-3xl lg:max-w-5xl">
						<TextGenerateEffect
							className="text-center ml-2.5 md:tracking-wider mb-4"
							// words="Remote Mid-Level Software Engineer | Trusted By 20+ Clients Across Startups, Nonprofits, & SaaS Platforms"
							words="Remote Full-Stack Software Engineer | Building Production-Ready SaaS Platforms & AI-Driven Applications"
							// words="Remote Software Engineer | Ex-Panasonic Avionics | Building Scalable SaaS Platforms & AI-Driven Applications"
						/>
					</div>

					<div className="w-[30rem] sm:w-[40rem] h-40 mt-4 relative">
						{/* Gradients */}
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: 1}}
						>
							<div className="absolute inset-x-30 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>
							<div className="absolute inset-x-15 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>
							<div className="absolute inset-x-45 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>
							<div className="absolute inset-x-45 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>
						</motion.div>

						<div
							className="w-full h-full origin-top transform scale-65 sm:scale-80 lg:scale-100"
							style={{
								WebkitMaskImage: "radial-gradient(350px 200px at top, white 60%, transparent 80%)",
								maskImage: "radial-gradient(350px 200px at top, white 60%, transparent 80%)",
							}}
						>
							<SparklesCore
								background={"transparent"}
								minSize={0.4}
								maxSize={1}
								particleDensity={1200}
								className="w-full h-full"
								particleColor="#FFFFFF"
							/>
						</div>
					</div>

					{renderButton()}

				</div>
			</div>
		</div>
	)
}

export default Hero;