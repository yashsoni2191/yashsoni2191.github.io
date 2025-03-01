import React from "react";
import { motion } from "framer-motion";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import BootStrapIcon from "../assets/bootstrap.png";
import SASSIcon from "../assets/SASS.png";
import tailwindIcon from "../assets/tailwind.png";
import githubIcon from "../assets/github.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.svg";
import firebaseIcon from "../assets/firebase.png";
import aiIcon from "../assets/ai.png";
import SA from "../assets/Semrush-Academy.jpg"; 
import AWS from "../assets/AWS-Skill-Builder.jpg"; 
import RNW from "../assets/GIM & Master in Frontend Development - Certificate.jpg";

// Import education logos
import swarrnimLogo from "../assets/swarrnim.png";
import redwhiteLogo from "../assets/rnw.png";

// Education Data
const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Swarrnim Startup & Innovation University",
    year: "2023 - 2026",
    logo: swarrnimLogo,
  },
  {
    degree: "Graduation in Multimedia & Master in Frontend Development",
    institution: "Red & White Edu. Institute",
    year: "2023 - 2025",
    logo: redwhiteLogo,
  },
];

// Certifications Data
const certifications = [
  {
    title: "SEO Principles Certification",
    provider: "Semrush Academy",
    year: "2024",
    image: SA,
    link: "https://drive.google.com/file/d/1vGPcL_kGlU3Aw7KniNAAsnEqhavb5xaa/view?usp=drive_link",
  },
  {
    title: "AWS Skill Builder Certification",
    provider: "AWS Training & Certification",
    year: "2025",
    image: AWS,
    link: "https://drive.google.com/file/d/1mlyKSvRUj9AJDandrTVRPqsRUYFSihr_/view?usp=drive_link",
  },
  {
    title: "GIM & Master in Frontend Development Certification",
    provider: "Red & White Edu. Institute",
    year: "2025",
    image: RNW,
    link: "https://drive.google.com/file/d/1cMyLkTOY94XquJbFkHAW7MjLctZKx6eL/view?usp=drive_link",
  },
];

const skills = [
  { title: "HTML", img: htmlIcon },
  { title: "CSS", img: cssIcon },
  { title: "SASS", img: SASSIcon },
  { title: "BootStrap", img: BootStrapIcon },
  { title: "Tailwind CSS", img: tailwindIcon },
  { title: "GitHub", img: githubIcon },
  { title: "JavaScript", img: jsIcon },
  { title: "React.js", img: reactIcon },
  { title: "Firebase", img: firebaseIcon },
  { title: "Generative AI", img: aiIcon },
];

const Skill_Edu = () => {
  return (
    <section className="min-h-screen px-8 md:px-16 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="w-16 h-16 mb-2"
              />
              <h4 className="text-lg font-semibold">{skill.title}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-6">Education</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center"
            >
              {/* Larger Education Logo */}
              <img
                src={edu.logo}
                alt={edu.institution}
                className="w-80 object-contain"
              />
              <div className="text-center mt-3">
                <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                {/* Institution Name with Clickable Link */}
                <a
                  href={
                    edu.institution.includes("Swarrnim")
                      ? "https://www.swarrnim.edu.in/"
                      : "https://www.rnwmultimedia.edu.in/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 underline dark:text-blue-400"
                >
                  {edu.institution}
                </a>
                <p className="text-md text-gray-500 dark:text-gray-400">
                  {edu.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-6">
          Certifications
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-72 object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline dark:text-blue-400"
                >
                  {cert.title}
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {cert.provider}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill_Edu;
