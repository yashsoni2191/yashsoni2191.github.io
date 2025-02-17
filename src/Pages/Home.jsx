import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding-boy.json";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "React JS Enthusiast", "Creative Coder"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(".typing-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-500">Yash Sagar</span>
          <br />
          <span className="typing-text text-blue-500"></span>
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/Projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all rounded-lg text-lg font-semibold cursor-pointer"
            >
              View My Work
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-green-500 hover:bg-green-600 transition-all rounded-lg text-lg font-semibold cursor-pointer"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
      >
        <Lottie
          animationData={codingAnimation}
          loop={true}
          className="max-w-xs md:max-w-md"
        />
      </motion.div>
    </section>
  );
};

export default Home;
