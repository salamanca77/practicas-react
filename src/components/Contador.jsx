import { useState } from "react"

export function Contador(){
    const [contador, setContador] = useState(0)

    
    return(
        <div>
            <h1>Contador</h1>
            <button onClick={()=> (setContador(contador + 3))}>Mas</button>
            <button onClick={function(){setContador(contador -1)}}>Menos</button>
            <dir>{contador}</dir>
        </div>

    )
}
