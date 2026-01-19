import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiColorSwatch, HiGlobeAlt, HiZoomIn } from 'react-icons/hi';
import HeroSlider from '../components/HeroSlider';
import ImageModal from '../components/ImageModal';
import { heroSliderImages, allBagsGallery } from '../data/images';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Get first 12 images for home preview
  const previewImages = allBagsGallery.slice(0, 12);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      icon: HiCheckCircle,
      title: '25+ Years Experience',
      description: 'Over two decades of expertise in bag manufacturing',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: HiColorSwatch,
      title: 'Custom Designs',
      description: 'We produce according to your unique requirements',
      color: 'from-primary-light to-primary'
    },
    {
      icon: HiGlobeAlt,
      title: 'Worldwide Delivery',
      description: 'We welcome customers from all over the world',
      color: 'from-primary-dark to-secondary'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Slider */}
      <HeroSlider images={heroSliderImages} />

      {/* Welcome Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent"
          >
            Welcome to JULEE BAGS
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed space-y-6 text-center"
          >
            <motion.p 
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Our factory has an experience in manufacturing of bags over <span className="font-bold text-primary text-xl">25 years</span>. 
              Our products includes <strong className="text-primary">Documents Bags, School Bags, College Bags, Laptop Bags, Handbags, 
              Tiffin bags, Pencil pouch</strong> made from foam leather, PVC, PU, polyester and nylon etc.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Our service includes producing according to customer's designs. 
              <strong className="text-primary block mt-2 text-xl"> Customer satisfaction is our motto.</strong> We welcome the customers from all 
              over the world to hold business and order with us.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-primary font-bold text-xl italic bg-white rounded-2xl p-6 shadow-lg"
            >
              "Sincerely hope to build close co-operation relationship with all honest customers."
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Promo Video Section */}
      <section className="bg-gradient-to-br from-gray-100 via-primary/5 to-gray-100 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent"
          >
            Our Story
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden group" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/jJ8uB6C9aYI?si=bh90H0gEjk_gMkRC"
                title="Julee Bags Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 border-4 border-primary/20 rounded-3xl group-hover:border-primary/40 transition-colors duration-300"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bags Gallery Preview */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent"
        >
          Bags Gallery
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {previewImages.map((item, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <HiZoomIn className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Click to View</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/all-bags">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View All Bags</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-primary/5 via-gray-50 to-primary-light/5 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-br ${feature.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <feature.icon className="w-10 h-10" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-center text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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

export default Home;
