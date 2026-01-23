const Category = require('../models/Category');

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single category
// @route   GET /api/categories/:id
// @access  Public
const getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    
    if (!category) {
      res.status(404);
      throw new Error('Category not found');
    }
    
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create category
// @route   POST /api/categories
// @access  Private (Admin)
const createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    
    if (!name) {
      res.status(400);
      throw new Error('Category name is required');
    }
    
    // Check if category already exists
    const existingCategory = await Category.findOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') } 
    });
    
    if (existingCategory) {
      res.status(400);
      throw new Error('Category already exists');
    }
    
    const category = await Category.create({
      name,
      description,
    });
    
    res.status(201).json({
      success: true,
      data: category,
      message: 'Category created successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private (Admin)
const updateCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    
    let category = await Category.findById(req.params.id);
    
    if (!category) {
      res.status(404);
      throw new Error('Category not found');
    }
    
    // Check if new name conflicts with existing category
    if (name && name !== category.name) {
      const existingCategory = await Category.findOne({ 
        name: { $regex: new RegExp(`^${name}$`, 'i') },
        _id: { $ne: req.params.id }
      });
      
      if (existingCategory) {
        res.status(400);
        throw new Error('Category name already exists');
      }
    }
    
    category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true, runValidators: true }
    );
    
    res.status(200).json({
      success: true,
      data: category,
      message: 'Category updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private (Admin)
const deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    
    if (!category) {
      res.status(404);
      throw new Error('Category not found');
    }
    
    // Check if category has products
    const Product = require('../models/Product');
    const productsCount = await Product.countDocuments({ category: req.params.id });
    
    if (productsCount > 0) {
      res.status(400);
      throw new Error(`Cannot delete category. It has ${productsCount} products associated with it`);
    }
    
    await category.deleteOne();
    
    res.status(200).json({
      success: true,
      message: 'Category deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
