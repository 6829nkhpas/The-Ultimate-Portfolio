"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import myPhoto from "@/app/assets/namanKumar.png";

// Loading Component
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-primary z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center mx-auto">
            <img
              src={myPhoto.src}
              alt="Naman Kumar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="w-2 h-2 bg-accent rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay to ensure smooth transition
      setTimeout(() => setShowContent(true), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoading && (
          <PageTransition>
            <div className="min-h-screen bg-primary">
              {/* Navigation */}
              <Navigation />

              {/* Main Content */}
              <main className="relative z-10">
                {/* Hero Section */}
                <Hero />

                {/* About Section */}
                <About />
                {/* Horizontal Rule */}
                <div className="w-full h-1 bg-gradient-to-r from-accent to-highlight my-4" />

                {/* Experience Section */}
                <Experience />

                {/* Projects Section */}
                <Projects />

                {/* Horizontal Rule */}
                <div className="w-full h-1 bg-gradient-to-r from-accent to-highlight my-4" />

                {/* Open Source Contributions Section */}
                <OpenSourceContributions />

                {/* Horizontal Rule */}
                <div className="w-full h-1 bg-gradient-to-r from-accent to-highlight my-4" />

                {/* Certifications Section */}
                <Certifications />

                {/* Leadership Section */}
                <Leadership />

                {/* Horizontal Rule */}
                <div className="w-full h-1 bg-gradient-to-r from-accent to-highlight my-4" />

                {/* Contact Section */}
                <Contact />
              </main>

              {/* Footer */}
              <Footer />

              {/* Background Elements */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 8 + i,
                      repeat: Infinity,
                      delay: i * 2,
                    }}
                    className={`absolute w-2 h-2 bg-accent/20 rounded-full`}
                    style={{
                      top: `${10 + i * 15}%`,
                      left: `${5 + i * 15}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </PageTransition>
        )}
      </AnimatePresence>
    </>
  );
}
