import {ProjectDetails, ProjectItems} from "@/components/ProjectDetails";
import {projects} from "@/data";
import React from "react";
import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";
import {IconCode, IconHome} from "@tabler/icons-react";

const Projects = ({ limit } : { limit?: number }) => {
	const projectsToShow = limit != null
		? projects.slice(0, limit)
		: projects;

	return (
		<div id="projects" className="flex flex-col items-center max-w-screen-xl mx-auto py-24 px-4">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
				My <span className="primary-text-gradient">Projects</span>
			</h1>
			<h1 className="mx-auto my-8 text-center text-md sm:text-lg lg:text-xl">
				I&apos;ve built a variety of innovative projects that showcase my technical expertise and creative design.
				<br />
				Here are some examples of my work so far.
			</h1>
			{/*{limit == null && (*/}
			{/*	<Link href="/#projects" className="mt-8">*/}
			{/*		<MagicButton*/}
			{/*			title="Return Home"*/}
			{/*			icon={<IconHome/>}*/}
			{/*			position="right"*/}
			{/*		/>*/}
			{/*	</Link>*/}
			{/*)}*/}
			<section className="relative overflow-visible [clip-path:inset(-9999px_-9999px_0_-9999px)] mx-auto w-full px-2 sm:px-8 lg:px-10">
				<ProjectDetails>
					{projectsToShow.map((project) => (
						<ProjectItems key={project.id} {...project} />
					))}
				</ProjectDetails>

				{limit != null && (
					<div
						className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen h-full pointer-events-none z-30"
						style={{
							background: 'linear-gradient(to bottom, transparent 35%, black 100%)',
						}}
					/>
				)}
			</section>

			{limit != null && (
				<Link href="/projects" className="mt-8">
					<MagicButton
						title="All Projects"
						icon={<IconCode/>}
						position="right"
					/>
				</Link>
			)}
		</div>
	)
}

export default Projects;