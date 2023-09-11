import { useLocation } from 'react-router-dom'
import './Contacto.css'

export function Contactos(){

    let {search} = useLocation()
    console.log(search);
    console.log(search);

    let v1 = new URLSearchParams(search)
    console.log(v1, v1.get("inicio"), v1.get("fin"), '====');

    let inicio = v1.get('inicio')
    let fin = v1.get('fin')
    console.log(inicio, fin);
    return(
        <section>
            <h1>Contactos</h1>
        </section>
    )
}