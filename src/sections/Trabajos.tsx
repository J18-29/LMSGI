import { Code, BookOpen, Rocket } from "lucide-react";

const Trabajos = () => {
  return (
    <section
      id="trabajos"
      className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-8"
    >
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Mis Proyectos</h1>
        <p className="text-slate-400">
          Algunos proyectos y prácticas que he realizado durante mis estudios
        </p>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">

        {/* Proyecto 1 */}
        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Code className="text-indigo-400 mb-4" size={30} />
          <h2 className="text-xl font-semibold mb-2">Portfolio Web</h2>
          <p className="text-slate-400 text-sm mb-4">
            Creación de un portfolio personal utilizando React y TailwindCSS.
          </p>
          <button className="text-indigo-400 hover:underline text-sm">
            Ver proyecto
          </button>
        </div>

        {/* Proyecto 2 */}
        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <BookOpen className="text-indigo-400 mb-4" size={30} />
          <h2 className="text-xl font-semibold mb-2">Proyecto de Clase</h2>
          <p className="text-slate-400 text-sm mb-4">
            Desarrollo de una aplicación web como práctica en clase para aprender
            JavaScript y componentes React.
          </p>
          <button className="text-indigo-400 hover:underline text-sm">
            Ver proyecto
          </button>
        </div>

        {/* Proyecto 3 */}
        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <Rocket className="text-indigo-400 mb-4" size={30} />
          <h2 className="text-xl font-semibold mb-2">Experimentos Web</h2>
          <p className="text-slate-400 text-sm mb-4">
            Pequeños proyectos y pruebas para mejorar mis habilidades en diseño
            web y programación.
          </p>
          <button className="text-indigo-400 hover:underline text-sm">
            Ver proyecto
          </button>
        </div>

      </div>
    </section>
  );
};

export default Trabajos;