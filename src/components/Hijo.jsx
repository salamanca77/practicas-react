import { json } from 'react-router-dom';
import { contexto } from '../App'
import { useContext } from 'react';

export function Hijo() {


    const funcionFetch = async ()=>{

        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
        // console.log(respuesta);
        const datos = await respuesta.json()
        // console.log(datos.results);

        const d1 = datos.results.map((item)=>{
            item.name
        })
        
        const d2 = await Promise.all(d1)
        console.log(d2)

        // console.log(datos.results);
        // return datos.results

        
        

    }

    funcionFetch()
    
    
    
    return (
        <div>
            <h1>Hijo</h1>
            <h1>{ }</h1>
        </div>
    )
}