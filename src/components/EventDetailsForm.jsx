import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const HeaderText = styled.div`
  ${Typography.HeaderMedium}
  margin-bottom: 24px;
`;

const SubheaderText = styled.div`
  ${Typography.BodyMedium}
  margin-bottom: 32px;
`;

const FormLayout = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const FormLabel = styled.label`
  ${Typography.BodyMediumButton}
  margin-bottom: 4px;
  display: block;
  text-transform: none;
  color: ${Palette.textBrown};
`;

const FormInput = styled.input`
  width: 336px;
  height: 48px;
  border: none;
  display: block;
  margin-bottom: 24px;
  padding-left: 24px;
`;

const SubmitButton = styled.button`
  background-color: ${Palette.evergreen};
  color: ${Palette.lightText};
  border: none;
  width: 360px;
  height: 48px;
  ${Typography.BodyMediumButton}
  text-transform: none;
`;

const handleKeyPress = (key, handler) => {
  if (key === "Enter") {
    handler();
  }
};

const EventDetailsForm = ({
  image,
  setCurrentPassword,
  checkPassword,
  passwordWrong,
}) => (
  <FormLayout>
    <HeaderText>Event Details</HeaderText>
    <SubheaderText>Enter your password to continue</SubheaderText>
    <FormLabel htmlFor="password-input">Password</FormLabel>
    <FormInput
      id="password-input"
      onChange={e => setCurrentPassword(e.target.value)}
      onKeyDown={e => handleKeyPress(e.key, checkPassword)}
      type="password"
    />
    <SubmitButton onClick={checkPassword}>Continue</SubmitButton>
    {passwordWrong && <p>The password you entered is incorrect</p>}
  </FormLayout>
);

export default EventDetailsForm;
