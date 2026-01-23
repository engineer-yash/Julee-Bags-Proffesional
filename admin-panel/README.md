# Julee Bags Admin Panel

Admin management panel for Julee Bags e-commerce system. Built with React, providing a comprehensive interface to manage products, categories, and customer inquiries.

## 🎯 Features

- **Dashboard**: Overview with statistics (total products, categories, contact messages)
- **Product Management**: Full CRUD operations for products
- **Category Management**: Create, edit, and delete product categories
- **Contact Messages**: View and manage customer inquiries
- **Authentication**: Secure login with JWT tokens
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🔐 Default Login Credentials

- **Email**: admin@juleebags.com
- **Password**: Admin@123

⚠️ **Important**: Change these credentials after first login in production!

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- Backend API running (see backend/README.md)
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

The admin panel will open at `http://localhost:3001` (or next available port).

## ⚙️ Environment Variables

Create a `.env` file in the admin-panel directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

For production deployment, update this to your deployed backend URL:
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

## 📱 Pages & Functionality

### Login Page
- Secure authentication using JWT
- Email and password validation
- Error handling for invalid credentials
- Auto-redirect to dashboard on success

### Dashboard
- Total products count
- Total categories count
- Total contact messages count
- System status
- Quick action links

### Products Management
- View all products in a table
- Add new products with:
  - Name, description, price
  - Category selection
  - Multiple image URLs
  - Status (active/inactive)
- Edit existing products
- Delete products
- Search and filter capabilities

### Categories Management
- View all categories in grid layout
- Create new categories with name and description
- Auto-generated slugs from category names
- Edit category details
- Delete categories (with product validation)
- Displays category metadata (created date, slug)

### Contact Messages
- View all customer inquiries
- Display name, email, phone, subject, message
- Timestamp for each message
- Delete messages after review
- Email and phone links for quick contact

## 🎨 Tech Stack

- **React** 18.2.0 - UI library
- **React Router** 6.22.0 - Navigation
- **Axios** 1.6.2 - HTTP client
- **React Icons** 5.0.0 - Icon library
- **Tailwind CSS** 3.4.1 - Styling
- **Context API** - State management

## 📂 Project Structure

```
admin-panel/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Layout.js         # Main layout with sidebar
│   │   └── PrivateRoute.js   # Protected route wrapper
│   ├── context/
│   │   └── AuthContext.js    # Authentication state
│   ├── pages/
│   │   ├── Login.js          # Login page
│   │   ├── Dashboard.js      # Dashboard overview
│   │   ├── Products.js       # Product management
│   │   ├── Categories.js     # Category management
│   │   └── Contacts.js       # Contact messages
│   ├── services/
│   │   └── api.js            # API client & endpoints
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── .env.example              # Environment template
├── .gitignore
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🔒 Authentication Flow

1. User enters email and password on login page
2. Credentials sent to backend `/api/auth/login`
3. Backend validates and returns JWT token
4. Token stored in localStorage
5. Token included in all subsequent API requests
6. Protected routes check authentication before rendering
7. Logout clears token from localStorage

## 🛠️ Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App
npm run eject
```

## 📦 Building for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain:
# - Minified JavaScript
# - Optimized CSS
# - Compressed assets
# - Service worker (if configured)
```

## 🚀 Deployment (Vercel)

### Step 1: Prepare for Deployment

```bash
# Update .env with production backend URL
echo "REACT_APP_API_URL=https://your-backend-url.onrender.com/api" > .env
```

### Step 2: Deploy to Vercel

**Option A: Using Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**Option B: Using Vercel Dashboard**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your repository
5. Configure:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Add Environment Variable:
   - Key: `REACT_APP_API_URL`
   - Value: Your backend URL + /api
7. Click "Deploy"

### Step 3: Configure Domain (Optional)

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., admin.juleebags.com)
3. Update DNS records as instructed

## 🐛 Troubleshooting

### API Connection Issues
```javascript
// Check if REACT_APP_API_URL is set correctly
console.log(process.env.REACT_APP_API_URL);

// Ensure backend CORS allows your admin panel domain
// In backend server.js, update cors configuration
```

### Build Errors
```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Clear Create React App cache
rm -rf node_modules/.cache
```

### Login Issues
- Verify backend is running and accessible
- Check network tab in browser dev tools for API errors
- Ensure JWT_SECRET matches between backend and requests
- Try clearing localStorage: `localStorage.clear()`

## 🔐 Security Best Practices

1. **Change Default Password**: Update admin credentials after first login
2. **HTTPS Only**: Always use HTTPS in production
3. **Token Expiration**: JWT tokens expire after 7 days (configurable in backend)
4. **API URL**: Never expose API keys in frontend code
5. **Input Validation**: All inputs are validated on both client and server

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Future Enhancements

Potential features for future versions:
- [ ] Bulk product upload via CSV
- [ ] Product image upload (currently URL-based)
- [ ] Sales analytics and reports
- [ ] Order management
- [ ] Customer management
- [ ] Email notifications for new contacts
- [ ] Multi-admin support with roles
- [ ] Dark mode theme

## 📄 License

ISC

## 📞 Support

For technical support:
- Email: sales@juleebags.com
- Phone: +91 7498821933

---

**Note**: This admin panel requires the backend API to be running. See `backend/README.md` for backend setup instructions.
