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
  steps: Step[];
}

const CaseStudy = ({ steps }: CaseStudyProps) => {
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
						title="Case Study"
						icon={<IconBriefcase />}
          	position="right"
					/>
				</div>
      </DialogTrigger>

			<DialogContent className="w-[60vw] h-[60vh] max-w-none max-h-none">

				<DialogHeader>
          <DialogTitle className="font-bold text-[32px] md:text-4xl lg:text-5xl">
						{steps[step].title}
					</DialogTitle>

          <DialogDescription className="text-zinc-400 text-md md:text-lg lg:text-xl">
						{steps[step].description}
					</DialogDescription>
        </DialogHeader>

				<div className="flex flex-row items-center justify-between w-full h-full px-[2vw]">
					<h1 className="text-md md:text-lg lg:text-xl mr-8">
						{steps[step].content}
					</h1>
					<Image
						src={steps[step].img}
						width={500}
						height={500}
						alt="case-study"
						className="rounded-lg"
					/>
				</div>

				<DialogFooter className="mt-auto flex justify-between items-center w-full">
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