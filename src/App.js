import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from './pages/Home'
import Pricing from "./pages/Pricing";
import Training from "./pages/Training";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
