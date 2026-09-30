import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Dashboard from "./pages/Dashboard";
import Crops from "./pages/Crops";
import CropDetails from "./pages/CropDetails";
import FarmingTips from "./pages/FarmingTips";
import TipDetails from "./pages/TipDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/crops/:id" element={<CropDetails />} />
        <Route path="/tips" element={<FarmingTips />} />
        <Route path="/tips/:id" element={<TipDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;