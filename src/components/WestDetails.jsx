import React from "react";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const DetailsWrapper = styled.div`
  width: 100%;
  margin-left: 40px;
`;

const WestHeading = styled.h1`
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

const WestDetails = () => (
  <DetailsWrapper>
    <WestHeading>House Party Reception</WestHeading>
    <DateTime>Saturday, May 16 · Time TBD</DateTime>
    <LocationHeader>Sauvie Island Boat Ramp</LocationHeader>
    <LocationInfo>15500 NW Ferry Rd, Portland, OR 97231</LocationInfo>
    <Divider />
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
  </DetailsWrapper>
);

export default WestDetails;
