import { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const TITLES = ['Freelance Web Developer', 'Fullstack Engineer', 'Remote Collaborator', 'Performance Optimizer'];

const Hero = () => {
  const { profile } = usePortfolio();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentTitle = TITLES[currentIndex];
    let charIndex = 0;
    let isDeleting = false;
    
    const typeEffect = setInterval(() => {
      if (!isDeleting && charIndex <= currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else if (!isDeleting && charIndex > currentTitle.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }
      
      if (isDeleting && charIndex >= 0) {
        setDisplayedText(currentTitle.slice(0, charIndex));
        charIndex--;
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        setCurrentIndex((prev) => (prev + 1) % TITLES.length);
      }
    }, 100);

    return () => clearInterval(typeEffect);
  }, [currentIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-8">
          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary-500 shadow-xl bg-gray-200 dark:bg-gray-700">
              {profile.image ? (
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl text-gray-400 dark:text-gray-500" style={{ display: profile.image ? 'none' : 'flex' }}>
                <svg className="w-16 h-16 md:w-20 md:h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="inline-block mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full">
            <span className="text-primary-600 dark:text-primary-400 font-medium">Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {profile.introduction}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="group px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
          >
            <span className="flex items-center justify-center gap-2">
              View Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-block">
            <svg
              className="w-8 h-8 mx-auto text-primary-500 hover:text-primary-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
