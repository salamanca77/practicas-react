import { useState } from "react"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"

function useBusqueda(){
    return new URLSearchParams(useLocation().search)
}

export function Busqueda(){
  const [busquedaTexto, setBusquedaTexto] = useState("")  
  const navigate = useNavigate()
  const location = useLocation().search
  const datos = new URLSearchParams(location)
  console.log(datos.get('search'));
  let data = useBusqueda()

  // console.log(location.get("search"));
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('?search=' + busquedaTexto)
    }  

    return(
      <form onSubmit={handleSubmit}>
        <div>
            <input type="text" value={busquedaTexto}  onChange={(e)=>{setBusquedaTexto(e.target.value)}} />
            <button type="submit">Buscar</button>
        </div>
      </form>       
    )
}