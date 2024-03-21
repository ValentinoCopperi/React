import React from 'react'

export default function TableCrud({ equipos , setEditData , deleteEquipo}) {
  return (
    <>
      <h3>EquiposActuales</h3>
      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Equipo</td>
            <td>Pais</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        {
          equipos.length == 0 ? <tr><td></td><td>No hay datos</td><td></td></tr>
          : equipos.map((equipo , index )=>{
            return <tr key={index}>
                    <td>{equipo.id}</td>
                    <td>{equipo.equipo}</td>
                    <td>{equipo.pais}</td>
                    <td>
                      <button className='btn btn-success' onClick={()=> setEditData(equipo)}>Editar</button>
                      <button className='btn btn-danger' onClick={()=> deleteEquipo(equipo.id)}>Eliminar</button>
                    </td>
                  </tr>
          })
        }
        </tbody>
      </table>
    </>
  )
}
