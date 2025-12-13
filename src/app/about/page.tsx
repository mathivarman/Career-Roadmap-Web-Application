import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Rocket, Target, Users, Code, Globe, User } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">About <span className="text-primary">CareerPath</span></h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We help aspiring developers, designers, and tech enthusiasts find their way in the complex world of technology.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                        <Target size={16} />
                        <span>Our Mission</span>
                    </div>
                    <h2 className="text-3xl font-bold font-heading">Simplifying the Tech Journey</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Starting a career in tech can be overwhelming. With thousands of languages, frameworks, and tools, it&apos;s hard to know where to begin.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Our platform provides clear, structured, and up-to-date learning roadmaps for the most in-demand tech careers. We break down complex paths into manageable steps, so you can focus on learning.
                    </p>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 border border-border flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                        <div className="bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center gap-3">
                            <div className="p-3 bg-primary/10 rounded-full text-primary"><Code size={24} /></div>
                            <span className="font-bold">Structured</span>
                        </div>
                        <div className="bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center gap-3 translate-y-8">
                            <div className="p-3 bg-secondary/10 rounded-full text-secondary"><Globe size={24} /></div>
                            <span className="font-bold">Modern</span>
                        </div>
                        <div className="bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center gap-3 -translate-y-8">
                            <div className="p-3 bg-accent/10 rounded-full text-accent"><Rocket size={24} /></div>
                            <span className="font-bold">Fast</span>
                        </div>
                        <div className="bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center gap-3">
                            <div className="p-3 bg-green-500/10 rounded-full text-green-500"><Users size={24} /></div>
                            <span className="font-bold">Community</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-24">
                <h2 className="text-3xl font-bold font-heading text-center mb-12">Who is this for?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Students",
                            desc: "Explore potential careers and understand what skills you need to learn before you graduate.",
                            icon: User
                        },
                        {
                            title: "Career Switchers",
                            desc: "Get a clear step-by-step plan to transition from your current role into a tech career.",
                            icon: Target
                        },
                        {
                            title: "Professionals",
                            desc: "Fill in knowledge gaps and structure your learning for promotion to senior roles.",
                            icon: Rocket
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center bg-muted/30 rounded-3xl p-12 md:p-20">
                <h2 className="text-3xl font-bold font-heading mb-6">Start Your Journey Today</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                    Don&apos;t waste time figuring out what to learn. Pick a path and start building your future.
                </p>
                <Link href="/">
                    <Button size="lg" className="px-8">Explore Roadmaps</Button>
                </Link>
            </div>
        </div>
    );
}
