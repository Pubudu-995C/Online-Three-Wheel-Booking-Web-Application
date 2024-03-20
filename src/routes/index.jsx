import React from "react";
import { Route, Routes } from "react-router-dom";

//routes
import Navbar from "../pages/Navbar";
import Home from "../pages/home";
import HowWork from "../pages/howWork";
import Trip from "../pages/Trip";
import Footer from "../pages/Footer";
import Gallery from "../pages/Gallery";
import RentTuk from "../pages/RentTuk";
import RentOption from "../pages/RentOption";
import RentCost from "../pages/RentCost";
import Faq from "../pages/Faq";
import Jobs from "../pages/jobs";
import ContactUs from "../pages/ContactUs";
// ========================================
import Kandy from "../pages/town/kandy";
import Negombo from "../pages/town/negombo";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/howWork" element={<HowWork />} />
      <Route path="/trip" element={<Trip />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/renttuk" element={<RentTuk />} />
      <Route path="/rentoption" element={<RentOption />} />
      <Route path="/rentcost" element={<RentCost />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contactus" element={<ContactUs />} />
      {/* ================================================ */}
      <Route path="/kandy" element={<Kandy />} />
      <Route path="/negombo" element={<Negombo />} />
    </Routes>
  );
};

export default RouteList;
