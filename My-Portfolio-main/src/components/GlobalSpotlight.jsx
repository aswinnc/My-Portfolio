import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const GlobalSpotlight = () => {
    const { themeColors } = useSelector((state) => state.themeReducer);
    const [cursor, setCursor] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursor({
                x: e.clientX,
                y: e.clientY,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Background Grid Pattern - Optional: Add if we want the grid everywhere */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(to right, ${themeColors.primaryColor}22 1px, transparent 1px),
                            linear-gradient(to bottom, ${themeColors.primaryColor}22 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Spotlight Grid Mask */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: `linear-gradient(to right, ${themeColors.primaryColor} 1px, transparent 1px),
                            linear-gradient(to bottom, ${themeColors.primaryColor} 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                    maskImage: `radial-gradient(circle 250px at ${cursor.x}px ${cursor.y}px, white 0%, transparent 80%)`,
                    WebkitMaskImage: `radial-gradient(circle 250px at ${cursor.x}px ${cursor.y}px, white 0%, transparent 80%)`,
                    opacity: 0.4,
                }}
            />

            {/* Spotlight Glow */}
            <motion.div
                className="absolute z-0 blur-[100px] rounded-full"
                style={{
                    width: 400,
                    height: 400,
                    background: `radial-gradient(circle, ${themeColors.primaryColor}40 0%, transparent 70%)`,
                }}
                animate={{
                    x: cursor.x - 200,
                    y: cursor.y - 200,
                }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    mass: 0.5
                }}
            />
        </div>
    );
};

export default GlobalSpotlight;
