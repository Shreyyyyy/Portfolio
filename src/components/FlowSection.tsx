import { useEffect, useMemo, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export default function FlowSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setVisible(true);
        }
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const spring = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 18,
    filter: visible ? "blur(0px)" : "blur(6px)",
    config: { tension: 220, friction: 24 },
  });

  const id = useMemo(
    () =>
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    [title]
  );

  return (
    <animated.section
      id={id}
      ref={ref}
      style={{ opacity: spring.opacity, transform: spring.y.to((v) => `translateY(${v}px)`), filter: spring.filter as any }}
      className="dashSection"
    >
      <div className="dashHeader">
        <div>
          <div className="dashTitle">{title}</div>
          {subtitle ? <div className="dashSub">{subtitle}</div> : null}
        </div>
        <div className="dashDot" aria-hidden />
      </div>
      <div className="dashBody">{children}</div>
    </animated.section>
  );
}
