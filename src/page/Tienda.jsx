import { Routes, Route, Link } from "react-router-dom"

export function Tienda(){
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
                      return  (<Link key={fruta} to={`/tacos/${fruta}`}><li key={fruta}> enlace</li></Link>
                    )})
                }
            </ul>
        </section>
        
    ) 
}