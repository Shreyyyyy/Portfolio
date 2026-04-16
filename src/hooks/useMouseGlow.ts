import { useEffect } from "react";

export function useMouseGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
}
