import { useState } from 'react'
import './Boton.css'


export function Boton({name, email, url}){
    const [isState, setState] = useState(false)
    
    const text = isState? 'No siguiendo': 'Seguir'

    const handleClick = ()=> {
        setState(!isState)
    }

    return (
        <article className='botonArticle'>
            <header className='botonHeader'>
                <img className="botonImg" src={`${url}`} alt="" />
                <div className='botonDiv'>
                    <strong>{name}</strong>
                    <span>{email}</span>
                </div>
                <aside>
                    <button onClick={handleClick}>{text}</button>
                </aside>
            </header>
        </article>
    )
}
