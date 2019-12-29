import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const SideBySideWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  max-width: 552px;
  padding: 0 24px 0 156px;
`;

const ImageContainer = styled.div`
  width: 750px;
`;

const HeaderWrapper = styled.div`
  ${Typography.HeaderLarge}
  margin-bottom: 32px;
`;

const SubheaderWrapper = styled.div`
  ${Typography.BodyLarge}
  margin-bottom: 32px;
`;

const CtaWrapper = styled.div``;

const StyledLink = styled(Link)`
  ${Typography.BodyMediumBold}
  color: ${Palette.ctaRed};
  text-decoration: none;
`;

const SideBySide = ({ header, subheader, cta, ctaLink, image }) => (
  <SideBySideWrapper>
    <TextContainer>
      <HeaderWrapper>{header}</HeaderWrapper>
      <SubheaderWrapper>{subheader}</SubheaderWrapper>
      <CtaWrapper>
        <StyledLink to={ctaLink}>{`${cta} ➞`}</StyledLink>
      </CtaWrapper>
    </TextContainer>
    <ImageContainer>
      <Img fluid={image} />
    </ImageContainer>
  </SideBySideWrapper>
);

export default SideBySide;
