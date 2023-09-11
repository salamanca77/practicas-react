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
import { NavLink } from "react-router-dom"
import "./AppPrueba.css"

export function AppPrueba(){

        return(<>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="nosotros">Nosotros</NavLink>
            <NavLink to="tienda">Tienda</NavLink>
            <NavLink to="contacto">Contacto</NavLink>
            <NavLink to="buscar" >Buscar</NavLink>
        </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contactos />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/tienda/:nombre/:edad" element={<Tienda />}/>
                <Route path="/contactos" element={<Contactos />} />
                <Route path="/buscar" element={<Buscar />} />
                <Route path="/login" element={<Login />} />
                
            </Routes>
        </>)
    
}