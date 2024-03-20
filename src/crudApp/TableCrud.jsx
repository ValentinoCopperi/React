import React from 'react'

export default function TableCrud({ equipos }) {
  return (
    <>
      <h3>EquiposActuales</h3>
      <table border='1'>
        <thead>
          <tr>
            <td>#</td>
            <td>Equipo</td>
            <td>Pais</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        {
          equipos.length == 0 ? <td>No hay datos</td>
          : equipos.map((equipo , index )=>{
            return <tr key={index}>
                    <td>{equipo.id}</td>
                    <td>{equipo.equipo}</td>
                    <td>{equipo.pais}</td>
                    <td>
                      <button className='btn btn-success'>Editar</button>
                      <button className='btn btn-danger'>Eliminar</button>
                    </td>
                  </tr>
          })
        }
        </tbody>
      </table>
    </>
  )
}
