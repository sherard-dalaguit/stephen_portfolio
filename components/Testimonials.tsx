"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {testimonials} from "@/data";

const Testimonials = () => {
  return (
		<div id="testimonials" className="h-[60rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center py-40 relative">
			<h1 className="text-center font-bold text-[40px] py-10 md:text-5xl lg:text-6xl">
				Client <span className="text-[#d1b3ff]">Testimonials</span>
			</h1>
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="fast"
			/>
		</div>
	);
}

export default Testimonials;