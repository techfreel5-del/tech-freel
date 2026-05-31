import { NavLink } from "react-router-dom";
import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";
import { useAuth } from "@/context/AuthContext";

type Item = { to: string; label: string };

const SERVICE_LINKS: Item[] = [
  { to: "/services-1", label: "Diseño Web" },
  { to: "/services-2", label: "Branding & Identidad" },
  { to: "/services-3", label: "UI/UX Design" },
  { to: "/services-details", label: "Motion Graphics" },
];

const PORTFOLIO_LINKS: Item[] = [
  { to: "/portfolio-1", label: "Todos los proyectos" },
  { to: "/portfolio-2", label: "Branding" },
  { to: "/portfolio-3", label: "Diseño Web" },
  { to: "/portfolio-4", label: "UI/UX" },
];

const RECURSOS_LINKS: Item[] = [
  { to: "/product-archive", label: "Recursos gratuitos" },
  { to: "/product-archive", label: "Recursos premium" },
  { to: "/product-cart", label: "Carrito" },
];

const BLOG_LINKS: Item[] = [
  { to: "/archive-1", label: "Todos los artículos" },
  { to: "/archive-2", label: "Tutoriales" },
  { to: "/blog-details", label: "Último artículo" },
];

function MenuLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : undefined)}>
      {children}
    </NavLink>
  );
}

function LinkSwap({ label }: { label: string }) {
  return (
    <span className="at-link-swap">
      <span className="text-1">{label}</span>
      <span className="text-2">{label}</span>
    </span>
  );
}

export default function MainMenu() {
  const { user } = useAuth();

  return (
    <MainMenuRootList>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <LinkSwap label="Inicio" />
        </NavLink>
      </li>

      <li>
        <NavLink to="/about-1" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <LinkSwap label="Nosotros" />
        </NavLink>
      </li>

      <li className="has-dropdown">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <LinkSwap label="Servicios" />
        </a>
        <ul className="at-submenu submenu">
          {SERVICE_LINKS.map((l) => (
            <li key={l.label}>
              <MenuLink to={l.to}>{l.label}</MenuLink>
            </li>
          ))}
        </ul>
      </li>

      <li className="has-dropdown">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <LinkSwap label="Portafolio" />
        </a>
        <ul className="at-submenu submenu">
          {PORTFOLIO_LINKS.map((l) => (
            <li key={l.label}>
              <MenuLink to={l.to}>{l.label}</MenuLink>
            </li>
          ))}
        </ul>
      </li>

      <li className="has-dropdown">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <LinkSwap label="Recursos" />
        </a>
        <ul className="at-submenu submenu">
          {RECURSOS_LINKS.map((l) => (
            <li key={l.label}>
              <MenuLink to={l.to}>{l.label}</MenuLink>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <NavLink to="/membresia" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <LinkSwap label="Membresía" />
        </NavLink>
      </li>

      <li className="has-dropdown">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <LinkSwap label="Blog" />
        </a>
        <ul className="at-submenu submenu">
          {BLOG_LINKS.map((l) => (
            <li key={l.label}>
              <MenuLink to={l.to}>{l.label}</MenuLink>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <NavLink to="/contact-1" className={({ isActive }) => (isActive ? "active" : undefined)}>
          <LinkSwap label="Contacto" />
        </NavLink>
      </li>

      {user ? (
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : undefined)}>
            <LinkSwap label={user.name.split(" ")[0]} />
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : undefined)}>
            <LinkSwap label="Ingresar" />
          </NavLink>
        </li>
      )}
    </MainMenuRootList>
  );
}
