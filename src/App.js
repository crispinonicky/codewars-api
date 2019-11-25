import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";


function App() {

  // const [inputs, setInput] = useState();
  const [userInfo, setUserInfo] = useState("");
  const [userChallenges, setUserChallenges] = useState("");
  const [challengeInfo, setChallengeInfo] = useState("");

  useEffect(() => {
    console.log('User we are searching for (INFO): ',userInfo)
    console.log('User we are searching for (CHALLENGES): ', userChallenges)
    console.log('Challenge we are searching for: ', challengeInfo)

  });

  let sampleUser = 'ncrispino'

  const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
  console.log("App is running")

  // This functions gets all of the information on a user:
  function getUser(e, user){
    user = userInfo
    axios.get(corsAnywhere + 'https://www.codewars.com/api/v1/users/' + user)
    .then(data => {
      console.log(`This is the information on ${userInfo}`)
      console.log("Here is all of the information on the user")
      console.log(data.data)
    })
    .catch(err => {
      console.log(err)
    })
    console.log(userInfo)
    e.preventDefault()
  }

  // getUser(sampleUser)

  function getCompleted(e, user){
    user = userChallenges
    console.log(user)
    axios.get(corsAnywhere + 'https://www.codewars.com/api/v1/users/' + user + '/code-challenges/completed?page=0')
    .then(data => {
      console.log("Here are the challenges that the user has completed:")
      console.log(data.data.data)
    })
    .catch(err => {
      console.log(err)
    })
    e.preventDefault()
  }

  // getCompleted(sampleUser)

  // Skipping authored challenges

  // Can be an ID, or the name of a challenge formatted-like-this
  let sampleChallenge = '5277c8a221e209d3f6000b56'

  function getChallenge(e, challenge){
    challenge = challengeInfo
    axios.get(corsAnywhere + 'https://www.codewars.com/api/v1/code-challenges/' + challenge)
    .then(data => {
      console.log("Here is the information of a single challenge:")
      console.log(data.data)
    })
    .catch(err => {
      console.log(err)
    })
    e.preventDefault()
  }

  // getChallenge(sampleChallenge)

  // function test() {
  //   console.log('function is connected')
  // }

  function handleChangeUser(e){
    setUserInfo(e.target.value)
  }

  function handleChangeUserChallenges(e){
    setUserChallenges(e.target.value)
  }

  function handleChangeChallenge(e){
    setChallengeInfo(e.target.value)
  }
  
  // function handleSubmit(e){
  //   console.log("Submitted")
  //   e.preventDefault()
  // }



  return (
    <div className="App">

    {/* <form onSubmit={getUser}>
        <label>
          Name:
          <input type="text" value={userInfo} onChange={handleChangeUser} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}


      <ul>
        <li>

        <form onSubmit={getUser}>
        <label>
          Enter a user:
          <input type="text" value={userInfo} onChange={handleChangeUser} />
        </label>
        <input type = "submit" value = "Submit" onClick ={(e) => getUser(e, {userInfo})}/>
      </form>

          </li>

          <li>

        <form onSubmit={getCompleted}>
        <label>
          Enter a user here too:
          <input type="text" value={userChallenges} onChange={handleChangeUserChallenges} />
        </label>
        <input type = "submit" value = "Submit" onClick ={(e) => getCompleted(e, {userChallenges})}/>
      </form>
          </li>        
          
          <li>

        <form onSubmit={getChallenge}>
        <label>
          Enter a challenge here (name or ID):
          <input type="text" value={challengeInfo} onChange={handleChangeChallenge} />
        </label>
        <input type = "submit" value = "Submit" onClick ={(e) => getChallenge(e, {challengeInfo})}/>
      </form>
          </li>        
          </ul>

    </div>
  );
}

export default App;
