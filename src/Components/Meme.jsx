import React, { useEffect, useState } from 'react'
// import memeData from '../memeData'

function Meme() {
  
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState([])

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevSate => ({
      ...prevSate,
      [name]: value
    }))
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data =>  setAllMemeImages(data.data.memes))
  }, [])

  // console.log(memeData)
  function getMemeImage() {
      const randomMeme = Math.floor(Math.random() * allMemeImages.length)
      const url = allMemeImages[randomMeme].url 
      
      setMeme(prevImage => ({
        ...prevImage,
        randomImage: url
      }));
      // console.log(memesArray[randomMeme].url)  
  }

  return (
    <main>
        <div className='form'> 
          <input className='form--input' 
          placeholder='Top text' 
          type="text"
          value={meme.topText}
          onChange={handleChange}
          name="topText"
          />
          <input className='form--input' 
          placeholder='Bottom text' 
          type="text"
          value={meme.bottomText}
          onChange={handleChange}
          name="bottomText"
          />
          <button onClick={getMemeImage} className='form--button'>Get a new meme image 🖼</button>
        </div>
        <img className='meme--image' src={meme.randomImage} alt="memes"  />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>

    </main>
  )
}

export default Meme