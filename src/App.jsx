import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './practica-react/TwitterFollowCard'
import InputUseState from './practica-react/InputsUseState'
import UseRef from './practica-react/UseRef'
import Crud from './crudApp/Crud'
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
      {/* <InputUseState></InputUseState>
      <hr />
      <UseRef></UseRef>
      <hr />
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
      </div> */}
      <Crud></Crud>
    </div>
    
  )
}

export default App
