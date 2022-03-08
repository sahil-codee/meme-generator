import React from 'react'

function Header() {
  return (
    <div className='header'>
        <img className='header--image' src="/images/trollFace.png" alt="Troll Face" />
        <h1 className='header--title'>Meme Generator</h1>
        <p className='header--project'>React Course - Project 3</p>
    </div>
  )
}

export default Header