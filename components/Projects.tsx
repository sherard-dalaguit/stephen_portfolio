import {ProjectItems} from "@/components/ProjectDetails";
import {projects} from "@/data";

const Projects = () => {
	return (
		<div id="projects" className="w-[75vw] mx-auto pt-20 pb-40 px-4">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl mb-20">
				My <span className="text-[#d1b3ff]">Personal Projects</span>
			</h1>
			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-12 gap-4 justify-items-stretch">
				{projects.map(({id, title, subheader, des, img, iconLists, githubLink, deployedLink }) => (
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