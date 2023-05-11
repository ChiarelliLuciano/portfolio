import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { formation } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const FormationCard = ({ formation }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      iconStyle={{ background: formation.iconBg }}
      date={formation.company_name}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={formation.icon}
            alt={formation.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{formation.title}</h3>
      </div>
      <ul className="mt-4 list-disc ml-5 space-y-2">
        {formation.points.map((point, index) => (
          <li
            key={`formation-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Formation = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Formación</h2>
      </motion.div>
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {formation.map((formation, index) => (
            <FormationCard key={`formation-${index}`} formation={formation} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Formation, "formation");
