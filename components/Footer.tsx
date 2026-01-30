import { BrainCircuit, Twitter, Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-primary/20 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/assets/logo.svg" alt="Nexus AI" width={56} height={56} priority className="w-12 h-12 md:w-14 md:h-14" />
                            <span className="text-xl font-bold text-foreground">Nexus AI</span>
                        </div>
                        <p className="text-muted-foreground max-w-sm">
                            Empowering businesses with intelligent AI solutions. Building the future of work, today.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">AI Consulting</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Development</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Data Analysis</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Automation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Nexus AI Consulting. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
