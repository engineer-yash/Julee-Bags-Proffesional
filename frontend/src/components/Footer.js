import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail, HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="bg-gradient-secondary text-white mt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-primary"></div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/all-bags' },
                { name: 'Wild Adventure', path: '/wild-adventure' },
                { name: 'About Julee', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className="hover:text-primary-light transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent">Product Categories</h3>
            <ul className="space-y-3">
              {['School Bags', 'College Bags', 'Laptop Bags', 'Hand Bags', 'Tote Bags', 'Travel Bags'].map((category) => (
                <motion.li 
                  key={category}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover:text-primary-light transition-colors duration-300 cursor-pointer flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                  {category}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent">Contact Us</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start group"
              >
                <HiLocationMarker className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0 group-hover:animate-bounce" />
                <a 
                  href="https://maps.app.goo.gl/8AVfpzLY2dY8EVJH9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-light transition-colors"
                >
                  <span>531B, Ganesh Peth, Near Kasturi Chowk Lane,<br />Opp. Vithhal Mandir, Pune-411002,<br />Maharashtra, India</span>
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center group"
              >
                <HiPhone className="w-6 h-6 text-primary mr-3 flex-shrink-0 group-hover:animate-bounce" />
                <a 
                  href="tel:+917498821933" 
                  className="hover:text-primary-light transition-colors"
                >
                  +91 7498821933
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center group"
              >
                <HiMail className="w-6 h-6 text-primary mr-3 flex-shrink-0 group-hover:animate-bounce" />
                <a 
                  href="mailto:sales@juleebags.com" 
                  className="hover:text-primary-light transition-colors"
                >
                  sales@juleebags.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-600 mt-8 pt-6 text-center"
        >
          <p className="text-sm mb-2">
            © {new Date().getFullYear()} Julee Bags. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400">
            Manufacturer & Supplier of Quality Bags in Pune, Mumbai, Maharashtra, India
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-primary text-white p-4 rounded-full shadow-2xl hover:shadow-glow z-40 group"
        aria-label="Scroll to top"
      >
        <HiArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
};

export default Footer;
