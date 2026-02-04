# Andrew Vu - 3D Interactive Portfolio

A modern, fully interactive 3D portfolio built with React, Three.js, GSAP and Tailwind CSS. Features immersive 3D models, smooth animations, and a comprehensive showcase of projects and experience.

## 🌟 Features

- **3D Hero Section**: Interactive 3D spaceship with React Three Fiber
- **Smooth Animations**: Framer Motion animations on scroll
- **Project Showcase**: Beautiful project cards with images and tech stacks
- **Experience Timeline**: Interactive timeline of work experience
- **Skills Grid**: Organized skill categories with hover effects
- **Contact Form**: Fully functional contact form
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Theme**: Modern navy blue/orange color scheme
- **Performance Optimized**: Efficient rendering and lazy loading

## 🚀 Tech Stack

- **React 18**: Latest React with hooks
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

## 🔧 Project Structure

```
src/
├── components/
│   ├── About.jsx              # About section with bio
│   ├── Contact.jsx            # Contact form
│   ├── Experience.jsx         # Work experience timeline
│   ├── Footer.jsx             # Footer section
│   ├── Hero.jsx               # Hero section
│   ├── Navbar.jsx             # Navigation bar
│   ├── Projects.jsx           # Projects showcase
│   ├── Skills.jsx             # Skills grid
│   └── Portfolio/
│       ├── Portfolio.jsx          # Project slideshow carousel
│       ├── ProjectModal.jsx       # Individual project showcase popup
│   └── three/
│       ├── Stars.jsx          # Starfield background
│       └── Globe.jsx           # 3D Earth
│       └── Spaceship.jsx       # 3D Spaceship
├── constants/
│   └── project.data.js        # All portfolio data
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
- Stats

### Skills

- 6 skill categories
- Technology list per category
- Specialized expertise section

### Projects

- Featured projects in moving carousel
- Images and descriptions
- Tech stack tags
- GitHub and CodePen demo links

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

## 📞 Support

For questions or issues, reach out through the contact form or social links.

---

Built with ❤️ by Andrew Vu
