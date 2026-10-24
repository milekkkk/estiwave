import { Icon } from "./DashboardLayout";

function Statcard({
  title,
  value,
  icon,
  currency = false,
  trend = "",
  period,
  children,
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
      {children}
    </article>
  );
}

export default Statcard;
