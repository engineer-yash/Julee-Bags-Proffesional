import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const AboutJulee = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const values = [
    { emoji: '🎯', title: 'Our Mission', desc: 'To manufacture high-quality bags that exceed customer expectations while maintaining affordability and promoting sustainable business practices.' },
    { emoji: '👁️', title: 'Our Vision', desc: 'To become a globally recognized brand known for innovation, quality, and customer satisfaction in the bag manufacturing industry.' }
  ];

  const whyChoose = [
    { title: '25+ Years Experience', desc: 'Over two decades of expertise in bag manufacturing' },
    { title: 'Custom Designs', desc: 'Tailored solutions for your specific needs' },
    { title: 'Premium Quality', desc: 'Using only the finest materials and craftsmanship' },
    { title: 'Global Reach', desc: 'Serving customers worldwide with dedication' }
  ];

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
            About Julee Bags
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-lg text-gray-200"
          >
            Quality Bags Manufacturer Since 1998
          </motion.p>
        </div>
      </motion.div>

      {/* Company Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent relative z-10">Our Story</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 relative z-10">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                With over <strong className="text-primary text-xl">25 years of experience</strong> in bag manufacturing,
                Julee Bags has established itself as a trusted name in the industry. Since our inception,
                we have been committed to producing high-quality bags that combine functionality, durability,
                and style.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Our factory specializes in manufacturing a wide range of bags including <strong className="text-primary">School Bags,
                College Bags, Laptop Bags, Hand Bags, Document Bags, Tiffin Bags, and Pencil Pouches</strong>.
                We use premium materials such as foam leather, PVC, PU, polyester, and nylon to ensure the
                longevity and quality of our products.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-2xl"
              >
                At Julee Bags, we understand that every customer has unique needs. That's why we offer
                custom design services, allowing you to create bags that perfectly match your requirements.
                Whether you need bags for personal use, corporate branding, or bulk orders, we have the
                expertise and capacity to deliver.
              </motion.p>
            </div>
          </motion.div>

          {/* Author Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-light/10 to-transparent rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent relative z-10">Meet Our Founder</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-primary relative group">
                  <img
                    src="https://www.juleebags.com/images/logo11.png"
                    alt="Julee Bags Founder"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
              </motion.div>

              {/* Bio Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex-1"
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Julee - Founder & CEO</h3>
                <p className="text-primary font-semibold text-lg mb-6">Master Craftsperson & Entrepreneur</p>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    With a passion for quality craftsmanship and an entrepreneurial spirit, Julee founded
                    the company with a vision to create bags that people can rely on for years. Starting
                    from a small workshop in Pune, the business has grown into a trusted manufacturer
                    serving customers across India and internationally.
                  </p>
                  <p className="bg-primary/5 p-5 rounded-xl border-l-4 border-primary">
                    "Our success is built on three pillars: <strong className="text-primary">Quality, Innovation, and Customer
                    Satisfaction</strong>. Every bag that leaves our factory represents our commitment to
                    excellence and our respect for the customer's trust in us."
                  </p>
                  <p className="italic text-gray-600 text-right">
                    - Julee, Founder of Julee Bags
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{value.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-primary text-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center relative z-10">Why Choose Julee Bags?</h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
            >
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
                >
                  <HiCheckCircle className="text-4xl mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-100">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutJulee;
