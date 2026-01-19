import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiLocationMarker, HiPhone, HiMail, HiClock } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: "Address",
      content: (
        <a 
          href="https://maps.app.goo.gl/8AVfpzLY2dY8EVJH9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          531B, Ganesh Peth, Near Kasturi Chowk Lane,<br />
          Opp. Vithhal Mandir, Pune-411002,<br />
          Maharashtra, India
        </a>
      ),
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: HiPhone,
      title: "Phone",
      content: (
        <a href="tel:7498821933" className="hover:text-primary transition-colors">
          +91 7498821933
        </a>
      ),
      gradient: "from-primary-light to-primary"
    },
    {
      icon: HiMail,
      title: "Email",
      content: (
        <a href="mailto:sales@juleebags.com" className="hover:text-primary transition-colors">
          sales@juleebags.com
        </a>
      ),
      gradient: "from-primary-dark to-secondary"
    },
    {
      icon: HiClock,
      title: "Business Hours",
      content: (
        <>
          Monday - Saturday: 9:00 AM - 7:00 PM<br />
          Sunday: Closed
        </>
      ),
      gradient: "from-secondary to-primary"
    }
  ];

  // Unused - can be removed or used for future animations

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-lg text-gray-200"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            title="Julee Bags Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.90446517809!2d73.86017000977053!3d18.510957269397124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06995555555%3A0x1db0f45e5d079ebf!2sJulee%20Bags!5e1!3m2!1sen!2sin!4v1768468953084!5m2!1sen!2sin"
            className="w-full h-80 md:h-96"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Have questions about our products or services? We're here to
                help! Reach out to us and we'll respond as soon as possible.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className={`bg-gradient-to-br ${info.gradient} text-white p-4 rounded-2xl mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1 text-lg">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6 relative z-10">
                Send us a Message
              </h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6 shadow-lg"
                >
                  ✅ Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/30"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/30"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/30"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/30"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300 hover:border-primary/30"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
