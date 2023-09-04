import { Routes, Route, Link } from "react-router-dom"

export function Buscar(){
    
    const frutas = [
        "platano", 
        "naranja",
        "uva",
        "mango"
    ]
    
    return(
        <section>
            <ul>
                {
                    frutas.map((fruta)=>{
                      return  ( <li key={fruta}><Link to={`/tienda/${fruta}`}> {fruta}</Link></li>
                    )})
                }
            </ul>
        </section>
        
    )
}