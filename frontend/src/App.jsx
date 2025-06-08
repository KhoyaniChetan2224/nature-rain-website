import React from "react";
import { Route, Routes } from "react-router-dom";

// Auth Pages
import Login from "./pages/login";
import Signup from "./pages/singup";  // Consider renaming to 'signup' for spelling consistency

// Inside Pages
import Home from "./pages/inside-page/home";
import HeaderHome from "./pages/inside-page/headerHome";
import FooterHome from "./pages/inside-page/footerHome";
import AboutHome from "./pages/inside-page/aboutHome";
import NatureHome from "./pages/inside-page/natureHome";
import FarmerHome from "./pages/inside-page/farmerHome"; // Fixed typo: FarmarHome → FarmerHome
import RainFlowHome from "./pages/inside-page/rainFlowHome"; // Fixed typo: RailFlowHome → RainFlowHome
import Profile from "./pages/inside-page/profile";
import SeaHome from "./pages/inside-page/seaHome";
import TermsSecurity from "./pages/inside-page/TermsSecurity";

// Navigation Pages
import ReadMore from "./pages/inside-page/navigate/ReadMore";
import RainFlowNavigate from "./pages/inside-page/navigate/rainFlownavigate";
import FarmNavigate from "./pages/inside-page/navigate/Farmnaviget"; // Fixed typo: Farmnaviget → FarmNavigate
import SeaNavigate from "./pages/inside-page/navigate/seanaviget";

{/* Info Page */}
import FarmInfo from "./pages/inside-page/forms/farminfo"; // Fixed typo: Farmnfo → FarmInfo

const App = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main Pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/headerHome" element={<HeaderHome />} />
      <Route path="/footerHome" element={<FooterHome />} />
      <Route path="/aboutHome" element={<AboutHome />} />
      <Route path="/natureHome" element={<NatureHome />} />
      <Route path="/farmerHome" element={<FarmerHome />} />
      <Route path="/rainFlowHome" element={<RainFlowHome />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/seaHome" element={<SeaHome />} />
      <Route path="/termsSecurity" element={<TermsSecurity />} />

      {/* Navigation Pages */}
      <Route path="/animal" element={<ReadMore />} />
      <Route path="/rain" element={<RainFlowNavigate />} />
      <Route path="/farm" element={<FarmNavigate />} />
      <Route path="/sea" element={< SeaNavigate />} />

      {/* Info Pages */}
      <Route path="/farminfo" element={<FarmInfo />} />

    </Routes>
  );
};

export default App;
