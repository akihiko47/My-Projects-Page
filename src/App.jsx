import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Sliders from "./components/Sliders"
import "./index.css"

function App() {
  return (
    <div className="h-full bg-background-950 overflow-hidden w-full">
      <NavBar/>
      <Hero/>
      <Sliders/>
    </div>
  )
}

export default App
