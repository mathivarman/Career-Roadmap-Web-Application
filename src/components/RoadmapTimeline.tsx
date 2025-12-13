"use client";

import { motion } from "framer-motion";
import { RoadmapStep } from "@/components/RoadmapStep";
import { RoadmapStage } from "@/types";

interface RoadmapTimelineProps {
    stages: RoadmapStage[];
}

export function RoadmapTimeline({ stages }: RoadmapTimelineProps) {
    return (
        <div className="relative max-w-4xl mx-auto px-4 py-8">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-8 bottom-8 w-1 bg-border rounded-full transform md:-translate-x-1/2" />

            <div className="space-y-16">
                {stages.map((stage) => (
                    <div key={stage.id} className="relative">
                        {/* Stage Marker */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-primary rounded-full border-4 border-background z-10 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
                        />

                        {/* Stage Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8 relative z-10 pt-6"
                        >
                            <h2 className="text-2xl font-bold font-heading bg-background inline-block px-4">
                                {stage.title}
                            </h2>
                            {stage.description && (
                                <p className="text-muted-foreground mt-2 max-w-lg mx-auto bg-background px-4">
                                    {stage.description}
                                </p>
                            )}
                        </motion.div>

                        {/* Steps Container */}
                        <div className="space-y-6">
                            {stage.steps.map((step, stepIndex) => (
                                <RoadmapStep
                                    key={step.id}
                                    step={step}
                                    index={stepIndex}
                                    isLeft={stepIndex % 2 === 0}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
