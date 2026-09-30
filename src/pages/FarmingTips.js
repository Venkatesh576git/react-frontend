import { Link } from "react-router-dom";
import farmingTips from "../data/farmingTips";

function FarmingTips() {
  return (
    <main className="listing-page">
      <section className="page-header">
        <p className="hero-label">AGRICULTURE KNOWLEDGE CENTER</p>

        <h1>Farming Tips</h1>

        <p>
          Learn practical concepts related to soil,
          irrigation, nutrients, crop protection, and storage.
        </p>
      </section>

      <section className="listing-section">
        <div className="tips-grid">
          {farmingTips.map((tip) => (
            <div className="tip-card" key={tip.id}>
              <span>{tip.icon}</span>

              <h3>{tip.title}</h3>

              <p>
                <strong>{tip.category}</strong>
              </p>

              <p>{tip.shortDescription}</p>

              <Link
                to={`/tips/${tip.id}`}
                className="details-link"
              >
                Read Detailed Guide →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FarmingTips;