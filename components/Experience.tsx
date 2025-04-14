import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {timeline} from "@/data";

const Experience = () => {
  return (
    <div id="experience" className="w-full">
      <Timeline data={timeline} />
    </div>
  );
}

export default Experience;
