import { Card } from "./Card";
import { useEffect, useState } from "react";

export function Lista() {

    const [pokes, setPokes] = useState([])
    // console.log('==>',pokes);
    useEffect(() => {

        const pokemones = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon')
            const datas = await response.json()
            // console.log(datas);
            const { results } = datas
            
            const subPoquemones = results.map( async (result) => {
                const subResponse = await fetch(result.url)
                const subDatas = await subResponse.json()
                // console.log(subDatas);
                return {
                    id:subDatas.id,
                    name:subDatas.name,
                    img:subDatas.sprites.back_default
                }
                // console.log(Promise.all(subPoquemones))
            })

            setPokes(await Promise.all(subPoquemones))
            // console.log(await Promise.all(subPoquemones));
            console.log(pokes);
        }
        pokemones()

    }, [])

    return (
     <>
        {
            pokes.map((poke)=>{
               return <Card key={poke.id} poke = {poke} />
            })
        }
     </>   
    )
}



















