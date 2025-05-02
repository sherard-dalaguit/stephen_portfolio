"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import MagicButton from "@/components/ui/MagicButton";
import {IconBriefcase} from "@tabler/icons-react";
import {useState} from "react";
import Image from "next/image";

interface Step {
  title: string;
  description: string;
	img: string;
	content: string;
}

interface CaseStudyProps {
	btnName?: string;
  steps: Step[];
}

const CaseStudy = ({ btnName, steps }: CaseStudyProps) => {
	const [step, setStep] = useState(0);
	const [open, setOpen] = useState(false);

	return (
		<Dialog
			open={open}
			onOpenChange={(o) => {
				setOpen(o);
				if (!o) setStep(0);
			}}
		>
      <DialogTrigger asChild>
				<div className="z-0">
        	<MagicButton
						title={btnName || "Case Study"}
						icon={<IconBriefcase />}
          	position="right"
					/>
				</div>
      </DialogTrigger>

			<DialogContent className="w-[90vw] h-[90vh] xl:w-[70vw] xl:h-[70vh] max-w-none max-h-none">

				<DialogHeader>
          <DialogTitle className="font-bold text-[#d1b3ff] text-[32px] md:text-4xl lg:text-5xl">
						{steps[step].title}
					</DialogTitle>

          <DialogDescription className="text-zinc-400 text-md md:text-lg lg:text-xl">
						{steps[step].description}
					</DialogDescription>
        </DialogHeader>

				<div className="flex flex-col xl:flex-row items-center justify-between w-full h-full px-[2vw]">
					<div className="w-full xl:w-1/2 xl:pr-8">
						<div className="max-h-[30vh] overflow-y-auto lg:max-h-none lg:overflow-visible">
							<h1 className="text-md md:text-lg lg:text-xl xl:mr-14">
								{steps[step].content.split('\n').map((line, i) => (
									<span key={i} className="block">
										{line}
										<br />
									</span>
								))}
							</h1>
						</div>
					</div>
					<div className="mt-4 md:mt-0 w-full md:w-[50vw] xl:w-1/2 flex justify-end">
						<Image
							src={steps[step].img}
							width={550}
							height={550}
							alt="case-study"
							className="rounded-lg w-full object-cover"
						/>
					</div>
				</div>

				<DialogFooter className="mt-auto flex flex-row justify-between items-center w-full">
					<button
						onClick={() => setStep((s) => Math.max(0, s - 1))}
						disabled={step === 0}
						className="relative inline-flex h-12 w-32 overflow-hidden rounded-lg p-[1px] focus:outline-none disabled:opacity-50 self-start"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] pointer-events-none z-0"/>
						<span className="relative z-10 inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-md font-medium text-white gap-2">
							Back
						</span>
					</button>

					<button
						onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
						disabled={step === steps.length - 1}
						className="relative inline-flex h-12 w-32 overflow-hidden rounded-lg p-[1px] focus:outline-none disabled:opacity-50 self-end"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] pointer-events-none z-0"/>
						<span className="relative z-10 inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-md font-medium text-white gap-2">
							Next
						</span>
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default CaseStudy;