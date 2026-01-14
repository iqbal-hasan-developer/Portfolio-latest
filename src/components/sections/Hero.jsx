import React from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { scrollToSection } from "../../hooks/useScrollSpy";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground varient="hero" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <div className="text-left">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4.5 py-3 mb-4 md:mb-8 mt-2 md:mt-0 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full"
            >
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                {PERSONAL_INFO.role} | Based in {PERSONAL_INFO.location}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight"
            >
              Ikbal Hosen
            </motion.h1>
            <motion.h3
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl text-white/70 mb-4 font-normal"
            >
              Frontend Developer
            </motion.h3>
            <motion.p
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg text-white/70 max-w-137.5 mb-8"
            >
              Building modern, scalable web applications with React.js,
              JavaScript, and cutting edge technologies. Transforming ideas into
              exeptional digital experiences.
            </motion.p>
            <motion.button
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-0 mb-12 group"
            >
              <div className="relative z-10 bg-white text-[#212121] rounded-2xl px-7 py-3 text-base font-medium border border-white hover:bg-[#8Dff69]/20 hover:text-white hover:border-primary/50 transition-all duration-300">
                Get in Touch
              </div>
            </motion.button>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full"
            >
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="text-left border-r border-white/50 pr-10 last:border-0"
                >
                  <div className="text-2xl font-normal text-primary mb-2 font-mono">
                    <CountUp
                    start={0} 
                    end={stat.value} 
                    duration={5} 
                    suffix="+"
                    separator="," />
                  </div>
                  <p className="text-sm leading-snug text-white">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* right */}
          <div className="relative">
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-125 mr-auto group"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div
                  className="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary rounded-2xl animate-spin"
                  style={{ animation: "spin 5s linear infinite" }}
                ></div>
              </div>
              {/* image container */}
              <div className="relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]">
                <img
                  src="../../src/assets/ikbal 3.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              {/* tecknology logos */}
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiReact className="w-full h-full text-primary" />
                  </div>

                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiNextdotjs className="w-full h-full text-primary" />
                  </div>

                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiTailwindcss className="w-full h-full text-primary" />
                  </div>

                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiJavascript className="w-full h-full text-primary" />
                  </div>

                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiNodedotjs className="w-full h-full text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary curpo" />
      </button>
    </section>
  );
};

export default Hero;
