# Julee Bags Frontend

Customer-facing React website for Julee Bags - a bag manufacturing company with 25+ years of experience.

## 🎯 Features

- **Home Page**: Hero slider, company introduction, product preview, features
- **All Bags Gallery**: Filterable product gallery by category with lazy loading
- **Wild Adventure Section**: Showcase of adventure bag collection
- **About Page**: Company history and information
- **Contact Page**: Contact form with backend integration, location map, business hours
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Beautiful gradients and transitions with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- Backend API running (optional for static viewing, required for contact form)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Create .env file
cp .env.example .env

# Update .env with your backend API URL
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env

# Start development server
npm start
# or
yarn start
```

The frontend will open at `http://localhost:3000`.

## ⚙️ Environment Variables

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

For production deployment:
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

## 🎨 Tech Stack

- **React** 18.2.0 - UI library
- **React Router** 6.22.0 - Client-side routing
- **Axios** 1.6.2 - HTTP client for API calls
- **Framer Motion** 12.26.2 - Animation library
- **Tailwind CSS** 3.4.1 - Utility-first CSS framework
- **React Icons** 5.5.0 - Icon library
- **Swiper** 11.0.0 - Touch slider
- **React Medium Image Zoom** 5.1.10 - Image zoom functionality

## 📂 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js         # Navigation header
│   │   ├── Footer.js         # Site footer
│   │   ├── HeroSlider.js     # Homepage hero carousel
│   │   ├── ImageModal.js     # Image lightbox
│   │   └── ScrollToTop.js    # Scroll restoration
│   ├── pages/
│   │   ├── Home.js           # Homepage
│   │   ├── AllBags.js        # Product gallery with filters
│   │   ├── WildAdventure.js  # Adventure bags showcase
│   │   ├── AboutJulee.js     # About company
│   │   └── Contact.js        # Contact form & info
│   ├── data/
│   │   └── images.js         # Product images & categories
│   ├── services/
│   │   └── api.js            # API client & endpoints
│   ├── App.js                # Main app component
│   ├── App.css               # Component styles
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── .env.example              # Environment template
├── .gitignore
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🔌 API Integration

The frontend integrates with the backend API for:

### Contact Form Submission
- Endpoint: `POST /api/contact`
- Captures: name, email, phone, subject, message
- Success: Shows confirmation message
- Error: Displays error alert

### Future Integration (Ready to implement)
- Product fetching from backend
- Category filtering via API
- Dynamic product galleries

## 📱 Pages Overview

### Home (`/`)
- Hero image slider with company products
- Welcome section with company introduction
- Promotional video
- Product gallery preview (first 12 items)
- Key features section
- Responsive grid layouts

### All Bags (`/all-bags`)
- Complete product gallery
- Category filter buttons
- Lazy loading (load more functionality)
- Click to zoom images
- Responsive masonry grid
- Shows product count per category

### Wild Adventure (`/wild-adventure`)
- Dedicated section for adventure bags
- Image showcase grid
- Zoom functionality
- Responsive layout

### About (`/about`)
- Company history
- Experience highlights
- Values and mission
- Team information

### Contact (`/contact`)
- Interactive contact form (integrated with backend)
- Google Maps location embed
- Contact information (address, phone, email)
- Business hours
- Clickable email and phone links

## 🎨 Styling & Design

### Color Palette
```css
Primary: #2563eb (Blue)
Primary Light: #60a5fa
Primary Dark: #1e40af
Secondary: #10b981 (Green)
```

### Tailwind Configuration
- Custom gradient utilities
- Extended color palette
- Responsive breakpoints
- Custom animations

### Features
- Smooth page transitions
- Hover effects and animations
- Loading states
- Form validation
- Image lazy loading
- Optimized for performance

## 🛠️ Available Scripts

```bash
# Start development server (localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (⚠️ irreversible)
npm run eject
```

## 📦 Building for Production

```bash
# Create optimized production build
npm run build

# Output directory: build/
# Contents:
# - Minified JavaScript
# - Optimized CSS
# - Compressed assets
# - Static HTML
```

The `build` folder can be deployed to any static hosting service.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Method 1: Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**Method 2: Vercel Dashboard**
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Set environment variable:
   - `REACT_APP_API_URL`: Your backend API URL
4. Deploy

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=build
```

Set environment variable in Netlify dashboard:
- `REACT_APP_API_URL`

## 🔒 Security Considerations

- Environment variables for API URLs (not hardcoded)
- Form validation on both client and server
- XSS protection via React's escaping
- HTTPS only in production
- No sensitive data in frontend code

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Focus states for interactive elements
- Responsive font sizes

## 🎯 Performance Optimizations

- Code splitting via React.lazy (ready to implement)
- Image lazy loading
- Optimized bundle size
- Tree shaking
- Minification in production
- Gzip compression

## 🐛 Troubleshooting

### API Connection Issues
```javascript
// Check if API URL is set
console.log(process.env.REACT_APP_API_URL);

// Test API connection
curl http://localhost:5000/api/health
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Create React App cache
rm -rf node_modules/.cache
```

### Contact Form Not Working
1. Verify backend is running
2. Check browser console for errors
3. Verify API URL in `.env`
4. Test API endpoint directly:
   ```bash
   curl -X POST http://localhost:5000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
   ```

## 🔄 Data Structure

### Product Object
```javascript
{
  id: Number,
  url: String,        // Image URL
  tags: [String]      // Category tags
}
```

### Category Object
```javascript
{
  id: String,
  name: String,       // Display name
  tag: String         // Filter tag
}
```

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

### Updating Content
- Product images: `src/data/images.js`
- Categories: `src/data/images.js`
- Company info: `src/pages/Home.js`, `src/pages/About.js`
- Contact details: `src/pages/Contact.js`

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.js`
3. Add navigation link in `src/components/Header.js`

## 📄 License

ISC

## 📞 Support

For technical support:
- Email: sales@juleebags.com
- Phone: +91 7498821933
- Location: Pune, Maharashtra, India

## 🙏 Acknowledgments

- Images courtesy of Julee Bags
- Built with Create React App
- UI components styled with Tailwind CSS
- Animations powered by Framer Motion

---

**Note**: This frontend can work independently for static viewing, but requires the backend API for contact form functionality and future dynamic features.

For backend setup, see `backend/README.md`.
For complete deployment guide, see `DEPLOYMENT_GUIDE.md`.
