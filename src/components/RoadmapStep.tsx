"use client";

import { motion } from "framer-motion";
import { RoadmapStep as RoadmapStepType } from "@/types";
import { CheckCircle2, ChevronDown, ExternalLink, Clock } from "lucide-react";
import { useState } from "react";
// import { Button } from "@/components/ui/Button";

interface RoadmapStepProps {
    step: RoadmapStepType;
    index: number;
    isLeft: boolean;
}

export function RoadmapStep({ step, index, isLeft }: RoadmapStepProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`flex items-start ${isLeft ? "md:flex-row-reverse" : "md:flex-row"
                } gap-4 md:gap-8 group`}
        >
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block w-1/2" />

            {/* Content Card */}
            <div className="flex-1 w-full md:w-1/2 pl-12 md:pl-0">
                <div
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`
            cursor-pointer bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-all
            ${isLeft ? "md:mr-auto" : "md:ml-auto"}
            relative
          `}
                >
                    {/* Connector Dot to vertical line (Mobile) */}
                    <div className="absolute left-[-34px] top-6 w-4 h-4 rounded-full bg-border md:hidden" />

                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <CheckCircle2 size={20} />
                            </div>
                            <h3 className="font-bold text-lg">{step.title}</h3>
                        </div>
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown className="text-muted-foreground" size={20} />
                        </motion.div>
                    </div>

                    <p className="text-muted-foreground mt-2 text-sm line-clamp-2 group-hover:line-clamp-none transition-all">
                        {step.description}
                    </p>

                    {/* Expanded Content */}
                    <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 border-t border-border mt-4 space-y-4">
                            {step.duration && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock size={14} />
                                    <span>Avg. Duration: {step.duration}</span>
                                </div>
                            )}

                            {step.resources.length > 0 && (
                                <div>
                                    <h4 className="font-semibold text-sm mb-2">Recommended Resources:</h4>
                                    <ul className="space-y-2">
                                        {step.resources.map((resource, i) => (
                                            <li key={i}>
                                                <a
                                                    href={resource.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                                                >
                                                    <ExternalLink size={14} />
                                                    <span>{resource.title}</span>
                                                    <span className="text-xs text-muted-foreground border border-border px-1.5 py-0.5 rounded ml-auto">
                                                        {resource.type}
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
