const Product = require('../models/Product');
const Category = require('../models/Category');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res, next) => {
  try {
    const { category, status } = req.query;
    
    // Build filter
    const filter = {};
    if (category) {
      filter.category = category;
    }
    if (status) {
      filter.status = status;
    }
    
    const products = await Product.find(filter)
      .populate('category', 'name slug')
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name slug');
    
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }
    
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get products by category slug
// @route   GET /api/products/category/:slug
// @access  Public
const getProductsByCategory = async (req, res, next) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    
    if (!category) {
      res.status(404);
      throw new Error('Category not found');
    }
    
    const products = await Product.find({ 
      category: category._id,
      status: 'active'
    }).populate('category', 'name slug');
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create product
// @route   POST /api/products
// @access  Private (Admin)
const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, category, images, status } = req.body;
    
    // Validation
    if (!name) {
      res.status(400);
      throw new Error('Product name is required');
    }
    
    if (!category) {
      res.status(400);
      throw new Error('Category is required');
    }
    
    // Check if category exists
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      res.status(404);
      throw new Error('Category not found');
    }
    
    const product = await Product.create({
      name,
      description,
      price,
      category,
      images: images || [],
      status: status || 'active',
    });
    
    const populatedProduct = await Product.findById(product._id).populate('category', 'name slug');
    
    res.status(201).json({
      success: true,
      data: populatedProduct,
      message: 'Product created successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private (Admin)
const updateProduct = async (req, res, next) => {
  try {
    const { name, description, price, category, images, status } = req.body;
    
    let product = await Product.findById(req.params.id);
    
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }
    
    // Check if category exists (if updating category)
    if (category && category !== product.category.toString()) {
      const categoryExists = await Category.findById(category);
      if (!categoryExists) {
        res.status(404);
        throw new Error('Category not found');
      }
    }
    
    product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, category, images, status },
      { new: true, runValidators: true }
    ).populate('category', 'name slug');
    
    res.status(200).json({
      success: true,
      data: product,
      message: 'Product updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private (Admin)
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }
    
    await product.deleteOne();
    
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
};
