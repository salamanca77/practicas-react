import { Routes, Route, Link } from "react-router-dom"
import { Home } from '../src/page/Home'
import  {Nosotros}  from '../src/page/Nosotros'
import {Tienda} from '../src/page/Tienda'
import {Contactos} from '../src/page/Contactos'

export function App() { 
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="nosotros">Nosotros</Link>
            <Link to="tienda">Tienda</Link>
            <Link to="contactos">Contacto</Link>
        </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contactos />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/contactos" element={<Contactos />} />
            </Routes>
        </>
    )
}