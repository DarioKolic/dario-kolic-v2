"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Cursor.scss"
import clsx from "clsx";

export const Cursor: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false)
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);
        
        const queryElements = document.querySelectorAll('a, button, [data-hover]')

        queryElements.forEach(e => {
            console.log({e})
            e.addEventListener('mouseenter', handleMouseEnter)
            e.addEventListener('mouseleave', handleMouseLeave)
        })

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            queryElements.forEach(e => {
                e.removeEventListener('mouseenter', handleMouseEnter)
                e.removeEventListener('mouseleave', handleMouseLeave)
            })

            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            className={clsx("cursor", {
                "cursor_hover": isHovering,
            })}
            animate={{
                x: mousePosition.x - 16, // Offset to center the cursor
                y: mousePosition.y - 16,
                scale: isHovering ? 1.8 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 600,
                damping: 28,
            }}
        >
            <div className="cursor__dot"></div>
        </motion.div>
    );
};