"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  Database,
  Shield,
  Globe,
  Cpu,
  ArrowRight,
  Star,
  Zap,
  Trophy,
} from "lucide-react";
import myPhoto from "../app/assets/namanKumar.png";

const About = () => {
  const skills = [
    {
      name: "Backend Development",
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
      level: 95,
      category: "Backend",
    },
    {
      name: "Blockchain Development",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      level: 90,
      category: "Blockchain",
    },
    {
      name: "Smart Contracts",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      level: 85,
      category: "Blockchain",
    },
    {
      name: "DevOps",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      level: 80,
      category: "DevOps",
    },
  ];

  const timeline = [
    {
      year: "2020-2024",
      title:
        "Bachelor of Technology Computer Science And Engineering (Hons) Cyber Security",
      institution: "Quantum School of Technology",
      description:
        "Graduated with CGPA of 8.4, focusing on cybersecurity and modern web technologies",
      icon: <GraduationCap className="w-8 h-8 sm:w-5 sm:h-5" />,
      status: "completed",
    },
    {
      year: "2023",
      title: "Started Blockchain Journey",
      institution: "Self-taught & Community Learning",
      description:
        "Dove deep into blockchain technology, smart contracts, and decentralized applications",
      icon: <Globe className="w-8 h-8 sm:w-5 sm:h-5" />,
      status: "completed",
    },
    {
      year: "2024",
      title: "Professional Development",
      institution: "Industry Experience",
      description:
        "Gained hands-on experience through internships and real-world projects",
      icon: <Code className="w-8 h-8 sm:w-5 sm:h-5" />,
      status: "completed",
    },
  ];

  const achievements = [
    {
      number: "20+",
      label: "Smart Contracts",
      icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "2+",
      label: "Years Experience",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "99%",
      label: "Success Rate",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        // delayChildren: 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative section-padding bg-gradient-to-br from-primary via-primary/98 to-primary/95 overflow-hidden min-h-screen"
    >
      <div className="container-width relative z-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-accent/10 to-highlight/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-l from-highlight/10 to-accent/10 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-gradient-conic from-accent/5 via-highlight/5 to-accent/5 rounded-full blur-3xl opacity-30 animate-spin slow-spin"></div>
        </div>

        <div className="container-width relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Enhanced Section Title */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-12 sm:mb-20"
            >
              <motion.div
                className="inline-block mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
              >
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-accent/20 to-highlight/20 backdrop-blur-sm rounded-full text-accent text-xs sm:text-sm font-medium border border-accent/20 mb-4">
                  Get to know me
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-textLight mb-4 sm:mb-6 bg-gradient-to-r from-textLight via-accent to-highlight bg-clip-text text-transparent">
                About Me
              </h2>
              <motion.div
                className="w-20 h-1 sm:w-32 sm:h-1.5 bg-gradient-to-r from-accent via-highlight to-accent mx-auto mb-6 sm:mb-8 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              ></motion.div>
              <p className="text-base sm:text-xl text-textMuted max-w-4xl mx-auto leading-relaxed px-4">
                A passionate developer crafting innovative solutions that bridge
                traditional web development with the decentralized future of
                technology.
              </p>
            </motion.div>

            {/* Hero Profile Card */}
            <motion.div variants={itemVariants} className="mb-12 sm:mb-20">
              <div className="relative glass-card p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
                  {/* Enhanced Profile Image */}
                  <motion.div
                    className="relative group flex-shrink-0"
                    variants={floatingVariants}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-highlight rounded-2xl sm:rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br rounded-2xl sm:rounded-3xl p-1">
                        <img
                          src={myPhoto.src}
                          alt="Naman Kumar"
                          className="w-full h-full object-cover rounded-2xl sm:rounded-3xl border-2 border-white/20"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full border-2 sm:border-4 border-primary animate-pulse"></div>
                    </div>
                  </motion.div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-textLight mb-2">
                        Naman Kumar
                      </h3>
                      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 mb-6">
                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-full text-accent font-medium text-xs sm:text-sm border border-accent/30">
                          Backend Developer
                        </span>
                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-highlight/20 to-accent/20 rounded-full text-highlight font-medium text-xs sm:text-sm border border-highlight/30">
                          Blockchain Developer
                        </span>
                      </div>
                    </motion.div>

                    <div className="space-y-3 sm:space-y-4 text-textMuted text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
                      <p>
                        🎓 Graduated from Quantum School of Technology with a
                        BTech in Computer Science and Engineering (Hons) Cyber
                        Security with CGPA 8.4, I'm dedicated to creating
                        innovative solutions that seamlessly blend backend
                        development with cutting-edge blockchain technologies.
                      </p>
                      <p>
                        🚀 My tech journey is fueled by insatiable curiosity and
                        a passion for continuous learning. From building
                        scalable backend systems to developing smart contracts
                        and dApps, I thrive on transforming complex challenges
                        into elegant solutions.
                      </p>
                    </div>

                    {/* Achievement Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.0 * index }}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 blur-sm"></div>
                          <div className="relative glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 text-center">
                            <div className="text-accent mb-2 flex justify-center">
                              {achievement.icon}
                            </div>
                            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                              {achievement.number}
                            </div>
                            <div className="text-xs sm:text-sm text-textMuted">
                              {achievement.label}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Timeline Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Enhanced Skills Section */}
              <motion.div variants={itemVariants}>
                <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl h-full">
                  <div className="flex items-center gap-3 mb-8 sm:mb-10">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-xl sm:rounded-2xl">
                      <Code className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <h3 className="text-xl sm:text-3xl font-heading font-bold text-textLight">
                      Technical Arsenal
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index, ease: "easeOut" }}
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="group"
                      >
                        <div className="relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                          <div className="relative glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 group-hover:border-accent/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <span className="text-xl sm:text-2xl">
                                  {skill.icon}
                                </span>
                                <div>
                                  <div className="font-semibold text-textLight text-sm sm:text-base">
                                    {skill.name}
                                  </div>
                                  <div className="text-xs text-accent">
                                    {skill.category}
                                  </div>
                                </div>
                              </div>
                              <span className="text-base sm:text-lg font-bold text-highlight">
                                {skill.level}%
                              </span>
                            </div>

                            <div className="relative">
                              <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{
                                    delay: index * 0.1 + 0.5,
                                    duration: 1.5,
                                    ease: "easeOut",
                                  }}
                                  className="h-full bg-gradient-to-r from-accent via-highlight to-accent rounded-full relative"
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Timeline */}
              <motion.div variants={itemVariants}>
                <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl h-full">
                  <div className="flex items-center gap-3 mb-8 sm:mb-10">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-highlight/20 to-accent/20 rounded-xl sm:rounded-2xl">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-highlight" />
                    </div>
                    <h3 className="text-xl sm:text-3xl font-heading font-bold text-textLight">
                      Journey Timeline
                    </h3>
                  </div>

                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-highlight to-accent opacity-10"></div>

                    <div className="space-y-6 sm:space-y-8">
                      {timeline.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          className="relative flex gap-4 sm:gap-6 group"
                        >
                          {/* Timeline Node */}
                          <div
                            className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                              item.status === "current"
                                ? "bg-accent shadow-lg shadow-accent/25"
                                : "bg-accent border-highlight/30"
                            }`}
                          >
                            <div className="text-black">{item.icon}</div>
                            {item.status === "current" && (
                              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-highlight rounded-xl sm:rounded-2xl opacity-20 blur animate-pulse"></div>
                            )}
                          </div>

                          {/* Timeline Content */}
                          <div className="flex-grow min-w-0 pt-1 sm:pt-2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                              <span
                                className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${
                                  item.status === "current"
                                    ? "bg-accent/20 text-accent border-accent/30"
                                    : "bg-highlight/20 text-highlight border-highlight/30"
                                }`}
                              >
                                {item.year}
                              </span>
                              {item.status === "current" && (
                                <span className="inline-block px-2 py-1 bg-green-400/20 text-green-400 rounded-full text-xs font-medium border border-green-400/30">
                                  Current
                                </span>
                              )}
                            </div>

                            <h4 className="font-bold text-textLight text-base sm:text-xl mb-1 group-hover:text-accent transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-highlight font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                              {item.institution}
                            </p>
                            <p className="text-textMuted leading-relaxed text-sm sm:text-base">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="mt-12 sm:mt-20 text-center"
            >
              <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-textLight mb-4">
                  Ready to bring your ideas to life?
                </h3>
                <p className="text-textMuted mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                  Let's collaborate and create something amazing together. From
                  concept to deployment, I'm here to turn your vision into
                  reality.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent to-highlight text-primary font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  Let's Connect
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <style jsx>{`
          .slow-spin {
            animation: spin 20s linear infinite;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;
