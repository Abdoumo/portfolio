// import './App.css'3D Portfolio
import { BrowserRouter } from "react-router-dom";
import { About , Contact, Navbar, Hero, StarsCanvas, Experience, Feedbacks, Works, Tech  } from "./components"

const App = () =>  {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div> 
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div> 
    </BrowserRouter>
    // <div>3D Portfolio</div>
  )
}

export default App