# Julee Bags - Full Stack Application

A complete full-stack e-commerce management system for Julee Bags, featuring a customer-facing website, admin panel, and RESTful API backend.

## 🚀 Project Overview

This is a production-ready full-stack application with:

- **Frontend** (React): Customer-facing website showcasing products
- **Admin Panel** (React): Complete management system for products, categories, and contact messages
- **Backend** (Node.js + Express): RESTful API with MongoDB database
- **Database**: MongoDB Atlas (cloud database)

## 📁 Project Structure

```
fullstack-project/
├── frontend/              # Customer-facing React website
│   ├── src/
│   ├── public/
│   └── package.json
├── admin-panel/           # Admin management panel (React)
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/               # Node.js + Express API server
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── scripts/
│   └── server.js
└── README.md             # This file
```

## 🛠️ Tech Stack

### Frontend & Admin Panel
- React 18
- React Router v6
- Axios (API calls)
- Tailwind CSS
- Framer Motion (animations)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT Authentication
- bcrypt.js (password hashing)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **MongoDB Atlas Account** (free) - [Sign up](https://www.mongodb.com/cloud/atlas)
- **Git** (for version control)

## 🏁 Local Setup Instructions

### Step 1: MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account
2. Create a new cluster (M0 Free tier)
3. Click "Database Access" → "Add New Database User"
   - Create a username and strong password
   - Save these credentials
4. Click "Network Access" → "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0) for development
   - For production, whitelist specific IPs
5. Click "Database" → "Connect" → "Connect your application"
6. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
7. Replace `<username>` and `<password>` with your database user credentials

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
# or
yarn install

# Create .env file
cp .env.example .env

# Edit .env file with your credentials
# Required variables:
# - MONGO_URI: Your MongoDB Atlas connection string
# - JWT_SECRET: Generate a random string (use: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
# - ADMIN_EMAIL: admin@juleebags.com
# - ADMIN_PASSWORD: Admin@123
```

**Example .env file:**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/juleebags?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_random_string_here_make_it_long_and_complex
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@juleebags.com
ADMIN_PASSWORD=Admin@123
```

```bash
# Seed the database with initial data (categories, products, admin user)
npm run seed
# or
yarn seed

# Start the backend server
npm run dev
# or
yarn dev
```

Backend will run on `http://localhost:5000`

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install

# Create .env file
cp .env.example .env

# Edit .env file
# REACT_APP_API_URL=http://localhost:5000/api
```

```bash
# Start the frontend
npm start
# or
yarn start
```

Frontend will run on `http://localhost:3000`

### Step 4: Admin Panel Setup

```bash
# Navigate to admin-panel directory
cd admin-panel

# Install dependencies
npm install
# or
yarn install

# Create .env file
cp .env.example .env

# Edit .env file
# REACT_APP_API_URL=http://localhost:5000/api
```

```bash
# Start the admin panel
npm start
# or
yarn start
```

Admin panel will run on `http://localhost:3001` (or next available port)

### Step 5: Login to Admin Panel

1. Open `http://localhost:3001` in your browser
2. Use default credentials:
   - **Email**: admin@juleebags.com
   - **Password**: Admin@123

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current admin (protected)

### Categories (Public read, Admin write)
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (protected)
- `PUT /api/categories/:id` - Update category (protected)
- `DELETE /api/categories/:id` - Delete category (protected)

### Products (Public read, Admin write)
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:slug` - Get products by category
- `POST /api/products` - Create product (protected)
- `PUT /api/products/:id` - Update product (protected)
- `DELETE /api/products/:id` - Delete product (protected)

### Contact Messages
- `POST /api/contact` - Submit contact form (public)
- `GET /api/admin/contacts` - Get all messages (protected)
- `DELETE /api/admin/contacts/:id` - Delete message (protected)

## 🚢 Deployment

### Backend Deployment (Render)

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your backend code:
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to [Render](https://render.com/) and sign up
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: julee-bags-backend
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free
   - Add Environment Variables:
     - `PORT`: 5000
     - `NODE_ENV`: production
     - `MONGO_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: Your secret key
     - `JWT_EXPIRE`: 7d
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Copy your service URL (e.g., `https://julee-bags-backend.onrender.com`)

3. **Run seed script on Render (optional)**
   - Go to "Shell" tab in Render dashboard
   - Run: `npm run seed`

### Frontend Deployment (Vercel)

1. **Update API URL**
   - Edit `frontend/.env`:
   ```env
   REACT_APP_API_URL=https://your-backend-url.onrender.com/api
   ```

2. **Push to GitHub**
   ```bash
   cd frontend
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com/) and sign up
   - Click "Add New" → "Project"
   - Import your frontend GitHub repository
   - Configure:
     - **Framework Preset**: Create React App
     - **Build Command**: `npm run build`
     - **Output Directory**: `build`
   - Add Environment Variable:
     - `REACT_APP_API_URL`: Your backend URL + /api
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)

### Admin Panel Deployment (Vercel)

Same steps as frontend, but for admin-panel directory.

## 📊 Database Schema

### Admin
```javascript
{
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Category
```javascript
{
  name: String (unique),
  slug: String (auto-generated),
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Product
```javascript
{
  name: String,
  description: String,
  price: Number,
  category: ObjectId (ref: Category),
  images: [String],
  status: String (active/inactive),
  createdAt: Date,
  updatedAt: Date
}
```

### Contact
```javascript
{
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: Date
}
```

## 🔒 Security Features

- JWT-based authentication for admin
- Password hashing with bcrypt
- Protected API routes
- CORS enabled
- Input validation
- Error handling middleware

## 📝 Default Seeded Data

After running `npm run seed`, you'll have:

- **1 Admin User**: admin@juleebags.com (password: Admin@123)
- **7 Categories**: School Bags, College Bags, Laptop Bags, Hand Bags, Tote Bags, Travel Bags, Adventure Bags
- **56 Products**: 8 products in each category with images and pricing

## 🛠️ Development Commands

### Backend
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start production server
npm run seed     # Seed database
```

### Frontend / Admin Panel
```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify your connection string is correct
- Check that your IP is whitelisted in MongoDB Atlas
- Ensure database user credentials are correct

### CORS Errors
- Verify `REACT_APP_API_URL` in frontend/.env
- Check backend CORS configuration in server.js

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

## 📄 License

ISC

## 👨‍💻 Support

For issues or questions:
- Email: sales@juleebags.com
- Phone: +91 7498821933

## 🎉 Features Implemented

✅ Customer-facing website with product galleries
✅ Complete admin panel with authentication
✅ Product management (CRUD)
✅ Category management (CRUD)
✅ Contact form with backend integration
✅ Dashboard with statistics
✅ Responsive design (mobile-friendly)
✅ MongoDB Atlas integration
✅ JWT authentication
✅ RESTful API architecture
✅ Production-ready deployment setup
✅ Comprehensive documentation

---

**Built with ❤️ for Julee Bags**
