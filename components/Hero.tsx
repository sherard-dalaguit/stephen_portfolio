import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Spotlight} from "@/components/ui/spotlight-new";
import {cn} from "@/lib/utils";

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			<Spotlight/>

			<div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.075] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
				<div
					className={cn(
						"absolute inset-0",
						"[background-size:80px_80px]",
						"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
						"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
					)}
				/>
				{/* Radial gradient for the container to give a faded look */}
				<div
					className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
			</div>

			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<TextGenerateEffect
						className="text-center text-[48px] md:text-6xl lg:text-7xl"
						words="Sherard Dalaguit"
					/>

					<p className="text-center md:tracking-wider mt-4 mb-4 text-sm md:text-lg lg:text-2xl">
						<span className="text-[#d1b3ff]">Full-Stack Developer</span> | SWE & CS @ UC Irvine
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero;