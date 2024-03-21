import React, { useEffect, useState } from 'react'
import InputCrud from './InputCrud'
import TableCrud from './TableCrud';
import { helpFetchApi } from './helpers/helpFetchApi';
import './crud.css'



export default function CrudApi() {
  //Dentro de la variable API estan todas las funciones con los metodos HTTP
  const API = helpFetchApi();
  const [editData, setEditData] = useState(null)
  const[equipos,setEquipos] = useState([]);

  useEffect(()=> {
   
    API.get("equipos").then((res) => {
      if(!res.error) setEquipos(res);
    })
   
  },[])

 
  const addEquipo = (equipo) => {
    const options = {
      body:equipo
    }
    API.post("equipos" , options)
  }
 
  const deleteEquipo = (id) => {
    /*const options = {
      body:id
    }
    API.del("equipos/"+id , options)*/
  }

  const editarEquipo = (equipo) => {
  
  }

  return (
    <div className='crud-container'>
      <h1>CRUD API de equipos de futbol</h1>
      <InputCrud addEquipo={addEquipo} editData={editData} editarEquipo={editarEquipo}></InputCrud>
      <TableCrud equipos={equipos} setEditData={setEditData} deleteEquipo={deleteEquipo}></TableCrud>
    </div>
  )
}
