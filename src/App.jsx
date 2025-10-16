import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'   // <-- importa tu Navbar
import Footer from './components/Footer'   // <-- importa tu Footer

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      {/* Contenido principal */}
      <main className="pt-20 pb-20 flex-1">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center gap-4 my-8">
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>

    <h1 className="text-center text-3xl font-bold my-4">Vite + React</h1>

    <div className="card mx-auto my-4 p-6 bg-gray-800 text-white rounded-md max-w-md">
      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        count is {count}
      </button>
      <p className="mt-2 text-sm text-gray-300">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>

    <p className="read-the-docs text-center text-gray-400 mt-4">
      Click on the Vite and React logos to learn more
    </p>
  </div>
</main>

      <Footer />
    </>
  )
}

export default App
