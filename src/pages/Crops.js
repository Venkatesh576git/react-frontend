import { Link } from "react-router-dom";
import crops from "../data/crops";

function Crops() {
  return (
    <main className="listing-page">
      <section className="page-header">
        <p className="hero-label">AGRICULTURE KNOWLEDGE</p>
        <h1>Explore Crops</h1>
        <p>
          Discover detailed information about cultivation,
          soil, irrigation, and crop management.
        </p>
      </section>

      <section className="listing-section">
        <div className="crop-grid">
          {crops.map((crop) => (
            <div className="crop-card" key={crop.id}>
              <div className="crop-icon">{crop.icon}</div>

              <h3>{crop.name}</h3>

              <p>
                <strong>Category:</strong> {crop.category}
              </p>

              <p>
                <strong>Season:</strong> {crop.season}
              </p>

              <p>
                <strong>Duration:</strong> {crop.duration}
              </p>

              <p>{crop.description}</p>

              <Link
                to={`/crops/${crop.id}`}
                className="details-link"
              >
                View Detailed Information →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Crops;