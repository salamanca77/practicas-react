import './Boton.css'

export function Boton({name, email, url}){
    return (
        <article className='botonArticle'>
            <header className='botonHeader'>
                <img className="botonImg" src={`${url}`} alt="" />
                <div className='botonDiv'>
                    <strong>{name}</strong>
                    <span>{email}</span>
                </div>
                <aside>
                    <button>boton</button>
                </aside>
            </header>
        </article>
    )
}
