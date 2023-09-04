import React from "react";
import "./components/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/About/Home";
import Header from "./components/About/Header";
import MoUs from "./components/AlumniEngagement/MoUs";
import Footer from "./components/About/Footer";
import Exhibits from "./components/AlumniEngagement/Exhibits";
import OurTeam from "./components/About/OurTeam"
import Overseas from "./components/ReUnions/Overseas";
import Doctorates from "./components/WallOfFame/Doctorates";
import GovtOfficials from "./components/WallOfFame/GovtOfficials";
import AlumniAwards from "./components/AlumniAwards/AlumniAwards";
import JoinUs from "./components/JoinUs/JoinUs";
import OnCampus from "./components/ReUnions/OnCampus";
import BousIqac from "./components/AlumniEngagement/BousIqac";
import TechTalks from "./components/AlumniEngagement/TechTalks";
import Fdps from "./components/AlumniEngagement/Fdps";
import AlumniGallery from "./components/AlumniEngagement/AlumniGallery";
import Warble from "./components/WallOfFame/Warble";
import Celebrities from "./components/WallOfFame/Celebrities";
import CampusDrives from "./components/AlumniEngagement/CampusDrives";
import Videos from "./components/Videos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MoUs" element={<MoUs />}></Route>
          <Route path="/exhibits" element={<Exhibits />}></Route>
          <Route path="/ourTeam" element={<OurTeam />}></Route>
          <Route path="/overseas" element={<Overseas />}></Route>
          <Route path="/doctorates" element={<Doctorates />}></Route>
          <Route path="/govtOfficials" element={<GovtOfficials />}></Route>
          <Route path="/joinUs" element={<JoinUs />}></Route>
          <Route path="/alumniAwards" element={<AlumniAwards />}></Route>
          <Route path="/onCampus" element={<OnCampus />}></Route>
          <Route path="/bousIqac" element={<BousIqac />}></Route>
          <Route path="/techTalks" element={<TechTalks />}></Route>
          <Route path="/fdps" element={<Fdps />}></Route>
          <Route path="/alumniGallery" element={<AlumniGallery />}></Route>
          <Route path="/warble" element={<Warble />}></Route>
          <Route path="/celebrities" element={<Celebrities />}></Route>
          <Route path="/campusDrives" element={<CampusDrives />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
