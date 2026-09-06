export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#080a0f]">
      {/* Soft Ambient Radial Lights in background */}
      <div className="absolute top-[-10%] right-[10%] w-[600px] h-[500px] bg-sky-500/[0.08] rounded-full blur-[140px]" />
      <div className="absolute top-[20%] right-[25%] w-[400px] h-[400px] bg-lime-500/[0.05] rounded-full blur-[120px]" />
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-sky-600/[0.06] rounded-full blur-[150px]" />
      <div className="absolute bottom-[10%] left-[15%] w-[600px] h-[500px] bg-indigo-600/[0.06] rounded-full blur-[160px]" />

      {/* Clearly Visible Technical Grid Mesh (Rectangular Boxes) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
          backgroundSize: "54px 54px",
        }}
      />
    </div>
  );
}
