import React, { useState } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { Typography, Palette } from "../utils";

const DetailsWrapper = styled.div`
  width: 100%;
  margin-left: 40px;
  margin-bottom: 120px;
`;

const WestCeremonyHeading = styled.h1`
  ${Typography.MainHeading}
  margin-bottom: 16px;
`;

const DateTime = styled.div`
  ${Typography.BodyMedium}
  margin-bottom: 16px;
`;

const LocationHeader = styled.div`
  ${Typography.BodyMediumBold}
  margin-bottom: 8px;
`;

const LocationInfo = styled.div`
  ${Typography.BodyMedium}
  margin-bottom: 32px;
`;

const Divider = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 1px;
  background-color: ${Palette.dividerGray};
`;

const AttireHeader = styled.div`
  ${Typography.BodyMediumBold}
  margin-bottom: 8px;
`;

const AttireInfo = styled.div`
  ${Typography.BodyMedium}
  margin-bottom: 24px
`;

const ParkingHeader = styled.div`
  ${Typography.BodyMediumBold}
  margin-bottom: 8px;
`;

const ParkingInfo = styled.div`
  ${Typography.BodyMedium}
  margin-bottom: 24px;
`;

const DirectionsHeader = styled.div`
  ${Typography.BodyMediumBold}
  margin-bottom: 8px;
`;

const DirectionsInfo = styled.div`
  ${Typography.BodyMedium}
`;

const WestCeremonyDetails = () => (
  <DetailsWrapper>
    <WestCeremonyHeading>House Party Reception</WestCeremonyHeading>
    <DateTime>Saturday, May 16 · Time TBD</DateTime>
    <LocationHeader>Sauvie Island Boat Ramp</LocationHeader>
    <LocationInfo>15500 NW Ferry Rd, Portland, OR 97231</LocationInfo>
    <Toggle>
      <AttireHeader>👚 Attire</AttireHeader>
      <AttireInfo>Dressy casual — wear whatever strikes your fancy.</AttireInfo>
      <ParkingHeader>🚘 Parking</ParkingHeader>
      <ParkingInfo>
        Use the free public parking lot at the top of the ramp.
      </ParkingInfo>
      <DirectionsHeader>🗺 Directions</DirectionsHeader>
      <DirectionsInfo>
        From the parking lot, walk towards the river and down the ramp. At the
        bottom of the ramp, turn right and walk all the way to the end of the
        boardwalk. Lynn and Suzanne’s house is on the left.
      </DirectionsInfo>
    </Toggle>
    <Divider />
    <WestCeremonyHeading>Ceremony</WestCeremonyHeading>
    <DateTime>Monday, May 18 · Time TBD</DateTime>
    <LocationHeader>Sugarpine Drive-In</LocationHeader>
    <LocationInfo>
      1208 E Historic Columbia River Hwy, Troutdale, OR 97060
    </LocationInfo>
    <Toggle>
      <AttireHeader>👚 Attire</AttireHeader>
      <AttireInfo>Dressy casual — wear whatever strikes your fancy.</AttireInfo>
      <ParkingHeader>🚘 Parking</ParkingHeader>
      <ParkingInfo>Park in the free lot adjacent to the drive-in.</ParkingInfo>
    </Toggle>
  </DetailsWrapper>
);

export default WestCeremonyDetails;
