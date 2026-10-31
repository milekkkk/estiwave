import { Link } from "react-router";
import DashboardLayout, { Icon } from "../components/DashboardLayout";
import "./NewOffer.css";
import { useState } from "react";

export default function NewOffer() {
  const [error, setError] = useState({
    title: "",
    client: "",
    value: "",
    description: "",
  });
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {
      title: "",
      client: "",
      value: "",
      description: "",
    };

    if (title.trim() === "") {
      nextErrors.title = "Offer title cannot be empty";
    }
    if (client.trim() === "") {
      nextErrors.client = "Client name cannot be empty";
    }
    if (value.trim() === "") {
      nextErrors.value = "Offer value cannot be empty";
    } else if (Number(value) <= 0) {
      nextErrors.value = "Offer value must be greater than 0";
    }
    if (description.trim() === "") {
      nextErrors.description = "Offer description cannot be empty";
    }
    setError(nextErrors);
    if (
      nextErrors.title === "" &&
      nextErrors.client === "" &&
      nextErrors.value === "" &&
      nextErrors.description === ""
    ) {
      const newOffer = {
        title: title.trim(),
        client: client.trim(),
        value: Number(value),
        description: description.trim(),
        date: Date.now(),
        status: "draft",
      };
      console.log(newOffer);
    }
  }

  return (
    <DashboardLayout>
      <div className="new-offer-page">
        <header className="dashboard-topbar">
          <nav aria-label="Breadcrumb">
            <Link to="/offers">All offers</Link>
            <span className="breadcrumb-slash" aria-hidden="true">
              /
            </span>
            <strong aria-current="page">New offer</strong>
          </nav>
          <span className="demo-indicator">
            <span /> Form preview
          </span>
        </header>
        <main className="dashboard-content">
          <Link className="new-offer-back" to="/offers">
            <Icon name="chevron" /> Back to all offers
          </Link>
          <div className="dashboard-heading">
            <div>
              <div className="eyebrow">FROM AN IDEA TO A PARTNERSHIP</div>
              <h1>
                Create new offer<span>.</span>
              </h1>
              <p>
                Start with the essentials. Give your next proposal a clear
                direction.
              </p>
            </div>
          </div>

          {/* TODO: Connect fields to React state and add your submit handler. */}
          <form
            className="new-offer-form"
            aria-labelledby="new-offer-info-title"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="new-offer-section-heading">
              <span className="feature-icon">
                <Icon name="file" />
              </span>
              <div>
                <h2 id="new-offer-info-title">Offer information</h2>
                <p>The key details of your proposal.</p>
              </div>
            </div>
            <div className="new-offer-fields">
              {/* TODO: Add validation and field error messages when implementing form logic. */}
              <div className="new-offer-field new-offer-full-width">
                <label htmlFor="new-offer-title">Offer title</label>
                <div
                  className={`new-offer-control${error.title ? " has-error" : ""}`}
                >
                  <input
                    id="new-offer-title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="e.g. Brand identity for Nova Studio"
                    aria-describedby={
                      error.title
                        ? "new-offer-title-hint new-offer-title-error"
                        : "new-offer-title-hint"
                    }
                    aria-invalid={Boolean(error.title)}
                  />
                  {error.title && (
                    <span
                      className="new-offer-error"
                      id="new-offer-title-error"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v6 M12 17h.01" />
                      </svg>
                      <span>{error.title}</span>
                    </span>
                  )}
                </div>

                <p id="new-offer-title-hint">
                  Choose a short, descriptive name for this offer.
                </p>
              </div>
              <div className="new-offer-field">
                <label htmlFor="new-offer-client">Client name</label>
                <div
                  className={`new-offer-control${error.client ? " has-error" : ""}`}
                >
                  <input
                    id="new-offer-client"
                    value={client}
                    name="client"
                    onChange={(e) => setClient(e.target.value)}
                    type="text"
                    placeholder="e.g. Nova Studio"
                    aria-describedby={
                      error.client ? "new-offer-client-error" : undefined
                    }
                    aria-invalid={Boolean(error.client)}
                  />
                  {error.client && (
                    <span
                      className="new-offer-error"
                      id="new-offer-client-error"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v6 M12 17h.01" />
                      </svg>
                      <span>{error.client}</span>
                    </span>
                  )}
                </div>
              </div>
              <div className="new-offer-field">
                <label htmlFor="new-offer-value">Offer value (PLN)</label>
                <div
                  className={`new-offer-control${error.value ? " has-error" : ""}`}
                >
                  <div className="new-offer-value-input">
                    <input
                      value={value}
                      id="new-offer-value"
                      name="value"
                      type="number"
                      onChange={(e) => setValue(e.target.value)}
                      inputMode="decimal"
                      placeholder="0.00"
                      aria-describedby={
                        error.value
                          ? "new-offer-currency new-offer-value-error"
                          : "new-offer-currency"
                      }
                      aria-invalid={Boolean(error.value)}
                    />

                    <span id="new-offer-currency">PLN</span>
                  </div>
                  {error.value && (
                    <span
                      className="new-offer-error"
                      id="new-offer-value-error"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v6 M12 17h.01" />
                      </svg>
                      <span>{error.value}</span>
                    </span>
                  )}
                </div>
              </div>
              <div className="new-offer-field new-offer-full-width">
                <label htmlFor="new-offer-description">Description</label>
                <div
                  className={`new-offer-control${error.description ? " has-error" : ""}`}
                >
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="new-offer-description"
                    name="description"
                    rows="6"
                    placeholder="Outline the scope of work, deliverables, and any details your client should know."
                    aria-describedby={
                      error.description
                        ? "new-offer-description-hint new-offer-description-error"
                        : "new-offer-description-hint"
                    }
                    aria-invalid={Boolean(error.description)}
                  />
                  {error.description && (
                    <span
                      className="new-offer-error"
                      id="new-offer-description-error"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v6 M12 17h.01" />
                      </svg>
                      <span>{error.description}</span>
                    </span>
                  )}
                </div>
                <p id="new-offer-description-hint">
                  A clear scope helps set the right expectations.
                </p>
              </div>
            </div>
            <div className="new-offer-actions">
              <p id="new-offer-save-note">
                Preview only. Saving is not connected yet.
              </p>
              <div className="new-offer-action-buttons">
                <Link className="dashboard-button secondary" to="/offers">
                  Cancel
                </Link>
                {/* TODO: Implement draft saving, then enable this submit button. */}
                <button
                  className="dashboard-button primary"
                  type="submit"
                  aria-describedby="new-offer-save-note"
                >
                  Save draft
                </button>
              </div>
            </div>
          </form>

          <footer className="dashboard-footer">
            <span>Small steps. Great offers. Endless possibilities.</span>
            <span>EstiWave</span>
          </footer>
        </main>
      </div>
    </DashboardLayout>
  );
}
