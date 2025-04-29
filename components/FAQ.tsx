import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import {FAQDetails} from "@/data";

const FAQ = () => {
  return (
    <Accordion type="multiple" className="max-w-screen-lg mx-auto w-full pt-80 pb-20 px-4">
      <h1 className="font-bold text-[20px] md:text-3xl lg:text-4xl">
        Frequently asked questions
      </h1>
      <h1 className="text-zinc-400 text-sm md:text-md lg:text-lg mt-4 mb-8">
        Can&apos;t find the answer you&apos;re looking for?{" "}
        <Link href="mailto:sherard.softwaredev@gmail.com" className="text-[#d1b3ff]">
          Reach out to me
        </Link>
        {" "}and I&apos;ll get back to you as soon as possible.
      </h1>

      {FAQDetails.map((item) => {
        return (
          <AccordionItem value={item.value} key={item.value} className="py-2">
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        )
      })}

    </Accordion>
  )
}

export default FAQ;