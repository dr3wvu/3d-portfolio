# Quick Start Guide - Your New 3D Portfolio

## 🚀 Running the Portfolio

Your portfolio is already running! Visit: **http://localhost:5173**

If it's not running, use:

```bash
npm run dev
```

## 🎯 Customize in 5 Minutes

### Step 1: Update Your Name & Info

Open `src/constants/index.js` and find the `aboutMe` object:

```javascript
export const aboutMe = {
  name: 'YOUR NAME HERE', // Change this
  title: 'Your Job Title', // Change this
  bio: 'Your bio here...', // Change this
  location: 'Your City, Country', // Change this
  email: 'your@email.com', // Change this
}
```

### Step 2: Update Hero Text

Same file, find `heroText`:

```javascript
export const heroText = {
  greeting: 'Hello! 👋',
  headline: 'I build',
  highlight: 'amazing things',
  subheadline: 'with code',
  description: 'Your description here',
  cta: 'Explore My Work',
}
```

### Step 3: Update Your Projects

In the same file, update the `projects` array. Example:

```javascript
{
  id: 1,
  title: 'My First Project',
  description: 'What this project does...',
  image: 'https://image-url.com/image.jpg',
  tags: [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Node.js', color: 'text-green-400' },
  ],
  github: 'https://github.com/yourname/project',
  deployed: 'https://yourproject.com',
}
```

### Step 4: Update Social Links

In `src/constants/index.js`, update `socialLinks`:

```javascript
export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/YOUR_USERNAME',
    icon: '🐙',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/YOUR_PROFILE',
    icon: '💼',
  },
  // ... update others
]
```

### Step 5: Update Skills

Find `skills` array and add your technologies:

```javascript
{
  category: 'Frontend',
  icon: '⚛️',
  technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
}
```

## 🎨 Change Colors

### Purple to Blue

Replace all instances of:

- `purple-400` → `blue-400`
- `purple-600` → `blue-600`
- `from-purple-600` → `from-blue-600`
- `to-pink-600` → `to-cyan-600`

### Quick Color References

- **Light accent**: `text-purple-400`, `text-pink-400`
- **Dark accent**: `from-purple-600`, `to-pink-600`
- **Border/shadow**: `border-purple-400/50`
- **Background**: `bg-purple-600/20`

## 📸 Add Project Images

For project images, use:

1. Unsplash: `https://unsplash.com` (free)
2. Pexels: `https://pexels.com` (free)
3. Your own hosted images

Replace the `image` URL in projects:

```javascript
image: 'https://new-image-url.jpg'
```

## 📝 Edit Experience

Find the `experience` array:

```javascript
{
  position: 'Senior Developer',
  company: 'Your Company',
  period: 'Jan 2023 - Present',
  location: 'City, Country',
  description: 'What you did...',
  achievements: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3',
  ],
}
```

## 🔗 Update Navigation

The navigation is auto-generated from `navLinks` in constants. It pulls from:

```javascript
export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  // ... add more sections here
]
```

## 🚀 Deploy Your Portfolio

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Option 3: GitHub Pages

```bash
npm run build
git add dist
git commit -m "Deploy portfolio"
git push
```

## 🔧 Useful Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Format code
npm run format
```

## 📱 Test Responsiveness

In your browser:

1. Press `F12` to open Developer Tools
2. Click device icon (or `Ctrl+Shift+M`)
3. Test on different screen sizes

## ❓ Common Questions

### Q: How do I add a new section?

A: Copy an existing component like `About.jsx`, rename it, customize, then import in `App.jsx`

### Q: How do I change fonts?

A: Edit `tailwind.config.cjs` under the `fonts` section

### Q: Can I add more projects?

A: Yes! Just add more objects to the `projects` array in constants

### Q: How do I make the contact form work?

A: Add EmailJS by installing: `npm install @emailjs/browser` then configuring it in `Contact.jsx`

## 📞 Need Help?

- Check the `PORTFOLIO_CHANGES.md` for detailed info
- Read the `README_NEW.md` for full documentation
- Look at existing components to understand the pattern

## 🎉 You're Ready!

Your portfolio is now customized and ready to show the world!

Next steps:

1. ✅ Customize the data
2. ✅ Add your projects
3. ✅ Add your social links
4. ✅ Test on mobile
5. ✅ Deploy online

Good luck! 🚀
