import {contexto} from '../App'    
import {useContext} from 'react';

export function Hijo(){ 

    const {datoUno, isNombre, datoDos} = useContext(contexto)
    
    // console.log(nombre);
    
    
    return(
        <div>
            <h1>Hijo {datoUno}</h1>
            <h3>{datoDos}</h3>
            {   }
        </div>
    )   
}