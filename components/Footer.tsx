import {SpotlightReverse} from "@/components/ui/spotlight-reverse";
import MagicButton from "@/components/ui/MagicButton";
import {IconLocationFilled} from "@tabler/icons-react";
import Image from "next/image";
import {socialMedia} from "@/data";

const Footer = () => {
	return (
		<footer className="w-full pt-20 pb-10 px-20 relative" id="contact">
			<div className="h-48 mb-0 overflow-hidden">
				<SpotlightReverse/>
			</div>

			<div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
				<Image
					src="/footer-grid.svg"
					alt="grid"
					width={1000}
					height={1000}
					className="w-full h-full opacity-70"
				/>
			</div>

			<div className="flex flex-col items-center max-w-screen-xl mx-auto w-full md:px-4">
				<h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl">
					Interested in <span className="text-[#d1b3ff]">networking</span> or <span
					className="text-[#d1b3ff]">collaborating</span> on tech projects?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 lg:text-lg text-center">Feel free to reach out! I&apos;m eager to network and
					explore opportunities to grow together.</p>
				<a href="mailto:sherarddalaguit.dev@gmail.com">
					<MagicButton title="Let's get in touch" icon={<IconLocationFilled width={15}/>} position="right"/>
				</a>
			</div>

			<div className="flex mt-16 md:flex-row flex-col max-w-screen-xl mx-auto justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Sherard</p>

				<div className="flex items-center justify-center md:gap-3 gap-6 sm:mt-5 xs:mt-5">
					{socialMedia.map((profile) => (
						<a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer">
							<div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
								<Image
									src={profile.img}
									alt={profile.img}
									width={20}
									height={20}
								/>
							</div>
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer;