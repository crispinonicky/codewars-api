import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
  console.log("App is running")

  // This functions gets all of the information on a user:
  function getUser(user){
    axios.get(corsAnywhere + 'https://www.codewars.com/api/v1/users/' + user)
    .then(data => {
      console.log(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  getUser('ncrispino')

  

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
