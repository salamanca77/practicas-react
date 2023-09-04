import { Routes, Route, Link } from "react-router-dom"
import { Home } from '../src/page/Home'
import  {Nosotros}  from '../src/page/Nosotros'
import {Tienda} from '../src/page/Tienda'
import {Contactos} from '../src/page/Contactos'
import { Buscar } from "./page/Buscar"
import { Detalles } from "./page/Detalles"

export function App() { 
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="nosotros">Nosotros</Link>
            <Link to="tienda">Tienda</Link>
            <Link to="contactos">Contacto</Link>
            <Link to="buscar" >Buscar</Link>
        </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contactos />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/tienda/:fruta" element={<Tienda />}>
                    <Route path="detalles" element={<Detalles />} />
                </Route>
                <Route path="/contactos" element={<Contactos />} />
                <Route path="/buscar" element={<Buscar />} />
            </Routes>
        </>
    )
}