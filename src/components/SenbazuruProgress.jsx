import React from "react";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  padding: 112px 156px;
  background-color: ${Palette.white};
  ${Typography.BodyMedium}
`;

const ProgressHeader = styled.h2`
  margin-bottom: 32px;
  ${Typography.HeaderMedium}
`;

const ProgressSubheader = styled.div`
  margin-bottom: 48px;
`;

const NamesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 0 auto;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  min-width: 350px;
  margin-bottom: 24px;
`;

const SenbazuruProgress = () => (
  <ProgressWrapper>
    <ProgressHeader>Progress</ProgressHeader>
    <ProgressSubheader>
      Thank you to everyone who's participated!
    </ProgressSubheader>
    <NamesList>
      <Name>Cathy N.</Name>
      <Name>Claire N.</Name>
      <Name>Jan C.</Name>
      <Name>Janette K.</Name>
      <Name>Joanne B.</Name>
      <Name>Judy S.</Name>
      <Name>Kath D.</Name>
      <Name>Kip H.</Name>
      <Name>Lynn C.</Name>
      <Name>Luis B.</Name>
      <Name>Nikki P.</Name>
      <Name>Sal P.</Name>
      <Name>Sally H.</Name>
      <Name>Sara H.</Name>
      <Name>Susan L.</Name>
      <Name>Susan W.</Name>
      <Name>Suzanne D.</Name>
      <Name>Valerie L.</Name>
    </NamesList>
  </ProgressWrapper>
);

export default SenbazuruProgress;
