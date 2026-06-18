"use client";

import { useEffect, useRef } from "react";

const LERP_RING = 0.62;
const LERP_GLOW = 0.48;

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const glow = useRef({ x: -100, y: -100 });
  const frameRef = useRef<number>(0);
  const visibleRef = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    document.documentElement.classList.add("custom-cursor-active");

    const setPosition = (
      el: HTMLDivElement | null,
      x: number,
      y: number,
      scale = 1,
    ) => {
      if (!el) return;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    };

    const animate = () => {
      ring.current.x = lerp(ring.current.x, target.current.x, LERP_RING);
      ring.current.y = lerp(ring.current.y, target.current.y, LERP_RING);
      glow.current.x = lerp(glow.current.x, target.current.x, LERP_GLOW);
      glow.current.y = lerp(glow.current.y, target.current.y, LERP_GLOW);

      setPosition(ringRef.current, ring.current.x, ring.current.y);
      setPosition(glowRef.current, glow.current.x, glow.current.y);

      frameRef.current = requestAnimationFrame(animate);
    };

    const onMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };

      if (!visibleRef.current) {
        visibleRef.current = true;
        ring.current = { ...target.current };
        glow.current = { ...target.current };
        document.body.classList.add("custom-cursor-visible");
      }

      setPosition(dotRef.current, event.clientX, event.clientY);

      const ringDistance = Math.hypot(
        target.current.x - ring.current.x,
        target.current.y - ring.current.y,
      );
      if (ringDistance > 80) {
        ring.current.x = lerp(ring.current.x, target.current.x, 0.55);
        ring.current.y = lerp(ring.current.y, target.current.y, 0.55);
        setPosition(ringRef.current, ring.current.x, ring.current.y);
      }
    };

    const onLeave = () => {
      visibleRef.current = false;
      document.body.classList.remove("custom-cursor-visible");
    };

    const onDown = () => document.body.classList.add("custom-cursor-click");
    const onUp = () => document.body.classList.remove("custom-cursor-click");

    const onOver = (event: MouseEvent) => {
      const targetEl = event.target;
      if (!(targetEl instanceof Element)) return;

      const interactive = targetEl.closest(
        "a, button, label, input, textarea, select, [role='button'], .projects-scroll__viewport",
      );

      document.body.classList.toggle("custom-cursor-hover", Boolean(interactive));
    };

    frameRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", onOver);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onOver);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("custom-cursor-active");
      document.body.classList.remove(
        "custom-cursor-visible",
        "custom-cursor-click",
        "custom-cursor-hover",
      );
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div ref={glowRef} className="custom-cursor__glow" />
      <div ref={ringRef} className="custom-cursor__ring" />
      <div ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
}
