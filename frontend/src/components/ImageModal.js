import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-6 right-6 text-white bg-primary hover:bg-primary-dark p-3 rounded-full transition-all duration-300 shadow-2xl z-10 group"
          aria-label="Close"
        >
          <HiX className="w-6 h-6" />
        </motion.button>

        {/* Image Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            src={image}
            alt="Preview"
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
          />
          
          {/* Decorative border */}
          <div className="absolute inset-0 border-4 border-primary/30 rounded-2xl pointer-events-none"></div>
        </motion.div>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 text-white text-sm"
        >
          Press ESC or click outside to close
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
