import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import "./index.css"

function App() {
  return (
    <div className="h-full overflow-hidden w-full bg-background-950">
      <NavBar/>
      <Hero/>
      <Main/>
    </div>
  )
}

export default App
