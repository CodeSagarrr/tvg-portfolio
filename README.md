# Premium Agency Landing Page

A modern, high-converting 3D landing page for a service-based agency built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 **Premium Design** - Bold theme with strong contrast and luxury-style typography
- 📱 **Fully Responsive** - Mobile-first design that works on all screen sizes
- ✨ **3D Effects** - Subtle 3D depth, parallax scrolling, and layered motion
- 🎭 **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- ⚡ **Performance Optimized** - Fast loading with optimized images and code splitting
- ♿ **Accessible** - SEO-friendly structure and accessible markup
- 🎯 **Conversion Focused** - Single-purpose landing page with clear visual hierarchy

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics (via React Three Fiber)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Navigation.tsx      # Fixed navigation with scroll effects
│   ├── ParallaxProvider.tsx # Parallax scroll context provider
│   └── sections/
│       ├── Hero.tsx        # Hero section with 3D effects
│       ├── About.tsx       # About section
│       ├── Services.tsx    # Services grid
│       ├── Process.tsx     # Process/Workflow section
│       ├── Portfolio.tsx   # Portfolio showcase
│       ├── Testimonials.tsx # Client testimonials
│       ├── CTA.tsx         # Call-to-action section
│       └── Footer.tsx      # Footer with links
└── public/                 # Static assets
```

## Sections

The landing page is structured with the following sections (in order):

1. **Hero** - Main hero section with parallax background
2. **About** - About section with stats/features
3. **Services** - Services grid with hover effects
4. **Process** - Step-by-step process workflow
5. **Portfolio** - Portfolio showcase with project cards
6. **Testimonials** - Client testimonials
7. **CTA** - Call-to-action section
8. **Footer** - Footer with links and information

All sections are set up with empty content placeholders ready for your content.

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The theme uses:
- `primary` - Primary brand colors (blue tones)
- `dark` - Dark theme colors

### Fonts

The project uses Google Fonts:
- **Inter** - Sans-serif body font
- **Playfair Display** - Display/heading font
- **Cormorant Garamond** - Luxury serif font

Fonts are configured in `app/layout.tsx`.

### Animations

Animations are powered by Framer Motion. Customize animation timings and effects in individual component files.

## Build for Production

```bash
npm run build
npm start
```

## Performance

- Image optimization with Next.js Image component
- Code splitting with Next.js App Router
- CSS optimization with Tailwind CSS
- Smooth scroll behavior
- Passive event listeners for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.
