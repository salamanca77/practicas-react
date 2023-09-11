import { Outlet, useParams } from "react-router"
import { Link, useLocation } from "react-router-dom"


export function Tienda() {
    const {nombre, edad} = useParams()
    
    console.log(nombre, edad);

    let location = useLocation()
    console.log(location);


    let query = new URLSearchParams(location)

    console.log(query);
    
    console.log(nombre,edad);
    
    return (
        <section>
            <h1>Tienda</h1>
        </section>  
    )
}