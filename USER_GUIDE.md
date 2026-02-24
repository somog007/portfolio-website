# Professional Portfolio Website

A modern, fully-featured portfolio website built with React and Tailwind CSS for showcasing your fullstack development projects and skills.

## 🌟 Features

### Core Functionality
- **Hero Section**: Eye-catching introduction with your name, title, and brief bio
- **About Section**: Detailed information about your background and expertise
- **Projects Showcase**: Display your work with thumbnails, descriptions, and tech stacks
- **Skills Section**: Organized display of your technical capabilities (Frontend, Backend, Databases, Tools)
- **Contact Section**: Professional links to GitHub, LinkedIn, Email, and social profiles

### Advanced Features
- **Admin Mode**: Click the "Admin" button in the header to enable editing
- **Inline Editing**: Edit your profile, projects, and skills directly on the page
- **Project Management**: Add, edit, and delete projects with a user-friendly interface
- **Project Filtering**: Filter projects by category (Fullstack, Frontend, Backend, Mobile, Other)
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Professional transitions and hover effects
- **Persistent Storage**: All changes are automatically saved to localStorage

## 🚀 Getting Started

### Installation
```bash
# Navigate to the project directory
cd portfolio-website

# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production
```bash
# Create an optimized production build
npm run build

# Preview the production build
npm run preview
```

## 📝 How to Use

### Editing Your Portfolio

1. **Enable Admin Mode**: Click the "Admin" button in the top-right corner of the header

2. **Edit Your Profile**:
   - Click on any text in the Hero or About section to edit
   - Changes are saved automatically

3. **Manage Projects**:
   - **Add**: Click "+ Add New Project" button
   - **Edit**: Click "Edit" button on any project card
   - **Delete**: Click "Delete" button on any project card
   - Fill in project details: name, description, tech stack, category, image URL, demo link, and GitHub link

4. **Update Skills**:
   - In Admin mode, click on any skill category to edit
   - Enter skills as comma-separated values

5. **Update Contact Information**:
   - Edit your email and social media URLs in the Contact section while in Admin mode

### Project Data Structure

Each project has the following properties:
```javascript
{
  id: 1,                                    // Auto-generated
  name: "Project Name",                     // Required
  description: "Project description",       // Required
  techStack: ["React", "Node.js"],         // Array of technologies
  category: "Fullstack",                    // Fullstack, Frontend, Backend, Mobile, Other
  image: "https://image-url.com",          // Project thumbnail URL
  liveDemo: "https://demo-url.com",        // Optional
  github: "https://github.com/user/repo"   // Optional
}
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Main brand color
    600: '#0284c7',  // Darker shade
    // ... other shades
  },
}
```

### Default Data
Edit `src/context/PortfolioContext.jsx` to change default projects, skills, and profile information:
- `defaultProjects`: Sample projects displayed initially
- `defaultSkills`: Default skill categories and items
- `defaultProfile`: Your name, title, bio, and contact links

## 🔧 Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Context API
- **Storage**: localStorage for data persistence
- **Icons**: SVG icons for social links

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is enabled by default and persists across sessions. Toggle using the sun/moon icon in the header.

## 💾 Data Persistence

All your portfolio data is stored in the browser's localStorage:
- `portfolio_projects`: Your projects list
- `portfolio_skills`: Your skills data
- `portfolio_profile`: Your personal information
- `portfolio_darkMode`: Dark mode preference

**Note**: Data is stored locally in your browser. To transfer your portfolio to another device, you can export/import the localStorage data or manually recreate your content.

## 🎯 Tips for Best Results

1. **High-Quality Images**: Use high-resolution project screenshots (recommended: 800x600px)
2. **Consistent Categories**: Stick to the predefined categories for better filtering
3. **Complete Information**: Fill in all project fields for a professional appearance
4. **Regular Updates**: Keep your projects and skills up-to-date
5. **Professional Links**: Ensure all URLs are working and point to the correct resources

## 📦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## 🛠️ Troubleshooting

**Issue**: Changes not saving
- **Solution**: Check browser console for errors, ensure localStorage is enabled

**Issue**: Images not loading
- **Solution**: Verify image URLs are accessible and use HTTPS

**Issue**: Dark mode not working
- **Solution**: Clear localStorage and refresh the page

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions, please refer to the code comments or modify the components directly to suit your needs.

---

**Built with ❤️ using React and Tailwind CSS**
