import React from "react"
import "style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import LandingPage from "components/pages/LandingPage"
function App() {
  return (
    <AnimationRevealPage>
      <LandingPage />
    </AnimationRevealPage>
  )
}

export default App