import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';

import {
  FaReact, FaPython, FaHtml5, FaCss3Alt,
  FaPhp, FaJava, FaNodeJs
} from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { SiFlask } from 'react-icons/si';

// Technologies data
const technologies = [
  { icon: FaReact, label: 'React' },
  { icon: FaJava, label: 'Java' },
  { icon: FaPython, label: 'Python' },
  { icon: FaHtml5, label: 'HTML' },
  { icon: FaCss3Alt, label: 'CSS' },
  { icon: DiMysql, label: 'MySQL' },
  { icon: FaPhp, label: 'PHP' },
  { icon: FaNodeJs, label: 'Node.js' },
  { icon: SiFlask, label: 'Flask' },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center px-6 py-16 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
        Technologies
      </h2>

      <Swiper
        spaceBetween={30}
        freeMode={true}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        modules={[FreeMode]}
        className="w-full max-w-6xl"
      >
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white text-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg"
                animate={{ rotateY: [0, 360] }}
                transition={{
                  duration: 6 + index * 0.2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="text-5xl mb-4">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold">{tech.label}</h3>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Technologies;
