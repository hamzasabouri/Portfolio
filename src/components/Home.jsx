import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center px-6 py-16 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.img
          src="/image.png"
          alt="Profile"
          className="w-40 h-40 mx-auto rounded-full mb-6 shadow-lg border-4 border-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi, I'm Hamza SABOURI 👋
        </motion.h1>

        <motion.p
          className="text-lg text-white/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Full Stack Developer & AI Enthusiast
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 text-3xl text-white/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://github.com/hamzasabouri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-sabouri/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.a
          href="/cv.pdf"
          download
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
