import { Link } from "react-router-dom";
import PageMeta from "@/seo/PageMeta";
import { useAuth } from "@/context/AuthContext";

const CHECK_SVG = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FREE_FEATURES = [
    "Acceso a recursos gratuitos",
    "3 descargas por mes",
    "Blog y artículos",
    "Newsletter mensual",
    "Soporte por correo",
];

const PREMIUM_FEATURES = [
    "Todo lo del plan Gratis",
    "Descargas ilimitadas",
    "Recursos exclusivos premium",
    "Tutoriales en video",
    "Acceso anticipado a novedades",
    "Descuentos en servicios Tech Freel",
    "Soporte prioritario",
    "Comunidad privada",
];

export default function MembershipPage() {
    const { user, upgradeToPremium } = useAuth();
    const isPremium = user?.plan === "premium";

    function handleUpgrade() {
        if (!user) return;
        upgradeToPremium();
    }

    return (
        <>
            <PageMeta
                title="Membresía — Tech Freel"
                description="Elige el plan que mejor se adapte a ti. Accede a recursos exclusivos, tutoriales y más."
            />
            <section className="overflow-hidden pt-150 pb-100">
                <div className="container">
                    {/* Header */}
                    <div className="row justify-content-center text-center mb-70">
                        <div className="col-lg-8">
                            <span className="fz-font-label text-uppercase fw-600 neutral-500 d-block mb-15">
                                Planes y precios
                            </span>
                            <h1 className="fz-ds-2 fw-600 lh-1 mb-20">Elige tu membresía</h1>
                            <p className="fz-font-xl neutral-600 fw-400">
                                Accede a recursos de diseño, tutoriales y herramientas para llevar tu trabajo al siguiente nivel.
                            </p>
                        </div>
                    </div>

                    {/* Plans grid */}
                    <div className="row g-4 justify-content-center">
                        {/* Free plan */}
                        <div className="col-lg-5 col-md-8">
                            <div style={styles.planCard}>
                                <div style={styles.planHeader}>
                                    <span style={styles.planBadgeFree}>Gratis</span>
                                    <div style={styles.planPrice}>
                                        <span style={styles.priceAmount}>$0</span>
                                        <span style={styles.pricePer}>/mes</span>
                                    </div>
                                    <p style={styles.planDesc}>Para empezar y explorar.</p>
                                </div>
                                <ul style={styles.featureList}>
                                    {FREE_FEATURES.map((f) => (
                                        <li key={f} style={styles.featureItem}>
                                            <span style={styles.checkIcon}>{CHECK_SVG}</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                {user ? (
                                    <Link to="/dashboard" style={{ ...styles.planBtn, ...styles.planBtnOutline }}>
                                        {user.plan === "free" ? "Plan actual" : "Plan básico"}
                                    </Link>
                                ) : (
                                    <Link to="/registro" style={{ ...styles.planBtn, ...styles.planBtnOutline }}>
                                        Comenzar gratis
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Premium plan */}
                        <div className="col-lg-5 col-md-8">
                            <div style={{ ...styles.planCard, ...styles.planCardPremium }}>
                                <div style={styles.planHeader}>
                                    <span style={styles.planBadgePremium}>Premium</span>
                                    <div style={styles.planPrice}>
                                        <span style={{ ...styles.priceAmount, color: "#fff" }}>$199</span>
                                        <span style={{ ...styles.pricePer, color: "rgba(255,255,255,0.6)" }}>/mes MXN</span>
                                    </div>
                                    <p style={{ ...styles.planDesc, color: "rgba(255,255,255,0.75)" }}>
                                        Para creativos en serio.
                                    </p>
                                </div>
                                <ul style={styles.featureList}>
                                    {PREMIUM_FEATURES.map((f) => (
                                        <li key={f} style={{ ...styles.featureItem, color: "rgba(255,255,255,0.9)" }}>
                                            <span style={{ ...styles.checkIcon, color: "#a3e635" }}>{CHECK_SVG}</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                {isPremium ? (
                                    <Link to="/dashboard" style={styles.planBtn}>
                                        Ir al dashboard
                                    </Link>
                                ) : user ? (
                                    <button onClick={handleUpgrade} style={{ ...styles.planBtn, ...styles.planBtnWhite, border: "none", cursor: "pointer" }}>
                                        Actualizar a Premium
                                    </button>
                                ) : (
                                    <Link to="/registro" style={{ ...styles.planBtn, ...styles.planBtnWhite }}>
                                        Comenzar ahora
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* FAQ note */}
                    <div className="row justify-content-center text-center mt-60">
                        <div className="col-lg-6">
                            <p className="fz-font-lg neutral-500">
                                ¿Tienes preguntas sobre los planes?{" "}
                                <Link to="/faqs" className="neutral-900 fw-600 text-decoration-underline">
                                    Consulta las preguntas frecuentes
                                </Link>{" "}
                                o{" "}
                                <Link to="/contact-1" className="neutral-900 fw-600 text-decoration-underline">
                                    contáctanos
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const styles: Record<string, React.CSSProperties> = {
    planCard: {
        background: "#fff",
        border: "1px solid #e8e8e8",
        borderRadius: "8px",
        padding: "40px 36px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    planCardPremium: {
        background: "#111",
        border: "1px solid #111",
        color: "#fff",
    },
    planHeader: {
        marginBottom: "28px",
    },
    planBadgeFree: {
        display: "inline-block",
        fontSize: "0.75rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        background: "#f0f0f0",
        color: "#555",
        padding: "4px 12px",
        borderRadius: "20px",
        marginBottom: "16px",
    },
    planBadgePremium: {
        display: "inline-block",
        fontSize: "0.75rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        background: "#a3e635",
        color: "#111",
        padding: "4px 12px",
        borderRadius: "20px",
        marginBottom: "16px",
    },
    planPrice: {
        display: "flex",
        alignItems: "baseline",
        gap: "6px",
        marginBottom: "8px",
    },
    priceAmount: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1,
        color: "#111",
    },
    pricePer: {
        fontSize: "0.9rem",
        color: "#888",
    },
    planDesc: {
        fontSize: "0.9rem",
        color: "#666",
        margin: 0,
    },
    featureList: {
        listStyle: "none",
        padding: 0,
        margin: "0 0 32px 0",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        flex: 1,
    },
    featureItem: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "0.9rem",
        color: "#333",
    },
    checkIcon: {
        flexShrink: 0,
        color: "#22c55e",
    },
    planBtn: {
        display: "block",
        textAlign: "center",
        padding: "13px 24px",
        borderRadius: "4px",
        fontSize: "0.9rem",
        fontWeight: 600,
        textDecoration: "none",
        background: "#111",
        color: "#fff",
        letterSpacing: "0.02em",
        transition: "opacity 0.2s",
    },
    planBtnOutline: {
        background: "transparent",
        color: "#111",
        border: "1.5px solid #111",
    },
    planBtnWhite: {
        background: "#fff",
        color: "#111",
    },
};
