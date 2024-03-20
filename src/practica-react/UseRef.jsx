import React from 'react'
import { useRef } from 'react'
export default function UseRef() {
    //HACER REFERENCIA A ALGUN ELEMENTO
    const inputRef = useRef();
  return (
    <div>
        <h1>Reference</h1>
        <input type="text"  ref={inputRef}/>
        <button onClick={()=> inputRef.current.focus()}>Focus</button>
    </div>
  )
}
