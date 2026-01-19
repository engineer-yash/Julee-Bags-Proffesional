import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiZoomIn, HiCheckCircle } from 'react-icons/hi';
import ImageModal from '../components/ImageModal';
import { wildAdventureImages } from '../data/images';

const WildAdventure = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const features = [
    { title: 'Durable Materials', desc: 'Weather-resistant fabrics that withstand the elements' },
    { title: 'Smart Design', desc: 'Multiple compartments for organized packing' },
    { title: 'Comfort', desc: 'Ergonomic straps and padding for long journeys' },
    { title: 'Versatility', desc: 'Suitable for hiking, traveling, and everyday use' },
    { title: 'Quality', desc: 'Built to last with reinforced stitching and premium hardware' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary/5 to-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-center h-72 md:h-[32rem] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://www.juleebags.com/images/ban9.jpg)',
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-light/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-white relative z-10 px-4"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl"
          >
            WILD ADVENTURE
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-3xl font-light drop-shadow-lg"
          >
            Bags Built for the Explorer in You 🏔️
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent relative z-10">
              Adventure Awaits
            </h2>
            
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 relative z-10">
              <p className="text-center md:text-left">
                Our <strong className="text-primary">Wild Adventure</strong> collection is specially designed for outdoor enthusiasts,
                travelers, and adventurers who demand durability, functionality, and style. Whether you're
                trekking through mountains, exploring new cities, or embarking on a weekend camping trip,
                our bags are your perfect companion.
              </p>
              
              <p className="font-semibold text-xl text-gray-800 mt-8 mb-4">Each bag in this collection is crafted with:</p>
              
              {/* Features Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-start bg-gradient-to-br from-primary/5 to-transparent p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <HiCheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-800">{feature.title}:</strong>
                      <span className="text-gray-600 ml-2">{feature.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-primary font-bold text-xl text-center mt-8 bg-primary/10 p-6 rounded-2xl"
              >
                Gear up for your next adventure with Julee Bags - where quality meets adventure!
              </motion.p>
            </div>
          </motion.div>

          {/* Adventure Gallery */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent"
          >
            Wild Adventure Collection
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {wildAdventureImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl bg-white"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Adventure Bag ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <HiZoomIn className="w-12 h-12 mx-auto mb-2 animate-pulse" />
                    <p className="text-sm font-bold">Click to Zoom</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 bg-gradient-primary text-white rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <motion.h3
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
            >
              Ready for Your Next Adventure?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-lg relative z-10"
            >
              Contact us to explore our full Wild Adventure collection
            </motion.p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl relative z-10"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
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

export default WildAdventure;
