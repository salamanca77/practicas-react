import { useState } from "react"

export function FormularioAvanzado(){
    const [form, setForm] = useState({})
    
    const handlerInput = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })    
    }

    const handlerChecked = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        })    
    }

    const handlerForm = ()=>{
        e.prevent.default
        alert('Formulario enviado')
    }
    
    return(
        <div>

        <form onSubmit={handlerForm}>
            <label  htmlFor="nombre" >Nombre</label>
            <input  id="nombre" name="nombre" type="text" value={form.nombre} onChange={handlerInput}/><br />
            
            <label htmlFor="html">html</label>
            <input id="html" name="opciones" type="radio" value="html" onChange={handlerInput} />
            
            <label  htmlFor="php">php</label>
            <input id="php" defaultChecked  name="opciones" type="radio"  value="php" onChange={handlerInput}/>

            <label htmlFor="css">css</label>
            <input id="css"  name="opciones" value='css' type="radio" onChange={handlerInput}/><br />
            <select name="lenguajes" id="" onChange={handlerInput} defaultValue={''}>
                <option value="">---</option>
                <option value="php">php</option>""
                <option value="html">html</option>
                <option value="css">css</option>
            </select><br />
            <label htmlFor="terminos">Condiciones de terminos</label>
            <input type="checkbox" name="caja" id="terminos" onChange={handlerChecked}/>
            <br />
            <input type="submit" />
        </form>
        </div>

    )

}