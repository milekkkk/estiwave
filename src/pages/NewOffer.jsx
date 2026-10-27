import { Link } from "react-router";
import DashboardLayout, { Icon } from "../components/DashboardLayout";
import "./NewOffer.css";

export default function NewOffer() {
  return (
    <DashboardLayout>
      <div className="new-offer-page">
        <header className="dashboard-topbar">
          <nav aria-label="Breadcrumb">
            <Link to="/offers">All offers</Link>
            <span className="breadcrumb-slash" aria-hidden="true">/</span>
            <strong aria-current="page">New offer</strong>
          </nav>
          <span className="demo-indicator"><span /> Form preview</span>
        </header>
        <main className="dashboard-content">
          <Link className="new-offer-back" to="/offers">
            <Icon name="chevron" /> Back to all offers
          </Link>
          <div className="dashboard-heading">
            <div>
              <div className="eyebrow">FROM AN IDEA TO A PARTNERSHIP</div>
              <h1>Create new offer<span>.</span></h1>
              <p>Start with the essentials. Give your next proposal a clear direction.</p>
            </div>
          </div>

          {/* TODO: Connect fields to React state and add your submit handler. */}
          <form className="new-offer-form" aria-labelledby="new-offer-info-title" noValidate>
            <div className="new-offer-section-heading">
              <span className="feature-icon"><Icon name="file" /></span>
              <div>
                <h2 id="new-offer-info-title">Offer information</h2>
                <p>The key details of your proposal.</p>
              </div>
            </div>
            <div className="new-offer-fields">
              {/* TODO: Add validation and field error messages when implementing form logic. */}
              <div className="new-offer-field new-offer-full-width">
                <label htmlFor="new-offer-title">Offer title</label>
                <input id="new-offer-title" name="title" type="text" placeholder="e.g. Brand identity for Nova Studio" aria-describedby="new-offer-title-hint" />
                <p id="new-offer-title-hint">Choose a short, descriptive name for this offer.</p>
              </div>
              <div className="new-offer-field">
                <label htmlFor="new-offer-client">Client name</label>
                <input id="new-offer-client" name="client" type="text" placeholder="e.g. Nova Studio" />
              </div>
              <div className="new-offer-field">
                <label htmlFor="new-offer-value">Offer value (PLN)</label>
                <div className="new-offer-value-input">
                  <input id="new-offer-value" name="value" type="number" inputMode="decimal" placeholder="0.00" aria-describedby="new-offer-currency" />
                  <span id="new-offer-currency">PLN</span>
                </div>
              </div>
              <div className="new-offer-field new-offer-full-width">
                <label htmlFor="new-offer-description">Description</label>
                <textarea id="new-offer-description" name="description" rows="6" placeholder="Outline the scope of work, deliverables, and any details your client should know." aria-describedby="new-offer-description-hint" />
                <p id="new-offer-description-hint">A clear scope helps set the right expectations.</p>
              </div>
            </div>
            <div className="new-offer-actions">
              <p id="new-offer-save-note">Preview only. Saving is not connected yet.</p>
              <div className="new-offer-action-buttons">
                <Link className="dashboard-button secondary" to="/offers">Cancel</Link>
                {/* TODO: Implement draft saving, then enable this submit button. */}
                <button className="dashboard-button primary" type="submit" disabled aria-describedby="new-offer-save-note">Save draft</button>
              </div>
            </div>
          </form>
          <footer className="dashboard-footer"><span>Small steps. Great offers. Endless possibilities.</span><span>EstiWave</span></footer>
        </main>
      </div>
    </DashboardLayout>
  );
}
