"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "How long does a typical AI integration take?",
        answer: "Project timelines vary by complexity. A simple chatbot implementation might take 2-4 weeks, while a custom enterprise agent system could take 8-12 weeks from discovery to deployment."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We prioritize enterprise-grade security. We can deploy local LLMs that ensure your data never leaves your infrastructure, or use private cloud instances with strict access controls."
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes, we provide comprehensive post-deployment support packages including model retraining, prompt optimization, and system monitoring to ensure your agents remain effective."
    },
    {
        question: "Can these agents integrate with our existing software?",
        answer: "Our agents are designed to be interoperable. We build custom integrations for major CRMs, ERPs, and internal databases using secure API connections."
    },
    {
        question: "What industries do you serve?",
        answer: "We specialize in Fintech, Healthcare, and E-commerce, but our agent architectures are industry-agnostic and can be adapted to Legal, Real Estate, and more."
    },
    {
        question: "Do I need technical expertise?",
        answer: "No. We build seamless interfaces so your team can interact with agents using natural language. We handle all the technical complexity under the hood."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="relative py-32 bg-background overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10 text-primary"
                    >
                        <HelpCircle className="w-6 h-6" />
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Got Questions? <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-highlight">
                            We've Got Answers.
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Everything you need to know about our AI solutions, simplified.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-2xl border transition-all duration-300 ${activeIndex === index
                                    ? "bg-primary/5 border-primary/30 shadow-lg shadow-primary/5"
                                    : "bg-card/50 border-border/50 hover:border-primary/20 hover:bg-card"
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full text-left p-8 focus:outline-none"
                            >
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className={`text-xl font-semibold transition-colors ${activeIndex === index ? "text-primary" : "text-foreground"}`}>
                                        {faq.question}
                                    </h3>
                                    <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all ${activeIndex === index
                                            ? "bg-primary text-white border-primary rotate-45"
                                            : "bg-transparent border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
                                        }`}>
                                        <Plus className="w-5 h-5 transition-transform" />
                                    </span>
                                </div>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
