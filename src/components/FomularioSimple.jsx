import { useState } from "react"

export function FormularioSimple(){
    const [nombre, setnombre] = useState("")
    const [radvalor, setRadio] = useState("")
    const [lenguaje, setLenguaje] = useState("")
    const [termios, setTerminos] = useState(true)
    
    const handlerForm = (e)=>{
        e.preventDefault()
        alert('El formulario se envio')
    }
    return(
        <div>

        <form onSubmit={handlerForm}>
            <label  htmlFor="nombre" >Nombre</label>
            <input  id="nombre" type="text" value={nombre} onChange={(e)=>{setnombre(e.target.value)}}/><br />
            
            <label htmlFor="html">html</label>
            <input id="html" name="opciones" type="radio" value="html" onChange={(e)=>{setRadio(e.target.value)}} />
            
            <label  htmlFor="php">php</label>
            <input id="php" defaultChecked  name="opciones" type="radio"  value="php" onChange={(e)=>{setRadio(e.target.value)}}/>

            <label htmlFor="css">css</label>
            <input id="css"  name="opciones" value='css' type="radio" onChange={(e)=>{setRadio(e.target.value)}}/><br />
            <select name="lenguajes" id="" onChange={(e)=>{setLenguaje(e.target.value)}} defaultValue={''}>
                <option value="">---</option>
                <option value="php">php</option>""
                <option value="html">html</option>
                <option value="css">css</option>
            </select><br />
            <label htmlFor="terminos">Condiciones de terminos</label>
            <input type="checkbox" name="caja" id="terminos" onChange={(e)=>{setTerminos(e.target.checked)}}/>
            <br />
            <input type="submit" />
        </form>
        </div>

    )

}