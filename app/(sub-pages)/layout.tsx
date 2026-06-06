import Navbar from "@/components/Navbar";
import {Spotlight} from "@/components/ui/spotlight-new";
import Footer from "@/components/Footer";
import Image from "next/image";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
	return (
		<main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
			<div className="w-screen">
				<div className="absolute top-0 left-[50%] right-[50%] z-50">
					<Navbar minimal />
				</div>
				<div className="relative z-50" style={{transform: "translateY(-120px)"}}>
					<Spotlight/>
				</div>
				<div className="w-full absolute left-0 top-0 z-20 min-h-96 pointer-events-none rotate-180">
					<Image
						src="/footer-grid.svg"
						alt="grid"
						width={1000}
						height={1000}
						className="w-full h-full opacity-70"
					/>
				</div>
				<div className="relative w-full">
					{children}
				</div>
				<Footer/>
			</div>
		</main>
	)
}

export default Layout;