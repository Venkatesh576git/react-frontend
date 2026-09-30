function CropCard({ name, season, water, duration, icon }) {
  return (
    <div className="crop-card">
      <div className="crop-icon">{icon}</div>

      <h3>{name}</h3>

      <p>
        <strong>Season:</strong> {season}
      </p>

      <p>
        <strong>Water Requirement:</strong> {water}
      </p>

      <p>
        <strong>Duration:</strong> {duration}
      </p>

      <button className="details-button">
        View Details
      </button>
    </div>
  );
}

export default CropCard;