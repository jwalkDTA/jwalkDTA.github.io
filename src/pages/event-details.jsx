import React, { useState } from "react";
import { Link } from "gatsby";
import globalContext from "window-or-global";

import LockScreen from "../components/LockScreen";
import { getItem, setItem } from "../utils/sessionStorage";

const WEST_PASSWORD = "west";
const WEST_CEREMONY_PASSWORD = "west ceremony";
const EAST_PASSWORD = "east";

const SESSION_KEY_WEST = "west_unlocked";
const SESSION_KEY_WEST_CEREMONY = "west_ceremony_unlocked";
const SESSION_KEY_EAST = "east_unlocked";

const EventDetails = ({ data }) => {
  const westUnlockedSession = getItem(SESSION_KEY_WEST);
  const westCeremonyUnlockedSession = getItem(SESSION_KEY_WEST_CEREMONY);
  const eastUnlockedSession = getItem(SESSION_KEY_EAST);

  const [currentPassword, setCurrentPassword] = useState("");
  const [westUnlocked, setWestUnlocked] = useState(westUnlockedSession);
  const [westCeremonyUnlocked, setWestCeremonyUnlocked] = useState(
    westCeremonyUnlockedSession
  );
  const [eastUnlocked, setEastUnlocked] = useState(eastUnlockedSession);
  const [passwordWrong, setPasswordWrong] = useState(false);

  const checkPassword = () => {
    switch (currentPassword) {
      case WEST_PASSWORD:
        setWestUnlocked(true);
        setWestCeremonyUnlocked(false);
        setEastUnlocked(false);
        setPasswordWrong(false);
        setItem(SESSION_KEY_WEST, true);
        break;
      case WEST_CEREMONY_PASSWORD:
        setWestUnlocked(false);
        setWestCeremonyUnlocked(true);
        setEastUnlocked(false);
        setPasswordWrong(false);
        setItem(SESSION_KEY_WEST_CEREMONY, true);
        break;
      case EAST_PASSWORD:
        setWestUnlocked(false);
        setWestCeremonyUnlocked(false);
        setEastUnlocked(true);
        setPasswordWrong(false);
        setItem(SESSION_KEY_EAST, true);
        break;
      default:
        setWestUnlocked(false);
        setWestCeremonyUnlocked(false);
        setEastUnlocked(false);
        setPasswordWrong(true);
        setItem(SESSION_KEY_WEST, false);
        setItem(SESSION_KEY_EAST, false);
    }
  };

  const isLocked = !westUnlocked && !westCeremonyUnlocked && !eastUnlocked;

  return (
    <>
      {isLocked && (
        <LockScreen
          passwordWrong={passwordWrong}
          setCurrentPassword={setCurrentPassword}
          checkPassword={checkPassword}
          image={data.eventDetailsImage.childImageSharp.fluid}
        />
      )}
      {westUnlocked && <p>West Details</p>}
      {westCeremonyUnlocked && <p>West Ceremony Details</p>}
      {eastUnlocked && <p>East Details</p>}
    </>
  );
};

export const query = graphql`
  query EventDetailsQuery {
    eventDetailsImage: file(relativePath: { eq: "event-details.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default EventDetails;
