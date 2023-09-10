import { Routes, Route, Link } from "react-router-dom"
import { Home } from './page/Home'
import  {Nosotros}  from './page/Nosotros'
import {Tienda} from './page/Tienda'
import {Contactos} from './page/Contactos'
import { Buscar } from "./page/Buscar"
import { Detalles } from "./page/Detalles"
import { ProtejerRuta } from "./page/ProtejerRuta"
import { Login } from "./page/Login"
import  {Formulario} from "./components/Formulario" 
import React, { useState, createContext, useRef, useEffect } from "react"
import { Table } from "./components/Tabla"
import { helperHttp } from "./helper/helperHttp.js"
import { p1 } from "./funciones/p1.js"

export function AppPrueba(){

    useEffect(()=>{
        
        p1().declarada()
        p1().expresada()
        p1().promesa().then((respuesta)=>{
            console.log(respuesta);

        })
        p1().p22().then((res)=>{
            console.log(res);
        })

    })

    return (
        <>

            <h1>saludos</h1>

        </>


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