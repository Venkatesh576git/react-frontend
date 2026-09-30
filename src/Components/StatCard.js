function StatCard({ icon, number, label }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}

export default StatCard;