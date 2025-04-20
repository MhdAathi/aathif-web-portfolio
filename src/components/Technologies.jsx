import {
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiLaravel,
  SiBootstrap,
  SiDotnet,
} from "react-icons/si";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <DiJava className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiDotnet className="text-7xl text-indigo-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiPhp className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiLaravel className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-purple-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
