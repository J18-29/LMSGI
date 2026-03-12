const estudios = [
  {
    id: 1,
    titulo: "Ciclo Superior Desarrollo de Aplicaciones Web (DAW)",
    centro: "Instituto de Formación Profesional",
    descripcion:
      "Formación centrada en desarrollo web, programación, bases de datos y creación de aplicaciones modernas.",
    fecha: "2024 - Actualidad",
    categoria: "Desarrollo Web",
  },
  {
    id: 2,
    titulo: "Ciclo Superior Administración de Sistemas Informáticos (ASIR)",
    centro: "Instituto de Formación Profesional",
    descripcion:
      "Administración de sistemas, redes, servidores y seguridad informática.",
    fecha: "2022 - 2024",
    categoria: "Sistemas",
  },
  {
    id: 3,
    titulo: "Curso de Especialización Big Data y Analytics",
    centro: "Formación Profesional",
    descripcion:
      "Análisis de datos, procesamiento de grandes volúmenes de información y herramientas de análisis.",
    fecha: "Próximamente",
    categoria: "Big Data",
  },
];

const Formaciones = () => {
  return (
    <section
      id="formaciones"
      className="min-h-screen bg-[#0f172a] flex items-center justify-center py-24 px-6"
    >
      <div className="max-w-7xl w-full">

        {/* Título */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl font-bold text-white">
            Formación Académica
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            Estudios y especializaciones dentro del mundo de la informática y el desarrollo web.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-8">

          {estudios.map((estudio) => (
            <div
              key={estudio.id}
              className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 
              hover:border-indigo-500 hover:scale-105 transition duration-300"
            >

              {/* categoría */}
              <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full">
                {estudio.categoria}
              </span>

              {/* título */}
              <h3 className="mt-4 text-xl font-semibold text-white">
                {estudio.titulo}
              </h3>

              {/* centro */}
              <p className="text-slate-400 text-sm mt-1">
                {estudio.centro}
              </p>

              {/* descripción */}
              <p className="text-slate-300 text-sm mt-4">
                {estudio.descripcion}
              </p>

              {/* fecha */}
              <p className="mt-6 text-sm text-indigo-400 font-semibold">
                {estudio.fecha}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Formaciones;