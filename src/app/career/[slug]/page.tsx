import { notFound } from "next/navigation";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import careersData from "@/data/careers.json";
import roadmapsData from "@/data/roadmaps.json";
import { Career, Roadmap } from "@/types";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen, Layers } from "lucide-react";
import * as Icons from "lucide-react";

// Types
const careers = careersData as Career[];
const roadmaps = roadmapsData as Roadmap[];

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return careers.map((career) => ({
        slug: career.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const career = careers.find((c) => c.slug === slug);

    if (!career) {
        return {
            title: "Career Not Found",
        };
    }

    return {
        title: `${career.title} Roadmap | CareerPath`,
        description: `Step-by-step learning roadmap to become a ${career.title}.`,
    };
}

export default async function CareerPage({ params }: PageProps) {
    const { slug } = await params;
    const career = careers.find((c) => c.slug === slug);

    if (!career) {
        notFound();
    }

    const roadmap = roadmaps.find((r) => r.careerId === career.id);

    if (!roadmap) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <h1 className="text-2xl font-bold">Roadmap coming soon!</h1>
                <Link href="/">
                    <Button variant="outline">Go Back</Button>
                </Link>
            </div>
        );
    }

    // Dynamic Icon
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[career.icon] || Icons.Code;

    // Calculate stats
    const totalStages = roadmap.stages.length;
    const totalSteps = roadmap.stages.reduce((acc, stage) => acc + stage.steps.length, 0);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2 mb-8 pl-0 hover:pl-2 transition-all">
                    <ArrowLeft size={16} /> Back to Careers
                </Button>
            </Link>

            <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        <IconComponent size={16} />
                        <span>{career.category}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">{career.title}</h1>
                    <p className="text-xl text-muted-foreground mb-8 text-pretty">{career.description}</p>

                    <div className="flex flex-wrap gap-4 md:gap-8">
                        <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl shadow-sm">
                            <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Est. Time</p>
                                <p className="font-bold">{career.timeToLearn}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl shadow-sm">
                            <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                <Layers size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Stages</p>
                                <p className="font-bold">{totalStages} Milestones</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl shadow-sm">
                            <div className="p-2 bg-accent/10 text-accent rounded-lg">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Steps</p>
                                <p className="font-bold">{totalSteps} Learning Items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-muted/30 rounded-3xl p-4 md:p-8 border border-border/50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-4">Learning Path</h2>
                    <p className="text-muted-foreground">Follow this step-by-step guide to master {career.title}.</p>
                </div>

                <RoadmapTimeline stages={roadmap.stages} />
            </div>

            <div className="mt-20 text-center">
                <h3 className="text-2xl font-bold font-heading mb-4">Ready for what&apos;s next?</h3>
                <p className="text-muted-foreground mb-8">Once you&apos;ve completed this roadmap, you&apos;ll be ready to apply for jobs!</p>
                <Link href="/contact">
                    <Button size="lg">Share Your Progress</Button>
                </Link>
            </div>
        </div>
    );
}
