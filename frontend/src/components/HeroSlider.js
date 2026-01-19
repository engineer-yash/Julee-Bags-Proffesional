import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider = ({ images }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-br from-gray-100 via-primary/5 to-gray-100 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop={true}
          className="rounded-2xl shadow-2xl overflow-hidden"
          style={{ width: "100%" }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 via-white to-gray-200 relative"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx="true">{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: linear-gradient(135deg, #8a9b28 0%, #6d7a1f 100%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(138, 155, 40, 0.4);
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(138, 155, 40, 0.6);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: #8a9b28;
          opacity: 0.5;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          background: linear-gradient(135deg, #8a9b28 0%, #6d7a1f 100%);
        }

        /* Hide arrows on mobile */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
          }
          
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 16px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default HeroSlider;
