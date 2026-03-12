import dataServicios from "../data/servicios.json";

const Servicios = () => {
  return (
    <section
      id="servicios"
      /* Cambié el fondo a un azul muy oscuro para que combine con tu "Sobre Mí" */
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#0f172a]" 
    >
      <h1 className="text-4xl font-bold mb-12 bg-yellow-400 text-black px-8 py-4 rounded-xl shadow-lg">
        Servicios
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {dataServicios.map((servicio) => (
          <article
            key={servicio.id}
            /* Tarjetas oscuras con borde sutil para un look más "pro" */
            className="bg-[#1e293b] p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-yellow-400/20 transition duration-300 hover:-translate-y-2 group"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors">
              {servicio.titulo}
            </h2>

            <p className="text-gray-400 leading-relaxed">
              {servicio.descripcion}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Servicios;