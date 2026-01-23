import Navbar from "./components/navbar"
import Home from "./components/home"
// import About from "./components/about"
// import Projects from "./components/projects"
// import Contact from "./components/contact"

function App() {
  return (
     <div>
       <Navbar />
       <main>
          <Home/>
          {/* <About/>
          <Projects/>
          <Contact/> */}
       </main>
     </div>
  )
}

export default App
