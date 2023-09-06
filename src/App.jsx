import { Routes, Route, Link } from "react-router-dom"
import { Home } from '../src/page/Home'
import  {Nosotros}  from '../src/page/Nosotros'
import {Tienda} from '../src/page/Tienda'
import {Contactos} from '../src/page/Contactos'
import { Buscar } from "./page/Buscar"
import { Detalles } from "./page/Detalles"
import { ProtejerRuta } from "./page/ProtejerRuta"
import { Login } from "./page/Login"
import React, { useState, createContext } from "react"
import { Hijo } from "./components/Hijo" 

export const contexto = createContext()

const datos =  {
    name:"jonn",
    email:"oliver"
}


export function App() { 

    const [isNombre, setNombre] = useState(datos)

    const datoUno = 'd1'
    const datoDos = 'd2'
    
    const cambiaNombre = ()=>{

        setNombre(
            {
                name:"juan",
                email:"perez"
            }
        )
    }

    return (

       <contexto.Provider value={{isNombre}}>

        <button onClick={cambiaNombre}>Boton</button>
           <Hijo />
       </contexto.Provider> 


        // <>
        // <nav>
        //     <Link to="/">Home</Link>
        //     <Link to="nosotros">Nosotros</Link>
        //     <Link to="tienda">Tienda</Link>
        //     <Link to="contacto">Contacto</Link>
        //     <Link to="buscar" >Buscar</Link>
        // </nav>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/contacto" element={<ProtejerRuta><Contactos /></ProtejerRuta>} />
        //         <Route path="/nosotros" element={<Nosotros />} />
        //         <Route path="/tienda/:fruta" element={<Tienda />}>
        //             <Route path="detalles" element={<Detalles />} />
        //         </Route>
        //         <Route path="/contactos" element={<Contactos />} />
        //         <Route path="/buscar" element={<Buscar />} />
        //         <Route path="/login" element={<Login />} />
                
        //     </Routes>
        // </>
    )
}