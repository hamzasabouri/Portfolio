import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaTimes, FaGithub } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import projects from '../data/projects.json';

// Utilitaire pour formater le nom du dossier image
const formatImagePath = (title, index) =>
  `/images/${title}/${index + 1}.png`;


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleProjectDetail = (project) => {
    setSelectedProject((prev) => (prev?.title === project.title ? null : project));
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center px-6 py-16 text-black"
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

<div className="flex justify-center w-full">
        <Swiper
          modules={[Navigation]}
          navigation
          breakpoints={{
    0: { slidesPerView: 1 },       // Pour mobiles
    640: { slidesPerView: 2 },     // Petites tablettes
    1024: { slidesPerView: 3 },    // Tablettes ou petits laptops
    1280: { slidesPerView: 4 },    // Grands écrans
          }}
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div
                  className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                  onClick={() => toggleProjectDetail(project)}
                >
                  <img
                    src={formatImagePath(project.title, 0)}
                    alt={project.title}
  className="w-full h-full object-cover filter blur-sm"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h3 className="text-white text-lg sm:text-xl font-semibold text-center">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white max-w-4xl w-full rounded-lg shadow-xl p-6 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-500"
            >
              <FaTimes />
            </button>

            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {Number.isInteger(selectedProject.images) &&
                Array.from({ length: selectedProject.images }).map((_, i) => (
                  <div key={i}>
                    <img
                      src={formatImagePath(selectedProject.title, i)}
                      alt={`${selectedProject.title} ${i + 1}`}
                      className="object-cover h-[400px] w-full rounded"
                    />
                  </div>
                ))}
            </Carousel>

            <div className="mt-4">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className="text-gray-700 mt-2">{selectedProject.description}</p>
              <p className="mt-2">
                <strong>Languages:</strong> {selectedProject.language}
              </p>
              <p>
                <strong>Type:</strong> {selectedProject.type}
              </p>

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  <FaGithub className="inline mr-2" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;