# 🎨 Customization Guide

Learn how to customize your portfolio to match your personal brand and style.

## Color Schemes

### Changing Primary Color

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',  // Main color - change this!
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
    },
  },
}
```

### Popular Color Schemes

**Purple Theme:**
```javascript
primary: {
  500: '#8b5cf6', // Purple
  600: '#7c3aed',
}
```

**Green Theme:**
```javascript
primary: {
  500: '#10b981', // Green
  600: '#059669',
}
```

**Orange Theme:**
```javascript
primary: {
  500: '#f59e0b', // Orange
  600: '#d97706',
}
```

**Red Theme:**
```javascript
primary: {
  500: '#ef4444', // Red
  600: '#dc2626',
}
```

Use a color generator like https://uicolors.app to create complete palettes!

---

## Fonts

### Using Google Fonts

1. **Add to `index.html`:**

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
</head>
```

2. **Update `tailwind.config.js`:**

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
  },
}
```

### Popular Font Combinations

**Modern & Clean:**
- Headings: Inter or Poppins
- Body: Inter or Open Sans

**Professional:**
- Headings: Montserrat
- Body: Roboto

**Creative:**
- Headings: Space Grotesk
- Body: Work Sans

---

## Animations

### Adding Custom Animations

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    animation: {
      'bounce-slow': 'bounce 3s infinite',
      'pulse-slow': 'pulse 3s infinite',
      'fade-in-up': 'fadeInUp 0.5s ease-out',
    },
    keyframes: {
      fadeInUp: {
        '0%': { 
          opacity: '0',
          transform: 'translateY(30px)' 
        },
        '100%': { 
          opacity: '1',
          transform: 'translateY(0)' 
        },
      },
    },
  },
}
```

Use in components:
```jsx
<div className="animate-fade-in-up">Content</div>
```

---

## Layout Modifications

### Changing Section Order

Edit `App.jsx`:

```jsx
<main>
  <Hero />
  <Projects />    {/* Moved up */}
  <About />       {/* Moved down */}
  <Skills />
  <Contact />
</main>
```

### Adding New Sections

Create new component `src/components/Experience.jsx`:

```jsx
const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Work Experience
        </h2>
        {/* Your experience content */}
      </div>
    </section>
  );
};

export default Experience;
```

Add to `App.jsx`:
```jsx
import Experience from './components/Experience';

<main>
  <Hero />
  <About />
  <Experience />  {/* New section */}
  <Projects />
  <Skills />
  <Contact />
</main>
```

---

## Hero Section Customization

### Adding Background Image

Edit `src/components/Hero.jsx`:

```jsx
<section 
  id="hero" 
  className="min-h-screen flex items-center justify-center pt-20 px-6"
  style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="container mx-auto text-center relative z-10">
    {/* Content */}
  </div>
</section>
```

### Adding Particles Effect

Install particles library:
```bash
npm install react-tsparticles tsparticles
```

### Adding Typing Effect

For animated text effect:
```bash
npm install react-typed
```

Use in Hero:
```jsx
import Typed from 'react-typed';

<Typed
  strings={['Fullstack Developer', 'React Expert', 'Problem Solver']}
  typeSpeed={40}
  backSpeed={50}
  loop
/>
```

---

## Project Cards

### Adding Tags/Badges

Edit `src/components/ProjectCard.jsx`:

```jsx
<div className="flex gap-2 mb-4">
  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
    Featured
  </span>
  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
    New
  </span>
</div>
```

### Adding View Count or Stars

```jsx
<div className="flex items-center gap-4 text-sm text-gray-500">
  <span>⭐ 42 stars</span>
  <span>👁️ 1.2k views</span>
</div>
```

### Grid Layout Options

Change in `Projects.jsx`:

```jsx
{/* 2 columns max */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

{/* 4 columns on large screens */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

{/* Masonry-style */}
<div className="columns-1 md:columns-2 lg:columns-3 gap-8">
```

---

## Skills Section

### Using Skill Icons

Install icons library:
```bash
npm install react-icons
```

Use in Skills:
```jsx
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

<div className="flex items-center gap-2">
  <FaReact className="text-2xl" />
  <span>React</span>
</div>
```

### Progress Bars

```jsx
<div className="mb-4">
  <div className="flex justify-between mb-1">
    <span>React</span>
    <span>90%</span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '90%' }}></div>
  </div>
</div>
```

### Skill Rating Stars

```jsx
<div className="flex items-center gap-2">
  <span>JavaScript</span>
  <div className="flex">
    {'⭐'.repeat(5)}
  </div>
</div>
```

---

## Contact Section

### Adding Contact Form

Create `ContactForm.jsx`:

```jsx
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="w-full p-3 mb-4 border rounded-lg"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="w-full p-3 mb-4 border rounded-lg"
      />
      <textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        className="w-full p-3 mb-4 border rounded-lg"
        rows="4"
      />
      <button 
        type="submit"
        className="w-full py-3 bg-primary-500 text-white rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
};
```

### Using Formspree (No Backend Required)

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

Sign up at https://formspree.io to get your form ID.

---

## Header/Navigation

### Sticky Navigation with Background on Scroll

Already implemented! Modify transparency in `Header.jsx`:

```jsx
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? 'bg-white/95 dark:bg-gray-900/95'  // More opaque
    : 'bg-white/50 dark:bg-gray-900/50'   // More transparent
}`}
```

### Adding Logo

```jsx
<div className="flex items-center gap-2">
  <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
  <span className="text-2xl font-bold">Your Name</span>
</div>
```

### Mobile Menu

Add hamburger menu for mobile:

```jsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

{/* Hamburger button - visible on mobile */}
<button 
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="md:hidden"
>
  {mobileMenuOpen ? '✕' : '☰'}
</button>

{/* Mobile menu */}
{mobileMenuOpen && (
  <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 md:hidden">
    <div className="flex flex-col p-4">
      <button onClick={() => scrollToSection('about')}>About</button>
      <button onClick={() => scrollToSection('projects')}>Projects</button>
      {/* More links */}
    </div>
  </div>
)}
```

---

## Adding Blog Section

Create `Blog.jsx`:

```jsx
const Blog = () => {
  const posts = [
    {
      title: "Getting Started with React",
      excerpt: "Learn the basics...",
      date: "2024-01-15",
      url: "https://medium.com/@yourhandle/post"
    },
    // More posts
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
        Blog Posts
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <article key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <a href={post.url} className="text-primary-500">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
```

---

## Dark Mode Customization

### Different Dark Mode Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#0a0a0a',      // Custom dark background
    surface: '#1a1a1a', // Card backgrounds
    text: '#e5e5e5',    // Text color
  },
}
```

### Force Dark or Light Mode

Remove toggle and set default in `PortfolioContext.jsx`:

```jsx
const [darkMode, setDarkMode] = useState(true); // Always dark
```

---

## Performance Optimization

### Lazy Loading Images

```jsx
<img 
  src={project.image} 
  loading="lazy"
  alt={project.name}
/>
```

### Code Splitting

```jsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));

<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

---

## SEO Optimization

### Update Meta Tags in `index.html`

```html
<head>
  <title>Your Name - Fullstack Developer</title>
  <meta name="description" content="Portfolio of Your Name, a fullstack developer specializing in React, Node.js, and modern web technologies">
  <meta name="keywords" content="fullstack developer, react developer, web developer, portfolio">
  <meta property="og:title" content="Your Name - Fullstack Developer">
  <meta property="og:description" content="Check out my portfolio">
  <meta property="og:image" content="https://yoursite.com/preview.jpg">
  <meta property="og:url" content="https://yoursite.com">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

---

## Adding Analytics

### Google Analytics

Add to `index.html`:

```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

---

## Resources

- **Tailwind Components**: https://tailwindui.com
- **Icon Libraries**: https://react-icons.github.io/react-icons
- **Color Palettes**: https://coolors.co
- **Gradient Generator**: https://cssgradient.io
- **Font Pairings**: https://fontpair.co
- **Image Placeholders**: https://unsplash.com

---

**Happy Customizing! Make it yours! 🎨**
