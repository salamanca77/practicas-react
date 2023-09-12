import { useEffect, useState } from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { Spinner } from "../components/Spinner"
import { Busqueda } from "../components/Busqueda"


// const url = "https://api.themoviedb.org/3/discover/movie?page=1"
const opciones = {
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWVlMGY1OTgxYmYzNGE0MDMzNTFmYzQ4MjUzNDVlOSIsInN1YiI6IjY0ODVkYmUzOTkyNTljMDBlMmY1NzJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zu26OYNbQpBzwy3Xqpr5dm2qgz7f1hlTZU_BGbs264"
    }
}


export function Buscar() {
    const [isMovies, setMovies] = useState([])
    const [carga, setCarga] = useState(false) 
    const [numeroPagina, setNumeroPagina] = useState(1)
    const [error, setError] = useState(false)
    const {search} = useLocation()

    const dato = new URLSearchParams(search)
    const bus = dato.get('search')
    console.log(bus);
    
    useEffect(() => {
         
        const url = bus? 
           "https://api.themoviedb.org/3/search/movie?query=" + bus
           :"`https://api.themoviedb.org/3/discover/movie?page=${numeroPagina}`" 
          
           setCarga(true)
           
           fetch(url, opciones)
           .then((respuesta) => 
           {if(!respuesta.ok) throw new Error("Error en la peticion")
           return respuesta.json()
        })
        .then((datos) => {
           
            if(bus){
                setMovies(datos.results)
            }else{
                setMovies((prevMovies) => prevMovies.concat(datos.results))

            }
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setCarga(false)
        })
    }, [numeroPagina,search])
    
    const hadleAtras = () => {
        setNumeroPagina(numeroPagina -1)
    }
    
    
    const handleSiguiente = ()=>{
        setNumeroPagina(numeroPagina + 1)
        
    }
    return (
        <section>
            <Busqueda />
            {isMovies.length >0 && isMovies.map((elemento) =>
                    <div key={elemento.id}>
                        <img src={"https://image.tmdb.org/t/p/w300" + elemento.backdrop_path} alt="" />
                        <p key={elemento.id}>p</p>
                    </div>
                )
            }
            {carga && <Spinner />}
            {error && <strong>Error de coneccion</strong>}
            

            <button onClick={hadleAtras}>Atras</button>
            <button onClick={handleSiguiente}>Siguiente</button>
        </section>

    )
}















