import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center px-6 py-16 text-white"
    >
      <motion.div
        className="text-center max-w-5xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 animate-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-100 mb-4 transform transition duration-500 hover:scale-105 hover:text-yellow-300 rounded-xl p-4 bg-white bg-opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi, I'm Hamza SABOURI, a passionate student specializing in{' '}
          <span className="font-semibold">Mathematical Sciences and Computer Science</span> from the Faculty of Science, Rabat.
        </motion.p>
        <motion.p
          className="text-lg sm:text-xl text-gray-100 mb-4 transform transition duration-500 hover:scale-105 hover:text-yellow-300 rounded-xl p-4 bg-white bg-opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          I am currently pursuing a Master's degree in{' '}
          <span className="font-semibold">Software Engineering and Decision Support</span>, where I have developed a deep passion for artificial intelligence (AI) and software development.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-gray-100 mb-4 transform transition duration-500 hover:scale-105 hover:text-yellow-300 rounded-xl p-4 bg-white bg-opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          My interests lie in exploring AI technologies, solving complex problems with algorithms, and building practical applications. I'm excited to learn more about deep learning, natural language processing, and other emerging technologies.
        </motion.p>

        <div className="relative pt-10 pb-10">
          <div className="absolute inset-0 flex items-center justify-center w-1 bg-gradient-to-t from-yellow-300 to-pink-500"></div>
          <div className="space-y-10">
            <motion.div
              className="flex justify-start items-center space-x-4 transform transition duration-500 hover:scale-105 hover:text-yellow-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-yellow-300 to-pink-500 w-6 h-6 rounded-full"></div>
              <div className="flex-1">
                <p className="text-xl sm:text-2xl font-semibold">Bachelor's Degree in Mathematical Sciences and Computer Science</p>
                <p className="text-md text-gray-100">2020 - 2024 | Faculty of Science, Rabat</p>
                <p className="mt-2 text-lg text-gray-200">Developed core knowledge in algorithms, data structures, and the fundamentals of deep learning.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-start items-center space-x-4 transform transition duration-500 hover:scale-105 hover:text-yellow-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-yellow-300 to-pink-500 w-6 h-6 rounded-full"></div>
              <div className="flex-1">
                <p className="text-xl sm:text-2xl font-semibold">Master's Degree in Software Engineering and Decision Support</p>
                <p className="text-md text-gray-100">2024 - Present | Faculty of Science, Rabat</p>
                <p className="mt-2 text-lg text-gray-200">Focused on advanced topics in AI, decision support systems, and software engineering, with practical hands-on projects.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
