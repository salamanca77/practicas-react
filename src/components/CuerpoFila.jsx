export function CuerpoFila({el}) {
    return (
        <tr>
            <td>{el.nombre}</td>
            <td>{el.constelacion}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>

    )
}