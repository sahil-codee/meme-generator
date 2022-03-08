import React, { useState } from 'react'
import memeData from '../memeData'

function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memeData)

  // console.log(memeData)
  function getMemeImage() {
      const memesArray = memeData.data.memes
      const randomMeme = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomMeme].url 
      
      setMeme(prevImage => ({
        ...prevImage,
        randomImage: url
      }));
      // console.log(memesArray[randomMeme].url)  
  }


  return (
    <main>
        <div className='form'> 
          <input className='form--input' placeholder='Top text' type="text" />
          <input className='form--input' placeholder='Bottom text' type="text" />
          <button onClick={getMemeImage} className='form--button'>Get a new meme image 🖼</button>
        </div>
        <img className='meme--image' src={meme.randomImage} alt="memes"  />
    </main>
  )
}

export default Meme