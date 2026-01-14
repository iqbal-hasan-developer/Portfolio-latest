import React from 'react'
import { Github, Linkedin, Mail, Twitter, Dribbble, Instagram, MapPin, Heart } from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../../utils/motion'


const Footer = () => {

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
  }

  return (
     <footer className='relative bg-black overflow-hidden border-t border-white/10'>
      <div className="absolute inset-0 overflow-hidden">
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl' />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <motion.h3 
             variants={fadeIn("right", 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
            className='text-3xl font-bold text-center md:text-left bg-linear-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent mb-4'>
              {PERSONAL_INFO.name.split(' ')[0]}
            </motion.h3>
            <motion.p 
             variants={fadeIn("left", 0.3)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
            className="text-white/70 text-lg md:text-sm text-center md:text-left mb-6 leading-relaxed">
              {PERSONAL_INFO.tagline}
            </motion.p>

            <motion.div 
             variants={fadeIn("right", 0.4)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
            className="space-y-3">
              <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className='group flex items-center justify-center md:justify-start gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300'
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className='w-4 h-4 text-primary' />
                </div>
                <span className='text-white/70 text-lg md:text-sm group-hover:text-white transition-colors duration-300'>
                  {PERSONAL_INFO.email}
                </span>
              </a>

              <div className="flex items-center justify-center md:justify-start gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className='w-4 h-4 text-primary' />
                </div>
                <span className="text-white/70 text-lg md:text-sm">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Quick links */}
          <motion.div 
           variants={fadeIn("up", 0.5)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
          className='md:ml-20 flex flex-col justify-center items-center md:items-start'>
            <h4 className='text-white font-semibold mb-6 text-2xl md:text-lg'>Quick Links</h4>
            <ul className='space-y-3'>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className='group flex items-center gap-2 text-white/70 hover:text-primary transition-colors duration-300'
                  >
                  <div className='w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-primary group-hover:w-2 transition-all duration-300' />
                  <span className="text-xl md:text-sm">{link.label}</span>  
                  </button>  
                </li>
              ))}
            </ul>
          </motion.div>

          <div className='text-center md:text-left flex flex-col justify-center items-center md:items-start'>
            <motion.h4 
             variants={fadeIn("left", 0.6)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
            className="text-white font-semibold mb-6 text-2xl md:text-lg">Connect with me</motion.h4>
            <motion.p 
             variants={fadeIn("left", 0.7)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
            className="text-white/70 text-lg md:text-sm mb-6 leading-relaxed">
              Let's connect and create something amazing together!
            </motion.p>
            <motion.div 
             variants={fadeIn("up", 0.7)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
            className="flex flex-wrap gap-3">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return Icon ? (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                    aria-label={`Connect on ${platform}`}
                  >
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors duration-300" />
                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 rounded-xl transition-colors duration-300 pointer-events-none" />
                  </a>  
                ) : null;
            })}
            </motion.div>
          </div>
        </div>

        <motion.div 
         variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
        className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-lg md:text-sm">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-white/50 text-lg md:text-sm">
              Built with <Heart className='w-4 h-4 text-primary fill-primary animate-pulse' /> by {PERSONAL_INFO.name}
            </p>
          </div>
        </motion.div>
      </div>
     </footer>
  )
}

export default Footer