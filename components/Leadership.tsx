"use client";

import { motion } from "framer-motion";
import {
  Users,
  Award,
  Calendar,
  ExternalLink,
  Shield,
  Target,
  BookOpen,
  Zap,
} from "lucide-react";

const Leadership = () => {
  const achievements = [
    {
      title: "President",
      organization: "Cyber-Security Technical Club",
      period: "2023 - Present",
      description:
        "Led a team in hosting hackathons and managing live projects for 300+ members, increasing engagement by 50% and providing hands-on cybersecurity experience through workshops and collaborative projects.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      stats: [
        { label: "Team Members", value: "300+" },
        { label: "Events Organized", value: "20+" },
        { label: "Students Mentored", value: "150+" },
      ],
    },
    {
      title: "Hackathon Organizer",
      organization: "Multiple Tech Events",
      period: "2023 - 2024",
      description:
        "Organized and coordinated several hackathons, focusing on blockchain and cybersecurity challenges.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      stats: [
        { label: "Hackathons", value: "8" },
        { label: "Participants", value: "500+" },
        { label: "Prize Pool", value: "$10K+" },
      ],
    },
    {
      title: "Workshop Facilitator",
      organization: "Tech Community",
      period: "2022 - Present",
      description:
        "Conducted workshops on blockchain development, cybersecurity, and modern web technologies.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      stats: [
        { label: "Workshops", value: "20+" },
        { label: "Attendees", value: "300+" },
        { label: "Topics Covered", value: "12" },
      ],
    },
  ];

  const initiatives = [
    {
      title: "Cyberhunter.space Website",
      description:
        "Designed and developed the official website for our cybersecurity club, featuring member portal, event management, and learning resources.",
      link: "https://cyberhunter.space",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      impact: "Increased club engagement by 150%",
    },
    {
      title: "Blockchain Workshop Series",
      description:
        "Created a comprehensive 6-week workshop series introducing students to blockchain technology and Web3 development.",
      link: null,
      tech: ["Solidity", "Web3.js", "MetaMask", "Remix IDE"],
      impact: "80+ students completed the program",
    },
    {
      title: "Cybersecurity Bootcamp",
      description:
        "Organized intensive bootcamps covering ethical hacking, penetration testing, and secure coding practices.",
      link: null,
      tech: ["Kali Linux", "Burp Suite", "OWASP", "Security Tools"],
      impact: "90% job placement rate for participants",
    },
    {
      title: "Mentorship Program",
      description:
        "Established a peer mentorship program connecting experienced members with newcomers for guidance and support.",
      link: null,
      tech: ["Leadership", "Communication", "Technical Guidance"],
      impact: "95% mentee satisfaction rate",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      id="leadership"
      className="section-padding bg-gradient-to-b from-primary to-primary/95 min-h-screen"
    >
      <div className="container-width">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-textLight mb-4">
              Leadership & Community
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto mb-8"></div>
            <p className="text-lg text-textMuted max-w-3xl mx-auto">
              Passionate about building communities, mentoring fellow
              developers, and organizing events that bring together technology
              enthusiasts to learn and grow together.
            </p>
          </motion.div>

          {/* Leadership Roles */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-textLight mb-8 text-center">
              Leadership Positions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 text-center hover:shadow-card-hover transition-all duration-300"
                >
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white`}
                  >
                    {achievement.icon}
                  </div>

                  <h4 className="text-xl font-heading font-bold text-textLight mb-2">
                    {achievement.title}
                  </h4>

                  <p className="text-accent font-medium mb-2">
                    {achievement.organization}
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-textMuted mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">{achievement.period}</span>
                  </div>

                  <p className="text-textMuted text-sm leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {achievement.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold gradient-text">
                          {stat.value}
                        </div>
                        <div className="text-xs text-textMuted">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Initiatives */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-textLight mb-8 text-center">
              Key Initiatives & Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="glass-card p-6 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-heading font-bold text-textLight">
                      {initiative.title}
                    </h4>
                    {initiative.link && (
                      <motion.a
                        href={initiative.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-accent hover:text-highlight transition-colors"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>

                  <p className="text-textMuted text-sm leading-relaxed mb-4">
                    {initiative.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {initiative.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-white/5 text-accent px-2 py-1 rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-highlight" />
                    <span className="text-sm font-medium text-highlight">
                      {initiative.impact}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Community Impact */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h3 className="text-3xl font-heading font-bold text-textLight mb-4">
              Community Impact
            </h3>

            <p className="text-textMuted max-w-3xl mx-auto mb-8 leading-relaxed">
              Through my leadership roles and community initiatives, I've had
              the privilege of impacting hundreds of students and professionals
              in their technology journey. From organizing hackathons to
              conducting workshops, every effort has been focused on creating an
              inclusive and supportive learning environment.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  500+
                </div>
                <div className="text-textMuted text-sm">Students Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <div className="text-textMuted text-sm">Events Organized</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  100+
                </div>
                <div className="text-textMuted text-sm">Hours of Mentoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-textMuted text-sm">Partnerships Built</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://cyberhunter.space"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <ExternalLink size={18} />
                <span>Visit Cyberhunter Club</span>
              </motion.a>

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
                className="btn-secondary flex items-center space-x-2"
              >
                <Users size={18} />
                <span>Collaborate With Me</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
