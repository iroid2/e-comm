"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const carouselItems = [
  {
    image: "/images/fresh-vegetables.jpg",
    title: "Fresh Produce,",
    subtitle: "Delivered to Your Doorstep",
  },
  {
    image: "/images/grocery-delivery.jpg",
    title: "Convenient Shopping,",
    subtitle: "Anytime, Anywhere",
  },
  {
    image: "/images/local-farmers.jpg",
    title: "Support Local Farmers,",
    subtitle: "Enjoy Seasonal Delights",
  },
];

export default function CustomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-green-50">
      <AnimatePresence initial={false} custom={currentSlide}>
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 ${
              index === currentSlide ? "z-10" : "z-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/70" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-6 text-white">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl font-bold mb-2 text-center"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl mb-8 text-center"
              >
                {item.subtitle}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <Button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
        aria-label="Previous slide"
        variant="ghost"
        size="icon"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
        aria-label="Next slide"
        variant="ghost"
        size="icon"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </div>
  );
}

