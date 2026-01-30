"use client";

import { motion } from "framer-motion";
import { Building2, Stethoscope, ShoppingBag, Landmark, Scale, GraduationCap } from "lucide-react";
import Image from "next/image";

const industries = [
    {
        icon: Landmark,
        title: "Finance",
        description: "Fraud detection, algorithmic trading, and personalized banking assistants.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
    },
    {
        icon: Stethoscope,
        title: "Healthcare",
        description: "Medical imaging analysis, patient triage bots, and drug discovery acceleration.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    },
    {
        icon: ShoppingBag,
        title: "Retail",
        description: "Hyper-personalized recommendations, inventory forecasting, and visual search.",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&q=80",
    },
    {
        icon: Building2,
        title: "Manufacturing",
        description: "Predictive maintenance, quality control vision systems, and supply chain opt.",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&q=80",
    },
    {
        icon: Scale,
        title: "Legal",
        description: "Contract analysis, automated document review, and case law research agents.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80",
    },
    {
        icon: GraduationCap,
        title: "Education",
        description: "Adaptive learning platforms, automated grading, and student support bots.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
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
                            className="glass-card overflow-hidden hover:bg-secondary/10 transition-colors cursor-pointer group"
                        >
                            <div className="relative h-40 overflow-hidden">
                                <Image
                                    src={industry.image}
                                    alt={industry.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                <div className="absolute top-4 left-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                                    <industry.icon className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                            <div className="p-6">
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
