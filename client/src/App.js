import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Projects from "./pages/project";
import Subscribe from "./pages/subscribe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/subscribe" element={<Subscribe />} /> 
      </Routes>
    </Router>
  ) 
};

export default App;