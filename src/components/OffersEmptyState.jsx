import { Link } from "react-router";
import { Icon } from "./DashboardLayout";
import "../pages/Offers.css";

// TODO: Render this instead of OffersTable when your offer list is empty.
export default function OffersEmptyState() {
  return (
    <div className="offers-empty">
      <span className="feature-icon"><Icon name="file" /></span>
      <h2>No offers yet</h2>
      <p>Your next partnership starts here. Create your first offer to get started.</p>
      <Link className="dashboard-button primary" to="/offers/new"><Icon name="plus" /> Create offer</Link>
    </div>
  );
}
