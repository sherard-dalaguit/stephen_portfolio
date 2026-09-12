'use client';

import Image from "next/image";
import clsx from "clsx";

export const CertificateDetails = ({
	children,
}: {
  children?: React.ReactNode;
}) => {
  return (
		<div>{children}</div>
	);
};

export const CertificateItems = ({
	id,
	title,
  subheader,
  des,
  img,
}: {
  id: number;
  title: string;
  subheader: string;
  des: string;
  img: string;
}) => {
  const position = id % 2 === 0 ? "right" : "left";

  return (
    <div className="relative mt-10 px-4 sm:px-6 lg:px-12 py-8 grid items-center gap-8 container lg:grid-cols-3 lg:gap-0">
      <div className={
				clsx(
					"hidden lg:block absolute aspect-square w-full max-w-xl rounded-full bg-[#d4d4d8]/25 blur-3xl filter",
					position === "right" ? "lg:right-0" : "lg:left-0"
				)}
			/>

			<div className="flex h-full flex-col justify-center self-stretch">
				<h1 className="mt-6 text-4xl font-bold">{title}</h1>
				<h2 className="mt-6 text-xl font-normal">{subheader}</h2>
				<h3 className="prose prose-invert mt-4 max-w-xl">{des}</h3>
			</div>

			<Image
				src={img}
				alt={title}
				placeholder="blur"
				blurDataURL={img}
				width={800}
				height={600}
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
