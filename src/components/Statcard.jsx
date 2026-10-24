import { Icon } from "./DashboardLayout";

function Statcard({
  title,
  value,
  icon,
  currency = false,
  trend = "",
  period,
}) {
  return (
    <article className="metric-card">
      <span className="metric-label">
        {title} <Icon name={icon} />
      </span>
      <strong>
        {value} {currency && <span>PLN</span>}
      </strong>
      {trend && (
        <span className="metric-note">
          <b>{trend}</b> {period}
        </span>
      )}
      <div className="mini-bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </article>
  );
}

export default Statcard;
