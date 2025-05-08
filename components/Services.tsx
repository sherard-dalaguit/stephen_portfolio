import {services} from "@/data";
import Image from "next/image";
import MagicButton from "@/components/ui/MagicButton";
import {IconMail} from "@tabler/icons-react";
import FAQ from "@/components/FAQ";

const ServiceItems = ({
	title,
	subheader,
	price,
	description,
	details,
}: {
	title: string;
	subheader: string;
	price: string;
	description: string;
	details: string[];
}) => {
	return (
		<div className="relative flex flex-col justify-between w-[450px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
			<div>
				<h1 className="text-[#d1b3ff] text-xl lg:text-2xl font-bold">
					{title}
				</h1>

				<h1 className="text-sm mt-4">
					{subheader}
				</h1>

				<h1 className="mt-1 text-4xl font-bold">
					{price}
				</h1>

				<h1 className="my-8 text-md">
					{description}
				</h1>

				{details.map((detail, index) => {
					return (
						<div key={index} className="flex items-center gap-2 my-4">
							<Image
								src="/check-mark.svg"
								width={24}
								height={24}
								alt="check-mark"
							/>
							<span className="text-md text-zinc-400">{detail}</span>
						</div>
					)
				})}
			</div>
			<div className="flex justify-center mb-4">
				<MagicButton title="Contact Me" icon={<IconMail />} position="right" />
			</div>
		</div>
	)
}

const Services = () => {
	return (
		<div id="services" className="max-w-screen-xl mx-auto w-full py-20 px-4">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
				The right partner for <span className="text-[#d1b3ff]">your next project</span>
			</h1>
			<h1 className="text-center text-zinc-400 text-md md:text-lg lg:text-xl mt-12">
				Simple pricing that makes sense for your business. No hidden fees.
			</h1>

			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-stretch w-full mt-24">
				{services.map(({id, title, subheader, price, description, details}) => {
					return (
						<ServiceItems
							key={id}
							title={title}
							subheader={subheader}
							price={price}
							description={description}
							details={details}
						/>
					)
				})}
			</section>

			<FAQ />
		</div>
	)
}

export default Services;