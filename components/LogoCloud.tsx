"use client";

import { motion } from "framer-motion";
import { Hexagon, Triangle, Circle, Square, Star, Box } from "lucide-react";

const companies = [
    { name: "TechFlow", icon: Hexagon },
    { name: "InnovateX", icon: Triangle },
    { name: "DataCorp", icon: Circle },
    { name: "FutureScale", icon: Square },
    { name: "StarAI", icon: Star },
    { name: "BoxLogic", icon: Box },
];

export default function LogoCloud() {
    return (
        <section className="py-12 border-y border-white/5 bg-white/0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

            <p className="text-center text-sm font-medium text-muted-foreground mb-8 tracking-wider uppercase">
                Trusted by industry leaders
            </p>

            <div className="flex">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-shrink-0 gap-16 md:gap-24 px-8"
                >
                    {[...companies, ...companies, ...companies].map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 group opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
                        >
                            <company.icon className="w-8 h-8 text-primary" />
                            <span className="text-xl font-bold text-foreground font-mono">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
