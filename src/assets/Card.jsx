import { useEffect, useState } from "react";

export function Card({poke}){
        
    return (
        <article>
            <img src={poke.img} alt="" />
            <figcaption>{poke.name}</figcaption>
        </article>
    )
}