import {ProjectDetails, ProjectItems} from "@/components/ProjectDetails";
import {projects} from "@/data";
import React from "react";

const Projects = () => {
	return (
		<div id="projects" className="flex flex-col items-center max-w-screen-xl mx-auto pt-20 sm:pb-40 px-4">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
				My <span className="text-[#d1b3ff]">Projects</span>
			</h1>
			<h1 className="mx-auto mt-8 text-center text-md sm:text-lg lg:text-xl mb-8 sm:mb-20">
				I&apos;ve built a variety of innovative projects that showcase my technical expertise and creative design.
				<br />
				Here are some examples of my work so far.
			</h1>
			<section className="mx-auto w-full max-w-7xl px-2 sm:px-8 lg:px-10">
				<ProjectDetails>
					{projects.map(({id, title, subheader, des, img, iconLists, githubLink, deployedLink, delayed}) => (
						<ProjectItems
							id={id}
							key={id}
							title={title}
							subheader={subheader}
							des={des}
							img={img}
							iconLists={iconLists}
							githubLink={githubLink}
							deployedLink={deployedLink}
							delayed={delayed}
						/>
					))}
				</ProjectDetails>
			</section>
		</div>
	)
}

export default Projects;