import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const IllustrationModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  width: 936px;
  margin-bottom: 40px;
`;

const HeaderWrapper = styled.div`
  ${Typography.HeaderMedium}
  margin-bottom: 32px;
`;

const SubheaderWrapper = styled.div`
  ${Typography.BodyMedium}
  margin-bottom: 40px;
`;

const TextWrapper = styled.div`
  ${Typography.BodyMedium}
  max-width: 744px;
  margin-bottom: 40px;
`;

const CtaWrapper = styled.div``;

const StyledLink = styled(Link)`
  ${Typography.BodyMediumButton}
  text-decoration: none;
  background-color: ${Palette.evergreen};
  padding: 16px 88px;
`;

const IllustrationModule = ({
  header,
  subheader,
  image,
  text,
  cta,
  ctaLink,
}) => (
  <IllustrationModuleWrapper>
    <HeaderWrapper>{header}</HeaderWrapper>
    <SubheaderWrapper>{subheader}</SubheaderWrapper>
    <ImageWrapper>
      <Img fluid={image} />
    </ImageWrapper>
    <TextWrapper>{text}</TextWrapper>
    <StyledLink to={ctaLink}>{cta}</StyledLink>
  </IllustrationModuleWrapper>
);

export default IllustrationModule;
