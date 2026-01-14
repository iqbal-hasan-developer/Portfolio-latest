import React from "react";
import { services } from "../../data/services";
import * as Icons from "lucide-react";
import { Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn,slideIn } from "../../utils/motion";


const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px
            `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
           variants={fadeIn("right", 0.2)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium tracking-wider uppercase">What I Offer</span>
          </motion.div>
          <motion.h2
           variants={fadeIn("left", 0.3)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto">
            Built for innovation. Designed for results.
          </motion.h2>
          <motion.p 
           variants={fadeIn("right", 0.4)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
          className="text-lg text-white/70 max-w-xl mx-auto">
            Comprehensive solutions to transform your ideas into exceptional
            digital experiences.
          </motion.p>
        </div>

        <motion.div 
         variants={fadeIn("right", 0.5)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <div key={index} className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full min-h-50 flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>

                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </motion.div>

        <motion.div 
         variants={fadeIn("up", 0.6)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-3">{service.description}</p>
                </div>

                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
