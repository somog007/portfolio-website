import { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { projects } = usePortfolio();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          My Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-gray-500 dark:text-gray-400 text-xl">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
