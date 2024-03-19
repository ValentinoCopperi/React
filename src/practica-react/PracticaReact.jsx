import React, { useState } from 'react'

export default function PracticaReact() {
    //INPUTS
    const [nombre,setNombre] = useState("Nombre...");
    const [nombres,setNombres] = useState([]);

    const hanndleInput = (event) => {
        setNombre(event.target.value)
    }

    const hanndleNames = () => {
        setNombres([...nombres , nombre])
    }
  return (
        //INPUTS
       <div>
            <p>Ingrese un nombre</p>
            <input type="text"  value={nombre} onChange={hanndleInput}/>
            <button onClick={hanndleNames} >Enviar</button>
            <ul>
                {
                    nombres.map((nombre)=>{
                        return <li key={nombre}>{nombre}</li>
                    })
                }
            </ul>
       </div>
  )
}
