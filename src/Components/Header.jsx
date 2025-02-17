import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white/60 dark:bg-gray-900/50 backdrop-blur-md shadow-lg px-6 py-4 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white tracking-wider hover:scale-105 transition-transform duration-300"
        >
          Yash Sagar
        </Link>

        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link
                to={item.toLowerCase().replace(" & ", "-").replace(" ", "-")}
                className="relative text-gray-900 dark:text-white font-semibold overflow-hidden group transition-colors duration-300 ease-in-out hover:text-blue-500 dark:hover:text-blue-400"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                <span className="absolute right-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <motion.a
            href="https://github.com/yashsoni2191"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaGithub className="text-[30px] text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition" />
          </motion.a>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.8 }}
            className="md:hidden text-2xl focus:outline-none cursor-pointer"
          >
            {isOpen ? (
              <FaTimes className="text-gray-900 dark:text-gray-300" />
            ) : (
              <FaBars className="text-gray-900 dark:text-gray-300" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 p-4 rounded-lg mt-2 shadow-lg"
          >
            {["Home", "About", "Skills & Education", "Projects"].map(
              (item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link
                    to={item.toLowerCase().replace(" & ", "-").replace(" ", "-")}
                    className="block py-2 text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
