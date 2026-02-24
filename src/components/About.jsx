import { usePortfolio } from '../context/PortfolioContext';

const About = () => {
  const { profile } = usePortfolio();

  const highlights = [
    { icon: '🌍', title: 'Remote-First', description: 'Working with global clients across time zones' },
    { icon: '⚡', title: 'Performance Focused', description: 'Optimized, fast-loading web applications' },
    { icon: '🔒', title: 'Security Minded', description: 'Secure authentication and data protection' },
    { icon: '📈', title: 'Results Driven', description: 'Conversion-focused digital solutions' },
  ];

  // Split the about text into paragraphs
  const paragraphs = profile.about.split('\n\n');

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          About Me
        </h2>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              <span className="text-4xl mb-4 inline-block group-hover:animate-bounce">{item.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
