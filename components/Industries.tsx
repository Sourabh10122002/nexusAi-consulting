"use client";

import { motion } from "framer-motion";
import { Building2, Stethoscope, ShoppingBag, Landmark, Scale, GraduationCap } from "lucide-react";

const industries = [
    {
        icon: Landmark,
        title: "Finance",
        description: "Fraud detection, algorithmic trading, and personalized banking assistants.",
    },
    {
        icon: Stethoscope,
        title: "Healthcare",
        description: "Medical imaging analysis, patient triage bots, and drug discovery acceleration.",
    },
    {
        icon: ShoppingBag,
        title: "Retail",
        description: "Hyper-personalized recommendations, inventory forecasting, and visual search.",
    },
    {
        icon: Building2,
        title: "Manufacturing",
        description: "Predictive maintenance, quality control vision systems, and supply chain opt.",
    },
    {
        icon: Scale,
        title: "Legal",
        description: "Contract analysis, automated document review, and case law research agents.",
    },
    {
        icon: GraduationCap,
        title: "Education",
        description: "Adaptive learning platforms, automated grading, and student support bots.",
    },
];

export default function Industries() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Transforming <span className="text-primary">Industries</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our AI agents are specialized to tackle unique challenges across major sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-6 flex flex-col items-start gap-4 hover:bg-secondary/10 transition-colors cursor-pointer group"
                        >
                            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                <industry.icon className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{industry.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {industry.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
