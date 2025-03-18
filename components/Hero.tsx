import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {Spotlight} from "@/components/ui/spotlight-new";
import {cn} from "@/lib/utils";
import {FlipWords} from "@/components/ui/flip-words";
import {SparklesCore} from "@/components/ui/sparkles";

const Hero = () => {
	const words = ["Full-Stack Developer", "Software Engineer", "Computer Science Student"];

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
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
			</div>

			<div className="h-[70vh] flex justify-center relative z-10">
				<div className="md:max-w-3xl lg:max-w-[70vw] flex flex-col items-center justify-center">
					<TextGenerateEffect
						className="text-center text-[56px] md:text-7xl lg:text-8xl"
						words="Sherard Dalaguit"
					/>

					<div className="flex flex-row gap-2 text-sm md:text-lg lg:text-2xl">
						<FlipWords words={words}/> |
						<p className="text-[#d1b3ff] text-center ml-2.5 md:tracking-wider mb-4">
							SWE & CS @ UC Irvine
						</p>
					</div>

					<div className="w-[40rem] h-40 mt-5 relative">
						{/* Gradients */}
						<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>
						<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>
						<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>
						<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>

						<div
							className="w-full h-full"
							style={{
								WebkitMaskImage: "radial-gradient(350px 200px at top, white 60%, transparent 80%)",
								maskImage: "radial-gradient(350px 200px at top, white 60%, transparent 80%)",
							}}
						>
							<SparklesCore
								background="transparent"
								minSize={0.4}
								maxSize={1}
								particleDensity={1200}
								className="w-full h-full"
								particleColor="#FFFFFF"
							/>
						</div>

					</div>

				</div>
			</div>
		</div>
	)
}

export default Hero;