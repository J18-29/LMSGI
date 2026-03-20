import { Routes, Route, BrowserRouter } from 'react-router-dom'

// Usamos el alias @ para que no importe dónde esté este archivo
import { Home } from '@/pages/Home'
import { Trabajos } from '@/pages/Trabajos'
import { Contacto } from '@/pages/Contacto'
import { MainLayout } from '@/layouts/MainLayout'
import Servicios from '@/servicios/Servicios'
import ServiciosDetalle from '@/servicios/ServicioDetalles'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/trabajos" element={<Trabajos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/servicios/:id" element={<ServiciosDetalle />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}