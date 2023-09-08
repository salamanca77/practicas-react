export function Destructuracion(){
    
    const d = {
        p1:'saludos',
        p2: 45311,
        p3: 'caracter',
        ['p1']:'otro',
    }


    const a1 = [1, 2, 3]

    const [uno,_, tres] = a1
    console.log(uno, tres);

    return (
        <div>

            

        </div>
    )
}