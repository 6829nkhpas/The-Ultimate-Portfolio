"use client";

import { motion } from "framer-motion";
import {
    Server,
    Database,
    Zap,
    Shield,
    Code2,
    GitBranch,
    Cloud,
    Terminal,
    Cpu,
    Network,
    Lock,
    Gauge,
} from "lucide-react";

const BackendShowcase = () => {
    const backendAchievements = [
        {
            icon: <Server className="w-6 h-6" />,
            title: "Scalable API Architecture",
            description:
                "Built RESTful and GraphQL APIs serving 1000+ concurrent users with 99.9% uptime",
            metrics: "1000+ Users",
            color: "from-blue-500 to-cyan-600",
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Database Optimization",
            description:
                "Optimized MongoDB queries and PostgreSQL schemas, reducing latency by 40%",
            metrics: "40% Faster",
            color: "from-green-500 to-emerald-600",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Performance Engineering",
            description:
                "Implemented Redis caching and load balancing, improving response time by 60%",
            metrics: "60% Improvement",
            color: "from-yellow-500 to-orange-600",
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Security Implementation",
            description:
                "Deployed JWT authentication, OAuth2, and implemented OWASP security best practices",
            metrics: "99% Success Rate",
            color: "from-purple-500 to-pink-600",
        },
    ];

    const technicalStack = [
        {
            category: "Runtime & Frameworks",
            icon: <Code2 className="w-5 h-5" />,
            technologies: [
                { name: "Node.js", expertise: 92 },
                { name: "Express.js", expertise: 90 },
                { name: "Nest.js", expertise: 82 },
            ],
            color: "from-green-400 to-emerald-500",
        },
        {
            category: "Databases",
            icon: <Database className="w-5 h-5" />,
            technologies: [
                { name: "MongoDB", expertise: 85 },
                { name: "PostgreSQL", expertise: 88 },
                { name: "Redis", expertise: 80 },
            ],
            color: "from-blue-400 to-cyan-500",
        },
        {
            category: "API Technologies",
            icon: <Network className="w-5 h-5" />,
            technologies: [
                { name: "REST APIs", expertise: 88 },
                { name: "GraphQL", expertise: 85 },
                { name: "gRPC", expertise: 80 },
            ],
            color: "from-purple-400 to-pink-500",
        },
        {
            category: "DevOps & Cloud",
            icon: <Cloud className="w-5 h-5" />,
            technologies: [
                { name: "Docker", expertise: 85 },
                { name: "Kubernetes", expertise: 80 },
                { name: "AWS", expertise: 82 },
            ],
            color: "from-orange-400 to-red-500",
        },
    ];

    const architecturePatterns = [
        {
            icon: <GitBranch className="w-6 h-6" />,
            title: "Microservices Architecture",
            description:
                "Designed and deployed distributed systems with service discovery and inter-service communication",
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Authentication & Authorization",
            description:
                "Implemented secure JWT-based auth, OAuth2, and role-based access control (RBAC)",
        },
        {
            icon: <Gauge className="w-6 h-6" />,
            title: "Performance Optimization",
            description:
                "Applied caching strategies, database indexing, and query optimization techniques",
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Real-time Systems",
            description:
                "Built WebSocket servers and event-driven architectures using Redis pub/sub",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
            id="backend"
            className="relative min-h-screen bg-gradient-to-br from-primary via-primary/98 to-primary/95 py-20 overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                            <Terminal className="w-4 h-4 text-green-400 mr-2" />
                            <span className="text-green-400 font-semibold text-sm">
                                Backend Engineering Excellence
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold text-textLight mb-6 leading-tight">
                            Backend{" "}
                            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                                Architecture
                            </span>
                        </h2>
                        <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
                            Building scalable, secure, and high-performance server-side
                            solutions with modern backend technologies and architectural
                            patterns
                        </p>
                    </motion.div>

                    {/* Key Achievements Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                    >
                        {backendAchievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                                    <div
                                        className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-4 text-white`}
                                    >
                                        {achievement.icon}
                                    </div>
                                    <h3 className="text-lg font-heading font-bold text-textLight mb-2">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-sm text-textMuted leading-relaxed mb-4">
                                        {achievement.description}
                                    </p>
                                    <div
                                        className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} bg-opacity-20 rounded-full`}
                                    >
                                        <span className="text-sm font-bold text-white">
                                            {achievement.metrics}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Technical Stack Showcase */}
                    <motion.div variants={itemVariants} className="mb-20">
                        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl">
                                    <Server className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-3xl font-heading font-bold text-textLight">
                                    Backend Technology Mastery
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {technicalStack.map((stack, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 h-full">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div
                                                    className={`p-2 bg-gradient-to-r ${stack.color} rounded-xl text-white`}
                                                >
                                                    {stack.icon}
                                                </div>
                                                <h4 className="font-bold text-textLight text-sm">
                                                    {stack.category}
                                                </h4>
                                            </div>
                                            <div className="space-y-4">
                                                {stack.technologies.map((tech, techIndex) => (
                                                    <div key={techIndex}>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-sm font-medium text-textLight">
                                                                {tech.name}
                                                            </span>
                                                            <span className="text-xs font-bold text-accent">
                                                                {tech.expertise}%
                                                            </span>
                                                        </div>
                                                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: `${tech.expertise}%` }}
                                                                transition={{
                                                                    delay: index * 0.1 + techIndex * 0.1,
                                                                    duration: 1,
                                                                }}
                                                                className={`h-full bg-gradient-to-r ${stack.color} rounded-full`}
                                                            ></motion.div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Architecture Patterns */}
                    <motion.div variants={itemVariants}>
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-heading font-bold text-textLight mb-4">
                                System Design & Architecture Patterns
                            </h3>
                            <p className="text-textMuted max-w-2xl mx-auto">
                                Expertise in designing scalable, maintainable, and secure
                                backend architectures
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {architecturePatterns.map((pattern, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="glass-card p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-highlight rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                            {pattern.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-textLight mb-2">
                                                {pattern.title}
                                            </h4>
                                            <p className="text-sm text-textMuted leading-relaxed">
                                                {pattern.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-16 glass-card p-8 rounded-3xl border border-white/10"
                    >
                        <h3 className="text-2xl font-heading font-bold text-textLight mb-4">
                            Let's Build Scalable Backend Solutions Together
                        </h3>
                        <p className="text-textMuted mb-6 max-w-2xl mx-auto">
                            From API design to system architecture, I bring comprehensive
                            backend expertise to every project.
                        </p>
                        <motion.a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                const projectsSection = document.querySelector("#projects");
                                if (projectsSection) {
                                    projectsSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-primary font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Terminal className="w-5 h-5" />
                            <span>View Backend Projects</span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BackendShowcase;
