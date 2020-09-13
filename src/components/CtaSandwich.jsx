import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const CtaSandwichWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 88px 0 120px;
`;

const ImageWrapper = styled.div`
  width: 208px;

  &:first-of-type {
    margin-right: 48px;
  }

  &:last-of-type {
    margin-left: 48px;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  ${Typography.HeaderMedium}
  max-width: 510px;
  margin-bottom: 32px;
`;

const SubheaderWrapper = styled.div`
  ${Typography.BodyMedium}
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  ${Typography.BodyMediumButton}
  text-decoration: none;
  background-color: ${Palette.evergreen};
  padding: 16px 88px;
`;

const CtaSandwich = ({
  header,
  subheader,
  cta,
  ctaLink,
  leftImage,
  rightImage,
}) => (
  <CtaSandwichWrapper>
    <ImageWrapper>
      <Img fluid={leftImage} />
    </ImageWrapper>
    <DetailsWrapper>
      <HeaderWrapper>{header}</HeaderWrapper>
      <SubheaderWrapper>{subheader}</SubheaderWrapper>
      <StyledLink to={ctaLink}>{cta}</StyledLink>
    </DetailsWrapper>
    <ImageWrapper>
      <Img fluid={rightImage} />
    </ImageWrapper>
  </CtaSandwichWrapper>
);

export default CtaSandwich;
