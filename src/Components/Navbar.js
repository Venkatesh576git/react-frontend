import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🌱 AgriAssist
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/crops">Crops</Link>
        <Link to="/tips">Farming Tips</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;