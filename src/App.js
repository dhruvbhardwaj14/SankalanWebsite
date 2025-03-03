import React from 'react'
import { useEffect } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import Home from './components/Home';
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
      </Routes>
      </Router>
    </div>
  );
}

export default App;
