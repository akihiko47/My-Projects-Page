import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import "./index.css"

function App() {
  return (
    <div className="h-full overflow-hidden w-full bg-background-950">
      <div className="absolute h-full w-full pointer-events-none"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]"></div></div>
      <NavBar/>
      <Hero/>
      <Main/>
    </div>
  )
}

export default App
