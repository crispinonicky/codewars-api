import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";


function App() {

  let sampleUser = 'ncrispino'

  const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
  console.log("App is running")

  // This functions gets all of the information on a user:
  function getUser(user){
    axios.get(corsAnywhere + 'https://www.codewars.com/api/v1/users/' + user)
    .then(data => {
      console.log("Here is all of the information on the user")
      console.log(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  // getUser(sampleUser)

  function getCompleted(user){
    axios.get(corsAnywhere + 'https://www.codewars.com/api/v1/users/' + user + '/code-challenges/completed?page=0')
    .then(data => {
      console.log("Here are the challenges that the user has completed:")
      console.log(data.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  // getCompleted(sampleUser)

  // Skipping authored challenges

  // Can be an ID, or the name of a challenge formatted-like-this
  let sampleChallenge = '5277c8a221e209d3f6000b56'

  function getChallenge(challenge){
    axios.get(corsAnywhere + 'https://www.codewars.com/api/v1/code-challenges/' + challenge)
    .then(data => {
      console.log("Here is the information of a single challenge:")
      console.log(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  // getChallenge(sampleChallenge)

  function test() {
    console.log('function is connected')
  }

  return (
    <div className="App">

      <ul>
      <li><button onClick ={(e) => getUser('ncrispino')}>Get the user info</button></li>
      <li><button onClick ={(e) => getCompleted('ncrispino')}>Get challenges the user has completed</button></li>
      <li><button onClick ={(e) => getChallenge('5277c8a221e209d3f6000b56')}>Get the challenge info</button></li>
      </ul>

    </div>
  );
}

export default App;
