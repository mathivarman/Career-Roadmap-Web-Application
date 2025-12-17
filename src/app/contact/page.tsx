import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Get in Touch</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Have questions about a roadmap? Want to suggest a new career path? We&apos;d love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="p-4 bg-primary/10 rounded-xl text-primary mb-4">
                        <Mail size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-3">Our team is ready to help.</p>
                    <a
                        href="mailto:hello@careerpath.dev"
                        className="text-primary font-medium hover:underline break-all"
                    >
                        hello@careerpath.dev
                    </a>
                </div>

                <div className="flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="p-4 bg-secondary/10 rounded-xl text-secondary mb-4">
                        <Phone size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-3">Mon-Fri from 9am to 6pm.</p>
                    <a
                        href="tel:+15551234567"
                        className="text-primary font-medium hover:underline"
                    >
                        +1 (555) 123-4567
                    </a>
                </div>

                <div className="flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="p-4 bg-accent/10 rounded-xl text-accent mb-4">
                        <MapPin size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                        123 Tech Avenue<br />
                        San Francisco, CA 94105
                    </p>
                </div>
            </div>
        </div>
    );
}
