import {ProjectItems} from "@/components/ProjectDetails";
import {projects} from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import {IconCode} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

const Projects = ({ limit } : { limit?: number }) => {
	const projectsToShow = limit != null
		? projects.slice(0, limit)
		: projects;
	return (
		<div id="projects" className="flex flex-col items-center max-w-screen-xl mx-auto pt-20 pb-40 px-4">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl mb-20">
				My <span className="text-[#d1b3ff]">Personal Projects</span>
			</h1>
			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-12 gap-4 justify-items-stretch w-full">
				{projectsToShow.map(({id, title, subheader, des, img, iconLists, githubLink, deployedLink }) => (
					<ProjectItems
						key={id}
						title={title}
						subheader={subheader}
						des={des}
						img={img}
						iconLists={iconLists}
						githubLink={githubLink}
						deployedLink={deployedLink}
					/>
				))}
			</section>

			{limit != null && (
				<Link href="/projects" className="mt-8">
					<MagicButton
						title="All Projects"
						icon={<IconCode />}
						position="right"
					/>
				</Link>
			)}
		</div>
	)
}

export default Projects;