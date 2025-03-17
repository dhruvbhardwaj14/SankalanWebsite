import React from 'react'
import { useEffect } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events'
import Faq from './components/Faq'
import Sponsor from './components/Sponsor'
import Team from './components/Team'
import Updates from './components/Updates'
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
      <Router>
      <Navbar activePath={activePath} setActivePath={handleSetActivePath} />
      <Routes>
      {/* <Route exact path="/" element={<Registration />} /> */}
      {/* <Route exact path="/home" element={<Home />} /> */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/events" element={<Events />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/sponsors" element={<Sponsor />} />
      <Route exact path="/updates" element={<Updates />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
