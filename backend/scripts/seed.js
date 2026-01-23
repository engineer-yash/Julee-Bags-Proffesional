const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/Admin');
const Category = require('../models/Category');
const Product = require('../models/Product');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Categories data
const categories = [
  { name: 'School Bags', description: 'Durable and comfortable school bags for students' },
  { name: 'College Bags', description: 'Stylish and spacious bags for college students' },
  { name: 'Laptop Bags', description: 'Protected laptop bags for professionals' },
  { name: 'Hand Bags', description: 'Elegant handbags for daily use' },
  { name: 'Tote Bags', description: 'Versatile tote bags for shopping and travel' },
  { name: 'Travel Bags', description: 'Spacious travel bags for your journeys' },
  { name: 'Adventure Bags', description: 'Rugged bags for outdoor adventures' },
];

// Products data from images.js
const productsData = [
  // School Bags
  { name: 'School Bag 1', categoryName: 'School Bags', images: ['https://www.juleebags.com/uploads/21.jpg'], price: 500 },
  { name: 'School Bag 2', categoryName: 'School Bags', images: ['https://www.juleebags.com/uploads/22.jpg'], price: 550 },
  { name: 'School Bag 3', categoryName: 'School Bags', images: ['https://www.juleebags.com/uploads/23.jpg'], price: 600 },
  { name: 'School Bag 4', categoryName: 'School Bags', images: ['https://www.juleebags.com/uploads/24.jpg'], price: 525 },
  { name: 'School Bag 5', categoryName: 'School Bags', images: ['https://www.juleebags.com/uploads/26.jpg'], price: 575 },
  { name: 'School Bag 6', categoryName: 'School Bags', images: ['https://www.juleebags.com/uploads/27.jpg'], price: 650 },
  { name: 'School Bag 7', categoryName: 'School Bags', images: ['https://www.juleebags.com/uploads/28.jpg'], price: 500 },
  { name: 'School Bag 8', categoryName: 'School Bags', images: ['https://www.juleebags.com/uploads/29.jpg'], price: 625 },

  // College Bags
  { name: 'College Bag 1', categoryName: 'College Bags', images: ['https://www.juleebags.com/uploads/30.jpg'], price: 750 },
  { name: 'College Bag 2', categoryName: 'College Bags', images: ['https://www.juleebags.com/uploads/31.jpg'], price: 800 },
  { name: 'College Bag 3', categoryName: 'College Bags', images: ['https://www.juleebags.com/uploads/32.jpg'], price: 850 },
  { name: 'College Bag 4', categoryName: 'College Bags', images: ['https://www.juleebags.com/uploads/49.jpg'], price: 775 },
  { name: 'College Bag 5', categoryName: 'College Bags', images: ['https://www.juleebags.com/uploads/50.jpg'], price: 825 },
  { name: 'College Bag 6', categoryName: 'College Bags', images: ['https://www.juleebags.com/uploads/51.jpg'], price: 900 },
  { name: 'College Bag 7', categoryName: 'College Bags', images: ['https://www.juleebags.com/uploads/52.jpg'], price: 750 },
  { name: 'College Bag 8', categoryName: 'College Bags', images: ['https://www.juleebags.com/uploads/53.jpg'], price: 875 },

  // Laptop Bags
  { name: 'Laptop Bag 1', categoryName: 'Laptop Bags', images: ['https://www.juleebags.com/uploads/54.jpg'], price: 1200 },
  { name: 'Laptop Bag 2', categoryName: 'Laptop Bags', images: ['https://www.juleebags.com/uploads/55.jpg'], price: 1250 },
  { name: 'Laptop Bag 3', categoryName: 'Laptop Bags', images: ['https://www.juleebags.com/uploads/56.jpg'], price: 1300 },
  { name: 'Laptop Bag 4', categoryName: 'Laptop Bags', images: ['https://www.juleebags.com/uploads/58.jpg'], price: 1150 },
  { name: 'Laptop Bag 5', categoryName: 'Laptop Bags', images: ['https://www.juleebags.com/uploads/59.jpg'], price: 1350 },
  { name: 'Laptop Bag 6', categoryName: 'Laptop Bags', images: ['https://www.juleebags.com/uploads/60.jpg'], price: 1400 },
  { name: 'Laptop Bag 7', categoryName: 'Laptop Bags', images: ['https://www.juleebags.com/uploads/61.jpg'], price: 1200 },
  { name: 'Laptop Bag 8', categoryName: 'Laptop Bags', images: ['https://www.juleebags.com/uploads/62.jpg'], price: 1275 },

  // Hand Bags
  { name: 'Hand Bag 1', categoryName: 'Hand Bags', images: ['https://www.juleebags.com/uploads/h1.jpg'], price: 900 },
  { name: 'Hand Bag 2', categoryName: 'Hand Bags', images: ['https://www.juleebags.com/uploads/h2.jpg'], price: 950 },
  { name: 'Hand Bag 3', categoryName: 'Hand Bags', images: ['https://www.juleebags.com/uploads/h3.jpg'], price: 1000 },
  { name: 'Hand Bag 4', categoryName: 'Hand Bags', images: ['https://www.juleebags.com/uploads/h4.jpg'], price: 875 },
  { name: 'Hand Bag 5', categoryName: 'Hand Bags', images: ['https://www.juleebags.com/uploads/h5.jpg'], price: 925 },
  { name: 'Hand Bag 6', categoryName: 'Hand Bags', images: ['https://www.juleebags.com/uploads/h6.jpg'], price: 1050 },
  { name: 'Hand Bag 7', categoryName: 'Hand Bags', images: ['https://www.juleebags.com/uploads/h7.jpg'], price: 900 },
  { name: 'Hand Bag 8', categoryName: 'Hand Bags', images: ['https://www.juleebags.com/uploads/h8.jpg'], price: 975 },

  // Tote Bags
  { name: 'Tote Bag 1', categoryName: 'Tote Bags', images: ['https://www.juleebags.com/uploads/63.jpg'], price: 600 },
  { name: 'Tote Bag 2', categoryName: 'Tote Bags', images: ['https://www.juleebags.com/uploads/64.jpg'], price: 650 },
  { name: 'Tote Bag 3', categoryName: 'Tote Bags', images: ['https://www.juleebags.com/uploads/65.jpg'], price: 700 },
  { name: 'Tote Bag 4', categoryName: 'Tote Bags', images: ['https://www.juleebags.com/uploads/66.jpg'], price: 575 },
  { name: 'Tote Bag 5', categoryName: 'Tote Bags', images: ['https://www.juleebags.com/uploads/67.jpg'], price: 625 },
  { name: 'Tote Bag 6', categoryName: 'Tote Bags', images: ['https://www.juleebags.com/uploads/68.jpg'], price: 750 },
  { name: 'Tote Bag 7', categoryName: 'Tote Bags', images: ['https://www.juleebags.com/uploads/69.jpg'], price: 600 },
  { name: 'Tote Bag 8', categoryName: 'Tote Bags', images: ['https://www.juleebags.com/uploads/70.jpg'], price: 675 },

  // Travel Bags
  { name: 'Travel Bag 1', categoryName: 'Travel Bags', images: ['https://www.juleebags.com/uploads/95.jpg'], price: 1500 },
  { name: 'Travel Bag 2', categoryName: 'Travel Bags', images: ['https://www.juleebags.com/uploads/96.jpg'], price: 1600 },
  { name: 'Travel Bag 3', categoryName: 'Travel Bags', images: ['https://www.juleebags.com/uploads/97.jpg'], price: 1700 },
  { name: 'Travel Bag 4', categoryName: 'Travel Bags', images: ['https://www.juleebags.com/uploads/98.jpg'], price: 1450 },
  { name: 'Travel Bag 5', categoryName: 'Travel Bags', images: ['https://www.juleebags.com/uploads/99.jpg'], price: 1650 },
  { name: 'Travel Bag 6', categoryName: 'Travel Bags', images: ['https://www.juleebags.com/uploads/108.jpg'], price: 1800 },
  { name: 'Travel Bag 7', categoryName: 'Travel Bags', images: ['https://www.juleebags.com/uploads/109.jpg'], price: 1500 },
  { name: 'Travel Bag 8', categoryName: 'Travel Bags', images: ['https://www.juleebags.com/uploads/111.jpg'], price: 1750 },

  // Adventure Bags
  { name: 'Adventure Bag 1', categoryName: 'Adventure Bags', images: ['https://www.juleebags.com/uploads/115.jpg'], price: 1300 },
  { name: 'Adventure Bag 2', categoryName: 'Adventure Bags', images: ['https://www.juleebags.com/uploads/117.jpg'], price: 1400 },
  { name: 'Adventure Bag 3', categoryName: 'Adventure Bags', images: ['https://www.juleebags.com/uploads/118.jpg'], price: 1500 },
  { name: 'Adventure Bag 4', categoryName: 'Adventure Bags', images: ['https://www.juleebags.com/uploads/119.jpg'], price: 1250 },
  { name: 'Adventure Bag 5', categoryName: 'Adventure Bags', images: ['https://www.juleebags.com/uploads/120.jpg'], price: 1350 },
  { name: 'Adventure Bag 6', categoryName: 'Adventure Bags', images: ['https://www.juleebags.com/uploads/121.jpg'], price: 1600 },
  { name: 'Adventure Bag 7', categoryName: 'Adventure Bags', images: ['https://www.juleebags.com/uploads/122.jpg'], price: 1300 },
  { name: 'Adventure Bag 8', categoryName: 'Adventure Bags', images: ['https://www.juleebags.com/uploads/123.jpg'], price: 1450 },
];

// Seed function
const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Admin.deleteMany();
    await Category.deleteMany();
    await Product.deleteMany();
    console.log('✅ Existing data cleared');

    // Create admin user
    console.log('👤 Creating admin user...');
    const admin = await Admin.create({
      email: process.env.ADMIN_EMAIL || 'admin@juleebags.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
    });
    console.log(`✅ Admin user created: ${admin.email}`);

    // Create categories
    console.log('📂 Creating categories...');
    const createdCategories = await Category.insertMany(categories);
    console.log(`✅ ${createdCategories.length} categories created`);

    // Create category mapping for products
    const categoryMap = {};
    createdCategories.forEach((cat) => {
      categoryMap[cat.name] = cat._id;
    });

    // Create products with proper category references
    console.log('🎒 Creating products...');
    const productsToCreate = productsData.map((product) => ({
      name: product.name,
      description: `Quality ${product.categoryName.toLowerCase()} with durable materials and modern design`,
      price: product.price,
      category: categoryMap[product.categoryName],
      images: product.images,
      status: 'active',
    }));

    const createdProducts = await Product.insertMany(productsToCreate);
    console.log(`✅ ${createdProducts.length} products created`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - Admin: ${admin.email}`);
    console.log(`   - Password: ${process.env.ADMIN_PASSWORD || 'Admin@123'}`);
    console.log(`   - Categories: ${createdCategories.length}`);
    console.log(`   - Products: ${createdProducts.length}`);
    console.log('\n💡 You can now start the server and login to the admin panel!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run seed
seedDatabase();
