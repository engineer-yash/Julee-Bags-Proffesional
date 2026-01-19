import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiZoomIn } from 'react-icons/hi';
import ImageModal from '../components/ImageModal';
import { allBagsGallery, categories } from '../data/images';

const AllBags = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryTag) => {
    setSelectedCategory(categoryTag);
    setVisibleCount(12);
    if (categoryTag === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryTag });
    }
  };

  const filteredImages = allBagsGallery.filter((item) =>
    item.tags.includes(selectedCategory)
  );

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary/5 to-gray-100">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-secondary text-white py-12 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-3"
          >
            Our Bags Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-lg text-gray-200"
          >
            Explore our wide range of quality bags
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-10">
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left">Filter by Category</h2>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category.tag)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.tag
                    ? 'bg-gradient-primary text-white shadow-xl shadow-primary/30 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-primary/30 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 text-center md:text-left"
        >
          <p className="text-gray-600 text-lg">
            Showing <span className="font-bold text-primary text-xl">{visibleImages.length}</span> of{' '}
            <span className="font-bold text-primary text-xl">{filteredImages.length}</span> bags
          </p>
        </motion.div>

        {/* Image Gallery */}
        <AnimatePresence mode="wait">
          {filteredImages.length > 0 ? (
            <motion.div 
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
            >
              {visibleImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl bg-white"
                  onClick={() => setSelectedImage(item.url)}
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Bag ${item.id}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Hover overlay with icon */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <HiZoomIn className="w-14 h-14 mx-auto mb-2 animate-pulse" />
                      <p className="text-sm font-bold">Click to Zoom</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="bg-white rounded-2xl p-12 shadow-xl inline-block">
                <p className="text-gray-500 text-xl">No bags found in this category.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="bg-gradient-primary text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Load More Bags</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        )}

        {/* End of Results */}
        {!hasMore && filteredImages.length > 12 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary/10 rounded-2xl p-6 inline-block shadow-lg">
              <p className="text-gray-600 font-semibold text-lg">✨ You've reached the end of the gallery ✨</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default AllBags;
