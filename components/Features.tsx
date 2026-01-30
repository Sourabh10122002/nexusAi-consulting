"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Custom LLM Fine-tuning",
    "Enterprise-grade Security",
    "Seamless API Integration",
    "24/7 Expert Support",
    "Scalable Infrastructure",
    "Real-time Monitoring",
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                        Why Leading Companies <br />
                        <span className="text-primary">Trust Nexus AI</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        We don't just implement AI; we strategically integrate it into your business core. Our team of experts ensures you stay ahead of the curve with cutting-edge technology and proven implementation strategies.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-primary/20 backdrop-blur-sm"
                            >
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span className="text-muted-foreground font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl transform -rotate-6" />
                    <div className="glass-card rounded-2xl p-8 relative border border-primary/20">
                        <div className="space-y-6">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex gap-4 items-center p-4 rounded-xl bg-background/60 border border-primary/10">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent opacity-80" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-2 w-3/4 bg-primary/20 rounded-full" />
                                        <div className="h-2 w-1/2 bg-primary/20 rounded-full" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-3xl font-bold text-foreground mb-1">+400%</p>
                            <p className="text-muted-foreground">Efficiency Increase</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
