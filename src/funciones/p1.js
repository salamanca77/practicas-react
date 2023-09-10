export const p1 = ()=>{

    function declarada(){
        console.log('Soy una funcion declarada');
    }

    const expresada = ()=>{
        console.log("Soy una funcion expresada");
    }


    const promesa = ()=>{
        
     return new Promise((resuelto, rechazado)=>{
            const d1 = 'Soy una promesa'
            resuelto(d1)
        })

    }
    
    
     const promesaDos = new Promise((resuelto, rechazado)=>{
        const d1 = 'Soy una promesa nueva'
        resuelto(d1)
    })

    async function p22(){
      const objetoPromesa  = await new Promise((resuelto, rechazado)=>{
            const d1 = 'Soy una promesa de espera'
            resuelto(d1)
        })

        return objetoPromesa    
    }
    


   
    return {
        declarada,
        expresada,
        promesa,
        p22
    }
}