import React, { useEffect } from 'react'
import { useState } from 'react';
export default function InputCrud({ addEquipo , editData , editarEquipo }) {

  const[formData,setFormData] = useState({
    equipo:'',
    pais:'',
    id:null
  })

  useEffect(()=>{
      if(editData !== null){
        setFormData(editData);
      } else {
        setFormData({
          equipo:'',
          pais:'',
          id:null
        })
      }
  }, [editData])

  //Evento al enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editData !==null){
      editarEquipo(formData)
    }else{
    formData.id = Date.now();
    //Enviamos el formData con los datos que tiene al momento de enviar el formulario
    addEquipo(formData);
    //Reinciamos los datos del formData
    setFormData({
      equipo:'',
      pais:'',
      id:null
    })
    }
  }
  //Actualiza los datos de FormData cada vez que escribimos en el input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
   
  }

  return (
      <form className='m-5' onSubmit={handleSubmit}>
        <label htmlFor="">Equipos</label>
        <input type="text" name="equipo" onChange={handleChange} value={formData.equipo} />
        <label htmlFor="">Pais</label>
        <input type="text" name="pais" onChange={handleChange} value={formData.pais}/>
        <input type="submit" value="Agregar" className='btn btn-danger mx-2'/>
        <input type="reset" value="Cancelar" className='btn btn-warning mx-2'/>
      </form>
  )
}
