import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Render nothing on touch/mobile devices
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let rafId: number;
    let visible = true;

    const setVisible = (show: boolean) => {
      if (visible === show) return;
      visible = show;
      if (dotRef.current)  dotRef.current.style.opacity  = show ? "1" : "0";
      if (ringRef.current) ringRef.current.style.opacity = show ? "1" : "0";
    };

    const clearRingModes = () => {
      ringRef.current?.classList.remove("crosshair", "text-bar");
    };

    const syncCursorMode = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        clearRingModes();
        return;
      }
      const ctaEl   = target.closest("[data-cursor='cta']");
      const textEl  = target.closest("[data-cursor='text']");

      clearRingModes();
      if (ctaEl)        ringRef.current?.classList.add("crosshair");
      else if (textEl)  ringRef.current?.classList.add("text-bar");
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      setVisible(true);
      syncCursorMode(e.target);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(calc(-50% + ${mx}px), calc(-50% + ${my}px))`;
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const animate = () => {
      // Lerp ring toward dot position
      rx += (mx - rx) * 0.08;
      ry += (my - ry) * 0.08;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(calc(-50% + ${rx}px), calc(-50% + ${ry}px))`;
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Don't render on touch devices at all
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
