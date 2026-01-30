"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, LineChart, Code2, Globe, Shield } from "lucide-react";

const services = [
    {
        icon: Bot,
        title: "AI Agents",
        description: "Autonomous agents that handle complex customer service and operational workflows 24/7.",
    },
    {
        icon: Cpu,
        title: "Machine Learning",
        description: "Custom ML models tailored to your business data for predictive analytics and insights.",
    },
    {
        icon: LineChart,
        title: "Data Analytics",
        description: "Transform raw data into actionable intelligence with AI-driven visualization tools.",
    },
    {
        icon: Code2,
        title: "Development",
        description: "Full-stack AI application development using the latest LLM frameworks and tools.",
    },
    {
        icon: Globe,
        title: "Process Automation",
        description: "End-to-end automation of repetitive tasks to free up your team for strategic work.",
    },
    {
        icon: Shield,
        title: "AI Governance",
        description: "Ensuring your AI implementation is ethical, secure, and compliant with regulations.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-background">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Our <span className="text-primary">Capabilities</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive AI solutions designed to scale with your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <service.icon className="w-7 h-7 text-primary group-hover:text-foreground transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
