import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";

function App() {
  const [username, setUserInfo] = useState("");
  const [userData, setUserData] = useState("");
  const [userSearch, setUserSearch] = useState(false);
  const [challengeInfo, setChallengeInfo] = useState("");

  useEffect(() => {
    // console.log("User we are searching for (INFO): ", username);
    // console.log("User we are searching for (CHALLENGES): ", userChallenges);
    // console.log("Challenge we are searching for: ", challengeInfo);
  });

  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  // This function gets all of the information on a user, and
  // returns all of the challenges they've completed:

  function getUser(e, user) {
    
    user = username;
    axios
      .get(corsAnywhere + "https://www.codewars.com/api/v1/users/" + user)
      .then(data => {
        console.log(`This is the information on ${username}:`);
        console.log(data.data);
        setUserSearch(true)
        setUserData(data.data)
      })
      .catch(err => {
        // console.log("User not found!")
        console.log(err);
      });
    console.log("Searching for ", username);

    axios
    .get(
      corsAnywhere +
        "https://www.codewars.com/api/v1/users/" +
        user +
        "/code-challenges/completed?page=0"
    )
    .then(data => {
      console.log(`Here are the challenges that ${user} has completed:`);
      console.log(data.data.data);
    })
    .catch(err => {
      console.log("User not found!")
      console.log(err);
    });

    e.preventDefault();
  }

  // Skipping authored challenges because very few students
  // have created challenges of their own

  // This function gives information on a codewars kata. 
  // It can accept either a title formatted-like-this or an ID:

  function getChallenge(e, challenge) {
    challenge = challengeInfo;
    axios
      .get(
        corsAnywhere +
          "https://www.codewars.com/api/v1/code-challenges/" +
          challenge
      )
      .then(data => {
        console.log(`Here is the information on ${challenge}:`);
        console.log(data.data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("Challenge we are searching for: ", challengeInfo);
    e.preventDefault();
  }

  function handleChangeUser(e) {
    setUserInfo(e.target.value);
  }

  function handleChangeChallenge(e) {
    setChallengeInfo(e.target.value);
  }

  function showUserDetails() {
    if (userSearch === true) {
      return(
      <ul className = "userDetails">
      <li>
        Username: {userData.username}
      </li>
      <li>
        Honor: {userData.honor}
      </li>
      <li>
        Leaderboard Position: #{userData.leaderboardPosition}
      </li>
    </ul>
      )
    }
  }

  return (
    <div className="App">
      <ul className = "theForms">
        <li className = "userForm">
          <form onSubmit={getUser}>
            <label>
              Enter a user to show their info:
              <input type="text" value={username} onChange={handleChangeUser} />
            </label>
            <input
              type="submit"
              value="Submit"
              onClick={e => getUser(e, { username })}
            />
          </form>
          {showUserDetails()}
        </li>


        <li>
          <form onSubmit={getChallenge}>
            <label>
              Enter a challenge here (name or ID) to show its stats:
              <input
                type="text"
                value={challengeInfo}
                onChange={handleChangeChallenge}
              />
            </label>
            <input
              type="submit"
              value="Submit"
              onClick={e => getChallenge(e, { challengeInfo })}
            />
          </form>
        </li>
      </ul>
    </div>
  );
}

export default App;
