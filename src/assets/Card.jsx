import { useEffect, useState } from "react";

export function Card({datos}){
    const [imagen, setImagen] = useState({})
    const url3 = imagen
    console.log(url3);
    const img = 'https://cdn.pixabay.com/photo/2023/08/28/15/46/squirrel-8219439_640.jpg'   
    // console.log(datos.url);
    useEffect(()=>{
        fetch(datos.url)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(datos =>{
          setImagen(datos)  
        //   console.log(datos);      
        })
        .catch()
    }, [])
    // console.log(imagen.sprites.back_default.back_default)  
    // console.log(imagen.sprites.back_default);
    return (
        <article>
            {/* <img src={imagen.sprites.back_default.back_default}  alt="nombre de la imagen" /> */}
            <figcaption>{imagen.name}</figcaption>
        </article>
    )
}