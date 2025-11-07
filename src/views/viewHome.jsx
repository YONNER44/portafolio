import { Link } from "react-router-dom";
import foto from "../assets/img/perfil.jpg";
import Lottie from "lottie-react";
import helloAnimation from "../assets/IconJson/Hello.json";
import { useRef } from "react";

function App() {
  const helloLottieRef = useRef(null);
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-[#0a0a0a] p-6 pb-24 min-h-screen md:min-h-[calc(100vh-7rem)]">
        <div className="bg-[#1f1f1f] rounded-2xl shadow-lg w-full overflow-hidden transition hover:shadow-xl flex flex-col md:flex-row">
          {/* Columna izquierda: Foto */}
          <div className="md:w-1/2 w-full flex items-center justify-center bg-[#181818]">
            <img
              src={foto}
              alt="Foto de Yonner"
              className="object-cover w-full h-full md:rounded-l-2xl rounded-t-2xl md:rounded-t-none"
            />
          </div>

          <div className="bg-[#1f1f1f] rounded-2xl shadow-lg p-10  w-full text-center transition hover:shadow-xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#b91b1c] mb-4 flex items-center justify-center gap-2">
              Hola, Me llamo <span className="text-gray-200 ml-2">Yonner</span>
              <div
                onMouseEnter={() => helloLottieRef.current?.play()}
                onMouseLeave={() => helloLottieRef.current?.stop()}
              >
                {/* 👇 aquí va la animación */}
                <Lottie
                  lottieRef={helloLottieRef}
                  animationData={helloAnimation}
                  loop={false}
                  autoPlay={false}
                  style={{ width: 40, height: 40 }}
                />
              </div>
            </h1>

            <h2 className="text-xl sm:text-xl text-gray-200 mb-2">
              Soy Desarrollador con dos años de experiencia en{" "}
              <span className="font-semibold">Frontend</span> enfocado en crear
              experiencias web modernas y funcionales.
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Me apasiona transformar ideas en interfaces atractivas y
              funcionales usando tecnologías modernas.
              <br />
              <br />
              <div className="border border-gray-600/40 rounded-2xl p-6 mt-6 backdrop-blur-sm">
                <h3 className="text-gray-300 text-lg font-semibold mb-4 text-center md:text-left">
                  Tecnologías Frontend:
                </h3>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 border border-cyan-600/40 backdrop-blur-sm transition-transform duration-200 hover:scale-105">
                    React
                  </span>
                  <span className="px-3 py-1 rounded-xl text-sm font-medium bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-emerald-300 border border-emerald-600/40 backdrop-blur-sm transition-transform duration-200 hover:scale-105">
                    Vue.js
                  </span>
                  <span className="px-3 py-1 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-600/30 to-indigo-500/30 text-blue-300 border border-indigo-600/40 backdrop-blur-sm transition-transform duration-200 hover:scale-105">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 rounded-xl text-sm font-medium bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-300 border border-yellow-600/40 backdrop-blur-sm transition-transform duration-200 hover:scale-105">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 rounded-xl text-sm font-medium bg-gradient-to-r from-sky-500/30 to-indigo-500/30 text-sky-300 border border-sky-600/40 backdrop-blur-sm transition-transform duration-200 hover:scale-105">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 rounded-xl text-sm font-medium bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-pink-300 border border-pink-600/40 backdrop-blur-sm transition-transform duration-200 hover:scale-105">
                    Material UI
                  </span>
                </div>
              </div>
              <br />
              <div className="border border-gray-600/40 rounded-2xl p-6 mt-6 backdrop-blur-sm">
                <h3 className="text-gray-300 text-lg font-semibold mb-4 text-center md:text-left">
                  Desarrollo móvil:{" "}
                  <strong className="text-gray-300">
                    Flutter y lenguaje Dart.
                  </strong>
                </h3>
              </div>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/proyectos"
                className="border border-gray-200 text-gray-200 px-6 py-3 rounded-xl font-medium hover:bg-gray-600 transition"
              >
                Ver proyectos
              </Link>

              <Link
                to="/contacto"
                className="border border-gray-200 text-gray-200 px-6 py-3 rounded-xl font-medium hover:bg-gray-600 transition"
              >
                Contáctame
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
