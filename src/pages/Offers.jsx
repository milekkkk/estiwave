import { Link } from "react-router";
import DashboardLayout, { Icon } from "../components/DashboardLayout";
import "./Offers.css";
import { useState } from "react";

// Same static examples as Dashboard.jsx. TODO: Supply your offer data here.
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

export default function Offers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const search = searchQuery.toLowerCase();

  /*  another way of filtering search, but i use the other one which is easier to develop later
  const filteredOffers = offers.filter(
    (query) =>
      (category === "All" || query.status === category) &&
      (query.title.toLowerCase().includes(search) ||
        query.client.toLowerCase().includes(search) ||
        query.number.toLowerCase().includes(search)),
  ); */

  const filteredOffers = offers.filter((query) => {
    const categoryMatch =
      category.toLowerCase() === "all" ||
      query.status.toLowerCase() === category.toLowerCase();

    const searchMatch =
      query.title.toLowerCase().includes(search) ||
      query.client.toLowerCase().includes(search) ||
      query.number.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });

  return (
    <DashboardLayout>
      <div className="offers-page">
        <header className="dashboard-topbar">
          <span>
            Your workspace <span className="breadcrumb-slash">/</span>{" "}
            <strong>All offers</strong>
          </span>
          <span className="demo-indicator">
            <span /> Preview · sample data
          </span>
        </header>
        <main className="dashboard-content">
          <div className="dashboard-heading">
            <div>
              <div className="eyebrow">YOUR PROPOSALS, IN ONE PLACE</div>
              <h1>
                All offers<span>.</span>
              </h1>
              <p>
                Keep track of every proposal, from the first draft to a new
                partnership.
              </p>
            </div>
            <Link className="dashboard-button primary" to="/offers/new">
              <Icon name="plus" /> Create offer
            </Link>
          </div>
          <section className="offers-panel" aria-labelledby="offers-list-title">
            <div className="section-heading">
              <div>
                <h2 id="offers-list-title">
                  Your offers{" "}
                  <span className="count-badge">{filteredOffers.length}</span>
                </h2>
                <p>A clear view of your latest proposals and their progress.</p>
              </div>
            </div>
            <div className="offers-controls">
              {/* added basic search */}
              <div className="offers-search">
                <label htmlFor="offers-search">Search offers</label>
                <div className="offers-search-field">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <path d="m16 16 5 5" />
                  </svg>
                  <input
                    id="offers-search"
                    type="search"
                    value={searchQuery}
                    placeholder="Search by offer, client or number"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-describedby="offers-preview-note"
                  />
                </div>
              </div>
              {/* TODO: Enable this select and implement sorting in React. */}
              <div className="offers-sort">
                <label htmlFor="offers-sort">Sort by</label>
                <select
                  id="offers-sort"
                  disabled
                  aria-describedby="offers-preview-note"
                >
                  <option>Newest first</option>
                  <option>Oldest first</option>
                  <option>Highest value</option>
                  <option>Lowest value</option>
                </select>
              </div>
            </div>
            {/* TODO: Enable status buttons and connect your filtering logic. */}
            <div className="offers-filter-row">
              <div
                className="offers-status-filters"
                role="group"
                aria-label="Filter offers by status"
                aria-describedby="offers-preview-note"
              >
                <button
                  type="button"
                  className={
                    category === "all"
                      ? "offers-filter is-selected"
                      : "offers-filter"
                  }
                  aria-pressed={category === "all"}
                  onClick={() => setCategory("all")}
                >
                  All <span>4</span>
                </button>
                <button
                  type="button"
                  className={
                    category === "draft"
                      ? "offers-filter is-selected"
                      : "offers-filter"
                  }
                  aria-pressed={category === "draft"}
                  onClick={() => {
                    setCategory("draft");
                  }}
                >
                  Draft <span>1</span>
                </button>
                <button
                  type="button"
                  className={
                    category === "sent"
                      ? "offers-filter is-selected"
                      : "offers-filter"
                  }
                  aria-pressed={category === "sent"}
                  onClick={() => {
                    setCategory("sent");
                  }}
                >
                  Sent <span>2</span>
                </button>
                <button
                  type="button"
                  className={
                    category === "accepted"
                      ? "offers-filter is-selected"
                      : "offers-filter"
                  }
                  aria-pressed={category === "accepted"}
                  onClick={() => {
                    setCategory("accepted");
                  }}
                >
                  Accepted <span>1</span>
                </button>
                <button
                  type="button"
                  className={
                    category === "rejected"
                      ? "offers-filter is-selected"
                      : "offers-filter"
                  }
                  aria-pressed={category === "rejected"}
                  onClick={() => {
                    setCategory("rejected");
                  }}
                >
                  Rejected <span>0</span>
                </button>
              </div>
              <p id="offers-preview-note">
                Search and filters are implemented, sorting is not yet
              </p>
            </div>
            {filteredOffers.length >= 1 ? (
              <OffersTable offers={filteredOffers} />
            ) : (
              <div className="offers-no-results" role="status">
                <span className="offers-no-results-icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="m7 8 3 1 M15 9l2-1" />
                    <circle
                      cx="9"
                      cy="11"
                      r="0.7"
                      fill="currentColor"
                      stroke="none"
                    />
                    <circle
                      cx="15"
                      cy="11"
                      r="0.7"
                      fill="currentColor"
                      stroke="none"
                    />
                    <path d="M8.5 16c2-2.5 5-2.5 7 0" />
                  </svg>
                </span>
                <h3>Uh-oh, no offers found</h3>
                <p>
                  Try a different search term or adjust your status filters.
                </p>
              </div>
            )}

            <div className="table-footer">
              <span>Showing {filteredOffers.length} sample offers</span>
              <span>All amounts in PLN</span>
            </div>
          </section>
          <footer className="dashboard-footer">
            <span>Small steps. Great offers. Endless possibilities.</span>
            <span>EstiWave</span>
          </footer>
        </main>
      </div>
    </DashboardLayout>
  );
}

// Presentation only: no searching, filtering or sorting here.
export function OffersTable({ offers }) {
  return (
    <table className="offers-table offers-all-table">
      <caption className="sr-only">
        All offers: proposal, client, number, status, value and creation date
      </caption>
      <thead>
        <tr>
          <th scope="col">Offer</th>
          <th scope="col">Client</th>
          <th scope="col">Number</th>
          <th scope="col">Status</th>
          <th scope="col">Value</th>
          <th scope="col">Created</th>
          <th scope="col">
            <span className="sr-only">Details</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <tr key={offer.id}>
            <td data-label="Offer" className="offers-name">
              <Link className="offer-title" to={`/offers/${offer.id}`}>
                {offer.title}
              </Link>
            </td>
            <td data-label="Client">
              <div className="client-cell">
                <span className="client-avatar" aria-hidden="true">
                  {offer.initials}
                </span>
                <span>
                  {offer.client}
                  <small>{offer.email}</small>
                </span>
              </div>
            </td>
            <td data-label="Number" className="offers-number">
              {offer.number}
            </td>
            <td data-label="Status">
              <span className={`status-badge ${offer.tone}`}>
                <span />
                {offer.status}
              </span>
            </td>
            <td data-label="Value" className="offer-value">
              {offer.value}
            </td>
            <td data-label="Created" className="offer-date">
              {offer.date}
            </td>
            {/* TODO: Implement the /offers/:id details page separately. */}
            <td className="offers-details">
              <Link
                className="table-arrow"
                to={`/offers/${offer.id}`}
                aria-label={`Open offer: ${offer.title}`}
              >
                <span className="offers-details-label">View offer</span>
                <Icon name="arrow" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
