import { useEffect, useMemo, useRef } from "react";

function makeBeep(ctx: AudioContext) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.value = 880;
  g.gain.value = 0;
  o.connect(g);
  g.connect(ctx.destination);
  o.start();
  return { o, g };
}

export function useSfx(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<ReturnType<typeof makeBeep> | null>(null);

  const arm = () => {
    if (!enabled) return;
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      nodesRef.current = makeBeep(ctxRef.current);
    }
    if (ctxRef.current?.state === "suspended") ctxRef.current.resume();
  };

  const play = useMemo(() => {
    return () => {
      if (!enabled) return;
      const ctx = ctxRef.current;
      const nodes = nodesRef.current;
      if (!ctx || !nodes) return;
      const now = ctx.currentTime;
      nodes.g.gain.cancelScheduledValues(now);
      nodes.g.gain.setValueAtTime(0, now);
      nodes.g.gain.linearRampToValueAtTime(0.045, now + 0.01);
      nodes.g.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const onFirst = () => {
      arm();
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
    window.addEventListener("pointerdown", onFirst, { once: true });
    window.addEventListener("keydown", onFirst, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
  }, [enabled]);

  return { arm, play };
}
