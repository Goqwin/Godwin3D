import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
      <div
 className="bg-blue-600 flex justify-between items-center p-2"
 style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
>
<p className="text-white text-[16px] font-semibold">
  Experience.ca<span className="text-blue-200">/Work/Volunteer</span>
</p>
 <div className="flex items-center">
  <div className="w-3 h-1 bg-white"></div>
  <div className="w-1"></div>
  <div className="w-3 h-3"> </div>
  <span className="relative">
    <div className="absolute w-3 h-3 bg-blue-100 rounded -bottom-1 -left-1"></div>
    <div className="w-3 h-3 bg-blue-200 rounded"></div>
  </span>
  <div className="text-red-500 text-[24px] ml-1">x</div>
</div>
</div>
        <h3 className="text-white text-[24px] font-bold mt-3">
          {experience.title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold mt-1">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Software/Programming Positions
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");