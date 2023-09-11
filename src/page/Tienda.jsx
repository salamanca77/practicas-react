import { Outlet, useParams } from "react-router"
import { Link, useLocation } from "react-router-dom"


export function Tienda() {
    const {nombre, edad} = useParams()
    let location = useLocation()
    let query = new URLSearchParams(location)

    console.log(query);
    
    console.log(nombre,edad);
    
    return (
        <section>
            <h1>Tienda</h1>
        </section>  
    )
}