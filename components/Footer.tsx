import {SpotlightReverse} from "@/components/ui/spotlight-reverse";
import MagicButton from "@/components/ui/MagicButton";
import {IconLocationFilled} from "@tabler/icons-react";
import Image from "next/image";
import {socialMedia} from "@/data";

const Footer = () => {
	return (
		<footer className="w-full h-[80vh] px-4 sm:px-20 relative flex flex-col" id="contact">
			{/*<div className="h-48 overflow-hidden">*/}
			{/*	<SpotlightReverse/>*/}
			{/*</div>*/}

			<div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
				<Image
					src="/footer-grid.svg"
					alt="grid"
					width={1000}
					height={1000}
					className="w-full h-full"
				/>
			</div>

			<div className="flex-1 flex flex-col items-center justify-center max-w-screen-2xl mx-auto w-full md:px-4 space-y-8">
				<h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
					Interested in <span className="primary-text-gradient">networking</span> or <span
					className="primary-text-gradient">collaborating</span> on your next campaign?
				</h1>
				<p className="text-white-200 text-md lg:text-lg xl:text-2xl text-center">Feel free to reach out! I&apos;m eager to network and
					explore opportunities to grow together.</p>
				<a href="mailto:sdalaguit1@csu.fullerton.edu">
					<MagicButton title="Let's get in touch" icon={<IconLocationFilled width={15}/>} position="right"/>
				</a>
			</div>

			<div className="py-10 flex md:flex-row flex-col max-w-screen-xl mx-auto justify-between items-center w-full">
				<p className="md:text-base text-sm md:font-normal font-light">Copyright © 2026 Stephen</p>

				<div className="flex items-center justify-center md:gap-3 gap-6 mt-5 md:mt-0">
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