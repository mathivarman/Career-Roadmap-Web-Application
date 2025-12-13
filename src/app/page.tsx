"use client";

import { Button } from "@/components/ui/Button";
import { CareerCard } from "@/components/CareerCard";
import { TechTicker } from "@/components/TechTicker";
import careersData from "@/data/careers.json";
import { Career } from "@/types";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// Cast JSON to typed array
const careers = careersData as Career[];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCareers = careers.filter((career) =>
    career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    career.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-10 pb-16">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 via-background to-background -z-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            <span>Launch your tech career today</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Find Your Path in <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
              Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Structured roadmaps, curated resources, and clear guidance for developers, designers, and data experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#careers">
              <Button size="lg" className="h-14 px-8 text-lg shadow-lg shadow-primary/20 w-full sm:w-auto hover:scale-105 transition-transform">
                Explore Careers
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                How it Works
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechTicker />

      {/* Career Selection Section */}
      <section id="careers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Choose Your <span className="text-primary">Career</span></h2>
            <p className="text-muted-foreground text-lg">Select a role to view its detailed learning roadmap.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search for a role (e.g. Frontend, Data Scientist)..."
            className="block w-full pl-11 pr-4 py-4 border border-border rounded-xl bg-card text-card-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredCareers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career, index) => (
              <CareerCard key={career.id} career={career} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card/50 rounded-2xl border border-dashed border-border">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No careers found</h3>
            <p className="text-muted-foreground">
              We couldn't find any careers matching "{searchQuery}". Try a different search term.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 pb-16">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse delay-1000" />

          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 relative z-10">Unsure where to start?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 relative z-10">
            Read our guide on how to choose the right tech career based on your interests and skills.
          </p>
          <Link href="/about" className="relative z-10">
            <Button size="lg" variant="secondary" className="gap-2">
              Read the Guide <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
