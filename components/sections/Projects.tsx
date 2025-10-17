"use client";

import { useState } from "react";
import { Project } from "@/types/portfolio";

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Selected Projects
        </h2>
        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Arrows - Outside the card */}
          {data.length > 1 && (
            <>
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 border border-gray-200 dark:border-gray-600"
                aria-label="Previous project"
              >
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 border border-gray-200 dark:border-gray-600"
                aria-label="Next project"
              >
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Carousel */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden mx-16 md:mx-20">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {data[currentIndex].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                {data[currentIndex].description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data[currentIndex].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {data[currentIndex].githubUrl && (
                  <a
                    href={data[currentIndex].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                )}
                {data[currentIndex].demoUrl && (
                  <a
                    href={data[currentIndex].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          {data.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {data.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToProject(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentIndex
                      ? "bg-blue-600 dark:bg-blue-400"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
