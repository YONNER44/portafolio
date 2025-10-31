import Navbar from './components/Navbar'   // <-- importa tu Navbar
import Footer from './components/Footer'
import ViewHome from "./views/viewHome";
import ViewProjects from "./views/viewProjects";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
   <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
          <Routes>
            <Route path="/" element={<ViewHome />} />
            <Route path="/proyectos" element={<ViewProjects />} />
          </Routes>
        </main>

      <Footer />
    </div>
  )
}

export default App
