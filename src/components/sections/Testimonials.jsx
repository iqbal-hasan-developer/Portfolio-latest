import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const testimonialStats = [
    { value: "3x", label: "Faster Delivery" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "4.5⭐", label: "Average Rating" },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
          >
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium tracking-wider uppercase">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-xl mx-auto"
          >
            Trusted by forward-thinking teams
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg text-white/70 max-w-xl mx-auto"
          >
            Empowering clients with design-driven, high-quality solutions built
            for success.
          </motion.p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-hidden scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full shrink-0 px-4"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 items-stretch">
                      {/* image section */}
                      <div className="relative w-full md:w-1/3">
                        <div className="relative h-72 rounded-2xl overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          />

                          {/* star badge */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-black/60 rounded-xl p-4 shadow-lg">
                              <div className="">
                                <div className="text-2xl font-semibold text-primary mb-1">
                                  {testimonialStats[index]?.value}
                                </div>
                                <div className="text-sm font-semibold text-gray-100">
                                  {testimonialStats[index]?.label}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-between py-4">
                        {/* Qoute */}
                        <div className="mb-6">
                          <Quote className="w-7 h-7 text-primary mb-4 opacity-50" />
                          <p className="text-lg md:text-xl text-white leading-relaxed">
                            "{testimonial.qoute}"
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium mb-1">
                              {testimonial.name}
                            </div>
                            <div className="text-white/70 text-sm">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>

                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, index) => (
                              <Star
                                key={index}
                                className="w-4 h-4 text-primary fill-primary"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-white w-6 h-2"
                    : "bg-white/30 w-2 h-2 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            disabled={currentIndex === 0}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            disabled={currentIndex === testimonials.length - 1}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
