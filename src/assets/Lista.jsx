import { Card } from "./Card";
import { useEffect, useState } from "react";

export function Lista() {
    const [tarjetas, setTarjetas] = useState([])

   useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((respuesta)=>{
      return respuesta.json()   	
    })
    .then((datos) =>{
        datos.results.forEach(element => {
            // console.log(' url==>' ,element.url);            
            fetch(element.url)
            .then((subresultado)=>{
                // console.log(subresultado);
                return subresultado.json()
            })
            .then((subdatos)=>{
                // console.log(subdatos);
            })
            .catch
        });
        setTarjetas(datos.results)
        // console.log(datos.results)
    })
    .catch()

   }, []) 

    return(
        <ul>
         {tarjetas.map((tarjeta, index) =>{
            
            return(
                <li key={tarjeta.name}>
                    <Card datos={tarjeta}/>
                </li>
            )

            })
         }   

        </ul>
    )
}