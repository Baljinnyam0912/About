import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 🔵 1. Particles — арын Background */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          particles: { number: { value: 80 }, size: { value: 3 } }
        }}
      />

      {/* 🟩 2. Дээр нь div (container) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        
        {/* 🟧 3. Контент */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
          <h1 className="text-4xl font-bold text-white">My Homepage</h1>
          <p className="text-white mt-3">
            Particles background дээр контентоо давхарлаж байрлуулсан жишээ.
          </p>
        </div>

      </div>

    </div>
  );
}
