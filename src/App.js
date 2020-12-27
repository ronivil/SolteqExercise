import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"
import './App.css'

//This is my web application for Solteq internship. I have been working with mobile projects for the last year and a half
//so it was difficult for me to start web coding again. I had fun with this project, i own a deep interest to space and all
//things included in it. So going with NASA's open APIs were a natural choice for me. This project also gave me a opportunity
//to use axios for the first time. I cant say much about it with this smallish project but it was very interesting and different
//compared to the basic fetch method i have used. Really interesting project overall.

const App = () => {
  const [ apod, setApod ] = useState({})

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  return (
    <div className='divStyle'>

      <h1>NASA Astronomy Picture of the Day</h1>
      
      {apod && (
        <article>
     
          <header className='apodHeader'>
            {apod.title} - <i>{apod.date}</i>
          </header>

          <div className='apodStyle'>
            <div className='container'>
               <img className = 'image' src={apod.url} alt="Loading" width="800" height="auto" />
               <div className="overlay">
                <div className="text">Hire me!</div>
                <p className="text2">Phone number: 0504683291</p>
                <p className="text3">Email: roni.vilenius@hotmail.com</p>
              </div>
            </div>

          <div className='exp'>
            <p>
              {apod.explanation}
            </p>
            </div>
          </div>
        
         
        </article>
      )}
    </div>
  )
}

export default App