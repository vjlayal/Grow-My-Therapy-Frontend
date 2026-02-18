# Dr. Maya Reynolds, PsyD - Therapy Website

This is a professional, high-performance, and visually stunning website for Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, CA. The site is designed to feel calm, grounding, and professional, reflecting the nature of her therapeutic practice.

## ✨ Key Features

- **Global Animation System**: Smooth, scroll-triggered entry animations (fade, slide, scale) powered by `framer-motion` for a premium, interactive feel.
- **Mobile-First Design**: Fully responsive layout optimized for all devices, from narrow smartphones to large desktop displays.
- **Dynamic Homepage**: Includes core focus areas, professional background, a dedicated "Our Office" section with a curated design, and interactive FAQs.
- **Specialized Sections**:
  - **Hero**: Atmospheric entry with arched imagery and elegant typography.
  - **Office Section**: Showcasing her Santa Monica space with a calming aesthetic.
  - **Social Feed**: Integrated image gallery and social connection points.
  - **Booking Integration**: Direct calls-to-action for scheduling consultations.
- **Performance Optimized**: Built with Next.js 15 for fast loading, SEO benefits, and image optimization.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: Lucide React / Simple Icons

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
d:/Grow My Therapy assignment/
│
├── 🎨 App Directory
│   ├── blog/               # Blog listing page and posts
│   ├── contact/            # Contact page with Office Location map
│   ├── globals.css         # Global styles and font configurations
│   ├── layout.tsx          # Root layout, Navbar, and SEO Metadata
│   └── page.tsx            # Main Homepage (assembled from components)
│
├── 🧩 Components
│   ├── AnimationWrapper.tsx # Core framer-motion utility for entry effects
│   ├── Header.tsx           # Responsive navigation with mobile menu
│   ├── Hero.tsx             # Arched Hero section with text & image
│   ├── OfficeSection.tsx    # "A Calm Space" section with office gallery
│   ├── BookingSection.tsx   # Ready to start call-to-action
│   ├── SocialGallery.tsx    # Responsive grid for social media photos
│   ├── SocialIcons.tsx      # Branded social media links
│   ├── Footer.tsx           # Global site footer
│   └── ...                  # Other modular UI sections
│
└── ⚙️ Configuration
    ├── tailwind.config.ts   # Design system (Theme: #212842, #E5E0DA)
    ├── next.config.js       # Image remote domains and settings
    └── tsconfig.json        # TypeScript strict-mode config
```

---

## 🎨 Design System

### Color Palette
- **Primary Dark**: `#212842` (Deep navy - stability and trust)
- **Primary Light**: `#FBF6F1` (Warm cream - comfort and safety)
- **Accent**: `#C2BFCB` (Soft lavender gray - elegance)
- **Text**: `#2D3748` (Slate gray - readability)

### Typography
- **Typography**: Montserrat and Inter fonts with light and thin weights (`font-light`) for an airy, premium aesthetic.
- **Aesthetics**: Arched imagery, circular elements, and generous whitespace for a grounded, calm, and professional user experience.

---

## 📋 Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Generate optimized production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Check code for styling and syntax errors |

---

## 📄 License

This project is the final deliverable for Dr. Maya Reynolds.
