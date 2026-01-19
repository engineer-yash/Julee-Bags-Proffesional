# Julee Bags - Modern Website

## 🎨 Modernization Features

### Design Improvements
- ✨ Modern olive-green color scheme matching the Julee Bags logo
- 🎭 Smooth animations using Framer Motion
- 🖱️ Enhanced hover effects with scale transforms and shadows
- 🌈 Beautiful gradient backgrounds and glassmorphism effects
- 📱 Fully responsive design for all devices
- 🎯 Auto-scroll to top on page navigation

### Technical Features
- ⚛️ Built with React 18
- 🎨 Styled with Tailwind CSS
- ✨ Animated with Framer Motion
- 🎪 Interactive carousels with Swiper
- 🖼️ Image modal with zoom functionality
- 🎨 Custom animations and transitions

## 🚀 Deployment Instructions

### Deploy to Vercel

#### Method 1: Using Vercel CLI (Recommended)
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the project directory:
   ```bash
   cd julee-bags-modern
   ```

3. Login to Vercel:
   ```bash
   vercel login
   ```

4. Deploy:
   ```bash
   vercel
   ```

5. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? `julee-bags-modern`
   - In which directory is your code located? `./`
   - Want to override the settings? **N**

6. For production deployment:
   ```bash
   vercel --prod
   ```

#### Method 2: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up or login
3. Click "Add New" → "Project"
4. Import this project by:
   - Upload the zip file, or
   - Connect your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Create React App
   - **Root Directory**: `./`
   - **Build Command**: `cd frontend && yarn install && yarn build`
   - **Output Directory**: `frontend/build`
   - **Install Command**: `cd frontend && yarn install`
6. Click "Deploy"

### Deploy to Other Platforms

#### Netlify
1. Drag and drop the `frontend/build` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or use Netlify CLI:
   ```bash
   cd frontend
   yarn build
   netlify deploy --prod --dir=build
   ```

#### GitHub Pages
1. Build the project:
   ```bash
   cd frontend
   yarn build
   ```
2. Follow GitHub Pages deployment guide for React apps

## 📦 Package Contents

```
julee-bags-modern/
├── frontend/                 # React application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── HeroSlider.js
│   │   │   ├── ImageModal.js
│   │   │   └── ScrollToTop.js
│   │   ├── pages/           # Page components
│   │   │   ├── Home.js
│   │   │   ├── AllBags.js
│   │   │   ├── WildAdventure.js
│   │   │   ├── AboutJulee.js
│   │   │   └── Contact.js
│   │   ├── data/
│   │   │   └── images.js    # Image data
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── vercel.json              # Vercel configuration
├── README.md                # This file
└── DEPLOYMENT.md            # Deployment guide
```

## 🎨 Color Scheme

The website uses a modern olive-green color palette matching the Julee Bags logo:

- **Primary**: #8a9b28 (Olive Green)
- **Primary Dark**: #6d7a1f
- **Primary Light**: #a4b845
- **Secondary**: #2c3e50 (Dark Blue-Gray)
- **Accent**: #dc3832 (Red)

## 🌟 Key Features

1. **Animated Hero Slider**: Eye-catching carousel with fade effects
2. **Interactive Product Gallery**: Filterable bags with hover animations
3. **Modern Contact Form**: Smooth form with validation
4. **Google Maps Integration**: Interactive location map
5. **Responsive Navigation**: Mobile-friendly menu with animations
6. **Scroll to Top**: Automatic scroll on page navigation
7. **Image Zoom Modal**: Click to enlarge product images

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   cd frontend
   yarn install
   ```

2. Start development server:
   ```bash
   yarn start
   ```

3. Build for production:
   ```bash
   yarn build
   ```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2025 Julee Bags. All Rights Reserved.

## 📞 Support

For any questions or issues:
- **Email**: sales@juleebags.com
- **Phone**: +91 7498821933
- **Address**: 531B, Ganesh Peth, Pune-411002, Maharashtra, India
