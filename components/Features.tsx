"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

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
                    <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                        <Image
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                            alt="AI Technology Visualization"
                            width={600}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-3xl font-bold text-foreground mb-1">+400%</p>
                                    <p className="text-muted-foreground text-sm">Efficiency Increase</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-primary">98%</p>
                                    <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
