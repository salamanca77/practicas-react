import { useState } from "react"
import { useNavigate } from "react-router-dom"


export function Buscando(){
    const [valor, setValor] = useState("")
    const navigate = useNavigate()

    const handleBuscar = (e)=>{
        setValor(e.target.value)
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate('/?search=' + valor)
    }

    return(
        <form onSubmit={handleSubmit} style={{display:'flex', justifyContent:'center'}}>
            <input type="text" value={valor} placeholder="Buscar" onChange={handleBuscar}/>
            <input type="submit" />
        </form>
    )
}