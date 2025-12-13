export interface Career {
    id: string;
    title: string;
    description: string;
    icon: string; // Name of the Lucide icon
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    category: "Development" | "Data" | "Design" | "Infrastructure" | "Mobile";
    timeToLearn: string; // e.g., "6-12 months"
    slug: string;
}

export interface RoadmapStep {
    id: string;
    title: string;
    description: string;
    resources: {
        title: string;
        url: string;
        type: "Article" | "Video" | "Course" | "Documentation";
    }[];
    duration?: string;
}

export interface RoadmapStage {
    id: string;
    title: string; // e.g., "Fundamentals", "Core Concepts"
    description?: string;
    steps: RoadmapStep[];
}

export interface Roadmap {
    careerId: string;
    title: string;
    stages: RoadmapStage[];
}
