import {companyLogos} from "@/data";
import React from "react";
import Image from "next/image";

const ClientLogos = () => {
	return (
		<div className="pb-28 mb-4 mx-6 md:mx-20">
			<h1 className="text-center text-md md:text-lg lg:text-xl mb-4">
				Past clients include:
			</h1>
			<div className="flex flex-row items-center gap-4 max-w-7xl h-full mx-auto">
				{companyLogos.map((logo, index) => {
					return (
						<div key={index} className="flex flex-row justify-center items-center w-full">
							<Image
								src={logo.logo}
								alt={logo.name}
								width={80}
								height={80}
								className="invert"
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ClientLogos;