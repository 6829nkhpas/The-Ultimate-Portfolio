"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Play,
  Code,
  Database,
  Globe,
  ArrowRight,
  Zap,
  Star,
} from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Blockchain Based Voting System",
      category: "Governance",
      description: "Transparent, decentralized voting application on Ethereum",
      longDescription:
        "Developed a transparent, decentralized voting application on Ethereum, achieving a 100% tamper-proof record. Integrated MetaMask for secure user authentication, with the system handling up to 500 votes per minute without latency.",
      image:
        "https://res.cloudinary.com/dtgiujxll/image/upload/v1753882749/vstffhh3fw7em4an4j5l.png",
      technologies: ["Solidity", "React.js", "Truffle", "Web3.js", "MetaMask"],
      features: [
        "100% tamper-proof voting records",
        "MetaMask integration for secure authentication",
        "Handles 500 votes per minute without latency",
        "Real-time vote counting and monitoring",
        "Immutable election records",
      ],
      githubUrl: "https://github.com/6829nkhpas/blockchain-voting",
      liveUrl: "Try it Here",
      status: "Live",
      featured: true,
    },
    {
      id: 2,
      title: "Rust Wallet on ICP Blockchain",
      category: "Cryptocurrency",
      description:
        "High-efficiency digital wallet using Rust on Internet Computer Protocol",
      longDescription:
        "Built a high-efficiency digital wallet using Rust, deployed on the Internet Computer Protocol (ICP) blockchain, enabling secure and low-cost digital asset transactions. The wallet achieved a 20% reduction in transaction fees and enhanced scalability, capable of handling over 1,000 concurrent users, optimized for DeFi applications.",
      image:
        "https://res.cloudinary.com/dtgiujxll/image/upload/v1753882750/afjf3wyfqijpifrv1pcp.png",
      technologies: ["Rust", "ICP", "Blockchain", "DeFi", "Cryptography"],
      features: [
        "20% reduction in transaction fees",
        "Handles 1,000+ concurrent users",
        "Optimized for DeFi applications",
        "Secure digital asset transactions",
        "Low-cost transaction processing",
      ],
      githubUrl: "https://github.com/6829nkhpas/rust-wallet-icp",
      liveUrl: null,
      status: "Development",
      featured: false,
    },
    {
      id: 3,
      title: "Solona Based defi lending pool using anchor rust framework",
      category: "Blockchain",
      description:
        "Modern defi lending pool on Solana blockchain using anchor rust framework for smart contracts",
      longDescription:
        "Created a modern defi lending pool on Solana blockchain, enabling users to apply for loans and credit to their credit score, and manage their finances. using anchor rust framework for smart contracts",
      image:
        "https://res.cloudinary.com/dtgiujxll/image/upload/v1753882751/dpzltqm8rjzfzdhnz2qw.png",
      technologies: [
        "Solana",
        "TypeScript",
        "Smart Contracts",
        "Solana Pay", "Defi", "Rust", "Anchor",
        "Solana Pay", "Lending Pool",
      ],
      features: [
        "Interactive animations with Framer Motion", "Rust", "Anchor",
        "40% increase in user engagement", "Rust", "Anchor",
        "Responsive design for all devices",
        "Modern space-themed UI/UX", "Rust", "Anchor",
        "Optimized performance and loading", "Rust", "Anchor",
      ],
      githubUrl: "https://github.com/6829nkhpas/Defi_Leding-Pool",
      liveUrl: "Live Here",
      status: "Live",
      featured: true,
    },
    {
      id: 4,
      title: "Cyber Hunter Technical Club Management System using MERN stack",
      category: "Web",
      description:
        "MERN-stack platform for project tracking and team collaboration using MERN stack",
      longDescription:
        "Developed a MERN-stack-based platform to streamline project tracking, team collaboration, and technical talent discovery within a college ecosystem. The system enables students to submit and manage projects, earn points based on performance, and rank on a universal leaderboard, while connecting with startups for real-world freelancing opportunities.",
      image:
        "https://res.cloudinary.com/dtgiujxll/image/upload/v1753190341/gzmkkhv3c6rma9zzlplz.png",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "MERN Stack",
      ],
      features: [
        "Project tracking and management",
        "Team collaboration tools",
        "Performance-based point system",
        "Universal leaderboard ranking",
        "Startup connection for freelancing",
      ],
      githubUrl: "https://github.com/6829nkhpas/cyberhunter-club",
      liveUrl: "Live Here",
      status: "Live",
      featured: false,
    },
  ];

  // const categories = ['All', 'Blockchain', 'Cryptocurrency', 'Social', 'Governance', 'Web', 'App', 'Enterprise']
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-400 bg-green-400/20 border-green-400/30";
      case "Beta":
        return "text-yellow-400 bg-yellow-400/20 border-yellow-400/30";
      case "Development":
        return "text-accent bg-accent/20 border-accent/30";
      default:
        return "text-textMuted bg-textMuted/20 border-textMuted/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Blockchain":
        return <Code className="w-4 h-4" />;
      case "Cryptocurrency":
        return <Zap className="w-4 h-4" />;
      case "Web":
        return <Globe className="w-4 h-4" />;
      case "App":
        return <Database className="w-4 h-4" />;
      case "Enterprise":
        return <Database className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/3 to-highlight/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <Star className="w-4 h-4 text-accent mr-2" />
              <span className="text-accent font-semibold text-sm">
                Featured Work
              </span>
            </div>
            <h2 className="flex gap-2 items-center justify-center text-5xl md:text-6xl font-heading font-bold text-textLight mb-6 leading-tight">
              Creative
              <span className=" bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
              Innovative solutions spanning blockchain development, AI
              integration, and cutting-edge web applications
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`relative group cursor-pointer ${
                    project.featured ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-accent/30 hover:shadow-card-hover">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <div className="flex items-center px-3 py-1.5 bg-gradient-to-r from-accent to-highlight rounded-full">
                          <Star className="w-3 h-3 text-primary mr-1.5" />
                          <span className="text-xs font-semibold text-primary">
                            Featured
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div
                        className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </div>
                    </div>

                    {/* Project Image */}
                    <div
                      className={`relative ${
                        project.featured ? "h-64" : "h-48"
                      } overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-6xl opacity-20 text-accent">
                            {getCategoryIcon(project.category)}
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        className="absolute inset-0 bg-accent/20 backdrop-blur-sm flex items-center justify-center z-20"
                      >
                        <div className="text-center">
                          <Play className="w-12 h-12 text-textLight mx-auto mb-2" />
                          <p className="text-textLight font-semibold">
                            View Details
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-heading font-bold text-textLight group-hover:text-accent transition-colors mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-2 mb-3">
                            {getCategoryIcon(project.category)}
                            <span className="text-accent text-sm font-semibold">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-textMuted leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies
                          .slice(0, project.featured ? 5 : 3)
                          .map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-xs bg-white/5 border border-white/10 text-accent rounded-lg font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length >
                          (project.featured ? 5 : 3) && (
                          <span className="px-3 py-1 text-xs text-textMuted border border-white/10 rounded-lg">
                            +
                            {project.technologies.length -
                              (project.featured ? 5 : 3)}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-3">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              whileHover={{ scale: 1.1 }}
                              className="p-2 bg-accent/10 border border-accent/20 rounded-lg text-accent hover:bg-accent/20 transition-colors"
                              title="View Live Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          )}
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-white/5 border border-white/10 rounded-lg text-textMuted hover:text-textLight hover:bg-white/10 transition-colors"
                            title="View Source Code"
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        </div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center text-accent group-hover:text-highlight transition-colors"
                        >
                          <span className="text-sm font-semibold mr-2">
                            Learn More
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-card-hover"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          {project.featured && (
                            <div className="flex items-center px-3 py-1.5 bg-gradient-to-r from-accent to-highlight rounded-full">
                              <Star className="w-3 h-3 text-primary mr-1.5" />
                              <span className="text-xs font-semibold text-primary">
                                Featured
                              </span>
                            </div>
                          )}
                          <div
                            className={`px-3 py-1.5 rounded-full border text-sm font-semibold ${getStatusColor(
                              project.status
                            )}`}
                          >
                            {project.status}
                          </div>
                        </div>
                        <h3 className="text-4xl font-heading font-bold text-textLight">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(project.category)}
                          <span className="text-accent font-semibold">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => setSelectedProject(null)}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/5 border border-white/10 rounded-xl text-textMuted hover:text-textLight hover:bg-white/10 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </motion.button>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <p className="text-textMuted text-lg leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-heading font-semibold text-textLight flex items-center">
                          <Zap className="w-5 h-5 text-accent mr-2" />
                          Key Features
                        </h4>
                        <div className="space-y-3">
                          {project.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start space-x-3 p-3 bg-white/[0.02] border border-white/10 rounded-xl"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-textMuted">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-heading font-semibold text-textLight flex items-center">
                          <Code className="w-5 h-5 text-accent mr-2" />
                          Technologies
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {project.technologies.map((tech, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="p-3 bg-white/[0.02] border border-accent/20 rounded-xl text-center"
                            >
                              <span className="text-accent font-semibold text-sm">
                                {tech}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-accent to-highlight text-primary font-semibold rounded-xl shadow-glow transition-all"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>View Live Demo</span>
                        </motion.a>
                      )}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 text-textLight font-semibold rounded-xl hover:bg-white/10 transition-all"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Source</span>
                      </motion.a>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
