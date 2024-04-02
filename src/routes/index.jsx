import React from "react";
import { Route, Routes } from "react-router-dom";

//routes
// ===============Layout==================
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
// =================Pages=================
import Home from "../pages/home";
import HowWork from "../pages/howWork";
import Trip from "../pages/Trip";
import Gallery from "../pages/Gallery";
import RentTuk from "../pages/RentTuk";
import RentOption from "../pages/RentOption";
import RentCost from "../pages/RentCost";
import Faq from "../pages/Faq";
import Jobs from "../pages/jobs";
import ContactUs from "../pages/ContactUs";
// ==================policy==================
import PrivacyPolicy from "../pages/policy/PrivacyPolicy";
import RefundPolicy from "../pages/policy/RefundPolicy";
import Conditions from "../pages/policy/Conditions";
// ==================Town==================
import Kandy from "../pages/town/kandy";
import Negombo from "../pages/town/negombo";
import Trincomalee from "../pages/town/trincomalee";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/footer" element={<Footer />} />
      {/* ================================================ */}
      <Route path="/howWork" element={<HowWork />} />
      <Route path="/trip" element={<Trip />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/renttuk" element={<RentTuk />} />
      <Route path="/rentoption" element={<RentOption />} />
      <Route path="/rentcost" element={<RentCost />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contactus" element={<ContactUs />} />
      {/* ================================================ */}
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/refundpolicy" element={<RefundPolicy />} />
      <Route path="/conditions" element={<Conditions />} />
      {/* ================================================ */}
      <Route path="/kandy" element={<Kandy />} />
      <Route path="/negombo" element={<Negombo />} />
      <Route path="/trincomalee" element={<Trincomalee />} />
    </Routes>
  );
};

export default RouteList;
