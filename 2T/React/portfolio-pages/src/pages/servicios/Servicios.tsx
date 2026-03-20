
import ServiciosCard from "@/components/main/ServiciosCard"; 
import dataServicios from "@/model/data/servicios.json";

const Servicios = () => {
    return (
        <section id="servicios" className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-center bg-gray-900 py-5 w-full text-white">
                Servicios Ofrecidos
            </h1>
            <ServiciosCard servicios={dataServicios} />
        </section>
    );
};


export default Servicios;