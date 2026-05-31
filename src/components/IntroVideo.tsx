import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Solo mostrar una vez por sesión
    const shown = sessionStorage.getItem("tf_intro_shown");
    if (!shown) {
      setVisible(true);
      sessionStorage.setItem("tf_intro_shown", "1");
    }
  }, []);

  const handleEnd = () => {
    setHiding(true);
    setTimeout(() => setVisible(false), 800);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: hiding ? 0 : 1,
        transition: "opacity 0.8s ease",
        cursor: "pointer",
      }}
      onClick={handleEnd}
    >
      <video
        ref={videoRef}
        src="/assets/video/intro.mp4"
        autoPlay
        muted
        playsInline
        onLoadedMetadata={() => { if (videoRef.current) videoRef.current.playbackRate = 1.5; }}
        onEnded={handleEnd}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {/* Botón skip */}
      <button
        onClick={(e) => { e.stopPropagation(); handleEnd(); }}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.4)",
          color: "#fff",
          padding: "0.5rem 1.2rem",
          borderRadius: "2rem",
          fontSize: "0.85rem",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
          letterSpacing: "0.05em",
        }}
      >
        Saltar intro
      </button>
    </div>
  );
}
