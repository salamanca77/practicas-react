import { Routes, Route, Link } from "react-router-dom"
import { Home } from '../src/page/Home'
import  {Nosotros}  from '../src/page/Nosotros'
import {Tienda} from '../src/page/Tienda'
import {Contactos} from '../src/page/Contactos'
import { Buscar } from "./page/Buscar"
import { Detalles } from "./page/Detalles"
import { ProtejerRuta } from "./page/ProtejerRuta"
import { Login } from "./page/Login"
import  {Formulario} from "./components/Formulario" 

import React, { useState, createContext, useRef } from "react"
import { Table } from "./components/Tabla"

const baseDatos = [
        {
          "id": 1,
          "nombre": "Seiya",
          "constelacion": "Pegaso"
        },
        {
          "id": 2,
          "nombre": "Shiryu",
          "constelacion": "Dragón"
        },
        {
          "id": 3,
          "nombre": "Hyoga",
          "constelacion": "Cisne"
        },
        {
          "id": 4,
          "nombre": "Shun",
          "constelacion": "Andrómeda"
        },
        {
          "id": 5,
          "nombre": "Ikki",
          "constelacion": "Fénix"
        },
        {
          "nombre": "Mü",
          "constelacion": "Aries",
          "id": 6
        },
        {
          "nombre": "Aldebaran",
          "constelacion": "Tauro",
          "id": 7
        },
        {
          "nombre": "Saga",
          "constelacion": "Geminis",
          "id": 8
        },
        {
          "nombre": "Máscara de Muerte",
          "constelacion": "Cancer",
          "id": 9
        },
        {
          "nombre": "Aioria",
          "constelacion": "Leo",
          "id": 10
        },
        {
          "nombre": "Shaka",
          "constelacion": "Virgo",
          "id": 11
        },
        {
          "nombre": "Dohko",
          "constelacion": "Libra",
          "id": 12
        }
]

export function App(){
    
    const [db, setDb] = useState(baseDatos)
    const [dataToEdit, setDataToEdit] = useState(null)
    
    const createData = (data) =>{
        data.id = Date.now()
        console.log(data)
        setDb([...db, data])

    }
    const updateData = () =>{}
     const deleteData = () =>{}

    return (
        <>
         <Formulario createData={createData} updateData={updateData} deleteData={deleteData} setDataToEdit={setDataToEdit}/>  
         <Table datos={db}/>
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