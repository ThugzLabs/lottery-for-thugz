import holdersData from './holdersData';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
const [winner, setWinner] = useState("");
const listing = [];


  function lottery() {
      
        for(var i = 0; i < holdersData.length; i++) {
          for(var y = 0; y < holdersData[i].amount; y++) {
          listing.push(holdersData[i].address)
          }
       } 
      
     return listing   
  }
  function lance() {
    lottery()
    const random = Math.floor(Math.random() * listing.length)
    setWinner(listing[random])
  }

  return(
  <div className="lottery">
    <div class="logo"><img src="/static/media/ThugzNFT-Logo.png" alt="Thugz Life NFT Logo"></img></div>
    <h1 class="gradient-text">Thugz Lottery</h1>
    <div class="result">{winner !== null ?  winner : null}</div>
    <button onClick={lance}>DRAW THE WINNER NOW</button>
  </div>
  )
}

export default App;
