import { unstable_HistoryRouter, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import './Contacto.css'

export function Contactos(){

    let {search} = useLocation()
    console.log(useLocation());

    let navigate = useNavigate()

    let v1 = new URLSearchParams(search)
    console.log(v1);
    const limite = 20
    let inicio = parseInt(v1.get('inicio'))|| 1
    let fin = parseInt(v1.get('fin'))|| limite

    
    console.log(inicio, fin);
    
    const handleAtras = (e)=>{
        
        navigate(`/contacto?inicio=${inicio - limite}&fin=${fin - limite}`)
    }
    
    const handleAdelante = ()=>{
        
        navigate(`/contacto?inicio=${inicio + limite}&fin=${fin + limite}`)
    }



    return(
        <section>
            <h1>Contactos</h1>
            {inicio > limite && <button onClick={handleAtras}>atras</button>}
            <button onClick={handleAdelante}>adelante</button>
        </section>
    )
}

//   

// http://localhost:5173/contacto/inicio=1&fin=20