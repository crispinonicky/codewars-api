import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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

  getUser(sampleUser)

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

  getCompleted(sampleUser)

  // Skipping authored challenges

  let sampleChallenge = '5277c8a221e209d3f6000b56'

  function getChallenge(challenge){
    axios.get(corsAnywhere + 'https://www.codewars.com/api/v1/code-challenges/' + challenge)
    .then(data => {
      console.log("Here is the information on one coding challenge:")
      console.log(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  getChallenge(sampleChallenge)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
