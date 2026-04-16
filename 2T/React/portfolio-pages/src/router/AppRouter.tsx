import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Trabajos } from '@/pages/Trabajos'
import { Contacto } from '@/pages/Contacto'
import { MainLayout } from '@/layouts/MainLayout'
import Servicios from "@/pages/servicios/Servicios";
import { ServicioDetalle } from "@/pages/servicios/ServicioDetalle";
import { Cursos } from '@/pages/cursos/Cursos'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/trabajos" element={<Trabajos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/servicios/:id" element={<ServicioDetalle />} />
                    <Route path="/cursos" element={<Cursos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}