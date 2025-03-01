import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
import Skill_Edu from "./Skill_Edu";
import frontendIcon from "../assets/image.png";
import creativeIcon from "../assets/image(2).png";
import problemSolverIcon from "../assets/image(1).png";
import teamPlayerIcon from "../assets/image(3).png";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-10 mt-[75px]"
      >
        "Turning <span className="text-blue-500">Ideas</span> Into{" "}
        <span className="text-blue-500">Reality</span> Through Code"
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10"
      >
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-64 h-64 md:w-72 md:h-72 rounded-full shadow-lg object-cover border-4 border-blue-500"
          whileHover={{ scale: 1.05 }}
        />

        <div className="text-center md:text-left max-w-2xl">
          <h3 className="text-4xl font-bold mb-4">About Me</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hey there! I'm{" "}
            <span className="text-blue-500 font-semibold">Yash Sagar</span>, a
            passionate{" "}
            <span className="text-blue-500 font-semibold">
              Front-End Developer
            </span>{" "}
            with a keen eye for design and user experience. I specialize in
            building interactive, dynamic, and visually stunning websites using{" "}
            <span className="font-semibold">
              React.js, JavaScript, and CSS animations
            </span>
            .
            <br />
            <br />
            I love pushing the boundaries of web development by implementing
            creative animations, seamless transitions, and engaging interfaces.
            My focus is on writing clean, efficient, and scalable code while
            ensuring excellent user experiences across all devices.
            <br />
            <br />
            When I'm not coding, you can find me exploring new design trends,
            contributing to open-source projects, or sharing my knowledge with
            the developer community.
          </p>

          <motion.a
            href="https://drive.google.com/file/d/1tHF_nfi7Cv14Fwlr4PJNMLb8l-CIylmw/view?usp=drive_link"
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 inline-block px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 w-full max-w-5xl"
      >
        <h3 className="text-4xl font-bold text-center  text-blue-500  mb-8">
          Traits
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Frontend Developer */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={frontendIcon} alt="Frontend" className="w-16 h-16 mb-4" />
            <h4 className="text-xl font-semibold">Frontend Developer</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Building responsive and interactive UI/UX with React.js & CSS.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={creativeIcon} alt="Creative" className="w-16 h-16 mb-4" />
            <h4 className="text-xl font-semibold">Creative Mind</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Designing visually appealing websites with smooth animations.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={problemSolverIcon}
              alt="Problem Solver"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-xl font-semibold">Problem Solver</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Solving complex challenges with optimized and efficient solutions.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={teamPlayerIcon}
              alt="Team Player"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-xl font-semibold">Team Player</h4>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Collaborating effectively with teams to deliver great projects.
            </p>
          </div>
        </div>
      </motion.div>
      <Skill_Edu />
    </section>
  );
};

export default About;
