import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/HomePage/Home";
import Footer from "./Components/Footer/Footer";
import InvestPage from "./Pages/InvestPage/InvestPage";
import HowItsWorkPage from "./Pages/HowItsWorkPage/HowItsWorkPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/howitwork" element={<HowItsWorkPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
