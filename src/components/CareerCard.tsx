"use client";

import { motion } from "framer-motion";
import { Career } from "@/types";
import * as Icons from "lucide-react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

interface CareerCardProps {
    career: Career;
    index: number;
}

export function CareerCard({ career, index }: CareerCardProps) {
    // Dynamic Icon Component
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[career.icon] || Icons.Code;

    const difficultyColor = {
        Beginner: "text-green-500 bg-green-500/10",
        Intermediate: "text-yellow-500 bg-yellow-500/10",
        Advanced: "text-red-500 bg-red-500/10",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <Link href={`/career/${career.slug}`} className="block h-full">
                <div className="group h-full bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:scale-110 transition-transform duration-300">
                                <IconComponent size={28} />
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColor[career.difficulty]}`}>
                                {career.difficulty}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {career.title}
                        </h3>

                        <p className="text-muted-foreground text-sm flex-grow mb-6 line-clamp-3">
                            {career.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4 mt-auto">
                            <div className="flex items-center gap-1.5">
                                <Clock size={16} />
                                <span>{career.timeToLearn}</span>
                            </div>
                            <div className="flex items-center gap-1 text-primary font-medium group-hover:translate-x-1 transition-transform">
                                <span>View Roadmap</span>
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
