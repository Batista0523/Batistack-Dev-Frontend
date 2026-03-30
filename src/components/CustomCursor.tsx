import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
    };

    const animate = () => {
      rx += (mx - rx - 18) * 0.12;
      ry += (my - ry - 18) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => ringRef.current?.classList.add("expand");
    const onLeave = () => ringRef.current?.classList.remove("expand");

    const interactives = document.querySelectorAll(
      "a, button, .service-card, .step, .ai-feature, .pricing-card, [data-cursor-expand]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Use MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll(
        "a, button, .service-card, .step, .ai-feature, .pricing-card, [data-cursor-expand]"
      ).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMove);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
