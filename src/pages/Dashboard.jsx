import { Link } from "react-router";
import DashboardLayout, { Icon } from "../components/DashboardLayout";
import Statcard from "../components/Statcard.jsx";

// Static sample data for the layout preview.

const stats = [
  {
    id: "0",
    title: "Tytul 1",
    value: 80000,
    currency: true,
    icon: "arrow",
    trend: "20%",
    period: "vs. last month",
  },
  {
    id: "1",
    title: "Tytul 2",
    value: 85000,
    currency: false,
    icon: "arrow",
    trend: "10%",
    period: "vs. last month",
  },
];

const offers = [
  {
    id: "1",
    initials: "NS",
    client: "Nova Studio",
    email: "kontakt@novastudio.pl",
    title: "Brand identity",
    number: "OF/2026/024",
    value: "8,500 PLN",
    date: "Oct 23, 2026",
    status: "Accepted",
    tone: "green",
  },
  {
    id: "2",
    initials: "AC",
    client: "Acme Company",
    email: "hello@acme.pl",
    title: "Website design",
    number: "OF/2026/023",
    value: "12,000 PLN",
    date: "Oct 22, 2026",
    status: "Sent",
    tone: "blue",
  },
  {
    id: "3",
    initials: "FM",
    client: "Forma Market",
    email: "biuro@forma.pl",
    title: "Marketing services",
    number: "OF/2026/022",
    value: "4,200 PLN",
    date: "Oct 21, 2026",
    status: "Draft",
    tone: "gray",
  },
  {
    id: "4",
    initials: "LB",
    client: "Local Bakery",
    email: "hello@localbakery.pl",
    title: "Packaging design",
    number: "OF/2026/021",
    value: "6,800 PLN",
    date: "Oct 20, 2026",
    status: "Sent",
    tone: "blue",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <header className="dashboard-topbar">
        <span>
          Your workspace <span className="breadcrumb-slash">/</span>{" "}
          <strong>Dashboard</strong>
        </span>
        <span className="demo-indicator">
          <span /> Preview · sample data
        </span>
      </header>
      <main className="dashboard-content">
        <div className="dashboard-heading">
          <div>
            <div className="eyebrow">YOUR BUSINESS AT A GLANCE</div>
            <h1>
              A good day for new opportunities<span>.</span>
            </h1>
            <p>Your offers, clients, and key numbers. All in one place.</p>
          </div>
          <Link className="dashboard-button primary" to="/offers/new">
            <Icon name="plus" /> Create offer
          </Link>
        </div>
        <section className="metrics-grid" aria-label="Offer overview">
          {stats.map((stat) => (
            <Statcard
              key={stat.id}
              value={stat.value}
              title={stat.title}
              currency={stat.currency}
              icon={stat.icon}
              trend={stat.trend}
              period={stat.period}
            />
          ))}
          <article className="metric-card">
            <span className="metric-label">
              Active offers <Icon name="file" />
            </span>
            <strong>12</strong>
            <span className="metric-note">
              <b>+3 new</b> this month
            </span>
            <div className="metric-footer">
              <span className="status-dot blue" /> 5 awaiting a response
            </div>
          </article>
          <article className="metric-card">
            <span className="metric-label">
              Your clients <Icon name="users" />
            </span>
            <strong>28</strong>
            <span className="metric-note">
              <b>+4 clients</b> this month
            </span>
            <div className="metric-footer avatar-stack">
              <span>NS</span>
              <span>AC</span>
              <span>FM</span>
              <small>Build lasting relationships.</small>
            </div>
          </article>
        </section>
        <section className="dashboard-middle">
          <article className="getting-started">
            <span className="feature-icon">
              <Icon name="plus" />
            </span>
            <div>
              <span className="eyebrow">FROM AN IDEA TO A PARTNERSHIP</span>
              <h2>
                Your next great partnership
                <br />
                starts with an offer.
              </h2>
              <p>Create a proposal that makes a great first impression.</p>
              <Link to="/offers/new" className="dashboard-button white">
                Create a new offer <Icon name="arrow" />
              </Link>
            </div>
            <div className="decorative-document" aria-hidden="true">
              <span className="document-logo">EstiWave</span>
              <b>Your proposal</b>
              <i />
              <i />
              <i />
              <div />
              <small>Made with you in mind.</small>
            </div>
          </article>
          <article className="quick-links">
            <h2>Quick links</h2>
            <p>Less searching. More doing.</p>
            <Link to="/offers">
              <span className="shortcut-icon">
                <Icon name="file" />
              </span>
              <span>
                <strong>All offers</strong>
                <small>Browse your proposals</small>
              </span>
              <Icon name="chevron" />
            </Link>
            <Link to="/clients">
              <span className="shortcut-icon">
                <Icon name="users" />
              </span>
              <span>
                <strong>Client directory</strong>
                <small>All your contacts, within reach</small>
              </span>
              <Icon name="chevron" />
            </Link>
          </article>
        </section>
        <section className="offers-panel">
          <div className="section-heading">
            <div>
              <h2>
                Recent offers <span className="count-badge">4</span>
              </h2>
              <p>Keep up with your latest proposals.</p>
            </div>
            <Link className="dashboard-button secondary" to="/offers">
              All offers <Icon name="arrow" />
            </Link>
          </div>
          <div className="offers-table-scroll">
            <table className="offers-table">
              <thead>
                <tr>
                  <th>Offer</th>
                  <th>Client</th>
                  <th>Status</th>
                  <th>Value</th>
                  <th>Created</th>
                  <th>
                    <span className="sr-only">Details</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer) => (
                  <tr key={offer.id}>
                    <td>
                      <Link className="offer-title" to={`/offers/${offer.id}`}>
                        {offer.title}
                      </Link>
                      <small>{offer.number}</small>
                    </td>
                    <td>
                      <div className="client-cell">
                        <span className="client-avatar">{offer.initials}</span>
                        <span>
                          <Link to={`/clients/${offer.id}`}>
                            {offer.client}
                          </Link>
                          <small>{offer.email}</small>
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge ${offer.tone}`}>
                        <span />
                        {offer.status}
                      </span>
                    </td>
                    <td className="offer-value">{offer.value}</td>
                    <td className="offer-date">{offer.date}</td>
                    <td>
                      <Link
                        className="table-arrow"
                        to={`/offers/${offer.id}`}
                        aria-label={`Open offer: ${offer.title}`}
                      >
                        <Icon name="arrow" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <span>Showing 4 sample offers</span>
            <span>All amounts in PLN</span>
          </div>
        </section>
        <footer className="dashboard-footer">
          <span>Small steps. Great offers. Endless possibilities.</span>
          <span>EstiWave</span>
        </footer>
      </main>
    </DashboardLayout>
  );
}
