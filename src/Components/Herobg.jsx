import React from "react";
import { motion } from "framer-motion";
import { marqueeVarReverse, marqueeVariants } from "../utils/motion";
import { skills } from "../constants";

const Herobg = () => {
  return (
    <div className="text-3xl lg:mt-32 flex lg:flex flex-col relative z-0 gap-5 overflow-x-hidden">
      <motion.div variants={marqueeVarReverse} animate="animate">
        <div className=" flex flex-row gap-14 ">
          {skills.map((skill, index) => (
            <div key={index} className=" flex flex-row">
              <img
                src={skill.image}
                srcset=""
                className="h-10 w-10"
                draggable={false}
              />
              <p className="text-[#d8874a] font-bold first-letter:capitalize font-mono ">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <div className=" bg-[#d8874a] h-14 w-full lg:w-full shadow-md overflow-x-hidden">
        <motion.div variants={marqueeVariants} animate="animate">
          <div className=" flex flex-row gap-12 ">
            {skills.map((skill, index) => (
              <div key={index} className=" flex flex-row rounded-full ml-2 mt-[4px]">
                <img
                  src={skill.image}
                  srcset=""
                  className=" h-10 w-10"
                  draggable={false}
                />
                <p className=" text-[#d8874a] font-outline-4 font-sans ml-2 font-semibold text-3xl items-center mt-1 first-letter:capitalize">
                  *{skill.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Herobg;
