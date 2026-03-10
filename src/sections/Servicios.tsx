import dataServicios from "../data/servicios.json";

const Servicios = () => {
  return (
    <section
      id="servicios"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-100"
    >
      <h1 className="text-4xl font-bold mb-12 bg-gray-900 text-white px-8 py-4 rounded-xl">
        Servicios
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {dataServicios.map((servicio) => (
          <article
            key={servicio.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            <h2 className="text-xl font-semibold mb-4">
              {servicio.titulo}
            </h2>

            <p className="text-gray-600">
              {servicio.descripcion}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Servicios;