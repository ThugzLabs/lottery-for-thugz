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
    <div class="logo"><img src="https://ranking.thugz.life/static/media/ThugzNFT-Logo.c5feeed78011eb150d8a.png" alt="Thugz Life NFT Logo"></img></div>
    <h1 class="title gradient-text">Thugz Lottery</h1>

    <div class="result">

      <div class="letter-image">
        <div class="animated-mail">
          <div class="back-fold"></div>
          <div class="letter">
            <div class="letter-border"></div>
            <div class="letter-title">Wallet</div>
            <div class="letter-context">{winner !== null ?  winner : null}</div>
            <div class="letter-stamp">
              <div class="letter-stamp-inner"></div>
            </div>
          </div>
          <div class="top-fold"></div>
          <div class="body"></div>
          <div class="left-fold"></div>
        </div>
        <div class="shadow"></div>
      </div>
      
    </div>
    <input onClick={lance} type="checkbox" name="button" id="button" />
    <label class="bevel" for="button">We have our Winner !</label>
    <span>Draw a Winner</span>
  </div>
  )
}

export default App;
