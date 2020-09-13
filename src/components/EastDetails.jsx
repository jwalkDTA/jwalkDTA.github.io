import React from "react";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const DetailsWrapper = styled.div`
  width: 100%;
  margin-left: 40px;
`;

const EastHeading = styled.h1`
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
  margin-bottom: 22px
`;

const ParkingHeader = styled.div`
  ${Typography.BodyMediumBold}
  margin-bottom: 8px;
`;

const ParkingInfo = styled.div`
  ${Typography.BodyMedium}
`;

const EastDetails = () => (
  <DetailsWrapper>
    <EastHeading>House Party Reception</EastHeading>
    <DateTime>Saturday, June 20 · Time TBD</DateTime>
    <LocationHeader>Jess & Jacy's Lovely Home</LocationHeader>
    <LocationInfo>211 Lawton Ave, Cliffside Park, NJ 07010</LocationInfo>
    <Divider />
    <AttireHeader>👚 Attire</AttireHeader>
    <AttireInfo>Dressy casual — wear whatever strikes your fancy.</AttireInfo>
    <ParkingHeader>🚘 Parking</ParkingHeader>
    <ParkingInfo>
      Street parking available on our block as well as the surrounding area.
    </ParkingInfo>
  </DetailsWrapper>
);

export default EastDetails;
