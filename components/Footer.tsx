"use client";

import { Twitter, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const letters = "NEXUS AI".split("");

    return (
        <footer className="relative bg-background text-foreground overflow-hidden border-t border-primary/10">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] dark:opacity-[0.1]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
                {/* Top Section: CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
                            Ready to shape <br />
                            the future?
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-lg">
                            Join us in building the next generation of intelligent business solutions. Let's create something extraordinary together.
                        </p>
                    </div>
                    <Link
                        href="#contact"
                        className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
                    >
                        Start a Project
                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border/40 mb-16" />

                {/* Middle Section: Links */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12">
                                <Image src="/assets/logo.svg" alt="Nexus AI" fill className="object-contain dark:brightness-100 brightness-0" />
                            </div>
                            <span className="text-2xl font-bold">Nexus AI</span>
                        </div>
                        <p className="text-muted-foreground">
                            Pioneering the intersection of human creativity and artificial intelligence.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="p-2 border border-border/40 rounded-full hover:bg-primary hover:text-white text-muted-foreground transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-6 text-foreground">Services</h3>
                            <ul className="space-y-4">
                                {["Machine Learning", "Data Analytics", "Cloud Solutions", "Consulting"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-muted-foreground hover:text-primary hover:pl-2 transition-all block">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-6 text-foreground">Company</h3>
                            <ul className="space-y-4">
                                {["About Us", "Careers", "Case Studies", "Blog"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-muted-foreground hover:text-primary hover:pl-2 transition-all block">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-6 text-foreground">Legal</h3>
                            <ul className="space-y-4">
                                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-muted-foreground hover:text-primary hover:pl-2 transition-all block">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Giant Text */}
                <div className="relative flex justify-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex text-[12vw] font-black leading-none select-none cursor-pointer"
                    >
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ y: -30 }} // Moves letter up on hover
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                className="bg-clip-text text-transparent bg-gradient-to-b from-foreground/10 to-transparent hover:from-primary/40 hover:to-transparent transition-colors"
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    <div className="absolute bottom-4 w-full flex justify-between text-sm text-muted-foreground px-4 pointer-events-none">
                        <span>© {new Date().getFullYear()} Nexus AI Inc.</span>
                        <span>Designed for the Future</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
