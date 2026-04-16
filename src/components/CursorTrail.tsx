import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function CursorTrail({ enabled }: { enabled: boolean }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 2 },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 0 },
        color: { value: ["#23f5ff", "#c935ff", "#a3ff2b"] },
        opacity: { value: { min: 0.15, max: 0.55 } },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: { min: 0.3, max: 1.2 },
          outModes: "destroy" as const,
        },
        life: { duration: { sync: false, value: { min: 0.6, max: 1.1 } }, count: 1 },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "trail" },
          resize: { enable: true },
        },
        modes: {
          trail: {
            delay: 0.005,
            quantity: 2,
            pauseOnStop: true,
          },
        },
      },
      background: { color: { value: "transparent" } },
    }),
    []
  );

  if (!enabled || !ready) return null;

  return <Particles id="cursor-trail" options={options as any} />;
}
