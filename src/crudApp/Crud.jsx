import React, { useEffect, useState } from 'react'
import InputCrud from './InputCrud'
import TableCrud from './TableCrud';
import './crud.css'



export default function Crud() {

  const [editData, setEditData] = useState(null);

  //Definimos equipos como una funcion que nos retorne lo que hay guardado
  //en el local storage 
  // si no hay nada devuelve arreglo vacio
  const [equipos,setEquipos] = useState(()=> {
    const saveEquipos = window.localStorage.getItem('equiposData');
    if(saveEquipos){
      //pasamos de texto a json
      return JSON.parse(saveEquipos);
    }else {
      return [];
    }
  });
  
  //Guardamos en el local storage cada vez que equipos se actualize
  useEffect(()=> {
    window.localStorage.setItem('equiposData' , JSON.stringify(equipos));
   
  },[equipos])

  //Agregamos a equipos , el equipo enviado por el formulario (formData)
  const addEquipo = (equipo) => {
    setEquipos(
      [...equipos , equipo]
    )
  }
  //Eliminar equipo
  const deleteEquipo = (id) => {
      const newEquipos = equipos.filter(eq => eq.id !== id)
      setEquipos(newEquipos);
  }

  const editarEquipo = (equipo) => {
   const newEquipos = equipos.map(eq => eq.id === equipo.id ? equipo : eq)
    setEquipos(newEquipos);
    setEditData(null)
  }

  return (
    <div className='crud-container'>
      <h1>CRUD de equipos de futbol</h1>
      <InputCrud addEquipo={addEquipo} editData={editData} editarEquipo={editarEquipo}></InputCrud>
      <TableCrud equipos={equipos} setEditData={setEditData} deleteEquipo={deleteEquipo}></TableCrud>
    </div>
  )
}
