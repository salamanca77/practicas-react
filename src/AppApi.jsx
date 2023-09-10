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


export function AppApi(){

    const [db, setDb] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null)
   
    let api = helperHttp()
    let url = "http://localhost:3000/santos"

    useEffect(()=>{
      api.get(url).then(res=>{
        if(!res.err){
          setDb(res)

        }else{
          setDb(null)
        }
      })
    }, [])


    const createData = (data) =>{

        data.id = Date.now()
        
        let options ={
            body:data,
            headers:{"content-type":"application/json"}
        }
        api.post(url, options).then((res) =>{
            if(!res.err){
             setDb([...db, res])       
            }else{
                setDb(res)
            }
        })


    }

    const updateData = (data) =>{

        let endpoint = `${url}/${data.id}`
        
        let options ={
            body:data,
            headers:{"content-type":"application/json"}
        }
        
        api.put(endpoint, options).then((res) =>{
            
            if(!res.err){
                const nuevoData =  db.map((element)=> element.id === data.id?data:element)
                
                setDb(nuevoData)       
            }else{
                setDb(res)
            }
        })
        
        const nuevoData =  db.map((element)=> element.id === data.id?data:element)
        setDb(nuevoData)
    }
    
    const deleteData = (id) =>{

        let endpoint = `${url}/${id}`

        let options ={
            headers:{"content-type":"application/json"}
        }

        api.del(endpoint, options).then(res =>{

            if(!res.err){
                let newDatos =  db.filter(element =>element.id !== id)
                setDb(newDatos)
            }else{
                setDb(res)
            }

        })
       
    }

    return (
        <>
         <Formulario createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>  
        
         {db && <Table datos={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>}
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