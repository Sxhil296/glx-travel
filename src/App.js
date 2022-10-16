import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Pricing from "./pages/Pricing";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
