import React, { useState } from 'react'
import './gif.css'
export default function GifExpertApp() {

    const[categories,setCategories]=useState(['DB','Naruto']); 
    const onAddCategory = (e) => {
        e.preventDefault();
       setCategories([...categories , document.querySelector('input').value])
    }
    const onDeleteCategory = () => {
        
    }
  return (
    <div className='gif'>
        <h1>Categories</h1>
        <ul>
            {categories.map((cat)=>{
                return (
                    <div key={cat} className='category-item'>
                        <li>{cat}</li>
                        <button onClick={onDeleteCategory}>X</button>
                    </div>
                );
            })}
        </ul>
        <form action="">
            <input type="text"  placeholder='Categoria' name='categoria'/>
            <button onClick={onAddCategory} >agregar</button>
        </form>
    </div>
  )
}
