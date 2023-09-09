import { CuerpoFila } from "./CuerpoFila"

export function Table({datos, deleteData, setDataToEdit}) {
    console.log(datos)
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.legth === 0?( 
                     (<tr><td>No hay datos</td></tr>)
                     ):datos.map(element => <CuerpoFila key={element.id} el={element} setDataToEdit={setDataToEdit} deleteData={deleteData} />
                    )}
                </tbody>
            </table>
        </div>
    )
}