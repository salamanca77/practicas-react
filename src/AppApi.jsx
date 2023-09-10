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
    )
}