import { useState } from "react"

export const Form = () => {
    const [form, setForm] = useState({})

    const handlerForm = (e)=>{
        
        console.log(e.target.id);
        const {id, name, type, className, placeholder, style} = e.target
        console.log(id, name, type, className, placeholder, style);

        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    return (
        <form action="">
            <input name="nombre"  id="11" className="classUno ClassDos" type="text" style={{background:'red'}} onChange={handlerForm} placeholder="introduce el nombre" /><br />
            <input name="apellido" type="text" onChange={handlerForm} placeholder="apellido"/><br />
            <input type="submit" />
        </form>
    )
}