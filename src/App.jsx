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
    )
}