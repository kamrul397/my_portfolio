// Lightweight, zero-dependency high-performance canvas confetti
export function fireConfetti(options = {}) {
  if (typeof window === "undefined") return;

  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const particleCount = options.particleCount || 75;
  const colors = options.colors || [
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#10b981",
    "#f59e0b",
    "#06b6d4",
  ];

  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width / 2 + (Math.random() - 0.5) * 100,
      y: height / 2 + (Math.random() - 0.5) * 60,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.7) * 18 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
      gravity: 0.45,
      shape: Math.random() > 0.4 ? "rect" : "circle",
    });
  }

  let animationFrame;
  const startTime = Date.now();
  const duration = options.duration || 2200;

  function render() {
    const elapsed = Date.now() - startTime;
    if (elapsed > duration) {
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
      return;
    }

    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.rotationSpeed;
      p.opacity = Math.max(0, 1 - elapsed / duration);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }

      ctx.restore();
    });

    animationFrame = requestAnimationFrame(render);
  }

  animationFrame = requestAnimationFrame(render);
}
