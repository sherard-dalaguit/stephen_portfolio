"use client";

import {testimonials} from "@/data";
import React from "react";

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
		<div className="relative justify-between shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
			<h1 className="relative z-20 text-md leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
				{quote}
			</h1>

			<div className="relative z-20 mt-6 flex flex-col gap-1">
				<h1 className="text-md leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
					{name}
				</h1>
				<h1 className="text-md leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
					{title}
				</h1>
			</div>
		</div>
	)
}

const Testimonials = () => {
  return (
		<div id="testimonials" className="rounded-md antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center mx-20 xl:mx-40 py-40 relative">
			<h1 className="text-center font-bold text-[40px] py-10 md:text-5xl lg:text-6xl mb-20">
				Client <span className="text-[#d1b3ff]">Testimonials</span>
			</h1>
			<section className="columns-2 md:columns-3 xl:columns-5 gap-4 justify-center px-4">
				{testimonials.map(({quote, name, title}) => {
					return (
						<div key={name} className="mb-4 break-inside-avoid">
							<TestimonialItems quote={quote} name={name} title={title}/>
						</div>
					)
				})}
			</section>
		</div>
	);
}

export default Testimonials;