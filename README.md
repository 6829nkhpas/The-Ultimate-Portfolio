# Naman Kumar - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Showcasing skills, projects, and experience in backend development and blockchain technology.

## 🚀 Live Demo

Visit: [https://namankumar.live](https://namankumar.live)

## ✨ Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for speed and Core Web Vitals
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **PWA Ready**: Web app manifest and service worker support
- **Animations**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form with EmailJS integration
- **GitHub Integration**: Dynamic GitHub profile and repository display

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Email**: EmailJS

## 📁 Project Structure

```
PortFolio-main/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── assets/            # Static assets
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience section
│   ├── Projects.tsx      # Projects section
│   ├── Contact.tsx       # Contact section
│   ├── Navigation.tsx    # Navigation bar
│   ├── Footer.tsx        # Footer
│   └── Linkdein.tsx      # GitHub modal component
├── public/               # Static files
│   ├── robots.txt        # SEO robots file
│   ├── sitemap.xml      # SEO sitemap
│   ├── site.webmanifest # PWA manifest
│   └── favicon.ico      # Site favicon
├── vercel.json          # Vercel configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Deployment

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/6829nkhpas/PortFolio-main.git
   cd PortFolio-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Deploy to Vercel

#### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required environment variables

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Select your scope
   - Link to existing project or create new
   - Confirm deployment settings

### Environment Variables

Create a `.env.local` file for local development:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="Your Name - Portfolio"
NEXT_PUBLIC_SITE_DESCRIPTION="Your description"

# GitHub Configuration
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
NEXT_PUBLIC_GITHUB_API_URL=https://api.github.com

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_RESUME_URL=https://your-resume-url.com
```

## 📝 Customization

### Update Personal Information

1. **Profile Information**: Edit `components/About.tsx`
2. **Experience**: Edit `components/Experience.tsx`
3. **Projects**: Edit `components/Projects.tsx`
4. **Contact**: Edit `components/Contact.tsx`
5. **Navigation**: Edit `components/Navigation.tsx`

### Update Styling

1. **Colors**: Edit `tailwind.config.js`
2. **Global Styles**: Edit `app/globals.css`
3. **Component Styles**: Edit individual component files

### Update SEO

1. **Meta Tags**: Edit `app/layout.tsx`
2. **Sitemap**: Edit `public/sitemap.xml`
3. **Robots**: Edit `public/robots.txt`

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **SEO Score**: 100/100
- **Accessibility**: WCAG 2.1 compliant
- **Best Practices**: 100/100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: nkhpas091@gmail.com
- **LinkedIn**: [Naman Kumar](https://www.linkedin.com/in/namankh)
- **GitHub**: [6829nkhpas](https://github.com/6829nkhpas)
- **Website**: (https://the-ultimate-portfolio-eight.vercel.app/)
  
  Starting with NEW year 2026

---

Made with ❤️ by Naman Kumar
