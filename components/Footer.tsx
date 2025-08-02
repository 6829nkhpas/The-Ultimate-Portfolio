'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, Download, ExternalLink, MapPin, Calendar, Code } from 'lucide-react'
import { useState, useEffect } from 'react'
import myPhoto from '../app/assets/yashRana.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const quickLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Experience', href: '#experience', icon: '💼' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Certifications', href: '#certifications', icon: '🏆' },
    { name: 'Leadership', href: '#leadership', icon: '👑' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/yash-rana0101',
      color: 'hover:text-gray-300',
      bg: 'hover:bg-gray-800/30'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/devop-yash-rana',
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-500/20'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:ranayash812@gmail.com',
      color: 'hover:text-accent',
      bg: 'hover:bg-accent/20'
    }
  ]

  const resourceLinks = [
    {
      name: 'Resume',
      icon: <Download size={16} />,
      href: '/Yash_Ran_FullStack.pdf',
      download: true,
      description: 'Download my latest CV'
    },
    {
      name: 'Cyberhunter Club',
      icon: <ExternalLink size={16} />,
      href: 'https://cyberhunter.club',
      description: 'Community platform'
    },
    {
      name: 'GitHub Projects',
      icon: <Code size={16} />,
      href: 'https://github.com/yash-rana0101',
      description: 'Open source contributions'
    },
    {
      name: 'LinkedIn Profile',
      icon: <ExternalLink size={16} />,
      href: 'https://www.linkedin.com/in/devop-yash-rana',
      description: 'Professional network'
    }
  ]

  const techStack = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Blockchain',
    'Tailwind CSS', 'Framer Motion', 'Web3'
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/10 to-highlight/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/20 to-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.footer
        style={{ opacity }}
        className="relative bg-gradient-to-b from-transparent via-primary/80 to-primary backdrop-blur-xl border-t border-white/10"
      >
        {/* Glass Panel Container */}
        <div className="container-width px-4 sm:px-6 lg:px-8 relative">
          {/* Main Footer Content */}
          <div className="py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

              {/* Brand Section - Takes more space */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-5"
              >
                <div className="glass-panel p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
                  {/* Profile Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-highlight rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-accent to-highlight rounded-full p-0.5">
                        <img
                          src={myPhoto.src}
                          alt="Yash Rana"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-textLight mb-1">
                        Yash Rana
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-accent font-medium">
                        <Code size={16} />
                        <span>Full Stack & Blockchain Developer</span>
                      </div>
                      <div className="flex items-center gap-2 text-textMuted text-sm mt-1">
                        <MapPin size={12} />
                        <span>Available for opportunities</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-textMuted leading-relaxed mb-6 text-sm lg:text-base">
                    Passionate about crafting scalable web applications and decentralized solutions.
                    Always learning, building, and sharing knowledge with the developer community.
                  </p>

                  {/* Social Links with Glass Effect */}
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-textMuted transition-all duration-300 ${social.color} ${social.bg} hover:border-white/20 hover:shadow-lg`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="lg:col-span-3"
              >
                <div className="glass-panel p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl h-full">
                  <h4 className="text-lg font-heading font-semibold text-textLight mb-6 flex items-center gap-2">
                    <span className="text-lg">🔗</span>
                    Quick Links
                  </h4>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                    {quickLinks.map((link, index) => (
                      <motion.button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="flex items-center space-x-3 p-2 rounded-lg text-textMuted hover:text-accent hover:bg-white/5 transition-all duration-300 text-sm group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </span>
                        <span>{link.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-4"
              >
                <div className="glass-panel p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl h-full">
                  <h4 className="text-lg font-heading font-semibold text-textLight mb-6 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    Resources
                  </h4>
                  <div className="space-y-3">
                    {resourceLinks.map((resource, index) => (
                      <motion.div
                        key={resource.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <motion.a
                          href={resource.href}
                          {...(resource.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-1.5 rounded-lg bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors duration-300">
                              {resource.icon}
                            </div>
                            <div>
                              <div className="text-textLight font-medium text-sm group-hover:text-accent transition-colors duration-300">
                                {resource.name}
                              </div>
                              <div className="text-textMuted text-xs">
                                {resource.description}
                              </div>
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ x: 3 }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <ExternalLink size={14} className="text-accent" />
                          </motion.div>
                        </motion.a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pb-8"
          >
            <div className="glass-panel p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2 text-textMuted text-sm">
                  <Code size={16} className="text-accent" />
                  <span>Built with modern technologies:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20 hover:bg-accent/20 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="py-6 border-t border-white/10"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-textMuted text-sm">
                <Calendar size={14} />
                <span>© {currentYear} Yash Rana. All rights reserved.</span>
              </div>

              {/* Made with Love */}
              <div className="flex items-center space-x-2 text-textMuted text-sm">
                <span>Crafted with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <Heart size={16} className="text-red-400" fill="currentColor" />
                </motion.div>
                <span>and Passion</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Back to Top Button */}
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-accent to-highlight rounded-2xl flex items-center justify-center text-primary shadow-2xl backdrop-blur-lg border border-white/20 z-50 hover:shadow-glow transition-all duration-300"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}

        {/* Enhanced Glass CSS */}
        <style jsx>{`
          .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(255, 255, 255, 0.05);
          }
          
          .glass-panel:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            transition: all 0.3s ease;
          }

          @media (max-width: 640px) {
            .glass-panel {
              backdrop-filter: blur(15px);
            }
          }
        `}</style>
      </motion.footer>
    </>
  )
}

export default Footer