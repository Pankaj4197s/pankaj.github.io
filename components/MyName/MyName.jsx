import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
const MyName = () => {
  const router = useRouter();
  return (
    <div
      id="MyName"
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.4, duration: 0.2 },
          y: { delay: 0.4, duration: 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.5, duration: 0.2 },
          y: { delay: 0.5, duration: 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-5xl sm:text-5xl md:text-6xl mt-4"
      >
        Pankaj Sharma.
      </motion.h1>
      <div className="flex items-center">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.6, duration: 0.2 },
            y: { delay: 0.6, duration: 0.2 },
          }}
          className="text-gray-400 font-bold text-3xl lg:text-5xl sm:text-7xl md:text-6xl mt-4 mr-2"
        >
          I
        </motion.h2>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.6, duration: 0.2 },
            y: { delay: 0.6, duration: 0.2 },
          }}
          className="text-gray-400 font-bold text-3xl lg:text-5xl sm:text-7xl md:text-6xl mt-4"
        >
          <Typewriter
            options={{
              strings: [
                "innovate through technology.",
                "am a full stack developer.",
                "solve real-world problems.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h2>
      </div>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.7, duration: 0.2 },
          y: { delay: 0.7, duration: 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a <span className="text-AAsecondary">software engineer</span>{" "}
        skilled in problem-solving and specializing in building
        <br className="md:block hidden" /> full stack web applications for real
        world problems. Currently, I&apos;m working as an{" "}
        <br className="md:block hidden" />
        <span className="text-AAsecondary">Associate Software Engineer</span> at{" "}
        <span className="text-AAsecondary">JP Morgan Chase and Co.</span>.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.8, duration: 0.2 },
          y: { delay: 0.8, duration: 0.2 },
        }}
        className="mt-12"
      >
        <a href={"/sankalp_resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default MyName;
