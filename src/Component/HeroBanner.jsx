import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
  {
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    title: "Summer Sale - Up to 50% Off",
    subtitle: "Limited time offer on selected items"
  },
  {
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    title: "New Arrivals",
    subtitle: "Discover the latest products"
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    link: "#",
    title: "Electronics Special",
    subtitle: "Top brands at amazing prices"
  },
];

function HeroBanner() {
  return (
      <div className="relative flex lg:ml-50 items-center w-1/2 h-[400px] md:h-[500px] lg:h-[600px] z-0 overflow-hidden rounded-lg shadow-lg">
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
        >
          {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                >
                  <img
                      src={banner.img}
                      alt={`Banner ${index + 1}`}
                      className="w-full h-full object-cover"
                  />
                  <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute bottom-10 left-10 text-white max-w-md"
                  >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                      {banner.title}
                    </h2>
                    <p className="text-lg md:text-xl mb-4">{banner.subtitle}</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md shadow-md"
                    >
                      Shop Now
                    </motion.button>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
}

export default HeroBanner;