import { Link, useParams } from "react-router-dom";
import crops from "../data/crops";

function CropDetails() {
  const { id } = useParams();

  const crop = crops.find(
    (item) => item.id === Number(id)
  );

  if (!crop) {
    return (
      <main className="not-found">
        <h2>Crop Not Found</h2>
        <Link to="/crops">Back to Crops</Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <section className="details-hero">
        <div className="details-icon">{crop.icon}</div>

        <div>
          <p className="hero-label">{crop.category}</p>

          <h1>{crop.name}</h1>

          <p>{crop.description}</p>
        </div>
      </section>

      <section className="crop-overview">
        <div>
          <strong>Season</strong>
          <span>{crop.season}</span>
        </div>

        <div>
          <strong>Duration</strong>
          <span>{crop.duration}</span>
        </div>

        <div>
          <strong>Water Requirement</strong>
          <span>{crop.water}</span>
        </div>

        <div>
          <strong>Suitable Soil</strong>
          <span>{crop.soil}</span>
        </div>

        <div>
          <strong>Temperature</strong>
          <span>{crop.temperature}</span>
        </div>
      </section>

      <section className="cultivation-section">
        <h2>Complete Cultivation Guide</h2>

        <article className="info-article">
          <h3>1. Land Preparation</h3>
          <p>{crop.cultivation.landPreparation}</p>
        </article>

        <article className="info-article">
          <h3>2. Seed Selection</h3>
          <p>{crop.cultivation.seedSelection}</p>
        </article>

        <article className="info-article">
          <h3>3. Sowing / Transplanting</h3>
          <p>{crop.cultivation.sowing}</p>
        </article>

        <article className="info-article">
          <h3>4. Irrigation Management</h3>
          <p>{crop.cultivation.irrigation}</p>
        </article>

        <article className="info-article">
          <h3>5. Fertilizer Management</h3>
          <p>{crop.cultivation.fertilizer}</p>
        </article>

        <article className="info-article">
          <h3>6. Pest and Disease Management</h3>
          <p>{crop.cultivation.pestManagement}</p>
        </article>

        <article className="info-article">
          <h3>7. Harvesting</h3>
          <p>{crop.cultivation.harvesting}</p>
        </article>
      </section>

      <Link to="/crops" className="back-link">
        ← Back to All Crops
      </Link>
    </main>
  );
}

export default CropDetails;