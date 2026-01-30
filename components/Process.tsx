"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Discovery",
        description: "We analyze your workflows to identify high-impact AI opportunities.",
    },
    {
        icon: PenTool,
        title: "Strategy",
        description: "Our experts design a custom AI roadmap tailored to your specific goals.",
    },
    {
        icon: Code,
        title: "Implementation",
        description: "We build and integrate bespoke AI agents into your existing systems.",
    },
    {
        icon: Rocket,
        title: "Optimization",
        description: "Continuous monitoring and fine-tuning to ensure maximum efficiency.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Our <span className="text-primary">Process</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A proven methodology for seamless AI integration.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 rounded-full bg-secondary/30 backdrop-blur-md border border-primary/30 flex items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                                    <step.icon className="w-10 h-10 text-highlight" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
