import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'export',
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		domains: [
			"api.microlink.io"
		]
	}
};

export default nextConfig;
