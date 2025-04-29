import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

export const ProjectItems = ({
	title,
	subheader,
	des,
	img,
	iconLists,
	githubLink,
	deployedLink,
}: {
	title: string;
	subheader: string;
	des: string;
	img: string;
	iconLists: string[];
	githubLink: string;
	deployedLink?: string;
}) => {
	return (
		<CardContainer className="inter-var">
      <CardBody className="flex flex-col bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
        <div className="flex-1 flex flex-col">
					<CardItem
						translateZ="50"
						className="text-xl md:text-2xl font-bold text-neutral-600 dark:text-white"
					>
						{title}
					</CardItem>

					<CardItem
						as="p"
						translateZ="60"
						className="text-neutral-500 text-md md:text-lg max-w-sm mt-2 dark:text-neutral-300"
					>
						{subheader}
					</CardItem>
					<CardItem
						as="p"
						translateZ="60"
						className="text-sm max-w-sm mt-2"
					>
						{des}
					</CardItem>

					<CardItem translateZ="100" className="w-full mt-4">
						<Image
							src={img}
							height="1000"
							width="1000"
							className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
							alt="thumbnail"
						/>
					</CardItem>
				</div>

				<div className="flex justify-between items-center mt-auto">
          <CardItem
            translateZ={20}
            as={Link}
            href={githubLink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            View Code
          </CardItem>
					{deployedLink && (
          <CardItem
            translateZ={20}
            as={Link}
            href={deployedLink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live Site
          </CardItem>
					)}
        </div>

      </CardBody>
    </CardContainer>
	)
}