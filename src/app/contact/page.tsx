import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Get in Touch</h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Have questions about a roadmap? Want to suggest a new career path? We&apos;d love to hear from you.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Email Us</h3>
                                <p className="text-muted-foreground mb-1">Our team is ready to help.</p>
                                <a href="mailto:hello@careerpath.dev" className="text-primary font-medium hover:underline">hello@careerpath.dev</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Community</h3>
                                <p className="text-muted-foreground mb-1">Join the discussion on our channels.</p>
                                <a href="#" className="text-primary font-medium hover:underline">Join Discord</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Office</h3>
                                <p className="text-muted-foreground">
                                    123 Tech Avenue<br />
                                    San Francisco, CA 94105
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:pt-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
