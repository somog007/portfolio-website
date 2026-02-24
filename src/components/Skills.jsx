import { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
  const { skills } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { key: 'frontend', title: 'Frontend', icon: '🎨', color: 'from-blue-500 to-cyan-500', description: 'Building beautiful, responsive user interfaces' },
    { key: 'backend', title: 'Backend', icon: '⚙️', color: 'from-green-500 to-emerald-500', description: 'Creating robust server-side applications' },
    { key: 'databases', title: 'Databases', icon: '🗄️', color: 'from-purple-500 to-pink-500', description: 'Managing and optimizing data storage' },
    { key: 'tools', title: 'Tools & Others', icon: '🛠️', color: 'from-orange-500 to-red-500', description: 'Development tools and workflows' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map(({ key, title, icon, color, description }) => (
            <div
              key={key}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 cursor-pointer ${
                activeCategory === key ? 'scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-xl'
              }`}
              onMouseEnter={() => setActiveCategory(key)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3 transition-transform duration-300 hover:scale-125">{icon}</span>
                <div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills[key].map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r ${color} text-white rounded-lg font-medium shadow-md transform transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
