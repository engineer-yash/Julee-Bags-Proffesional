# Julee Bags Backend API

Backend server for Julee Bags full-stack application built with Node.js, Express, and MongoDB.

## Features

- RESTful API architecture
- JWT authentication for admin
- MongoDB database with Mongoose ODM
- CRUD operations for Products, Categories, and Contact messages
- Secure password hashing with bcrypt
- Error handling middleware
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

## Installation

1. Install dependencies:
```bash
cd backend
npm install
# or
yarn install
```

2. Create `.env` file in the backend directory:
```bash
cp .env.example .env
```

3. Update `.env` with your credentials:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_random_secret_key_here
JWT_EXPIRE=7d
ADMIN_EMAIL=admin@juleebags.com
ADMIN_PASSWORD=Admin@123
```

## Database Setup

### MongoDB Atlas Setup:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user (Database Access)
4. Whitelist your IP address (Network Access) or use `0.0.0.0/0` for all IPs
5. Get your connection string from "Connect" > "Connect your application"
6. Replace `<password>` in connection string with your database user password

### Seed Database:

Run this command to populate the database with categories, products, and admin user:

```bash
npm run seed
# or
yarn seed
```

This will create:
- 7 categories
- 56 products
- 1 admin user (admin@juleebags.com)

## Running the Server

### Development mode (with nodemon):
```bash
npm run dev
# or
yarn dev
```

### Production mode:
```bash
npm start
# or
yarn start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication

```
POST   /api/auth/login       - Admin login (public)
GET    /api/auth/me          - Get admin profile (protected)
```

### Categories

```
GET    /api/categories       - Get all categories (public)
GET    /api/categories/:id   - Get single category (public)
POST   /api/categories       - Create category (protected)
PUT    /api/categories/:id   - Update category (protected)
DELETE /api/categories/:id   - Delete category (protected)
```

### Products

```
GET    /api/products                - Get all products (public)
GET    /api/products/:id            - Get single product (public)
GET    /api/products/category/:slug - Get products by category (public)
POST   /api/products                - Create product (protected)
PUT    /api/products/:id            - Update product (protected)
DELETE /api/products/:id            - Delete product (protected)
```

### Contact Messages

```
POST   /api/contact              - Submit contact form (public)
GET    /api/admin/contacts       - Get all contact messages (protected)
DELETE /api/admin/contacts/:id   - Delete contact message (protected)
```

### Health Check

```
GET    /api/health              - Server health check (public)
```

## Authentication

Protected routes require JWT token in Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

Get token by logging in at `/api/auth/login`

## Project Structure

```
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── categoryController.js # Category CRUD
│   ├── contactController.js  # Contact form logic
│   └── productController.js  # Product CRUD
├── middleware/
│   ├── auth.js              # JWT verification
│   └── errorHandler.js      # Error handling
├── models/
│   ├── Admin.js             # Admin schema
│   ├── Category.js          # Category schema
│   ├── Contact.js           # Contact schema
│   └── Product.js           # Product schema
├── routes/
│   ├── authRoutes.js        # Auth endpoints
│   ├── categoryRoutes.js    # Category endpoints
│   ├── contactRoutes.js     # Contact endpoints
│   └── productRoutes.js     # Product endpoints
├── scripts/
│   └── seed.js              # Database seeding script
├── .env.example             # Environment variables template
├── .gitignore
├── package.json
└── server.js                # Main server file
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Server port number | Yes |
| MONGO_URI | MongoDB Atlas connection string | Yes |
| JWT_SECRET | Secret key for JWT signing | Yes |
| JWT_EXPIRE | JWT expiration time | Yes |
| ADMIN_EMAIL | Admin email for seeding | No |
| ADMIN_PASSWORD | Admin password for seeding | No |

## Deployment

See the main README.md file in the project root for deployment instructions to Render.

## License

ISC
