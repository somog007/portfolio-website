# 🚀 Quick Start Guide

## Your Portfolio is Ready!

The development server is running at: **http://localhost:5173**

## 📋 Quick Actions

### 1. **Customize Your Portfolio**
   - Click the **"Admin"** button in the top-right corner
   - Edit your name, title, and introduction directly on the page
   - All changes are saved automatically to your browser

### 2. **Add Your Projects**
   - Enable Admin mode
   - Scroll to the Projects section
   - Click **"+ Add New Project"**
   - Fill in the form with your project details
   - Click "Add Project"

### 3. **Update Your Skills**
   - Enable Admin mode
   - Scroll to the Skills section
   - Click on any skill category to edit
   - Enter skills as comma-separated values (e.g., "React, Vue.js, Angular")

### 4. **Edit Contact Information**
   - Enable Admin mode
   - Scroll to the Contact section
   - Update your email and social media URLs

### 5. **Toggle Dark Mode**
   - Click the sun/moon icon in the header
   - Your preference is saved automatically

## 🎨 Customization Tips

### Replace Sample Images
The default projects use placeholder images from Unsplash. To use your own:
1. Upload your project screenshots to an image hosting service (Imgur, Cloudinary, etc.)
2. In Admin mode, edit each project and paste your image URLs

### Change Color Scheme
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change this to your brand color
  },
}
```

### Add More Categories
Projects support these categories by default:
- Fullstack
- Frontend
- Backend
- Mobile
- Other

You can use any category name when adding projects!

## 📝 Next Steps

1. **Update Your Profile Information**
   - Replace "Your Name" with your actual name
   - Update the title (currently "Fullstack Developer")
   - Write your introduction and about section

2. **Add Real Projects**
   - Delete the sample projects or edit them
   - Add your actual projects with live demos and GitHub links
   - Use high-quality screenshots (800x600px recommended)

3. **Update Skills**
   - Add your actual technical skills
   - Organize them by category (Frontend, Backend, Databases, Tools)

4. **Configure Contact Links**
   - Add your GitHub, LinkedIn, Twitter profiles
   - Update your professional email address

5. **Deploy Your Portfolio**
   - Build for production: `npm run build`
   - Deploy to Vercel, Netlify, or GitHub Pages
   - See `USER_GUIDE.md` for detailed deployment instructions

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 💾 Data Storage

Your portfolio data is stored in your browser's localStorage:
- Projects, skills, and profile information persist automatically
- Dark mode preference is remembered
- Admin mode status (enable it each time you want to edit)

**Important**: Data is stored locally. To backup or transfer your portfolio:
1. Open browser DevTools (F12)
2. Go to Application > Local Storage
3. Copy the portfolio data
4. Import it on another browser/device

## 🐛 Troubleshooting

**Server not starting?**
- Make sure you're in the `portfolio-website` directory
- Try: `npm install` then `npm run dev`

**Changes not saving?**
- Make sure Admin mode is enabled
- Check browser console for errors
- Ensure localStorage is enabled in your browser

**Images not loading?**
- Verify image URLs are publicly accessible
- Use HTTPS URLs
- Try using Unsplash URLs for testing

## 📚 Resources

- **Full Documentation**: See `USER_GUIDE.md`
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vite.dev

## ✨ Features Overview

✅ Responsive design (mobile, tablet, desktop)
✅ Dark mode with persistence
✅ Admin mode for easy editing
✅ Project filtering by category
✅ Smooth animations and transitions
✅ localStorage data persistence
✅ Inline editing capabilities
✅ Professional UI/UX
✅ Production-ready code
✅ Easy to maintain and update

---

**Enjoy building your portfolio! 🎉**

For detailed instructions, refer to `USER_GUIDE.md`
