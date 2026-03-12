import { Code, User, Laptop } from "lucide-react";

export default function QSomos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] p-6 font-sans text-white">
      
      {/* Titulo */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Sobre Mí</h1>
        <p className="text-slate-400 text-lg">
          Conoce quién soy y qué hago
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="bg-[#1e293b] max-w-4xl w-full rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10">

        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 rounded-full bg-indigo-500 flex items-center justify-center text-4xl font-bold shadow-lg">
            JM
          </div>

          <h2 className="mt-4 text-xl font-semibold">José Miguel</h2>
          <p className="text-slate-400 text-sm">Desarrollador Web en Formación</p>
        </div>

        {/* Información */}
        <div className="flex-1">
          <p className="text-slate-300 leading-relaxed mb-6">
           "Estudiante de 1º de DAW (curso 2025/26). 
           Actualmente enfocado en dominar los fundamentos de la programación y la gestión de bases de datos. 
           Busco aplicar mis conocimientos en proyectos reales mientras continúo mi formación académica."
          </p>

          {/* Habilidades */}
          <div className="grid grid-cols-3 gap-6 text-center">

            <div className="bg-[#0f172a] p-4 rounded-xl hover:scale-105 transition">
              <Code className="mx-auto mb-2 text-indigo-400" size={28} />
              <p className="text-sm font-semibold">HTML / CSS</p>
            </div>

            <div className="bg-[#0f172a] p-4 rounded-xl hover:scale-105 transition">
              <Laptop className="mx-auto mb-2 text-indigo-400" size={28} />
              <p className="text-sm font-semibold">JavaScript</p>
            </div>

            <div className="bg-[#0f172a] p-4 rounded-xl hover:scale-105 transition">
              <User className="mx-auto mb-2 text-indigo-400" size={28} />
              <p className="text-sm font-semibold">React</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}