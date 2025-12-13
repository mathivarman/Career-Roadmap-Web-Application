"use client";

// import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
    // Replace 'YOUR_FORM_ID' with actual ID if the user provides it, otherwise use a placeholder or handle success manually for demo
    // const [state, handleSubmit] = useForm("PLACEHOLDER_ID");

    // Mock submission for demo purposes if no ID is provided
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleMockSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-8 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
            >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white shadow-lg">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
                <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSuccess(false)}
                >
                    Send Another Message
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleMockSubmit} className="space-y-6 bg-card p-8 border border-border rounded-xl shadow-sm relative overflow-hidden">

            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="John Doe"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john@example.com"
                />
                {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full p-3 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    placeholder="How can we help you?"
                />
                {/* <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        Send Message <Send size={16} />
                    </span>
                )}
            </Button>
        </form>
    );
}
