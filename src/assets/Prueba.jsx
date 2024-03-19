import React, { useState } from 'react'
import './Prueba.css';
export default function Prueba() {

    const [numero , sumador] = useState(0);
    const sumar = () => {
        sumador(numero+1)
    }
    const restar = () => {
        sumador(numero-1)
    }
    const restart = () => {
        sumador(0);
    }
  return (
    <article className='container-prueba'>
    <div id='num'>{numero}</div>
    <button onClick={sumar} className='btn' >Sumar</button>
    <button onClick={restar} className='btn' >Restar</button>
    <button onClick={restart} className='btn' >Restart</button>
    </article>
  )
}
