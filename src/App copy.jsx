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

import React, { useState, createContext, useRef, useEffect } from "react"
import { Table } from "./components/Tabla"
import { helperHttp } from "./helper/helperHttp.js"

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
   
    let api = helperHttp()
    let url = "http://localhost:3000/santos"
    
    const createData = (data) =>{
        console.log(data);
        data.id = Date.now()
        console.log(data)
        setDb([...db, data])

    }

    const updateData = (data) =>{
        const nuevoData =  db.map((element)=> element.id === data.id?data:element)
        setDb(nuevoData)
    }

    const deleteData = (id) =>{

        let isDelete = window.confirm(`Seguro de eliminarlo ${id}`)
       

       if(isDelete){
        let newDatos =  db.filter(element =>element.id !== id)

        setDb(newDatos)
       }else{
        return
       }
    }

    return (
        <>
         <Formulario createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>  

         <Table datos={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>
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