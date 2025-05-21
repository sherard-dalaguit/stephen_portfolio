import {ProjectItems} from "@/components/ProjectDetails";
import {projects} from "@/data";
import React from "react";

const Projects = () => {
	return (
		<div id="projects" className="flex flex-col items-center max-w-screen-2xl mx-auto pt-20 pb-40 px-4">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
				My <span className="text-[#d1b3ff]">Personal Projects</span>
			</h1>
			<h1 className="mx-auto mt-8 text-center text-lg lg:text-xl mb-20">
				I&apos;ve built a variety of innovative projects that showcase my technical expertise and creative design.
				<br />
				Explore my portfolio to see examples of my work.
			</h1>
			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-12 items-stretch md:px-4">
				{projects.map(({id, title, subheader, des, img, iconLists, githubLink, deployedLink}) => (
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
		</div>
	)
}

export default Projects;