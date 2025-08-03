# 🚀 Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel quickly and easily.

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) 18+ installed
- [Git](https://git-scm.com/) installed
- [Vercel account](https://vercel.com/signup) (free)
- GitHub account (for repository hosting)

## 🎯 Quick Deployment

### Option 1: One-Click Deploy (Recommended)

1. **Fork/Clone the Repository**
   ```bash
   git clone https://github.com/6829nkhpas/PortFolio-main.git
   cd PortFolio-main
   ```

2. **Push to Your GitHub**
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/PortFolio-main.git
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

### Option 2: Automated Script

1. **Run the deployment script**
   ```bash
   ./deploy.sh
   ```

2. **Follow the prompts**
   - Login to Vercel when prompted
   - Select your scope
   - Confirm deployment settings

### Option 3: Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## ⚙️ Configuration

### Environment Variables

Set these in your Vercel dashboard (Project Settings → Environment Variables):

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_x7nwfng
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_u98mcuj
NEXT_PUBLIC_EMAILJS_USER_ID=Iaq7K27hpD8vrd15W

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME="Naman Kumar - Portfolio"
NEXT_PUBLIC_SITE_DESCRIPTION="Backend & Blockchain Developer Portfolio"

# GitHub Configuration
NEXT_PUBLIC_GITHUB_USERNAME=6829nkhpas
NEXT_PUBLIC_GITHUB_API_URL=https://api.github.com

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=nkhpas091@gmail.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/namankh
NEXT_PUBLIC_GITHUB_URL=https://github.com/6829nkhpas
NEXT_PUBLIC_RESUME_URL=https://drive.google.com/file/d/1-92hqDWKWzNB6Pg0PcqeIclKzDsRRMan/view
```

### Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Configuration**
   - Update `NEXT_PUBLIC_SITE_URL` in environment variables
   - Update `public/sitemap.xml` with your domain
   - Update `public/robots.txt` with your domain

## 🔧 Post-Deployment Checklist

### ✅ Essential Checks

- [ ] **Site loads correctly** at your domain
- [ ] **All sections display properly** (Hero, About, Experience, Projects, Contact)
- [ ] **Contact form works** and sends emails
- [ ] **GitHub modal opens** and displays your profile
- [ ] **Navigation works** on all devices
- [ ] **Images load** correctly
- [ ] **Animations work** smoothly

### ✅ SEO Optimization

- [ ] **Submit sitemap** to Google Search Console
- [ ] **Submit sitemap** to Bing Webmaster Tools
- [ ] **Test meta tags** with social media debuggers
- [ ] **Verify structured data** with Google's Rich Results Test
- [ ] **Check Core Web Vitals** in Google PageSpeed Insights

### ✅ Performance Optimization

- [ ] **Lighthouse score** is 90+ across all metrics
- [ ] **Images are optimized** and loading quickly
- [ ] **Fonts are loading** efficiently
- [ ] **Caching is working** properly
- [ ] **Mobile performance** is excellent

### ✅ Security & Monitoring

- [ ] **HTTPS is enabled** (automatic with Vercel)
- [ ] **Security headers** are in place
- [ ] **Analytics are set up** (if desired)
- [ ] **Error monitoring** is configured (optional)

## 🚨 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment Variables Issues

1. **Check variable names** (must start with `NEXT_PUBLIC_`)
2. **Verify values** are correct
3. **Redeploy** after changes

### Domain Issues

1. **Check DNS settings** are correct
2. **Wait for propagation** (can take up to 48 hours)
3. **Verify SSL certificate** is active

### Performance Issues

1. **Optimize images** using Next.js Image component
2. **Enable compression** in Vercel settings
3. **Use CDN** for static assets

## 📊 Monitoring

### Vercel Analytics

- **Real-time performance** monitoring
- **Error tracking** and reporting
- **Usage statistics** and insights

### Google Analytics

1. **Create GA4 property**
2. **Add tracking code** to your site
3. **Set up goals** and conversions

### Search Console

1. **Verify ownership** of your domain
2. **Submit sitemap** for indexing
3. **Monitor search performance**

## 🔄 Continuous Deployment

### Automatic Deployments

- **GitHub integration** enables automatic deployments
- **Preview deployments** for pull requests
- **Branch deployments** for testing

### Manual Deployments

```bash
# Deploy latest changes
vercel --prod

# Deploy specific branch
vercel --prod --branch=feature-branch
```

## 📞 Support

### Vercel Support
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### Project Support
- **Email**: nkhpas091@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/6829nkhpas/PortFolio-main/issues)

---

**Happy Deploying! 🚀**

Your portfolio will be live at: `https://your-project.vercel.app` 