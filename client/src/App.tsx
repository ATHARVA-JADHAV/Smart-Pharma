// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/index";
import Stock from "./components/stock";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </Router>
  );
}

export default App;
