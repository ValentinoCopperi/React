import { useState } from "react";
import './Cards.css'
export function TwitterFollowCard({ username, name  }) {


  const [isFollowing , setIsFollowing] = useState(false);
  const handeClick = () =>{
    setIsFollowing(!isFollowing);
  }
  const imageSrc = `https://unavatar.io/${username}`;
  const addAt = (username) => `@${username}`;

  const texto = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ?
    "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img src={imageSrc} alt="avatar" />
          <div>
            <strong>{name}</strong>
            <span>{addAt(username)}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handeClick}>
            {texto}
          </button>
        </aside>
      </article>
    </>
  )
}