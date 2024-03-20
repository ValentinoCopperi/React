import React from 'react'

export default function InputCrud() {
  return (
      <form>
        <label htmlFor="">Equipos</label>
        <input type="text" />
        <label htmlFor="">Pais</label>
        <input type="text" />
        <input type="submit" value="Agregar" />
        <input type="reset" value="Cancelar" />
      </form>
  )
}
