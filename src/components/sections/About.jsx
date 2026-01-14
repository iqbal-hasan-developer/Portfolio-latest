import React, { useState, useEffect } from "react";
import { Download, Code2, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constants";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const skills = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  ];

  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      <RadialGradientBackground varient="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* main-grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* left */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="inline-flex mx-auto md:mx-0 items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit"
              >
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Front-End Developer
                </span>
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <motion.h2
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-3xl md:text-4xl text-center md:text-left lg:text-5xl font-normal text-white leading-relaxed md:leading-tight"
              >
                Crafting digital experiences that matters
              </motion.h2>

              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base text-white/70 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>
            <motion.div
              ref={statsRef}
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8"
            >
              {ABOUT_STATS.map((stat, index) => (
                <div key={index} className="relative ml-5">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                  <div className="text-3xl font-normal text-white mb-2 font-mono">
                    {isInView && (
                      <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix="k+"
                      separator=","
                    />
                    )}
                  </div>
                  <p className="text-sm leading-snug text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
            <motion.button
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
              className="inline-flex items-center gap-3 bg-white border border-white hover:bg-[#8Dff69]/20 hover:text-white hover:border-primary/70 text-black rounded-full px-8 py-4 font-medium transition-colors duration-300 w-fit group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              Download Resume
            </motion.button>
          </div>

          {/* right */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              variants={slideIn("down", "tween", 0.1, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="col-span-2 relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Expertise
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Specialized in building scalable web applications with
                      modern technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideIn("left", "tween", 0.2, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Clean Code
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Writing maintainable, well-documented code that standout
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideIn("right", "tween", 0.2, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Performance
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Optimizing applications for speed and efficiency
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideIn("up", "tween", 0.3, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="col-span-2 relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      100%
                    </div>
                    <div className="text-xs text-white/60">
                      Client Satisfaction
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      24/7
                    </div>
                    <div className="text-xs text-white/60">
                      Support Available
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      Fast
                    </div>
                    <div className="text-xs text-white/60">
                      Project Delivery
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* skills */}
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <motion.h3
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl font-normal text-white mb-2"
            >
              Tech Stack & Expertise
            </motion.h3>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-sm text-white/70"
            >
              Technologies I work with to build efficient and scalable web
              applications.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-102"
              >
                <skill.icon className="text-3xl text-primary" />

                <div className="text-sm text-white/80 font-medium text-center">
                  {skill.name}
                </div>

                {/* hover glow effect */}

                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
