import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
