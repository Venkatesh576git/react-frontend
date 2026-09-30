import { Link } from "react-router-dom";
import crops from "../data/crops";
import farmingTips from "../data/farmingTips";

function Dashboard() {
  return (
    <div className="dashboard">

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">SMART AGRICULTURE SUPPORT</span>

          <h1>
            Smart Knowledge
            <br />
            for Better Agriculture
          </h1>

          <p>
            Explore crop cultivation guides, farming tips, and useful
            agricultural knowledge in one simple platform.
          </p>

          <div className="hero-buttons">
            <Link to="/crops" className="primary-btn">
              Explore Crops →
            </Link>

            <Link to="/tips" className="secondary-btn">
              Farming Tips
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="plant-circle">
            🌾
          </div>
        </div>
      </section>

      <section className="stats-section">

        <div className="stat-card">
          <div className="stat-icon">🌱</div>
          <div>
            <h2>{crops.length}</h2>
            <p>Crop Guides</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💡</div>
          <div>
            <h2>{farmingTips.length}</h2>
            <p>Farming Topics</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div>
            <h2>100%</h2>
            <p>Free Knowledge</p>
          </div>
        </div>

      </section>

      <section className="featured-section">

        <div className="section-heading">
          <span>LEARN ABOUT CROPS</span>
          <h2>Featured Crops</h2>
          <p>
            Learn about cultivation, soil, irrigation, fertilizers,
            harvesting and more.
          </p>
        </div>

        <div className="crop-grid">

          {crops.slice(0, 3).map((crop) => (
            <div className="crop-card" key={crop.id}>

              <div className="crop-icon">
                {crop.icon}
              </div>

              <h3>{crop.name}</h3>

              <p>{crop.description}</p>

              <Link to={`/crops/${crop.id}`} className="card-link">
                View Complete Guide →
              </Link>

            </div>
          ))}

        </div>

        <div className="view-all">
          <Link to="/crops" className="outline-btn">
            View All Crops
          </Link>
        </div>

      </section>

      <section className="tips-preview">

        <div className="section-heading">
          <span>FARM SMARTER</span>
          <h2>Popular Farming Tips</h2>
        </div>

        <div className="tip-grid">

          {farmingTips.slice(0, 3).map((tip) => (
            <div className="tip-card" key={tip.id}>

              <div className="tip-icon">
                💡
              </div>

              <h3>{tip.title}</h3>

              <p>{tip.description}</p>

              <Link to={`/tips/${tip.id}`} className="card-link">
                Read More →
              </Link>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Dashboard;