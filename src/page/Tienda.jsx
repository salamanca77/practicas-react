import { Outlet, useParams } from "react-router"
import { Link, useLocation } from "react-router-dom"


export function Tienda() {
    const {nombre, edad} = useParams()
    let location = useLocation()
    console.log(location);
    console.log(nombre,edad);
    return (
        <section>
            <h1>Tienda</h1>
        </section>  
    )
}