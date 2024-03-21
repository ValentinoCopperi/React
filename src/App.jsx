import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './practica-react/TwitterFollowCard'
import InputUseState from './practica-react/InputsUseState'
import UseRef from './practica-react/UseRef'
import Crud from './crudApp/Crud'
import CrudApi from './crudApp/CrudApi'
const users = [
  {
    userName: 'franco',
    name: 'Fran lamana',
    isFollowing: true,
  },
  {
    userName: 'komplan',
    name: 'Key Lop',
    isFollowing: false,
  },
  {
    userName: 'local',
    name: 'Gero Giovonetti',
    isFollowing: true,
  }
]

function App() {
  
  return (

    <div className='app-container'>
      <CrudApi></CrudApi>
      {/* 
      Aplicacion crud equipos futbol
      <Crud></Crud>

      Inputs con OnChange
      <InputUseState></InputUseState>
      <hr />

      UseRef
      <UseRef></UseRef>
      <hr />

      Crear card de twitter mediante arreglo users
      <div className="cards">
        <strong>Renderizar card mediante MAP</strong>
        <section className='App'>
          {
            users.map(user => {
              const { userName, name, isFollowing } = user;
              return (
                <TwitterFollowCard
                  key={userName}
                  username={userName}
                  name={name}
                >
                </TwitterFollowCard>
              )
            })
          }
        </section>
      </div> 
    */}

    </div>
    
  )
}

export default App
