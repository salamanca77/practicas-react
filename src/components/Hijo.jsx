import { json } from 'react-router-dom';
import {contexto} from '../App'    
import {useContext} from 'react';

export function Hijo(){ 

    const {isNombre} = useContext(contexto)
    const datos = JSON.stringify(isNombre, null, 2) 
    console.log(datos);
    const datoJso = JSON.parse(datos)
    console.log(datoJso);
    return(
        <div>
            <h1>Hijo</h1>
            <h1>{}</h1>
        </div>
    )   
}