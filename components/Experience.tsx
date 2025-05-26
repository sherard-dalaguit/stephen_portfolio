import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {timeline} from "@/data";

const Experience = ({ limit } : { limit?: number }) => {
  return (
    <div id="experience" className="w-full mb-30">
      <Timeline data={timeline} limit={limit} />
    </div>
  );
}

export default Experience;
