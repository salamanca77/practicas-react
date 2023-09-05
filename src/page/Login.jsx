import { useLocation } from "react-router-dom"

export function Login(){
    const location = useLocation()
    console.log(location);
    return(
        <h1>Login</h1>

    )
}