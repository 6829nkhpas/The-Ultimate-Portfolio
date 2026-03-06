"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Github,
    ExternalLink,
    GitCommit,
    Code,
    Star,
    GitPullRequest,
    Users,
} from "lucide-react";

interface Contribution {
    id: number;
    organization: string;
    repository: string;
    commits: number;
    description: string;
    githubUrl: string;
    status: "Active" | "Completed" | "Ongoing";
    technologies?: string[];
    featured?: boolean;
    contributionType?: string;
}

const OpenSourceContributions = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const contributions: Contribution[] = [
        {
            id: 1,
            organization: "Zulip (GSoC)",
            repository: "zulip/zulip",
            commits: 5,
            description:
                "Google Summer of Code contribution. Optimized Attachment objects by replacing the full messages field with message_ids, reducing API payload sizes and improving data fetching efficiency.",
            githubUrl: "https://github.com/zulip/zulip/pull/38052",
            status: "Completed",
            technologies: ["Python", "Django", "TypeScript"],
            featured: true,
            contributionType: "API & Backend Optimization",
        },
        {
            id: 2,
            organization: "Zulip (GSoC)",
            repository: "zulip/zulip",
            commits: 3,
            description:
                "Google Summer of Code contribution. Enhanced the WebSocket event system to dispatch real-time notifications to all active recipients immediately upon attachment deletion.",
            githubUrl: "https://github.com/zulip/zulip/pull/38054",
            status: "Active",
            technologies: ["Python", "Django", "WebSockets"],
            featured: true,
            contributionType: "Real-time Event System",
        },
        {
            id: 3,
            organization: "Open Healthcare Network (GSoC)",
            repository: "ohcnetwork/care_fe",
            commits: 6,
            description:
                "Google Summer of Code contribution. Resolved complex UI alignment issues by correcting component execution order and implementing robust conditional rendering rules.",
            githubUrl: "https://github.com/ohcnetwork/care_fe/pull/14958",
            status: "Completed",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            featured: false,
            contributionType: "UI/UX Bug Resolution",
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active":
                return "text-green-400 bg-green-400/20 border-green-400/30";
            case "Completed":
                return "text-blue-400 bg-blue-400/20 border-blue-400/30";
            case "Ongoing":
                return "text-yellow-400 bg-yellow-400/20 border-yellow-400/30";
            default:
                return "text-textMuted bg-textMuted/20 border-textMuted/30";
        }
    };

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

    return (
        <section
            id="opensource"
            className="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-highlight/5 rounded-full blur-3xl animate-float"></div>
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
                            <GitPullRequest className="w-4 h-4 text-accent mr-2" />
                            <span className="text-accent font-semibold text-sm">
                                Community Contributions
                            </span>
                        </div>
                        <h2 className="flex gap-2 items-center justify-center text-5xl md:text-6xl font-heading font-bold text-textLight mb-6 leading-tight">
                            Open Source
                            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                                Contributions
                            </span>
                        </h2>
                        <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
                            Contributing to the open source community through code, documentation,
                            and collaboration on impactful projects
                        </p>
                    </motion.div>

                    {/* Stats Summary */}
                    <motion.div
                        variants={cardVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                    >
                        <div className="glass-card p-6 text-center">
                            <div className="flex items-center justify-center mb-2">
                                <GitCommit className="w-5 h-5 text-accent" />
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-1">
                                {contributions.reduce((sum, c) => sum + c.commits, 0)}+
                            </div>
                            <div className="text-sm text-textMuted">Total Commits</div>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="flex items-center justify-center mb-2">
                                <Code className="w-5 h-5 text-highlight" />
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-1">
                                {contributions.length}
                            </div>
                            <div className="text-sm text-textMuted">Projects</div>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="flex items-center justify-center mb-2">
                                <Users className="w-5 h-5 text-accent" />
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-1">
                                {new Set(contributions.map((c) => c.organization)).size}
                            </div>
                            <div className="text-sm text-textMuted">Organizations</div>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <div className="flex items-center justify-center mb-2">
                                <Star className="w-5 h-5 text-highlight" />
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-1">
                                {contributions.filter((c) => c.status === "Active").length}
                            </div>
                            <div className="text-sm text-textMuted">Active Projects</div>
                        </div>
                    </motion.div>

                    {/* Contributions Grid */}
                    <motion.div
                        layout
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
                        variants={containerVariants}
                    >
                        <AnimatePresence mode="wait">
                            {contributions.map((contribution) => (
                                <motion.div
                                    key={contribution.id}
                                    layout
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    onHoverStart={() => setHoveredCard(contribution.id)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                    className={`relative group ${contribution.featured ? "md:col-span-2" : ""
                                        }`}
                                >
                                    <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-accent/30 hover:shadow-card-hover p-6">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    {contribution.featured && (
                                                        <div className="flex items-center px-2 py-1 bg-gradient-to-r from-accent to-highlight rounded-full">
                                                            <Star className="w-3 h-3 text-primary mr-1" />
                                                            <span className="text-xs font-semibold text-primary">
                                                                Featured
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div
                                                        className={`px-3 py-1 rounded-full border text-xs font-semibold ${getStatusColor(
                                                            contribution.status
                                                        )}`}
                                                    >
                                                        {contribution.status}
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-heading font-bold text-textLight group-hover:text-accent transition-colors mb-1">
                                                    {contribution.organization}
                                                </h3>
                                                <div className="flex items-center space-x-2 text-accent">
                                                    <Github className="w-4 h-4" />
                                                    <span className="text-sm font-medium">
                                                        {contribution.repository}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-textMuted leading-relaxed mb-4">
                                            {contribution.description}
                                        </p>

                                        {/* Technologies */}
                                        {contribution.technologies && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {contribution.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 text-xs bg-white/5 border border-white/10 text-accent rounded-lg font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Stats */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center space-x-2">
                                                    <div className="p-2 bg-accent/10 border border-accent/20 rounded-lg">
                                                        <GitCommit className="w-4 h-4 text-accent" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xl font-bold text-textLight">
                                                            {contribution.commits}
                                                        </div>
                                                        <div className="text-xs text-textMuted">Commits</div>
                                                    </div>
                                                </div>
                                                {contribution.contributionType && (
                                                    <div className="text-sm text-textMuted">
                                                        • {contribution.contributionType}
                                                    </div>
                                                )}
                                            </div>

                                            <motion.a
                                                href={contribution.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-textLight hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all"
                                            >
                                                <span className="text-sm font-semibold">View Repo</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        variants={cardVariants}
                        className="mt-12 text-center glass-card p-8"
                    >
                        <h3 className="text-2xl font-heading font-bold text-textLight mb-4">
                            Interested in Contributing?
                        </h3>
                        <p className="text-textMuted mb-6 max-w-2xl mx-auto">
                            I'm always looking for interesting open source projects to contribute to.
                            If you're working on something exciting, let's collaborate!
                        </p>
                        <motion.a
                            href="https://github.com/6829nkhpas"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-highlight text-primary font-semibold rounded-lg shadow-glow transition-all"
                        >
                            <Github className="w-5 h-5" />
                            <span>Follow on GitHub</span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OpenSourceContributions;
