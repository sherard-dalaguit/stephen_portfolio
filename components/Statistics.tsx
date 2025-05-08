import {myStatistics} from "@/data";

const Statistics = () => {
	return (
		<div className="my-12 mx-6 md:mx-20">
			<div className="flex flex-row items-center gap-4 max-w-7xl h-full mx-auto">
				{myStatistics.map((statistic, index) => {
					return (
						<div key={index} className="flex flex-col justify-center items-center w-full py-6 rounded-xl border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)]">
							<h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
								{statistic.quantity}
							</h1>

							<div className="flex flex-row items-center justify-center gap-2 mt-4">
								{statistic.img}
								<h1 className="text-center text-[#d1b3ff] font-bold text-xl lg:text-2xl">
									{statistic.type}
								</h1>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Statistics;