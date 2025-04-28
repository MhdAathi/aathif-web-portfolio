import { animate } from "motion";
import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-1">
      <h2 className="text-center text-4xl">
        About <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl object-cover w-full h-auto max-w-[350px]"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          className="w-full lg:w-1/2"
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="text-center lg:text-left text-neutral-300 leading-relaxed tracking-wide">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
