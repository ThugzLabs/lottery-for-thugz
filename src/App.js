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
  <h1>Lotterie pour les Thugz</h1>
  {winner !== null ?  winner : null}
  <button onClick={lance}>Tirer au sort le gagnant</button>
  
  </div>
  )
}

export default App;
