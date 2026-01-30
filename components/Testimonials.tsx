"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Nexus AI completely transformed our customer support. Our response times dropped by 80% within the first month.",
        author: "Sarah Jenkins",
        role: "CTO, TechFlow",
    },
    {
        quote: "The strategic insights provided by their custom ML models helped us identify revenue streams we didn't know existed.",
        author: "Michael Chang",
        role: "Director of Ops, DataSphere",
    },
    {
        quote: "Professional, knowledgeable, and efficient. The best investment we've made in our automation infrastructure.",
        author: "Elena Rodriguez",
        role: "CEO, FutureScale",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
                Client <span className="text-primary">Success Stories</span>
            </h2>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex gap-8 px-4"
                    >
                        {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 rounded-2xl relative w-[400px] flex-shrink-0"
                            >
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                                <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">"{t.quote}"</p>
                                <div>
                                    <p className="text-foreground font-bold">{t.author}</p>
                                    <p className="text-primary text-sm">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
