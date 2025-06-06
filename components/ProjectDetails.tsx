'use client';

import Image from "next/image";
import clsx from "clsx";
import ProjectButton from "@/components/ui/ProjectButton";

export const ProjectDetails = ({
	children,
}: {
  children?: React.ReactNode;
}) => {
  return (
		<div>{children}</div>
	);
};

export const ProjectItems = ({
	id,
	title,
  subheader,
  des,
  img,
  iconLists,
  githubLink,
  deployedLink,
  delayed,
}: {
  id: number;
  title: string;
  subheader: string;
  des: string;
  img: string;
  iconLists: string[];
  githubLink: string;
  deployedLink: string;
  delayed?: string;
}) => {
  const position = id % 2 === 0 ? "right" : "left";

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="relative mt-10 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-[#d1b3ff]/20 to-slate-50/5 p-8 lg:grid-cols-3 lg:gap-0 lg:p-12">
      <div className={
				clsx(
					"hidden lg:block absolute aspect-square w-full max-w-xl rounded-full bg-[#C1C2D3]/30 blur-3xl filter",
					position === "right" ? "lg:right-0" : "lg:left-0"
				)}
			/>

			<div>
				<div className="flex space-x-2">
					{iconLists && iconLists.map((icon, index) => (
						<div key={index} className="w-fit rounded-2xl bg-black p-4 text-3xl">
							<Image
								loading="lazy"
								placeholder="blur"
								blurDataURL={img}
								src={icon}
								alt={`icon-${index}`}
								width={24}
								height={24}
							/>
						</div>
					))}
				</div>

				<h1 className="mt-6 text-4xl font-bold">{title}</h1>
				<h2 className="mt-6 text-xl font-normal">{subheader}</h2>
				<h3 className="prose prose-invert mt-4 max-w-xl">{des}</h3>

				{delayed ? (
					<>
						<p className="mt-4 text-red-500 font-semibold">
							{`Note: This project is still in development. Expected completion: ${delayed}`}
						</p>
					</>
				) : (
					<div className="mt-8 flex flex-row space-x-10">
						{deployedLink && (
							<ProjectButton
								title="Live Site"
								otherClasses="h-12 w-40"
								gradientClasses="h-16 w-46"
								buttonClasses="h-12 w-40 text-lg"
								handleClick={() => handleClick(deployedLink)}
							/>
						)}
						<ProjectButton
							title="View Code"
							otherClasses="h-12 w-40"
							gradientClasses="h-16 w-46"
							buttonClasses="h-12 w-40 text-lg"
							handleClick={() => handleClick(githubLink)}
						/>
					</div>
				)}
			</div>

			<Image
				src={img}
				alt={title}
				placeholder="blur"
				blurDataURL={img}
				sizes="(max-width: 768px) 100vw, 50vw"
				width={500}
				height={300}
				loading="lazy"
				className={clsx(
					'opacity-90 z-10 shadow-2xl lg:col-span-2 rounded-xl w-full h-auto',
					position === 'right'
						? 'lg:order-1 lg:translate-x-[15%]'
						: 'lg:-order-1 lg:translate-x-[-15%]'
				)}
			/>
		</div>
	);
}