import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "style.css";
import "tailwindcss/lib/css/preflight.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import LandingPage from "components/pages/LandingPage";
import SimpleContactUs from "components/forms/SimpleContactUs";

import SuccessPage from "components/pages/SuccessPage"; 

function App() {
  return (
    <Router>
      <AnimationRevealPage>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<SimpleContactUs />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </AnimationRevealPage>
    </Router>
  );
}

export default App;
