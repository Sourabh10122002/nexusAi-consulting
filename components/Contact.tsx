"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, User } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Ready to <span className="text-primary">Innovate?</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Schedule a free consultation to discuss your AI strategy.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full h-[300px] md:h-[450px]">
                            <img
                                src="/assets/contact_rafiki_green.png"
                                alt="AI Consulting Team"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10 rounded-3xl space-y-6 border border-white/5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground ml-1">Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-secondary/10 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground ml-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-secondary/10 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground ml-1">Message</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-muted-foreground" />
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-secondary/10 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
