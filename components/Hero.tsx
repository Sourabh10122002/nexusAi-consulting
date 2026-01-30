"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-10" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-background/80 to-background" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-primary/20 text-sm text-highlight mb-6 backdrop-blur-md">
                        <Sparkles className="w-4 h-4" />
                        Next-Gen AI Solutions
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Transform Your Business with <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-highlight">
                            Intelligent AI Agents
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10 leading-relaxed">
                        We build custom AI solutions that automate workflows, analyze data, and drive unprecedented growth for forward-thinking enterprises.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/25 flex items-center gap-2 hover:bg-accent transition-all"
                        >
                            Schedule Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-secondary/20 text-foreground border border-primary/20 rounded-full font-semibold hover:bg-secondary/40 transition-colors backdrop-blur-sm"
                        >
                            View Case Studies
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        </section>
    );
}
