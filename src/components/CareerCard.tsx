"use client";

import { motion } from "framer-motion";
import { Career } from "@/types";
import * as Icons from "lucide-react";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

interface CareerCardProps {
    career: Career;
    index: number;
}

export function CareerCard({ career, index }: CareerCardProps) {
    // Dynamic Icon Component
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[career.icon] || Icons.Code;

    const difficultyColor = {
        Beginner: "text-green-500 bg-green-500/10 border-green-500/20",
        Intermediate: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
        Advanced: "text-red-500 bg-red-500/10 border-red-500/20",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{ y: -8 }}
        >
            <Link href={`/career/${career.slug}`} className="block h-full">
                <div className="group h-full bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                    {/* Animated Background Gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                    />

                    {/* Shine Effect on Hover */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        initial={false}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                    </motion.div>

                    {/* Floating Particles on Hover */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                                style={{
                                    top: `${20 + i * 30}%`,
                                    left: `${10 + i * 30}%`,
                                }}
                                initial={{ opacity: 0, y: 0 }}
                                whileHover={{
                                    opacity: [0, 1, 0],
                                    y: -20,
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <motion.div
                                className="p-3 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl text-secondary border border-secondary/20 shadow-lg shadow-secondary/10"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -5, 5, 0],
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <IconComponent size={28} strokeWidth={2} />
                            </motion.div>
                            <motion.span
                                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${difficultyColor[career.difficulty]} backdrop-blur-sm`}
                                whileHover={{ scale: 1.05 }}
                            >
                                {career.difficulty}
                            </motion.span>
                        </div>

                        <motion.h3
                            className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300"
                            initial={false}
                        >
                            {career.title}
                        </motion.h3>

                        <p className="text-muted-foreground text-sm flex-grow mb-6 line-clamp-3 leading-relaxed">
                            {career.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-muted-foreground border-t-2 border-border/50 pt-4 mt-auto group-hover:border-primary/30 transition-colors">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-primary/10 rounded-lg">
                                    <Clock size={14} className="text-primary" />
                                </div>
                                <span className="font-medium">{career.timeToLearn}</span>
                            </div>
                            <motion.div
                                className="flex items-center gap-1.5 text-primary font-semibold"
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>View Roadmap</span>
                                <ArrowRight size={16} />
                            </motion.div>
                        </div>

                        {/* Category Badge */}
                        <motion.div
                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={false}
                        >
                            <div className="flex items-center gap-1 px-2 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent backdrop-blur-sm">
                                <Sparkles size={10} />
                                <span>{career.category}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
