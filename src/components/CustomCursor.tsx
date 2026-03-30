import { useEffect, useRef } from "react";

const CURSOR_HIDE_SELECTOR =
  "input, textarea, select, button, summary, [contenteditable='true'], .chatbot-panel, .chatbot-trigger";

const CURSOR_EXPAND_SELECTOR =
  "a, .service-card, .step, .ai-feature, .pricing-card, [data-cursor-expand]";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let rafId: number;

    const setHidden = (hidden: boolean) => {
      dotRef.current?.classList.toggle("cursor-hidden", hidden);
      ringRef.current?.classList.toggle("cursor-hidden", hidden);
    };

    const setExpanded = (expanded: boolean) => {
      ringRef.current?.classList.toggle("expand", expanded);
    };

    const syncCursorState = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        setHidden(false);
        setExpanded(false);
        return;
      }

      const shouldHide = Boolean(target.closest(CURSOR_HIDE_SELECTOR));
      const shouldExpand = !shouldHide && Boolean(target.closest(CURSOR_EXPAND_SELECTOR));

      setHidden(shouldHide);
      setExpanded(shouldExpand);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      syncCursorState(e.target);
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

    const onFocusIn = (e: FocusEvent) => syncCursorState(e.target);
    const onFocusOut = () => {
      const activeElement = document.activeElement;
      syncCursorState(activeElement);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
