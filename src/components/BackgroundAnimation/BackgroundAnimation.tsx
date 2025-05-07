'use client';

import { motion, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './BackgroundAnimation.scss';

const DOT_RADIUS = 2; // Dot radius
const DOT_SPACING = 18; // Increased spacing for performance
const GRID_SIZE = DOT_RADIUS * 2 + DOT_SPACING;

export default function BackgroundAnimation() {
  const [isHydrated, setIsHydrated] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenCanvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window) {
      setIsHydrated(true);

      if (!offscreenCanvas.current) {
        offscreenCanvas.current = document.createElement('canvas');
        const osc = offscreenCanvas.current;
        const ctx = osc.getContext('2d');
        if (ctx) {
          osc.width = DOT_RADIUS * 8; 
          osc.height = DOT_RADIUS * 8;

          ctx.clearRect(0, 0, osc.width, osc.height);
          ctx.shadowBlur = 12; // Increased blur intensity
          ctx.shadowColor = '#8A2BE2'; // Increased shadow opacity
          ctx.fillStyle = 'rgba(48, 27, 63, 1)';
          ctx.beginPath();
          ctx.arc(osc.width / 2, osc.height / 2, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }, []);

  useAnimationFrame((time) => {
    if (!canvasRef.current || !offscreenCanvas.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const osc = offscreenCanvas.current;

    if (!ctx) return;

    // Set canvas size to window size only when it changes
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Precompute grid dimensions
    const cols = Math.ceil(canvas.width / GRID_SIZE);
    const rows = Math.ceil(canvas.height / GRID_SIZE);

    // Get the current scroll position
    const scrollY = window.scrollY;

    // Iterate over grid cells using a single loop
    for (let i = 0; i < cols * rows; i++) {
      const x = (i % cols) * GRID_SIZE; // Calculate x position
      const y = Math.floor(i / cols) * GRID_SIZE; // Calculate y position

      // Calculate wave effect, include scroll position
      const baseDistance = Math.sqrt(x * x + (y + scrollY) * (y + scrollY)); // Include scrollY in the y calculation

      // Add a sine wave to the distance to create curvy effects
      const curveEffect = Math.sin((x + y) * 0.01 + time * 0.0005) * 150; // Adjust 0.05 and 20 for ripple intensity and frequency
      const distance = baseDistance + curveEffect;

      const wave = Math.sin(distance * 0.015 - time * 0.003) * 0.5 + 0.5;

      // Set dot opacity based on wave
      const opacity = wave * 0.5 + 0.2;
      ctx.globalAlpha = opacity;

      // Draw pre-rendered blurred dot
      ctx.drawImage(osc, x - DOT_RADIUS * 3, y - DOT_RADIUS * 3); // Adjusted position to account for larger shadows
    }

    // Reset global alpha
    ctx.globalAlpha = 1.0;
  });

  if (!isHydrated) {
    return null;
  }

  return (
    <motion.div
      className="background-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="background-canvas" />
    </motion.div>
  );
}