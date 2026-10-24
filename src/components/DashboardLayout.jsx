import { NavLink } from "react-router";
import "./DashboardLayout.css";
import Logo from "../assets/logoipsum.svg";

export function Icon({ name, ...props }) {
  const paths = {
    grid: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z",
    file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13h8 M8 17h5",
    users:
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M16 3a4 4 0 0 1 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
    settings:
      "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1z",
    plus: "M12 5v14 M5 12h14",
    arrow: "M7 17 17 7 M7 7h10v10",
    chevron: "m9 5 7 7-7 7",
    logout: "M9 5H4v14h5 M9 12h12 m-4-4 4 4-4 4",
    clock: "M12 8v4l3 2 M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",
    check: "m5 12 4 4L19 6",
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}

// Shared page layout: <DashboardLayout>page content</DashboardLayout>.
// Sidebar expansion uses CSS only — no state or event handlers.
export default function DashboardLayout({ children }) {
  return (
    <div className="workspace">
      <aside className="workspace-sidebar" aria-label="Sidebar">
        <a
          className="workspace-brand"
          href="/dashboard"
          aria-label="EstiWave — dashboard"
        >
          <img className="workspace-logo" src={Logo} alt="EstiWave" />
          <span className="sidebar-label">EstiWave</span>
        </a>
        <div className="sidebar-divider" />
        <span className="sidebar-caption sidebar-label">YOUR WORKSPACE</span>
        <nav className="workspace-nav" aria-label="Main navigation">
          <NavLink to="/dashboard" title="Dashboard">
            <Icon name="grid" />
            <span className="sidebar-label">Dashboard</span>
          </NavLink>
          <NavLink to="/offers" end title="Offers">
            <Icon name="file" />
            <span className="sidebar-label">Offers</span>
          </NavLink>
          <NavLink to="/offers/new" title="New offer">
            <Icon name="plus" />
            <span className="sidebar-label">New offer</span>
          </NavLink>
          <NavLink to="/clients" title="Clients">
            <Icon name="users" />
            <span className="sidebar-label">Clients</span>
          </NavLink>
        </nav>
        <div className="sidebar-bottom workspace-nav">
          <NavLink to="/settings" title="Settings">
            <Icon name="settings" />
            <span className="sidebar-label">Settings</span>
          </NavLink>
          <NavLink to="/login" title="Go to login">
            <Icon name="logout" />
            <span className="sidebar-label">Log out</span>
          </NavLink>
          <div className="sidebar-divider" />
          <div className="sidebar-profile">
            <span className="avatar">YOU</span>
            <span className="sidebar-label">
              <strong>Your account</strong>
              <small>Personal workspace</small>
            </span>
          </div>
        </div>
      </aside>
      <div className="workspace-body">{children}</div>
    </div>
  );
}
