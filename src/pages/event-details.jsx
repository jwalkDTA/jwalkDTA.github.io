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
  overflow: hidden;
  height: calc(100vh - 88px);
  width: 100%;
`;

const LeftPanel = styled.div`
  width: 35vw;
  height: 100%;
  position: relative;
  align-self: flex-start;
  padding-top: 80px;
  padding-right: 120px;
  overflow-y: auto;
`;

const RightPanel = styled.div`
  width: 65vw;
  height: 100%;
  overflow: hidden;
`;

const MapContainer = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
`;

const EastMap = () => (
  <MapContainer
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.10056629769!2d-73.98530638459722!3d40.825754679319644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f7ad34ba2b9f%3A0x711a5ee8e8762aff!2s211%20Lawton%20Ave%2C%20Cliffside%20Park%2C%20NJ%2007010!5e0!3m2!1sen!2sus!4v1580678235714!5m2!1sen!2sus"
    frameborder="0"
    scrolling="no"
  />
);

const WestMap = () => (
  <MapContainer
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.870621209114!2d-122.83862458444142!3d45.65341987910362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495aa0784d7b7af%3A0x10c2d2ce8008b4fc!2s15500%20NW%20Ferry%20Rd%2C%20Portland%2C%20OR%2097231!5e0!3m2!1sen!2sus!4v1580678303252!5m2!1sen!2sus"
    frameborder="0"
    scrolling="no"
  />
);

const WestCeremonyMap = () => (
  <MapContainer
    src="https://www.google.com/maps/d/u/2/embed?mid=1LTCyMQqJKYVprJhD0DdaMJ9VqAHo-fYw"
    frameborder="0"
    scrolling="no"
  />
);

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

    const MapComponent = {
      [WEST_PASSWORD]: WestMap,
      [WEST_CEREMONY_PASSWORD]: WestCeremonyMap,
      [EAST_PASSWORD]: EastMap,
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
          {!panelUnlocked ? (
            <Img fluid={data.eventDetailsImage.childImageSharp.fluid} />
          ) : (
            <MapComponent />
          )}
        </RightPanel>
      </EventDetailsWrapper>
    );
  }
}

export const query = graphql`
  query EventDetailsQuery {
    eventDetailsImage: file(relativePath: { eq: "event-details.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default EventDetails;
