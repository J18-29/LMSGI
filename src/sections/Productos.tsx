const Productos = () => {
  const misProyectos = [
    {
      id: 1,
      nombre: 'Calculadora en Java',
      descripcion: 'Aplicación de consola con manejo de excepciones y lógica matemática.',
      imagen: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=600&q=80',
      tag: 'Programación',
      link: '#', // Aquí iría el link a tu GitHub
    },
    {
      id: 2,
      nombre: 'Currículum en HTML/CSS',
      descripcion: 'Mi primer sitio web estático aplicando Flexbox y Grid Layout.',
      imagen: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      tag: 'Lenguaje de Marcas',
      link: '#',
    },
    {
      id: 3,
      nombre: 'Script de Automatización',
      descripcion: 'Pequeños scripts para gestión de archivos en Linux (Bash).',
      imagen: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&q=80',
      tag: 'Sistemas Informáticos',
      link: '#',
    },
    {
      id: 4,
      nombre: 'Base de Datos Escolar',
      descripcion: 'Diseño y consultas SQL para un sistema de gestión de alumnos.',
      imagen: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80',
      tag: 'Bases de Datos',
      link: '#',
    },
  ];

  return (
    <div className="bg-[#0f172a] py-16">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-8 border-l-4 border-yellow-400 pl-4">
          Proyectos Académicos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {misProyectos.map((proyecto) => (
            <div key={proyecto.id} className="group relative flex flex-col">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-800 lg:aspect-auto lg:h-60 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  className="h-full w-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="mt-4 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                    {proyecto.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    <a href={proyecto.link}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {proyecto.nombre}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {proyecto.descripcion}
                  </p>
                </div>
                <p className="mt-3 text-xs font-medium text-gray-500 italic">Ver código en GitHub →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;