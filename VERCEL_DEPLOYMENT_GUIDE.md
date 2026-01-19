# Vercel Deployment Guide for Julee Bags Modern Website

## Quick Deploy Guide

### Prerequisites
- Node.js 14+ installed
- Vercel account (free tier works fine)

## Method 1: Vercel CLI (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Navigate to Project
```bash
cd julee-bags-modern
```

### Step 3: Login to Vercel
```bash
vercel login
```
You'll be redirected to your browser to confirm the login.

### Step 4: Deploy
```bash
vercel
```

Follow these prompts:
- **Set up and deploy?** → Yes (Y)
- **Which scope?** → Select your account
- **Link to existing project?** → No (N)
- **What's your project's name?** → `julee-bags` (or your preferred name)
- **In which directory is your code located?** → `./`
- **Want to modify these settings?** → No (N)

The CLI will automatically detect the configuration from `vercel.json`.

### Step 5: Production Deployment
After testing the preview deployment, run:
```bash
vercel --prod
```

Your site will be live at: `https://your-project-name.vercel.app`

## Method 2: Vercel Dashboard (No CLI Required)

### Step 1: Prepare the Project
1. Extract the zip file to a folder
2. Open terminal in that folder
3. Navigate to frontend and build:
   ```bash
   cd frontend
   yarn install
   yarn build
   ```

### Step 2: Deploy via Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Click "Add New..." → "Project"
4. Choose import method:
   - **Option A**: Upload the zip file directly
   - **Option B**: Connect your GitHub/GitLab account and import

### Step 3: Configure Build Settings
When prompted, use these settings:

**Project Settings:**
- **Framework Preset**: Other (or Create React App)
- **Root Directory**: `./`
- **Build Command**: 
  ```bash
  cd frontend && yarn install && yarn build
  ```
- **Output Directory**: `frontend/build`
- **Install Command**: 
  ```bash
  cd frontend && yarn install
  ```

**Environment Variables:** (None required for this project)

### Step 4: Deploy
Click "Deploy" and wait for the build to complete (usually 2-3 minutes).

Your site will be live at: `https://your-project-name.vercel.app`

## Method 3: GitHub + Vercel Integration

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Modern Julee Bags website"
   git branch -M main
   git remote add origin https://github.com/yourusername/julee-bags.git
   git push -u origin main
   ```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Select your GitHub repository
5. Configure build settings (same as Method 2)
6. Click "Deploy"

**Benefit:** Every push to `main` branch will automatically deploy!

## Verification & Testing

### After Deployment
1. Visit your deployed URL
2. Test all pages:
   - Home page with slider
   - All Bags gallery with filters
   - Wild Adventure page
   - About Julee page
   - Contact form
3. Check responsiveness on mobile
4. Verify all animations work

### Common Issues & Solutions

**Issue: Build fails with "Command not found: yarn"**
- Solution: Vercel uses yarn by default. This shouldn't happen, but if it does, change to `npm`:
  ```
  Build Command: cd frontend && npm install && npm run build
  Install Command: cd frontend && npm install
  ```

**Issue: 404 errors on page refresh**
- Solution: Already handled by `vercel.json` configuration. Vercel will route all requests to `index.html`.

**Issue: Images not loading**
- Solution: All images are from external URLs (juleebags.com), ensure they're accessible.

**Issue: Blank page after deployment**
- Solution: Check browser console for errors. Ensure all dependencies are in `package.json`.

## Custom Domain Setup

### Add Your Own Domain
1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Click "Add"
4. Enter your domain name
5. Follow DNS configuration instructions
6. Wait for DNS propagation (usually 24-48 hours)

### SSL Certificate
- Vercel automatically provides free SSL certificates
- HTTPS is enabled by default

## Performance Optimization

The site is already optimized with:
- ✅ Code splitting
- ✅ Lazy loading images
- ✅ Minified CSS/JS
- ✅ Gzip compression
- ✅ CDN distribution
- ✅ Cache headers

## Monitoring & Analytics

### Add Analytics (Optional)
1. Go to project settings in Vercel
2. Click "Analytics"
3. Enable Vercel Analytics (free tier available)

## Support & Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions

## Quick Reference Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (preview)
vercel

# Deploy (production)
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-name]
```

## Deployment Checklist

Before deploying, ensure:
- [ ] All pages load correctly locally
- [ ] All images are loading
- [ ] Forms work properly
- [ ] Mobile responsive design works
- [ ] Navigation functions on all pages
- [ ] No console errors in browser
- [ ] All animations are smooth
- [ ] Contact information is correct

## Post-Deployment

After successful deployment:
1. ✅ Test all pages on live URL
2. ✅ Share the URL: `https://your-project.vercel.app`
3. ✅ Set up custom domain (optional)
4. ✅ Enable analytics (optional)
5. ✅ Share with team/clients

---

**Estimated Deployment Time**: 5-10 minutes
**Cost**: Free (Vercel free tier)
**Support**: Available 24/7 through Vercel

Good luck with your deployment! 🚀
