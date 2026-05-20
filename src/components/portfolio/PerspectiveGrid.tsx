import { useEffect, useRef } from "react";

export function PerspectiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let offset = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const horizonY = () => h * 0.5;
    const cols = 28;
    const rows = 14;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(0, 230, 200, 0.10)";
      ctx.lineWidth = 0.5;

      const hy = horizonY();

      // vertical lines (vanishing to center)
      const vanishX = w / 2;
      for (let i = -cols / 2; i <= cols / 2; i++) {
        const x = vanishX + (i / (cols / 2)) * w * 0.9;
        ctx.beginPath();
        ctx.moveTo(x, h);
        ctx.lineTo(vanishX, hy);
        ctx.stroke();
      }

      // horizontal lines moving toward camera
      for (let j = 0; j < rows; j++) {
        const t = ((j + (offset % 1)) / rows);
        const eased = Math.pow(t, 2.2);
        const y = hy + (h - hy) * eased;
        const alpha = 0.04 + 0.10 * eased;
        ctx.strokeStyle = `rgba(0, 230, 200, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      offset += 0.0025;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
    />
  );
}
