import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown, HiPhone, HiMail } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'HOME', path: '/' },
    { 
      name: 'PRODUCTS', 
      path: '/all-bags',
      dropdown: [
        { name: 'All Bags', path: '/all-bags' },
        { name: 'School Bags', path: '/all-bags?category=school' },
        { name: 'College Bags', path: '/all-bags?category=college' },
        { name: 'Laptop Bags', path: '/all-bags?category=laptop' },
        { name: 'Hand Bags', path: '/all-bags?category=handbag' },
        { name: 'Travel Bags', path: '/all-bags?category=travel' },
      ]
    },
    { name: 'WILD ADVENTURE', path: '/wild-adventure' },
    { name: 'ABOUT JULEE', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-xl bg-white/95 backdrop-blur-md' : 'shadow-md bg-white'
      }`}
    >
      {/* Top Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-primary text-white py-2.5"
      >
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6 mb-2 sm:mb-0">
            <a href="tel:+91 7498821933" className="flex items-center hover:text-primary-light transition-colors group">
              <HiPhone className="mr-1.5 group-hover:animate-bounce" />
              <span>+91 7498821933</span>
            </a>
            <a href="mailto:sales@juleebags.com" className="flex items-center hover:text-primary-light transition-colors group">
              <HiMail className="mr-1.5 group-hover:animate-bounce" />
              <span className="hidden sm:inline">sales@juleebags.com</span>
            </a>
          </div>
          <div className="text-center animate-fade-in">
            <span className="font-medium">Welcome to Julee Bags - बस नाम ही काफी है! 🎒</span>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="https://www.juleebags.com/images/logo11.png" 
              alt="Julee Bags Logo" 
              className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.name} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.dropdown ? (
                  <div>
                    <Link
                      to={link.path}
                      className={`flex items-center text-gray-700 hover:text-primary font-semibold text-sm transition-all duration-300 ${
                        isActive(link.path) ? 'text-primary' : ''
                      }`}
                    >
                      {link.name}
                      <HiChevronDown className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                    </Link>
                    {/* Dropdown */}
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
                    >
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-all duration-200"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-gray-700 hover:text-primary font-semibold text-sm transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                      isActive(link.path) ? 'text-primary after:w-full' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none hover:text-primary transition-colors p-2"
          >
            {isMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden pb-4 overflow-hidden"
            >
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className="w-full text-left py-3 text-gray-700 hover:text-primary font-semibold transition-colors flex justify-between items-center"
                      >
                        {link.name}
                        <HiChevronDown 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isProductsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isProductsOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {link.dropdown.map((item, idx) => (
                              <motion.div
                                key={item.name}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  to={item.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 text-gray-700 hover:text-primary font-semibold transition-colors ${
                        isActive(link.path) ? 'text-primary' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
