import React, { useState } from "react";
import { Link } from "gatsby";
import globalContext from "window-or-global";

import { getItem, setItem } from "../utils/sessionStorage";

const WEST_PASSWORD = "west";
const EAST_PASSWORD = "east";

const SESSION_KEY_WEST = "west_unlocked";
const SESSION_KEY_EAST = "east_unlocked";

const EventDetails = () => {
  const westUnlockedSession = getItem(SESSION_KEY_WEST);
  const eastUnlockedSession = getItem(SESSION_KEY_EAST);

  const [currentPassword, setCurrentPassword] = useState("");
  const [westUnlocked, setWestUnlocked] = useState(westUnlockedSession);
  const [eastUnlocked, setEastUnlocked] = useState(eastUnlockedSession);
  const [passwordWrong, setPasswordWrong] = useState(false);

  const checkPassword = () => {
    switch (currentPassword) {
      case WEST_PASSWORD:
        console.log("running west unlock");
        setWestUnlocked(true);
        setEastUnlocked(false);
        setPasswordWrong(false);
        setItem(SESSION_KEY_WEST, true);
        break;
      case EAST_PASSWORD:
        console.log("running east unlock");
        setWestUnlocked(false);
        setEastUnlocked(true);
        setPasswordWrong(false);
        setItem(SESSION_KEY_EAST, true);
        break;
      default:
        setWestUnlocked(false);
        setEastUnlocked(false);
        setPasswordWrong(true);
        setItem(SESSION_KEY_WEST, false);
        setItem(SESSION_KEY_EAST, false);
    }
  };

  return (
    <>
      <h1>Event Details</h1>
      {!westUnlocked && !eastUnlocked && (
        <div>
          <input onChange={e => setCurrentPassword(e.target.value)}></input>
          <button onClick={checkPassword}>Unlock</button>
          {passwordWrong && <p>The password you entered is incorrect</p>}
        </div>
      )}
      {westUnlocked && <p>West Details</p>}
      {eastUnlocked && <p>East Details</p>}
    </>
  );
};

export default EventDetails;
