export const Pelicula = ({movie})=>{
    console.log(movie);
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
            <p>{movie.title}</p>           
        </li>
    )
}