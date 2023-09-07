import { useState } from "react"

export function Formulario(){
    const {nombre, setnombre} = useState()
    const {radio, setRadio} = useState()
    
    return(
        <div>

        <form action="">
            <label  htmlFor="nombre" >Nombre</label>
            <input  id="nombre" type="text" value={nombre} onChange={(e)=>{setnombre(e.target.value)}}/><br />
            
            <label htmlFor="html">html</label>
            <input id="html" name="opciones" type="radio" value={radio} onChange={(e)=>{setRadio(e.target.value)}} />
            
            <label  htmlFor="php">php</label>
            <input id="php"  name="opciones" type="radio"  value={radio} onChange={(e)=>{setRadio(e.target.value)}}/>

            <label htmlFor="css">css</label>
            <input id="css" defaultChecked name="opciones" value={radio} type="radio" onChange={(e)=>{setRadio(e.target.value)}}/><br />

            <label htmlFor=""></label>
            <input type="text" />
        </form>
        </div>

    )

}