import JarvisChat from "./components/JarvisChat/JarvisChat"
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Services from "./components/sections/Services"
import Skills from "./components/sections/Skills"
import Testimonials from "./components/sections/Testimonials"

function App() {

  return (
  
      <div className="min-h-screen bg-black">
        <Navbar/>

        <main>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Services/>
          <Testimonials/> 
          <Contact/>
        </main>
        <Footer/>

        <JarvisChat/>
      </div>
    
  )
}

export default App
