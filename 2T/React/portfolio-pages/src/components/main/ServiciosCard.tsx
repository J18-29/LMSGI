import type { IServicio } from "@/model/interfaces/IServicio"
import ServicioCard from "./ServicioCard"
import { NavLink } from "react-router-dom";

interface Props {
    servicios: IServicio[];
}

export const ServiciosCard = ({ servicios }: Props) => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((servicio) => (
                <NavLink to={`/servicios/${servicios.id}`}
                  className
                    key={servicio.id}
                    servicio={servicio}
                />
            ))}
        </div>
    )
}

export default ServiciosCard