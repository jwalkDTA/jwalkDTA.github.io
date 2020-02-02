import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import EventDetailsForm from "../components/EventDetailsForm";
import EastDetails from "../components/EastDetails";
import WestDetails from "../components/WestDetails";
import WestCeremonyDetails from "../components/WestCeremonyDetails";
import { getItem, setItem } from "../utils/sessionStorage";

const WEST_PASSWORD = "west";
const WEST_CEREMONY_PASSWORD = "west ceremony";
const EAST_PASSWORD = "east";

const EVENT_DETAILS_SESSION_KEY = "event_details_screen";

const EventDetailsWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 320px;
  position: absolute;
  overflow: hidden;
  top: 88px;
  bottom: 0px;
  width: 100%;
`;

const LeftPanel = styled.div`
  width: 35vw;
  height: calc(100vh - 88px);
  position: relative;
  align-self: flex-start;
  padding-top: 80px;
  padding-right: 120px;
  overflow-y: auto;
`;

const RightPanel = styled.div`
  width: 65vw;
  height: calc(100vh - 88px);
  overflow: hidden;
`;

const EventDetailsInfo = styled.div``;

const LockScreenImage = data => (
  <Img fluid={data.eventDetailsImage.childImageSharp.fluid} />
);

const MapContainer = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`;

class EventDetails extends React.Component {
  state = {
    currentPassword: "",
    panelUnlocked: getItem(EVENT_DETAILS_SESSION_KEY),
    passwordWrong: false,
  };

  checkPassword = () => {
    switch (this.state.currentPassword) {
      case WEST_PASSWORD:
        this.setState({
          panelUnlocked: WEST_PASSWORD,
          passwordWrong: false,
        });
        setItem(EVENT_DETAILS_SESSION_KEY, WEST_PASSWORD);
        break;
      case WEST_CEREMONY_PASSWORD:
        this.setState({
          panelUnlocked: WEST_CEREMONY_PASSWORD,
          passwordWrong: false,
        });
        setItem(EVENT_DETAILS_SESSION_KEY, WEST_CEREMONY_PASSWORD);
        break;
      case EAST_PASSWORD:
        this.setState({
          panelUnlocked: EAST_PASSWORD,
          passwordWrong: false,
        });
        setItem(EVENT_DETAILS_SESSION_KEY, EAST_PASSWORD);
        break;
      default:
        this.setState({
          panelUnlocked: null,
          passwordWrong: true,
        });
        setItem(EVENT_DETAILS_SESSION_KEY, null);
    }
  };

  setCurrentPassword = password => {
    this.setState({ currentPassword: password });
  };

  render() {
    const { currentPassword, passwordWrong, panelUnlocked } = this.state;
    const { data } = this.props;

    const EventDetailsComponent = {
      [WEST_PASSWORD]: WestDetails,
      [WEST_CEREMONY_PASSWORD]: WestCeremonyDetails,
      [EAST_PASSWORD]: EastDetails,
    }[panelUnlocked];

    return (
      <EventDetailsWrapper>
        <LeftPanel>
          {!panelUnlocked ? (
            <EventDetailsForm
              passwordWrong={passwordWrong}
              setCurrentPassword={this.setCurrentPassword}
              checkPassword={this.checkPassword}
            />
          ) : (
            <EventDetailsComponent />
          )}
        </LeftPanel>
        <RightPanel>
          {!panelUnlocked ? LockScreenImage(data) : <MapContainer />}
        </RightPanel>
      </EventDetailsWrapper>
    );
  }
}

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
