import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import WindowsBackground from "./Windowsbackground";

const Tech = () => {
  return (
    <WindowsBackground>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
      </div>
    </WindowsBackground>
  );
};

export default SectionWrapper(Tech, "");