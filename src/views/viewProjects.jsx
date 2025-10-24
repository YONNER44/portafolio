import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900">
        {/* Logos arriba */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo h-16 w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react h-16 w-16" alt="React logo" />
          </a>
        </div>

        {/* Título */}
        <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Vista proyectos
        </h1>

        {/* Card centrada */}
        <div className="card mx-auto p-6 bg-gray-800 text-white rounded-2xl shadow-lg max-w-md w-full text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            count is {count}
          </button>

          <p className="mt-3 text-sm text-gray-300">
            Edita <code>src/views/viewHome.jsx</code> y guarda para probar HMR
          </p>
        </div>

        {/* Texto de ayuda */}
        <p className="text-center text-gray-500 mt-6">
          Click en los logos para aprender más
        </p>
      </main>
    </>
  );
}

export default App;
