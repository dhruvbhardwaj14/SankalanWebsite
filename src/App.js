import React from 'react'
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import Events from './components/Events'
import Faq from './components/Faq'
import Sponsor from './components/Sponsor'
import Team from './components/Team'
import Updates from './components/Updates'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
// cursor effects
// import CursorGlow from './components/Cursor/CursorGlow'
// import CursorTrail from './components/Cursor/CursorTrail'
// import CursorParticles from './components/Cursor/CursorParticles'
function App() {
  const [activePath, setActivePath] = React.useState(window.location.pathname);

  // Function to update the active path and document title
  const handleSetActivePath = (path) => {
    setActivePath(path);
    document.title = `SANKALAN-${path==='/'?'HOME':path.toUpperCase().replace("/", "")}`;
    console.log("Triggered")
  };

  // Set the document title dynamically when the active path changes
  useEffect(() => {
    if (activePath) {
      document.title = `SANKALAN-${activePath==='/'?'HOME':activePath.toUpperCase().replace("/", "")}`;
    }
  }, [activePath]);
  return (
    <div className="App">
      {/* Add Cursor Effects */}
      {/* <CursorTrail /> */}
      {/* <CursorGlow />
      <CursorParticles/> */}
      <Router>
      <Navbar activePath={activePath} setActivePath={handleSetActivePath} />
      <Routes>
      {/* <Route exact path="/" element={<Registration />} /> */}
      {/* <Route exact path="/home" element={<Home />} /> */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/events" element={<Events />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/sponsors" element={<Sponsor />} />
      <Route exact path="/updates" element={<Updates />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer/>
      </Router>
      <SpeedInsights/>
    </div>
  );
}

export default App;
