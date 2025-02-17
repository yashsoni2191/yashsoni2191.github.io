import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-900 text-gray-300 py-6 px-4 md:px-12 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">
            © {new Date().getFullYear()} Yash Sagar
          </h2>
          <p className="text-sm text-gray-400">
            All Rights Reserved <br /> Frontend Developer | React Enthusiast
          </p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          {[
            { icon: <FaGithub />, link: "https://github.com/yashsoni2191" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yash-sagar-8b54a9237/" },
            { icon: <FaInstagram />, link: "https://instagram.com/yxssh.21" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-[30px] hover:text-white transition-all"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 cursor-pointer md:mt-0 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
