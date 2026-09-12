import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";
import {IconHome} from "@tabler/icons-react";

export const metadata = {
  title: 'Resume · Stephen Dalaguit',
  description: 'View the full resume of Stephen Dalaguit — marketing student focused on outreach, branding, and community engagement.',
}

const ResumePage = () => {
  return (
    <div className="mt-10 flex flex-col items-center w-full md:px-10 pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h1 className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl">
          My <span className="text-[#e5e5e5]">Resume</span>
        </h1>
        <p className="mt-6 text-center text-md sm:text-lg lg:text-xl">
          Here&apos;s a full look at my background, skills, and experience.{" "}
          <a
            href="/Sherard_Dalaguit_Resume.pdf"
            download
            className="text-[#e5e5e5] underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Download a copy
          </a>{" "}
          if you&apos;d like to keep it.
        </p>
      </div>

      <Link href="/">
        <MagicButton
          title="Return Home"
          icon={<IconHome />}
          position="right"
        />
      </Link>

      <div className="flex justify-center mt-20 px-4 z-10">
        <div style={{ width: "min(720px, 85vw)", aspectRatio: "8.5 / 11.5" }}>
          <iframe
            src="/Sherard_Dalaguit_Resume.pdf"
            className="w-full h-full rounded-xl border border-neutral-700 shadow-xl"
            title="Sherard Dalaguit Resume"
          />
        </div>
      </div>
    </div>
  )
}

export default ResumePage;
