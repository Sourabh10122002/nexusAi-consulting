"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gradient-to-t from-background via-secondary/5 to-background">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
                    Frequently <span className="text-primary">Asked Questions</span>
                </h2>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="glass-card rounded-xl overflow-hidden border border-white/5"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left group"
                            >
                                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-foreground'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-primary/20 text-primary' : 'bg-transparent text-muted-foreground group-hover:text-foreground'}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
