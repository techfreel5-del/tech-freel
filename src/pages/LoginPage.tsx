import { type FormEvent, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import PageMeta from "@/seo/PageMeta";

export default function LoginPage() {
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/dashboard";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    if (user) return <Navigate to={from} replace />;

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);
        const result = await login(email, password);
        setLoading(false);
        if (result.ok) {
            navigate(from, { replace: true });
        } else {
            setError(result.error || "Error al iniciar sesión.");
        }
    }

    return (
        <>
            <PageMeta title="Iniciar sesión — Tech Freel" description="Accede a tu cuenta de Tech Freel." />
            <div className="auth-page" style={styles.page}>
                <div style={styles.card}>
                    <Link to="/" style={styles.logoWrap}>
                        <img
                            src="/assets/imgs/template/logo/tech-freel-logo.png"
                            alt="Tech Freel"
                            style={styles.logo}
                        />
                    </Link>
                    <h1 style={styles.title}>Bienvenido de nuevo</h1>
                    <p style={styles.subtitle}>Ingresa a tu cuenta para continuar</p>

                    {error && <div style={styles.errorBox}>{error}</div>}

                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div style={styles.field}>
                            <label style={styles.label}>Correo electrónico</label>
                            <input
                                type="email"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@correo.com"
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.field}>
                            <label style={styles.label}>Contraseña</label>
                            <input
                                type="password"
                                required
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={styles.input}
                            />
                        </div>
                        <button type="submit" disabled={loading} style={styles.btn}>
                            {loading ? "Iniciando..." : "Iniciar sesión"}
                        </button>
                    </form>

                    <p style={styles.footer}>
                        ¿No tienes cuenta?{" "}
                        <Link to="/registro" style={styles.link}>
                            Regístrate gratis
                        </Link>
                    </p>
                    <p style={styles.footer}>
                        <Link to="/" style={styles.linkMuted}>
                            ← Volver al inicio
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f3",
        padding: "24px 16px",
    },
    card: {
        background: "#fff",
        borderRadius: "4px",
        padding: "48px 40px",
        width: "100%",
        maxWidth: "440px",
        boxShadow: "0 2px 24px rgba(0,0,0,0.08)",
    },
    logoWrap: {
        display: "block",
        marginBottom: "32px",
    },
    logo: {
        height: "32px",
        width: "auto",
    },
    title: {
        fontSize: "1.75rem",
        fontWeight: 600,
        marginBottom: "8px",
        color: "#111",
        lineHeight: 1.2,
    },
    subtitle: {
        fontSize: "0.95rem",
        color: "#666",
        marginBottom: "28px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    field: {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
    },
    label: {
        fontSize: "0.85rem",
        fontWeight: 500,
        color: "#333",
    },
    input: {
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "10px 14px",
        fontSize: "0.95rem",
        outline: "none",
        transition: "border-color 0.2s",
        background: "#fafafa",
    },
    btn: {
        background: "#111",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "13px",
        fontSize: "0.95rem",
        fontWeight: 600,
        cursor: "pointer",
        marginTop: "4px",
        letterSpacing: "0.02em",
    },
    errorBox: {
        background: "#fff3f3",
        border: "1px solid #f5c6c6",
        borderRadius: "4px",
        padding: "10px 14px",
        fontSize: "0.875rem",
        color: "#c0392b",
        marginBottom: "16px",
    },
    footer: {
        marginTop: "20px",
        fontSize: "0.875rem",
        color: "#555",
        textAlign: "center",
    },
    link: {
        color: "#111",
        fontWeight: 600,
        textDecoration: "underline",
    },
    linkMuted: {
        color: "#999",
        textDecoration: "none",
    },
};
