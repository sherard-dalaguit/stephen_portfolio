import {CertificateDetails, CertificateItems} from "@/components/CertificateDetails";
import {certificates} from "@/data";
import React from "react";

const Certificates = ({ limit } : { limit?: number }) => {
	const certificatesToShow = limit != null
		? certificates.slice(0, limit)
		: certificates;

	return (
		<div id="certificates" className="flex flex-col items-center max-w-screen-xl mx-auto py-24 px-4">
			<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
				My <span className="primary-text-gradient">Certificates</span>
			</h1>
			<h1 className="mx-auto my-8 text-center text-md sm:text-lg lg:text-xl">
				I&apos;ve completed courses that sharpen both my creative and analytical skill set.
				<br />
				Here are some of the certifications I&apos;ve earned so far.
			</h1>
			<section className="relative overflow-visible [clip-path:inset(-9999px_-9999px_0_-9999px)] mx-auto w-full px-2 sm:px-8 lg:px-10">
				<CertificateDetails>
					{certificatesToShow.map((certificate) => (
						<CertificateItems key={certificate.id} {...certificate} />
					))}
				</CertificateDetails>

				{limit != null && (
					<div
						className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen h-full pointer-events-none z-30"
						style={{
							background: 'linear-gradient(to bottom, transparent 35%, black 100%)',
						}}
					/>
				)}
			</section>
		</div>
	)
}

export default Certificates;
