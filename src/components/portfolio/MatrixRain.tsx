import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Matrix settings
    const fontSize = 11;

    // Character set (Matrix half-width katakana, numbers, and coding syntax characters)
    const chars = "01ｦｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ#$%-+*=[]{}<>";

    // Columns data (will be populated dynamically when dimensions are known)
    let colsCount = 0;
    let heads: number[] = [];
    let speeds: number[] = [];
    let trailLengths: number[] = [];

    // ResizeObserver tracks actual computed element dimensions reliably on mount and resize!
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width || canvas.clientWidth || 300;
        const height = entry.contentRect.height || canvas.clientHeight || 150;

        w = width;
        h = height;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // Populate/resize arrays dynamically
        const newColsCount = Math.ceil(w / fontSize);
        if (newColsCount !== colsCount) {
          if (newColsCount > colsCount) {
            const diff = newColsCount - colsCount;
            for (let i = 0; i < diff; i++) {
              heads.push(Math.random() * -100);
              speeds.push(0.06 + Math.random() * 0.14); // Slow, subtle drop speed
              trailLengths.push(6 + Math.floor(Math.random() * 12));
            }
          } else {
            heads.splice(newColsCount);
            speeds.splice(newColsCount);
            trailLengths.splice(newColsCount);
          }
          colsCount = newColsCount;
        }
      }
    });

    resizeObserver.observe(canvas);

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const mouseRadius = 95;
    const maxPush = 28;
    const maxAlpha = 1.08; // Increased from 0.035 to ensure clear visibility while preserving readable contrast

    const draw = () => {
      // Wait until ResizeObserver sets valid dimensions
      if (w === 0 || h === 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.font = `${fontSize}px monospace`;

      const mouse = mouseRef.current;

      for (let i = 0; i < colsCount; i++) {
        const rawX = i * fontSize;
        const R = Math.floor(heads[i]);
        const trailLength = trailLengths[i];

        for (let j = 0; j < trailLength; j++) {
          const row = R - j;
          if (row < 0) continue;

          const y = row * fontSize;
          if (y > h + fontSize) continue;

          // Calculate mouse distortion
          const dx = rawX - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let drawX = rawX;
          let alpha = (1 - j / trailLength) * maxAlpha;
          let char = chars[Math.floor(Math.random() * chars.length)];

          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius;
            drawX += (dx / (dist || 1)) * force * maxPush;

            // Scramble symbols closer to cursor
            char = "01$#?@*%"[Math.floor(Math.random() * 8)];
            alpha = Math.min(0.18, alpha * 1.5);
          }

          ctx.fillStyle = `rgba(0, 230, 200, ${alpha})`;
          ctx.fillText(char, drawX, y);
        }

        // Update position
        heads[i] += speeds[i];

        // Reset column
        if (R * fontSize > h + trailLength * fontSize) {
          heads[i] = -Math.random() * 20;
          speeds[i] = 0.06 + Math.random() * 0.14;
          trailLengths[i] = 6 + Math.floor(Math.random() * 12);
        }
      }

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
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
