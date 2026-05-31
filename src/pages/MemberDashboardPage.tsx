import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import PageMeta from "@/seo/PageMeta";

const PREMIUM_RESOURCES = [
    { title: "Kit de Branding Completo", type: "ZIP", size: "48 MB", tag: "premium" },
    { title: "Iconos UI Premium — 600 piezas", type: "SVG", size: "12 MB", tag: "premium" },
    { title: "Plantillas Figma — Dashboards", type: "Figma", size: "22 MB", tag: "premium" },
    { title: "Motion Pack — Transiciones GSAP", type: "JS", size: "3 MB", tag: "premium" },
];

const FREE_RESOURCES = [
    { title: "Paleta de colores 2026", type: "PDF", size: "2 MB", tag: "free" },
    { title: "Tipografías para web — Guía", type: "PDF", size: "1.5 MB", tag: "free" },
    { title: "Checklist de lanzamiento web", type: "PDF", size: "0.5 MB", tag: "free" },
];

export default function MemberDashboardPage() {
    const { user, logout } = useAuth();
    const isPremium = user?.plan === "premium";

    return (
        <>
            <PageMeta title="Dashboard — Tech Freel" description="Tu espacio de recursos y membresía en Tech Freel." />
            <section className="overflow-hidden pt-150 pb-100">
                <div className="container">
                    {/* Top bar */}
                    <div className="row align-items-center mb-60">
                        <div className="col-lg-8">
                            <span className="fz-font-label text-uppercase fw-600 neutral-500 d-block mb-10">
                                Mi cuenta
                            </span>
                            <h1 className="fz-ds-3 fw-600 lh-1 mb-10">
                                Hola, {user?.name?.split(" ")[0]} 👋
                            </h1>
                            <p className="fz-font-lg neutral-500 mb-0">
                                Plan:{" "}
                                <span
                                    style={{
                                        fontWeight: 700,
                                        color: isPremium ? "#16a34a" : "#555",
                                        textTransform: "uppercase",
                                        fontSize: "0.8em",
                                        letterSpacing: "0.06em",
                                    }}
                                >
                                    {isPremium ? "Premium" : "Gratis"}
                                </span>
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-lg-0 mt-4">
                            <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", flexWrap: "wrap" }}>
                                {!isPremium && (
                                    <Link
                                        to="/membresia"
                                        style={{
                                            background: "#111",
                                            color: "#fff",
                                            padding: "10px 20px",
                                            borderRadius: "4px",
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            textDecoration: "none",
                                            letterSpacing: "0.02em",
                                        }}
                                    >
                                        Actualizar a Premium
                                    </Link>
                                )}
                                <button
                                    onClick={logout}
                                    style={{
                                        background: "transparent",
                                        color: "#666",
                                        padding: "10px 20px",
                                        borderRadius: "4px",
                                        fontSize: "0.85rem",
                                        fontWeight: 500,
                                        border: "1px solid #ddd",
                                        cursor: "pointer",
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    Cerrar sesión
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-bottom-100 mb-60" />

                    {/* Resources */}
                    <div className="row g-5">
                        {/* Free resources */}
                        <div className="col-lg-6">
                            <h3 className="fw-600 mb-30" style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
                                Recursos gratuitos
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                {FREE_RESOURCES.map((r) => (
                                    <ResourceRow key={r.title} resource={r} unlocked />
                                ))}
                            </div>
                        </div>

                        {/* Premium resources */}
                        <div className="col-lg-6">
                            <h3 className="fw-600 mb-30" style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}>
                                Recursos premium
                                {!isPremium && (
                                    <Link
                                        to="/membresia"
                                        style={{
                                            marginLeft: "12px",
                                            fontSize: "0.75rem",
                                            color: "#888",
                                            fontWeight: 400,
                                            textDecoration: "underline",
                                        }}
                                    >
                                        Desbloquear
                                    </Link>
                                )}
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                {PREMIUM_RESOURCES.map((r) => (
                                    <ResourceRow key={r.title} resource={r} unlocked={isPremium} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Upgrade banner (free users only) */}
                    {!isPremium && (
                        <div
                            style={{
                                marginTop: "60px",
                                background: "#111",
                                borderRadius: "8px",
                                padding: "40px 48px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "24px",
                            }}
                        >
                            <div>
                                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.3rem", margin: "0 0 8px" }}>
                                    Desbloquea todo con Premium
                                </h3>
                                <p style={{ color: "rgba(255,255,255,0.6)", margin: 0, fontSize: "0.9rem" }}>
                                    Descarga ilimitada de recursos, tutoriales exclusivos y mucho más.
                                </p>
                            </div>
                            <Link
                                to="/membresia"
                                style={{
                                    background: "#a3e635",
                                    color: "#111",
                                    padding: "13px 28px",
                                    borderRadius: "4px",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                    letterSpacing: "0.02em",
                                    flexShrink: 0,
                                }}
                            >
                                Ver planes →
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

function ResourceRow({
    resource,
    unlocked,
}: {
    resource: { title: string; type: string; size: string; tag: string };
    unlocked: boolean;
}) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 18px",
                border: "1px solid #eee",
                borderRadius: "6px",
                background: unlocked ? "#fff" : "#fafafa",
                opacity: unlocked ? 1 : 0.55,
                gap: "12px",
            }}
        >
            <div style={{ flex: 1, minWidth: 0 }}>
                <p
                    style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "#111",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {resource.title}
                </p>
                <p style={{ margin: "2px 0 0", fontSize: "0.75rem", color: "#999" }}>
                    {resource.type} · {resource.size}
                </p>
            </div>
            <button
                disabled={!unlocked}
                style={{
                    flexShrink: 0,
                    background: unlocked ? "#111" : "#ccc",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "7px 16px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: unlocked ? "pointer" : "not-allowed",
                    letterSpacing: "0.02em",
                }}
            >
                {unlocked ? "Descargar" : "🔒"}
            </button>
        </div>
    );
}
