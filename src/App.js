import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "style.css";
import "tailwindcss/lib/css/preflight.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import LandingPage from "components/pages/LandingPage";
import SimpleContactUs from "components/forms/SimpleContactUs";

import SuccessPage from "components/pages/SuccessPage"; 
import SignInPage from "components/pages/SignInPage";

function App() {
  return (
    <Router>
      <AnimationRevealPage>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="business/login" element={<SignInPage />} />
          <Route path="/contact" element={<SimpleContactUs />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </AnimationRevealPage>
    </Router>
  );
}

export default App;
