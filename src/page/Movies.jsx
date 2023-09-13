import { useLocation } from "react-router-dom"
import { Buscando } from "../components/Buscando";
import { useEffect, useState } from "react";
import { Pelicula } from  "../components/Pelicula";

import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../components/Empty";

export const Movies = () => {
    const { search } = useLocation()
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const valorSearch = new URLSearchParams(search)
    const valor = valorSearch.get('search')

    const opciones = {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWVlMGY1OTgxYmYzNGE0MDMzNTFmYzQ4MjUzNDVlOSIsInN1YiI6IjY0ODVkYmUzOTkyNTljMDBlMmY1NzJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zu26OYNbQpBzwy3Xqpr5dm2qgz7f1hlTZU_BGbs264"
    }

    useEffect(() => {
        let url = valor
            ? "https://api.themoviedb.org/3//search/movie?query=" + valor + "&page=" + page
             : "https://api.themoviedb.org/3/movie?page=" + page

        fetch(url, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWVlMGY1OTgxYmYzNGE0MDMzNTFmYzQ4MjUzNDVlOSIsInN1YiI6IjY0ODVkYmUzOTkyNTljMDBlMmY1NzJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2zu26OYNbQpBzwy3Xqpr5dm2qgz7f1hlTZU_BGbs264"
            },
        },).then(result => result.json())
            .then(data => {
                setMovies(data.results)
                console.log(data);
            })

    }, [valor, page])

    if (movies.length === 0) {
        return <Empty />;
      }

    return (

        <div>
            <Buscando />
            <InfiniteScroll
                dataLength={movies.length}
                hasMore={true}
                next={()=> setPage((prevPage)=> prevPage +1 )}
                >
                    {
                    movies.map((movie) => {
                        return (
                            <div key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
                                <p>{movie.title}</p>
                            </div>
                        )
                    })
                }
            </InfiniteScroll>
                    {movies.length === 0 && <p>no hay resultados</p>}
        </div>
    )
}












