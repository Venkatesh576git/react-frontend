import { Link, useParams } from "react-router-dom";
import farmingTips from "../data/farmingTips";

function TipDetails() {
  const { id } = useParams();

  const tip = farmingTips.find(
    (item) => item.id === Number(id)
  );

  if (!tip) {
    return (
      <main className="not-found">
        <h2>Farming Topic Not Found</h2>
        <Link to="/tips">Back to Farming Tips</Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <section className="details-hero">
        <div className="details-icon">{tip.icon}</div>

        <div>
          <p className="hero-label">{tip.category}</p>

          <h1>{tip.title}</h1>

          <p>{tip.shortDescription}</p>
        </div>
      </section>

      <section className="article-content">
        <h2>Understanding {tip.title}</h2>

        <p>{tip.content.introduction}</p>

        <h2>Important Practices</h2>

        <ul>
          {tip.content.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <h2>Benefits</h2>

        <p>{tip.content.benefits}</p>
      </section>

      <Link to="/tips" className="back-link">
        ← Back to Farming Tips
      </Link>
    </main>
  );
}

export default TipDetails;