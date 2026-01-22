import Navbar from "./components/navbar"

function App() {
  return (
     <div>
       <Navbar />
       <main>
          <home/>
          <about/>
          <projects/>
          <contact/>
       </main>
     </div>
  )
}

export default App
