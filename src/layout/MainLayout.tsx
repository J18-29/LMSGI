
//este componente crea el front-end de la aplicacion

import Header from "../components/main/Header.tsx";
import Categoria from "../sections/Categoria.tsx";
import Servicios from "../sections/Servicios.tsx";
import Productos from "../sections/Productos.tsx";
import QSomos from "../sections/QSomos.tsx";

import Trabajos from "../sections/Trabajos.tsx";
import Formaciones from "../sections/Formaciones.tsx";

//la parte publica de la aplicacion
function MainLayout() {

    return (
        <div className="main-min-h-screen w-full bg-gray-100 text-white">
            <Header />
            <main>
                <QSomos />
                <Trabajos />
                <Formaciones />
                <Servicios />
                <Productos />
                <Categoria />
            </main>
        </div>
        
    )
}

export default MainLayout;