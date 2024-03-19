import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import GifExpertApp from './assets/GifExpertApp'
import PracticaReact from './practica-react/PracticaReact'
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
    //<GifExpertApp></GifExpertApp>
    <PracticaReact></PracticaReact>

    /*
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


      <TwitterFollowCard name={"Valentino Copperi"} username={"midudev"} />
      <TwitterFollowCard name={"Alejo IgoaRoca"} username={"juan"} />
      <TwitterFollowCard name={"Juan Perez"} username={"juanperez"} />
    </section>
    */
  )
}

export default App
