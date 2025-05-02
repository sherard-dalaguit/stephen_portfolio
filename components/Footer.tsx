import {SpotlightReverse} from "@/components/ui/spotlight-reverse";
import MagicButton from "@/components/ui/MagicButton";
import {IconLocationFilled} from "@tabler/icons-react";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-full py-50 px-20" id="contact">
			<SpotlightReverse/>
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
				<p className="text-white-200 md:mt-10 my-5 text-center">Feel free to reach out! I&apos;m eager to network and
					explore opportunities to grow together.</p>
				<a href="mailto:sherard.softwaredev@gmail.com">
					<MagicButton title="Let's get in touch" icon={<IconLocationFilled width={15}/>} position="right"/>
				</a>
			</div>
		</footer>
	)
}

export default Footer;