import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"; // <-- importa tu Navbar
import Footer from "./components/Footer";
import ViewHome from "./views/viewHome";
import ViewProjects from "./views/viewProjects";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga inicial (2 segundos)
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

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
  );
}

export default App;
