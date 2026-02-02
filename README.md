# Andrew Vu - 3D Interactive Portfolio

A modern, fully interactive 3D portfolio built with React, Three.js, and Tailwind CSS. Features immersive 3D graphics, smooth animations, and a comprehensive showcase of projects and experience.

## 🌟 Features

- **3D Hero Section**: Interactive 3D globe with React Three Fiber
- **Smooth Animations**: Framer Motion animations on scroll
- **Project Showcase**: Beautiful project cards with images and tech stacks
- **Experience Timeline**: Interactive timeline of work experience
- **Skills Grid**: Organized skill categories with hover effects
- **Contact Form**: Fully functional contact form
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Theme**: Modern dark purple/pink color scheme
- **Performance Optimized**: Efficient rendering and lazy loading

## 🚀 Tech Stack

- **React 19**: Latest React with hooks
- **Three.js**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful Three.js helpers
- **Framer Motion**: Advanced animation library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool
- **TypeScript**: Type safety (ready to use)

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd three-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📝 Customization

### Update Personal Information

Edit `src/constants/index.js`:

```javascript
export const aboutMe = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio here...',
  location: 'Your Location',
  email: 'your@email.com',
}
```

### Add Your Projects

Update the `projects` array in `src/constants/index.js`:

```javascript
{
  id: 1,
  title: 'Project Title',
  description: 'Project description...',
  image: 'image-url',
  tags: [{ name: 'React', color: 'text-blue-400' }],
  github: 'https://github.com/...',
  deployed: 'https://example.com',
}
```

### Customize Colors

Modify the Tailwind config in `tailwind.config.cjs` or use the Tailwind utility classes throughout the project. Current color scheme:

- Primary: Purple (#915EFF)
- Secondary: Pink (#ff6b9d)
- Background: Dark Black (#050816)

### Update Social Links

Edit the `socialLinks` in `src/constants/index.js`:

```javascript
export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/yourname',
    icon: '🐙',
  },
  // ... more links
]
```

## 🔧 Project Structure

```
src/
├── components/
│   ├── About.jsx              # About section with bio
│   ├── Contact.jsx            # Contact form
│   ├── Experience.jsx         # Work experience timeline
│   ├── Footer.jsx             # Footer section
│   ├── HeroCanvas.jsx         # 3D globe canvas
│   ├── HeroSection.jsx        # Hero/landing section
│   ├── Navbar.jsx             # Navigation bar
│   ├── Projects.jsx           # Projects showcase
│   ├── Skills.jsx             # Skills grid
│   └── canvas/
│       ├── Stars.jsx          # Starfield background
│       └── TechBall.jsx       # 3D tech icons
├── constants/
│   └── index.js               # All portfolio data
├── App.jsx                    # Main app component
├── index.css                  # Global styles
└── main.jsx                   # Entry point
```

## 🎨 Sections

### Hero

- Interactive 3D globe
- Main headline and CTA buttons
- Tech stack preview

### About

- Personal bio
- Key highlights
- Contact info
- Stats

### Skills

- 6 skill categories
- Technology list per category
- Specialized expertise section

### Projects

- 4 featured projects
- Images and descriptions
- Tech tags
- GitHub and live demo links

### Experience

- Timeline of work history
- Job details and achievements
- Location and period

### Contact

- Contact form
- Social links
- Response time info

## 🚢 Build & Deployment

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Deploy to your hosting platform (Vercel, Netlify, GitHub Pages, etc.)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile: 640px and below
- Tablet: 640px - 1024px
- Desktop: 1024px and above

## ⚡ Performance Tips

- Images are optimized with proper sizes
- 3D rendering uses `frameloop="demand"` for efficiency
- Lazy loading on scroll for animations
- Code-split components
- Minified production build

## 🔐 Environment Variables

Create a `.env` file for sensitive data (if needed):

```
VITE_API_KEY=your_key
```

## 📄 License

MIT - Feel free to use this for personal or commercial projects

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📞 Support

For questions or issues, reach out through the contact form or social links.

---

Built with ❤️ by Andrew Vu
