import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const LockScreenWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 120px);
  min-height: 320px;
`;

const HeaderText = styled.div`
  ${Typography.HeaderMedium}
  margin-bottom: 24px;
`;

const SubheaderText = styled.div`
  ${Typography.BodyMedium}
  margin-bottom: 32px;
`;

const FormWrapper = styled.div`
  width: 636px;
  display: relative;
  align-self: flex-start;
  padding-top: 120px;
  padding-right: 120px;
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
  width: 360px;
  height: 48px;
  border: none;
  display: block;
  margin-bottom: 24px;
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

const ImageWrapper = styled.div`
  width: calc(100vw - 636px);
  height: calc(100vh - 120px);
`;

const LockScreen = ({
  image,
  setCurrentPassword,
  checkPassword,
  passwordWrong,
}) => (
  <LockScreenWrapper>
    <FormWrapper>
      <FormLayout>
        <HeaderText>Event Details</HeaderText>
        <SubheaderText>Enter your password to continue</SubheaderText>
        <FormLabel htmlFor="password-input">Password</FormLabel>
        <FormInput
          id="password-input"
          onChange={e => setCurrentPassword(e.target.value)}
        />
        <SubmitButton onClick={checkPassword}>Continue</SubmitButton>
        {passwordWrong && <p>The password you entered is incorrect</p>}
      </FormLayout>
    </FormWrapper>
    <ImageWrapper>
      <Img fluid={image} />
    </ImageWrapper>
  </LockScreenWrapper>
);

export default LockScreen;
