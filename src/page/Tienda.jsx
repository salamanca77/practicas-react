import { Outlet, useParams } from "react-router"
import { Link } from "react-router-dom"


export function Tienda() {
    const {fruta} = useParams()

    return (
        <section>
            <h3>Producto</h3>
            {fruta}
            <Link to="detalles">Ir a los detalles</Link>
            <Outlet />
        </section>  
    )
}