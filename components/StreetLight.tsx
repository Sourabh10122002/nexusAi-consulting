"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const StreetLight = () => {
    const mouseX = useMotionValue(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Set initial window width
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);

        const handleMouseMove = ({ clientX }: MouseEvent) => {
            mouseX.set(clientX);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX]);

    // Map mouse position (0 to width) to rotation (-15deg to 15deg)
    const rotateValue = useTransform(mouseX, [0, windowWidth || 1000], [-15, 15]);
    const rotate = useSpring(rotateValue, { stiffness: 50, damping: 20 });

    // Also shift the x position slightly for parallax feel
    const xValue = useTransform(mouseX, [0, windowWidth || 1000], [-50, 50]);
    const x = useSpring(xValue, { stiffness: 50, damping: 20 });

    return (
        <div className="pointer-events-none absolute top-0 left-0 w-full overflow-hidden z-0 h-[80vh] flex justify-center">
            <motion.div
                style={{ rotate, x }}
                className="relative w-full h-full origin-top"
            >
                {/* Main light beam */}
                <div
                    className="absolute top-[-350px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-30 blur-[100px]"
                    style={{
                        background: "radial-gradient(circle, var(--highlight) 0%, var(--primary) 40%, transparent 70%)"
                    }}
                />

                {/* Intense core */}
                <div
                    className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-highlight opacity-40 blur-[80px]"
                />

                {/* Conical spread - the main beam */}
                <div
                    className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[200%] h-[200%] opacity-15"
                    style={{
                        background: "conic-gradient(from 180deg at 50% 0%, transparent 45%, var(--highlight) 50%, transparent 55%)",
                        filter: "blur(40px)"
                    }}
                />
            </motion.div>
        </div>
    );
};

export default StreetLight;
