# Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS v4
- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Automatically follows system preferences
- **Smooth Navigation**: Anchor links with smooth scrolling to sections
- **Interactive Carousel**: Projects showcase with navigation arrows and dots
- **Colorful Skill Badges**: Technical skills organized by categories with color-coded badges
- **Static Generation**: Fully pre-rendered for optimal performance
- **SEO Friendly**: Proper metadata and semantic HTML

## 📋 Sections

1. **Hero Section**: Profile photo, name, title, and introduction
2. **Skills Section**: Technical skills organized by categories (Frontend, Backend, Database, DevOps)
3. **Projects Section**: Interactive carousel showcasing selected projects
4. **Education Section**: Academic background and degrees
5. **Achievements Section**: Certifications and awards
6. **Footer**: Social media links (GitHub, LinkedIn, Twitter, Email)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ivanenkomaksym/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Your Information

Edit `data/portfolio-data.ts` to customize all content:

```typescript
export const portfolioData: PortfolioData = {
  basicInfo: {
    name: "Your Name",
    title: "Your Title",
    summary: "Your introduction...",
    photo: "/images/profile.jpg",
    location: "Your Location",
    email: "your.email@example.com"
  },
  // ... update skills, projects, education, achievements, and social links
};
```

### Replace Profile Photo

Replace the file at `public/images/profile.jpg` with your own photo (recommended size: 400x400px).

### Modify Colors

Update colors in `app/globals.css`:

```css
:root {
  --primary: #3b82f6;    /* Primary blue color */
  --secondary: #8b5cf6;  /* Secondary purple color */
}
```

### Add More Sections

Create new section components in `components/sections/` and import them in `app/page.tsx`.

## 📦 Build for Production

Build the optimized production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy your site

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Deploy to GitHub Pages

Use the static export feature:

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
};
```

2. Build: `npm run build`
3. Deploy the `out` folder to GitHub Pages

## 📄 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   └── sections/          # Section components
├── data/                  # Data files
│   └── portfolio-data.ts  # Portfolio content
├── public/                # Static assets
│   └── images/           # Images
├── types/                 # TypeScript types
│   └── portfolio.ts      # Type definitions
└── package.json          # Dependencies
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips

- Keep your summary concise and impactful
- Use high-quality images for your profile photo
- Link to live demos of your projects when possible
- Update your GitHub pinned repositories to match featured projects
- Add Google Analytics for tracking (optional)
- Consider adding a blog section for sharing articles

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS