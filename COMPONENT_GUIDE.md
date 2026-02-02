# Component Architecture Guide

## 📐 Component Structure

All components follow a consistent pattern with Framer Motion animations and responsive design.

## 🧩 Components Overview

### Navigation Components

#### `Navbar.jsx`

**Purpose**: Main navigation header with mobile support  
**Features**:

- Sticky fixed header
- Desktop menu with hover underlines
- Mobile hamburger menu
- Social icons integration
- Backdrop blur effect

**Props**: None (uses constants)  
**Data Source**: `navLinks`, `socialLinks` from constants

```jsx
// Usage in App.jsx
import NavigationBar from './components/NavigationBar'
;<NavigationBar />
```

### Hero Components

#### `HeroSection.jsx`

**Purpose**: Landing page hero section  
**Features**:

- Animated headline with gradient
- CTA buttons
- Tech stack preview
- Scroll indicator animation
- Responsive layout

**Props**: None  
**Animations**: Staggered enter animations, scroll bounce

```jsx
// Customization
export const heroText = {
  greeting: '👋 Hello!',
  headline: 'I build',
  highlight: 'reactive interfaces',
  // ... more fields
}
```

#### `HeroCanvas.jsx`

**Purpose**: 3D globe for hero section  
**Features**:

- Rotating 3D sphere with texture
- Orbit controls (disabled zoom/pan)
- Memoized component (prevents re-renders)
- Responsive sizing

**3D Elements**:

- Sphere geometry: 1.2 radius, 64x64 segments
- Ambient + Directional + Point lighting
- Earth texture from URL

### Content Sections

#### `About.jsx`

**Purpose**: About section with bio and highlights  
**Features**:

- Grid layout (2-column on desktop)
- Contact info cards
- Stats display (5+ years, 20+ projects, etc.)
- Animated background
- Key highlights list

**Customization**:

```javascript
export const aboutMe = {
  name: 'Andrew Vu',
  title: 'Full-Stack Developer',
  bio: 'Your bio...',
  location: 'San Francisco, CA',
  email: 'andrew@example.com',
}
```

#### `Skills.jsx`

**Purpose**: Technical skills showcase  
**Features**:

- 6 skill categories with icons
- Technologies per category
- Specialized expertise section
- Card hover animations
- Color-coded backgrounds

**Customization**:

```javascript
{
  category: 'Frontend',
  icon: '⚛️',
  technologies: ['React', 'Vue.js', 'TypeScript'],
}
```

#### `Projects.jsx`

**Purpose**: Portfolio projects showcase  
**Features**:

- Responsive grid (2 columns on desktop)
- Image backgrounds with hover zoom
- Technology tags with colors
- GitHub and live demo links
- Hover overlay with details

**Project Structure**:

```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'What it does...',
  image: 'https://image-url.jpg',
  tags: [{ name: 'React', color: 'text-blue-400' }],
  github: 'https://github.com/...',
  deployed: 'https://example.com',
}
```

#### `Experience.jsx`

**Purpose**: Work experience timeline  
**Features**:

- Vertical timeline with animated dots
- Job details (position, company, location)
- Achievement bullets with arrows
- Period information
- Interactive hover effects

**Experience Data**:

```javascript
{
  position: 'Senior Developer',
  company: 'TechCorp',
  period: 'Jan 2023 - Present',
  location: 'San Francisco, CA',
  description: 'Led team projects...',
  achievements: ['Achievement 1', 'Achievement 2'],
}
```

#### `Contact.jsx`

**Purpose**: Contact form and information  
**Features**:

- Contact method cards (email, LinkedIn, GitHub)
- Form with validation
- Topic dropdown selection
- Success feedback
- Response time indicator

**Form Fields**:

- name (text)
- email (email)
- topic (select)
- message (textarea)

### Footer & Utilities

#### `Footer.jsx`

**Purpose**: Page footer  
**Features**:

- 3-column layout
- Social media links
- Quick navigation links
- Copyright info
- Tech stack credits

#### `Header.jsx`

**Purpose**: Placeholder component  
**Status**: Can be removed (content moved to Navbar)

#### `SectionShell.jsx`

**Purpose**: Reusable section wrapper  
**Usage**: Not currently used (replaced by individual sections)

### 3D Canvas Components

#### `HeroCanvas/Globe.jsx`

**Purpose**: 3D rotating globe  
**Location**: Inside HeroCanvas.jsx  
**Features**:

- Memoized to prevent re-renders
- Texture loader for Earth image
- Rotation animation
- Floating animation
- Cast and receive shadows

#### `canvas/Stars.jsx`

**Purpose**: Animated starfield background  
**Features**:

- 5000 particle system
- Animated rotation
- Radial gradient background
- Responsive sizing

**Usage**:

```jsx
import Stars from './components/canvas/Stars'
;<Stars />
```

#### `canvas/TechBall.jsx`

**Purpose**: 3D tech icon balls  
**Features**:

- Multiple floating balls
- Icosahedron geometry
- Text labels
- Point light glow effect
- Customizable tech array

**Usage**:

```jsx
<TechBall tech={['React', 'Three.js', 'Node.js']} />
```

## 🎨 Animation Patterns

### Framer Motion Variants

All major sections use these variant patterns:

```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}
```

### Common Animation Triggers

- **Scroll-based**: `whileInView` with `viewport`
- **Hover effects**: `whileHover` for cards
- **Initial load**: `initial="hidden" animate="visible"`

## 🔄 Data Flow

```
src/constants/index.js (Single Source of Truth)
        ↓
    App.jsx
        ↓
    Individual Components
        ↓
    Render with Framer Motion
```

All data flows downward from constants to components via props or direct imports.

## 🎯 Styling Approach

### Tailwind CSS Strategy

- **Responsive**: Mobile-first breakpoints (sm, md, lg)
- **Dark theme**: `bg-black`, `text-white`
- **Colors**: Purple (#915EFF) and pink accents
- **Utilities**: Flexbox, grid, gap, padding

### Custom CSS Classes

- Animation keyframes in `index.css`
- Gradient backgrounds
- Scrollbar styling
- Selection styling

## 🔗 Component Dependencies

```
App
├── Navbar
├── HeroSection
│   └── HeroCanvas
│       └── Globe (3D)
├── About
├── Skills
├── Projects
├── Experience
├── Contact
└── Footer
```

## ♻️ Reusable Patterns

### Card Component Pattern

Used in About, Skills, Experience, Projects

```jsx
<motion.div
  variants={itemVariants}
  className="p-6 rounded-lg border border-white/10 hover:border-purple-400/50"
>
  {/* Content */}
</motion.div>
```

### Section Header Pattern

Used in all major sections

```jsx
<motion.div variants={itemVariants} className="space-y-2">
  <p className="text-sm uppercase tracking-widest text-purple-400">Label</p>
  <h2 className="text-4xl sm:text-5xl font-bold text-white">Title</h2>
</motion.div>
```

### Grid Layout Pattern

Used for responsive multi-column layouts

```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{/* Items */}</div>
```

## 🛠️ Adding New Components

Template for new section component:

```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { yourData } from '../constants'

const YourComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="section-id" className="relative py-20 px-6 sm:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Content */}
      </motion.div>
    </section>
  )
}

export default YourComponent
```

## 🚀 Performance Optimizations

1. **Memoization**: Globe component memoized with React.memo()
2. **On-demand rendering**: Canvas uses `frameloop="demand"`
3. **Lazy animations**: Scroll-triggered with `whileInView`
4. **Responsive images**: Proper sizing for different screens
5. **Code splitting**: Vite automatic code splitting

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Each component is optimized for all breakpoints using Tailwind's responsive prefixes.

---

This architecture ensures consistency, maintainability, and scalability! 🎉
