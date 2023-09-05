import { useState } from "react"

export const  useAuth = () =>{
    const [isAuth, setAutn] = useState(false)
    return {isAuth}
}