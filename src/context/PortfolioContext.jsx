/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

const projects = [
  {
    id: 1,
    name: "Character Matters",
    description: "An interactive web application dedicated to character development and personal growth. This platform helps users explore and cultivate essential character traits through engaging content and self-assessment tools.",
    techStack: ["React", "JavaScript", "CSS", "Netlify"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    liveDemo: "https://charactermatters.netlify.app",
    github: "",
  },
  {
    id: 2,
    name: "Transaction Trac",
    description: "A comprehensive financial transaction tracking application designed to help users manage their finances effectively. Features include detailed transaction history, visual spending analytics, and budget tracking.",
    techStack: ["React", "JavaScript", "CSS", "LocalStorage", "Netlify"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    liveDemo: "https://transactiontrac.netlify.app",
    github: "",
  },
  {
    id: 3,
    name: "GMJGPM",
    description: "A professional web presence for GMJGPM organization, showcasing their services, mission, and values. Features an elegant design with comprehensive information pages and contact functionality.",
    techStack: ["React", "JavaScript", "CSS", "Responsive Design", "Netlify"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveDemo: "https://gmjgpm.netlify.app",
    github: "",
  },
  {
    id: 4,
    name: "E-Commerce Platform",
    description: "A full-featured e-commerce web application with product catalog management, shopping cart functionality, secure authentication, and payment gateway integration.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    category: "Fullstack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    liveDemo: "",
    github: "",
    status: "In Development",
  },
  {
    id: 5,
    name: "Educational Platform",
    description: "An innovative educational web application designed to revolutionize online learning with interactive course content, progress tracking, and personalized learning paths.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    category: "Fullstack",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    liveDemo: "",
    github: "",
    status: "In Development",
  },
];

const skills = {
  frontend: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Redux", "Next.js", "Vue.js"],
  backend: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL", "Socket.io"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack", "VS Code"],
};

const profile = {
  name: "Solaja, Oyeniyi Michael",
  title: "Freelance Fullstack Web Developer",
  introduction: "Building scalable, high-performance web applications for international clients and remote-first startups. Transforming ideas into secure, conversion-focused digital products.",
  about: "I am a Freelance Website Developer specializing in building scalable, high-performance web applications for international clients and remote-first startups. I help businesses transform ideas into secure, conversion-focused digital products that are optimized for performance, usability, and long-term growth.\n\nMy expertise spans full-stack web development, responsive front-end engineering, backend architecture, API integration, payment gateway implementation, authentication systems, and database design. I build mobile-first, SEO-optimized, and accessibility-compliant websites using modern development frameworks and clean, maintainable code.\n\nFrom MVP development to scaling production-ready platforms, I focus on performance optimization, cross-browser compatibility, technical SEO, and secure deployment workflows. I collaborate seamlessly with distributed teams using Git-based version control, Agile methodology, and CI/CD pipelines to ensure efficient delivery and high code quality.\n\nI work remotely with clients across different time zones, maintaining clear communication, structured documentation, and reliable turnaround times. My goal is simple: deliver robust, scalable web solutions that enhance user experience, improve conversion rates, and drive measurable business results.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  portfolio: "https://yourportfolio.com",
};

export const PortfolioProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio_darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        skills,
        profile,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
