import React from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio.png";
import weatherApiImg from "../assets/weather-api.png";
import movieAppImg from "../assets/movie-app.png";
import dogApiImg from "../assets/dog-api.png";
import taskManagerImg from "../assets/task-manager.png";
import amazonImg from "../assets/amazon.png";
import adminpannel from "../assets/adminpannel.png";
import switcheffect from "../assets/switcheffect.png";
import sailorsite from "../assets/sailor.png";
import calculator from "../assets/calculator.png";
import RQG from "../assets/RQG.png";
import flourmill from "../assets/flourmill.png";
import bewakoof from "../assets/bewakoof.png";
import bmicalculator from "../assets/bmicalculator.png";
import quizapp from "../assets/quizapp.png";

const projects = [
  {
    title: "Dynamic Portfolio",
    description:
      "A creative and fully animated portfolio built with React.js and Framer Motion.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    img: portfolioImg,
    live: "https://your-portfolio.com",
    github: "https://github.com/yashsoni2191/Weather-API.git",
  },
  {
    title: "Creative Weather API",
    description:
      "A stylish weather app with advanced CSS animations and API integration.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    img: weatherApiImg,
    live: "https://dashing-empanada-f5e2e2.netlify.app/",
    github: "https://github.com/yourusername/weather-api",
  },
  {
    title: "Movie Search App",
    description:
      "A beautiful movie search app with animations and OMDb API integration.",
    tech: ["React.js", "OMDb API", "CSS Animations"],
    img: movieAppImg,
    live: "https://stirring-cheesecake-8400d4.netlify.app/",
    github: "https://github.com/yashsoni2191/Movie_API.git",
  },
  {
    title: "Dog API Project",
    description: "A fun and interactive app displaying dog images dynamically.",
    tech: ["HTML", "CSS", "JavaScript", "Dog API"],
    img: dogApiImg,
    live: "https://fluffy-haupia-7c842d.netlify.app/",
    github:
      "https://github.com/yashsoni2191/Javascript/tree/278d5cf1a7b4404da247ccfe6359edc8b0830f9c/Dog-Api",
  },
  {
    title: "Task Management System",
    description:
      "A CRUD-based task management system with a priority-based filter.",
    tech: ["JavaScript", "CSS", "LocalStorage"],
    img: taskManagerImg,
    live: "https://thriving-snickerdoodle-6ac6ce.netlify.app/",
    github: "https://github.com/yashsoni2191/Javascript.git",
  },
  {
    title: "Amazon Clone Website",
    description:
      "A fully functional Amazon clone with a seamless shopping experience, modern UI, and essential e-commerce features.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: amazonImg,
    live: "https://amazon-livid-zeta.vercel.app/",
    github: "https://github.com/yashsoni2191/Amazon.git",
  },
  {
    title: "Admin Pannel",
    description:
      "A powerful admin panel for managing products, orders, users, and analytics with an intuitive dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap"],
    img: adminpannel,
    live: "https://admin-pannel-six.vercel.app/",
    github: "https://github.com/yashsoni2191/Admin_Panel.git",
  },
  {
    title: "Switch-Effect",
    description:
      "A smooth theme switcher using JavaScript, HTML, and CSS for toggling between light and dark modes.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: switcheffect,
    live: "https://admin-pannel-six.vercel.app/",
    github: "https://github.com/yashsoni2191/Switch-Effect.git",
  },
  {
    title: "Sailor Website",
    description:
      "A sleek and responsive sailor website showcasing maritime adventures, services, and navigation insights with a modern design.",
    tech: ["HTML", "CSS", "Bootstrap"],
    img: sailorsite,
    live: "https://sailor-website-three.vercel.app/index.html",
    github: "https://github.com/yashsoni2191/Sailor_Website.git",
  },
  {
    title: "Calculator",
    description:
      "A stylish and functional calculator using HTML, CSS, and JavaScript, offering a smooth user experience for quick calculations.",
    tech: ["HTML", "CSS", "Javscript"],
    img: calculator,
    live: "https://calculator-eight-beta-18.vercel.app/",
    github: "https://github.com/yashsoni2191/Calculator.git",
  },
  {
    title: "Random Quote Generator",
    description:
      "A random quote generator using HTML, CSS, and JavaScript that displays inspiring quotes with each button click.",
    tech: ["HTML", "CSS", "Javascript"],
    img: RQG,
    live: "https://random-quote-generator-iota-six.vercel.app/",
    github: "https://github.com/yashsoni2191/Random_Quote_Generator.git",
  },
  {
    title: "Flour Mill Site ",
    description:
      "A professional flour mill website showcasing high-quality grain processing, products, and services with a modern and user-friendly design.",
    tech: ["HTML", "TailwindCSS"],
    img: flourmill,
    live: "https://flour-mill-ten.vercel.app/",
    github: "https://github.com/yashsoni2191/Flour_Mill_TailwindCSS.git",
  },
  {
    title: "Bewakoof Clone",
    description:
      "A sleek Bewakoof clone built with React.js, Chakra UI, and Framer Motion, offering a modern, responsive design with smooth animations and a seamless shopping experience.",
    tech: ["HTML", "CSS", "ReactJS", "Chakra UI", "Framer Motion"],
    img: bewakoof,
    live: "https://bewakoofstore.netlify.app/",
    github: "https://github.com/yashsoni2191/Bewakoof-Clone.git",
  },
  {
    title: "BMI-Calculator",
    description:
      "A BMI calculator built with HTML, CSS, and ReactJS, allowing users to quickly determine their Body Mass Index. It provides instant results with a user-friendly interface and responsive design.",
    tech: ["HTML", "CSS", "ReactJS"],
    img: bmicalculator,
    live: "https://bmi-calculator-ten-zeta.vercel.app/",
    github: "https://github.com/yashsoni2191/BMI-Calculator.git",
  },
  {
    title: "Quiz-App",
    description:
      "A full-screen, beautifully designed quiz app using HTML, CSS, and ReactJS, featuring interactive questions, smooth transitions, and an engaging user experience.",
    tech: ["HTML", "CSS", "ReactJS"],
    img: quizapp,
    live: "https://quiz-app-ten-opal.vercel.app/",
    github: "https://github.com/yashsoni2191/Quiz-App.git",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-8 md:px-16 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-blue-500 mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
