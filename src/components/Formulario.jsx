import { useEffect, useState } from "react"

const datosInicioForm = {
    id : null,
    nombre :'',
    constelacion :'',
}

export function Formulario({createData,updateData, setDataToEdit, dataToEdit}) {

    const [inicioForm, setInicioForm] = useState(datosInicioForm)

    useEffect(() =>{
        if(dataToEdit){
            setInicioForm(dataToEdit)
        }else{
            setInicioForm(inicioForm)
        }
    }, [dataToEdit])    

    const handleChange =(e)=>{
        // console.log(inicioForm);
        setInicioForm({
            ...inicioForm,
            [e.target.name]:e.target.value            
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!inicioForm.nombre || !inicioForm.constelacion){
            alert('No hay datos')
            console.log('hola' , inicioForm)
            return
        }
        
        console.log('submint',inicioForm);
        if(inicioForm.id === null){
            
            // console.log(inicioForm);

            createData(inicioForm)
        }else{
            updateData(inicioForm)
        }

         handleReset()
    }    


    const handleReset = (e)=>{
        // alert('holas')
        setInicioForm(datosInicioForm)
        setDataToEdit(null)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" value={inicioForm.nombre} onChange={handleChange}/><br />
                <input type="text" name="constelacion" value={inicioForm.constelacion} onChange={handleChange}/><br />
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
} 