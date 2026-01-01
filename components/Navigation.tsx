"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Github } from "lucide-react";
import myPhoto from "../app/assets/namanKumar.png";
import LinkedInProfile from "./Linkdein";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLinkedInModalOpen, setIsLinkedInModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Open Source", href: "#opensource" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const openLinkedInModal = () => {
    setIsLinkedInModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeLinkedInModal = () => {
    setIsLinkedInModalOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-2 sm:top-4 inset-x-0 mx-auto z-50 
          w-[98%] xs:w-[96%] sm:w-[94%] md:w-[88%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] 3xl:w-[55%]
          max-w-7xl
          ${isScrolled
            ? "bg-white/15 backdrop-blur-xl shadow-2xl"
            : "bg-white/10 backdrop-blur-md shadow-xl"
          } 
          rounded-xl sm:rounded-2xl border border-white/20 transition-all duration-500 ease-out
          supports-[backdrop-filter]:bg-white/10 supports-[backdrop-filter]:backdrop-blur-md`}
      >
        <div className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0"
          >
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center ring-1 sm:ring-2 ring-white/20">
              <img
                src={myPhoto.src}
                alt="Naman Kumar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-heading font-bold text-sm xs:text-base sm:text-lg md:text-xl text-white whitespace-nowrap">
              Naman Kumar
            </span>
          </motion.div>


          {/* Desktop Navigation - Hidden on tablet and below */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-2 xl:px-3 py-2 rounded-lg text-white/80 transition-all duration-300 ease-in-out font-medium text-xs xl:text-sm
                  hover:bg-white/10 hover:shadow-lg hover:text-white hover:backdrop-blur-sm
                  active:bg-white/15 group whitespace-nowrap"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-lg opacity-0 
                  group-hover:opacity-100 transition-all duration-300 blur-sm"
                ></span>
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}

            {/* GitHub Button */}
            <motion.button
              onClick={openLinkedInModal}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-2 xl:px-3 py-2 rounded-lg text-white/80 transition-all duration-300 ease-in-out font-medium text-xs xl:text-sm
                hover:bg-white/10 hover:shadow-lg hover:text-white hover:backdrop-blur-sm
                active:bg-white/15 group whitespace-nowrap flex items-center space-x-1 xl:space-x-1.5"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-300 blur-sm"
              ></span>
              <Github size={14} className="xl:w-4 xl:h-4 relative z-10" />
              <span className="relative z-10">Github</span>
            </motion.button>
          </div>

          {/* Tablet Navigation - Visible only on tablet sizes */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            {navItems.slice(0, 4).map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-2.5 py-1.5 rounded-lg text-white/80 transition-all duration-300 ease-in-out font-medium text-sm
                  hover:bg-white/10 hover:shadow-lg hover:text-white hover:backdrop-blur-sm
                  active:bg-white/15 group"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-lg opacity-0 
                  group-hover:opacity-100 transition-all duration-300 blur-sm"
                ></span>
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}

            {/* GitHub Button for Tablet */}
            <motion.button
              onClick={openLinkedInModal}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-2.5 py-1.5 rounded-lg text-white/80 transition-all duration-300 ease-in-out font-medium text-sm
                hover:bg-white/10 hover:shadow-lg hover:text-white hover:backdrop-blur-sm
                active:bg-white/15 group flex items-center space-x-1"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-300 blur-sm"
              ></span>
              <Github size={16} className="relative z-10" />
              <span className="relative z-10">Github</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-accent transition-colors duration-300
                hover:bg-white/10 rounded-lg backdrop-blur-sm"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle - Visible on mobile only */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-white hover:text-accent transition-colors duration-300
              hover:bg-white/10 rounded-lg backdrop-blur-sm"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={20} className="sm:w-6 sm:h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-white/20"
            >
              <div
                className="relative bg-gradient-to-b from-slate-600/5 to-slate-800/10 backdrop-blur-xl rounded-b-xl sm:rounded-b-2xl
                supports-[backdrop-filter]:bg-white/10 supports-[backdrop-filter]:backdrop-blur-xl"
              >
                <div className="px-3 xs:px-4 sm:px-6 py-4 sm:py-6 space-y-2 sm:space-y-3">
                  {/* Show all items on mobile, remaining items on tablet */}
                  {(window.innerWidth < 768 ? navItems : navItems.slice(4)).map(
                    (item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left py-2.5 sm:py-3 px-3 sm:px-4 text-primary hover:text-accent 
                        transition-all duration-300 font-medium rounded-lg text-sm sm:text-base
                        hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg
                        active:bg-white/15 active:scale-95"
                      >
                        {item.name}
                      </motion.button>
                    )
                  )}

                  {/* GitHub Button for Mobile */}
                  <motion.button
                    onClick={openLinkedInModal}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay:
                        (window.innerWidth < 768
                          ? navItems.length
                          : navItems.slice(4).length) * 0.1,
                      duration: 0.3,
                    }}
                    className="block w-full text-left py-2.5 sm:py-3 px-3 sm:px-4 text-primary hover:text-accent 
                    transition-all duration-300 font-medium rounded-lg text-sm sm:text-base
                    hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg
                    active:bg-white/15 active:scale-95 flex items-center space-x-2"
                  >
                    <Github size={16} />
                    <span>Github</span>
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay:
                        (window.innerWidth < 768
                          ? navItems.length + 1
                          : navItems.slice(4).length + 1) * 0.1,
                      duration: 0.3,
                    }}
                    className="pt-3 sm:pt-4 border-t border-white/20"
                  >
                    <motion.a
                      href="https://drive.google.com/file/d/1-92hqDWKWzNB6Pg0PcqeIclKzDsRRMan/view"
                      download
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-accent to-highlight text-black font-semibold text-sm sm:text-base
                        rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
                        flex items-center space-x-2 justify-center backdrop-blur-sm
                        hover:from-accent/90 hover:to-highlight/90"
                    >
                      <Download size={16} />
                      <span>Download Resume</span>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* GitHub Modal */}
      <AnimatePresence>
        {isLinkedInModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            onClick={closeLinkedInModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <button
                  onClick={closeLinkedInModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
                <LinkedInProfile />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
