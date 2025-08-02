"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Chainshift",
      position: "Blockchain & Backend Developer Intern",
      duration: "Oct 2023 - 2024",
      location: "Greater Noida (Remote)",
      type: "Internship",
      description:
        "Developed, tested, and deployed smart contracts and blockchain solutions. Integrated blockchain technology into existing systems.",
      technologies: [
        "Solidity",
        "Smart Contracts",
        "Blockchain",
        "Backend Development",
        "Security",
      ],
      achievements: [
        "Developed, tested, and deployed over 20 smart contracts, achieving a 99% success rate with zero security incidents",
        "Successfully integrated blockchain solutions into existing systems, reducing processing time by 30% and increasing transparency in transactional records",
        "Conducted in-depth blockchain research, implementing optimizations that improved performance by 25% and enhanced security measures, reducing vulnerability risks by 40%",
      ],
      companyUrl: "https://chainshift.in",
      color: "from-blue-500 to-cyan-600",
    },
    {
      company: "Thecyberhost",
      position: "Application Pentester",
      duration: "Aug 2023 - Oct 2023",
      location: "New Delhi (Remote)",
      type: "Internship",
      description:
        "Executed penetration tests on blockchain networks and applications. Introduced advanced security protocols and streamlined deployment processes.",
      technologies: [
        "Penetration Testing",
        "Security",
        "Blockchain Security",
        "DevOps",
        "Deployment",
      ],
      achievements: [
        "Executed penetration tests on blockchain networks, identifying and resolving 15+ vulnerabilities, enhancing application security and stability",
        "Introduced advanced security protocols, reducing system breaches by 35% and establishing continuous monitoring for enhanced security",
        "Streamlined deployment processes, reducing deployment time by 50% and improving team productivity",
      ],
      companyUrl: "https://thecyberhost.com",
      color: "from-red-500 to-pink-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative section-padding bg-gradient-to-br from-primary via-primary/98 to-primary/95 overflow-hidden min-h-screen"
    >
      <div className="container-width relative z-20 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-textLight mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto mb-8"></div>
            <p className="text-lg text-textMuted max-w-3xl mx-auto">
              My journey through various roles has shaped me into a versatile
              developer with expertise spanning from traditional web development
              to cutting-edge blockchain technologies.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-highlight rounded-full opacity-30"></div>

            <div>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`relative flex flex-col items-start gap-6 md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-accent to-highlight rounded-full border-4 border-primary z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    } z-10`}
                  >
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="glass-card p-6 hover:shadow-card-hover transition-all duration-300"
                    >
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-heading font-bold text-textLight">
                              {exp.company}
                            </h3>
                            <motion.a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="text-accent hover:text-highlight transition-colors"
                            >
                              <ExternalLink size={16} />
                            </motion.a>
                          </div>
                          <h4 className="text-lg font-semibold gradient-text mb-2">
                            {exp.position}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-textMuted">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${exp.color} text-white font-medium`}
                            >
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-textMuted mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-accent mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-textMuted flex items-start"
                            >
                              <span className="text-highlight mr-2 mt-1">
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-white/5 border border-accent/20 rounded-full text-xs text-accent font-medium hover:bg-accent/10 transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="w-0 md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div variants={cardVariants} className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-textLight mb-4">
                Ready for New Opportunities
              </h3>
              <p className="text-textMuted mb-6">
                I'm always excited to take on new challenges and work with
                innovative teams. Let's build something amazing together!
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
