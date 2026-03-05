"use client";

import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { twMerge } from "tailwind-merge";

type OrbitingProps = {
    icons?: React.ReactNode[];
    images?: string[];
};

export default function Orbiting({ icons, images }: OrbitingProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [iconPositions, setIconPositions] = useState<any[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [targetRotation, setTargetRotation] = useState<any | null>(null);

    const animationFrameRef = useRef<number | null>(null);
    const rotationRef = useRef({ x: 0, y: 0 });
    const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
    const imagesLoadedRef = useRef<boolean[]>([]);

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    // 1) Prepare offscreen canvases for each icon/image
    useEffect(() => {
        const items = icons || images || [];
        imagesLoadedRef.current = items.map(() => false);

        iconCanvasesRef.current = items.map((item, i) => {
            const offscreen = document.createElement("canvas");
            offscreen.width = 40;
            offscreen.height = 40;
            const ctx = offscreen.getContext("2d");
            if (!ctx) return offscreen;

            if (images) {
                // draw photos into circular mask
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.src = String(item);
                img.onload = () => {
                    ctx.clearRect(0, 0, 40, 40);
                    ctx.beginPath();
                    ctx.arc(20, 20, 20, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.clip();
                    ctx.drawImage(img, 0, 0, 40, 40);
                    imagesLoadedRef.current[i] = true;
                };
            } else {
                // render SVG node → bitmap
                ctx.scale(0.4, 0.4);
                const svgStr = renderToString(item);
                const img = new Image();
                img.src = "data:image/svg+xml;base64," + btoa(svgStr);
                img.onload = () => {
                    ctx.clearRect(0, 0, 40, 40);
                    ctx.drawImage(img, 0, 0);
                    imagesLoadedRef.current[i] = true;
                };
            }

            return offscreen;
        });
    }, [icons, images]);

    // 2) Distribute points on a sphere
    useEffect(() => {
        const items = icons || images || [];
        const N = items.length || 20;
        const pts = [];
        const offset = 2 / N;
        const increment = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < N; i++) {
            const y = i * offset - 1 + offset / 2;
            const r = Math.sqrt(1 - y * y);
            const phi = i * increment;
            pts.push({
                x: Math.cos(phi) * r * 100,
                y: y * 100,
                z: Math.sin(phi) * r * 100,
                id: i,
            });
        }

        setIconPositions(pts);
    }, [icons, images]);

    // 3) Mouse interactions
    function handleMouseDown(e) {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        iconPositions.forEach((icon) => {
            // const { x: rx, y: ry } = rotationRef.current;
            // const cosX = Math.cos(rx),
            //     sinX = Math.sin(rx);
            // const cosY = Math.cos(ry),
            //     sinY = Math.sin(ry);
            //
            // const _x = icon.x * cosY - icon.z * sinY;
            // const _z = icon.x * sinY + icon.z * cosY;
            // const _y = icon.y * cosX + _z * sinX;
            const { x: rx, y: ry } = rotationRef.current;
            const cosX = Math.cos(rx);
            const sinX = Math.sin(rx);
            const cosY = Math.cos(ry);
            const sinY = Math.sin(ry);

            const _x = icon.x * cosY - icon.z * sinY;
            const _z = icon.x * sinY + icon.z * cosY;
            const _y = icon.y * cosX + _z * sinX;

            const screenX = canvasRef.current.width / 2 + _x;
            const screenY = canvasRef.current.height / 2 + _y;
            const scale = (_z + 200) / 300;
            const radius = 20 * scale;
            const dx = x - screenX;
            const dy = y - screenY;

            if (dx * dx + dy * dy < radius * radius) {
                // target rotation to center this icon
                const tx = -Math.atan2(icon.y, Math.hypot(icon.x, icon.z));
                const ty = Math.atan2(icon.x, icon.z);
                const sx = rotationRef.current.x;
                const sy = rotationRef.current.y;
                const dist = Math.hypot(tx - sx, ty - sy);
                const dur = Math.min(2000, Math.max(800, dist * 1000));
                setTargetRotation({
                    x: tx,
                    y: ty,
                    startX: sx,
                    startY: sy,
                    startTime: performance.now(),
                    duration: dur,
                });
            }
        });

        setIsDragging(true);
        setLastMousePos({ x: e.clientX, y: e.clientY });
    }

    function handleMouseMove(e) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });

        if (isDragging) {
            const dx = e.clientX - lastMousePos.x;
            const dy = e.clientY - lastMousePos.y;
            rotationRef.current = {
                x: rotationRef.current.x + dy * 0.002,
                y: rotationRef.current.y + dx * 0.002,
            };
            setLastMousePos({ x: e.clientX, y: e.clientY });
        }
    }

    function handleMouseUp() {
        setIsDragging(false);
    }

    // 4) Render loop
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // auto-rotate unless dragging or targeted
            if (targetRotation) {
                const t = (performance.now() - targetRotation.startTime) / targetRotation.duration;
                const p = easeOutCubic(Math.min(1, t));
                rotationRef.current = {
                    x: targetRotation.startX + (targetRotation.x - targetRotation.startX) * p,
                    y: targetRotation.startY + (targetRotation.y - targetRotation.startY) * p,
                };
                if (t >= 1) setTargetRotation(null);
            } else if (!isDragging) {
                // slow drift toward mouse
                const cx = canvas.width / 2,
                    cy = canvas.height / 2;
                const dx = mousePos.x - cx,
                    dy = mousePos.y - cy;
                const dist = Math.hypot(dx, dy);
                const speed = 0.003 + (dist / Math.hypot(cx, cy)) * 0.01;
                rotationRef.current = {
                    x: rotationRef.current.x + (dy / canvas.height) * speed,
                    y: rotationRef.current.y + (dx / canvas.width) * speed,
                };
            }

            // draw each icon
            iconPositions.forEach((icon, i) => {
                const { x: rx, y: ry } = rotationRef.current;
                const cosX = Math.cos(rx),
                    sinX = Math.sin(rx);
                const cosY = Math.cos(ry),
                    sinY = Math.sin(ry);

                const _x = icon.x * cosY - icon.z * sinY;
                const _z = icon.x * sinY + icon.z * cosY;
                const _y = icon.y * cosX + _z * sinX;

                const scale = (_z + 200) / 300;
                const alpha = Math.max(0.2, Math.min(1, (_z + 150) / 200));

                ctx.save();
                ctx.translate(canvas.width / 2 + _x, canvas.height / 2 + _y);
                ctx.scale(scale, scale);
                ctx.globalAlpha = alpha;

                if (icons || images) {
                    if (iconCanvasesRef.current[i] && imagesLoadedRef.current[i]) {
                        ctx.drawImage(iconCanvasesRef.current[i], -20, -20, 40, 40);
                    }
                } else {
                    ctx.beginPath();
                    ctx.arc(0, 0, 20, 0, Math.PI * 2);
                    ctx.fillStyle = "#4444ff";
                    ctx.fill();
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "16px Arial";
                    ctx.fillText(String(icon.id + 1), 0, 0);
                }

                ctx.restore();
            });

            animationFrameRef.current = requestAnimationFrame(draw);
        }

        draw();
        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [iconPositions, isDragging, mousePos, targetRotation, icons, images]);

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={400}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={twMerge("rounded-lg")}
            role="img"
            aria-label="Interactive 3D Icon Cloud"
        />
    );
}
