import { useEffect } from "react";

export function useTilt(selector = ".card") {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(selector));

    const onMove = (el: HTMLElement, e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -10;
      const ry = (px - 0.5) * 12;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    };

    const onLeave = (el: HTMLElement) => {
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };

    const cleanups: Array<() => void> = [];

    for (const el of cards) {
      const handleMove = (e: PointerEvent) => onMove(el, e);
      const handleLeave = () => onLeave(el);
      el.addEventListener("pointermove", handleMove);
      el.addEventListener("pointerleave", handleLeave);
      cleanups.push(() => {
        el.removeEventListener("pointermove", handleMove);
        el.removeEventListener("pointerleave", handleLeave);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [selector]);
}
