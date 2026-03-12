const Categoria = () => {
  const asignaturas = [
    {
      nombre: 'Lenguajes de Marcas',
      descripcion: 'Dominando HTML5, CSS3 y la estructura de documentos XML/JSON.',
      imagen: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
      href: '#',
    },
    {
      nombre: 'Programación',
      descripcion: 'Desarrollo de la lógica algorítmica y fundamentos de lenguajes (Java/Python).',
      imagen: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
      href: '#',
    },
    {
      nombre: 'Sistemas Informáticos',
      descripcion: 'Instalación, configuración y gestión de sistemas operativos y hardware.',
      imagen: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      href: '#',
    },
  ];

  return (
    <div className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-white border-l-4 border-yellow-400 pl-4">
              Mi Formación (1º DAW)
            </h2>
            <span className="text-yellow-400 font-mono text-sm bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
              Curso 2025-2026
            </span>
          </div>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {asignaturas.map((item) => (
              <div key={item.nombre} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-800 group-hover:opacity-75 transition-all duration-300">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
                </div>
                
                <h3 className="mt-6 text-sm text-yellow-400 font-bold uppercase tracking-widest">
                  <a href={item.href}>
                    <span className="absolute inset-0" />
                    {item.nombre}
                  </a>
                </h3>
                <p className="text-lg font-medium text-gray-300 mt-2">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoria;