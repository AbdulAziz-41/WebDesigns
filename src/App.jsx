import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/HomePage/Home";
import Footer from "./Components/Footer/Footer";
import InvestPage from "./Pages/InvestPage/InvestPage";
import HowItsWorkPage from "./Pages/HowItsWorkPage/HowItsWorkPage";
import WhyFilmPage from "./Pages/WhyFilmPage/WhyFilmPage";
import AboutUsPage from "./Pages/AboutPage/AboutUsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ApplyForMemberShipPage from "./Pages/ApplyForMemberShipPage/ApplyforMemberShipPage";
import InvitePage from "./Pages/InvitePage/InvitePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ProfileForm from "./Components/ProfileTabs/ProfileForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/howitwork" element={<HowItsWorkPage />} />
        <Route path="/whyfilm" element={<WhyFilmPage />} />
        <Route path="/About" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/applyformembership"
          element={<ApplyForMemberShipPage />}
        />
        <Route path="/invite" element={<InvitePage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<ProfileForm />} />
          <Route path="accreditation" element={<ProfileForm />} />
          <Route path="investment-history" element={<ProfileForm />} />
          <Route path="payment-methods" element={<ProfileForm />} />
          <Route path="brokerage-accounts" element={<ProfileForm />} />
          <Route path="documents" element={<ProfileForm />} />
          <Route path="communications" element={<ProfileForm />} />
        </Route>
        <Route path="/logout" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
