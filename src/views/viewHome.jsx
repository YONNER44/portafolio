import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <main className="h-[calc(100vh-8rem)] flex flex-col items-center justify-center  bg-white p-6">
        <div className="bg-gray-100 rounded-2xl shadow-lg p-10 max-w-3xl w-full text-center transition hover:shadow-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Hola, soy <span className="text-blue-600">Yonner</span> 👋
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-700 mb-2">
            Desarrollador <span className="font-semibold">Frontend</span>{" "}
            enfocado en crear experiencias web modernas y funcionales.
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Me apasiona transformar ideas en interfaces atractivas y funcionales
            usando tecnologías modernas.
            <br />
            <br />
            <strong>Frontend:</strong> React, Vue.js, TypeScript, JavaScript,
            Tailwind CSS, Material UI.
            <br />
            <strong>Desarrollo móvil:</strong> Flutter y lenguaje Dart.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/proyectos"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Ver proyectos
            </Link>

            <Link
              to="/contacto"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
