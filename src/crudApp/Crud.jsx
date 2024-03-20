import React, { useState } from 'react'
import InputCrud from './InputCrud'
import TableCrud from './TableCrud';
import './crud.css'

const baseDatos = [
  {id:0 , equipo: 'Guadalajara' , pais : 'Mexico'}
];

export default function Crud() {

  const [equipos,setEquipos] = useState(baseDatos);
  return (
    <div className='crud-container'>
      <h1>CRUD de equipos de futbol</h1>
      <InputCrud></InputCrud>
      <TableCrud equipos={equipos}></TableCrud>
    </div>
  )
}
