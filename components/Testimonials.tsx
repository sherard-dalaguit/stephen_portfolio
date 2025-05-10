"use client";

import {testimonials} from "@/data";
import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import {IconMessages} from "@tabler/icons-react";
import Link from "next/link";

const TestimonialItems = ({
	quote,
	name,
	title,
} : {
	quote: string;
	name: string;
	title: string;
}) => {
	return (
		<div className="relative justify-between shrink-0 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
			<h1 className="relative z-20 text-md xl:text-lg leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
				"{quote}"
			</h1>

			<div className="relative z-20 mt-6 flex flex-col gap-1">
				<h1 className="text-md xl:text-lg leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
					{name}
				</h1>
				<h1 className="text-sm xl:text-md leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
					{title}
				</h1>
			</div>
		</div>
	)
}

const Testimonials = ({ limit } : { limit?: number }) => {
	const testimonialsToShow = limit != null
		? testimonials.slice(0, limit)
		: testimonials;

  return (
		<div id="testimonials" className="max-w-[70vw] flex flex-col rounded-md antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center mx-auto pt-20 pb-40">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
				Client <span className="text-[#d1b3ff]">Testimonials</span>
			</h1>
			<h1 className="mx-auto mt-8 text-center text-lg lg:text-xl mb-20">
				I&apos;ve worked with dozens of <span className="text-[#d1b3ff]">founders</span> and <span className="text-[#d1b3ff]">companies</span> over the past few years. <br />
				Here&apos;s what they have to say about me.
			</h1>
			<div className="relative w-full overflow-hidden">
				<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 items-stretch md:px-4">
					{testimonialsToShow.map(({quote, name, title}) => (
						<div key={name} className="flex flex-col">
							<TestimonialItems quote={quote} name={name} title={title}/>
						</div>
					))}
				</section>

				{limit != null && (
					<div
						className="absolute left-0 right-0 bottom-0 h-full pointer-events-none z-30"
						style={{
							background: 'linear-gradient(to bottom, transparent 30%, black 100%)',
						}}
					/>
				)}
			</div>

			{limit != null && (
				<Link href="/testimonials" className="mt-8">
					<MagicButton
						title="All Testimonials"
						icon={<IconMessages/>}
						position="right"
					/>
				</Link>
			)}
		</div>
	);
}

export default Testimonials;