import Lottie from "lottie-react";
import loaderAnimation from "../assets/IconJson/Loader.json";

// src/components/Loader.jsx
export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#000000] text-white">
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        className="w-40 h-40"
      />
      <p className="mt-4 text-lg font-semibold animate-pulse">Cargando...</p>
    </div>
  );
}
