import { json } from 'react-router-dom';
import {contexto} from '../App'    
import {useContext} from 'react';

export function Hijo(){ 

    const {isNombre} = useContext(contexto)
    const datos = JSON.stringify(isNombre, null, 2) 
    // console.log(parse.json(datos));

    
    return(
        <div>
            <h1>Hijo</h1>
            <h1>{}</h1>
        </div>
    )   
}