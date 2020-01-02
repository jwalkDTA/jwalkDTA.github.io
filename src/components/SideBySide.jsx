import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const SideBySideBackground = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const SideBySideWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  padding: 112px 0 120px 0;
`;

const TextContainer = styled.div`
  max-width: 552px;
  padding-left: ${({ reverse }) => (reverse ? "24px" : "156px")};
  padding-right: ${({ reverse }) => (reverse ? "156px" : "24px")};
`;

const ImageContainer = styled.div`
  width: 750px;
`;

const HeaderWrapper = styled.div`
  ${({ headerStyle }) => Typography[`Header${headerStyle}`]}
  margin-bottom: 32px;
`;

const SubheaderWrapper = styled.div`
  ${Typography.BodyLarge}
  margin-bottom: 32px;
`;

const ParagraphWrapper = styled.div`
  ${Typography.BodyMedium}
  margin-bottom: 32px;
`;

const CtaWrapper = styled.div``;

const StyledLink = styled(Link)`
  ${Typography.BodyMediumBold}
  color: ${Palette.ctaRed};
  text-decoration: none;
`;

const SideBySide = ({
  header,
  headerStyle,
  subheader,
  paragraphs,
  cta,
  ctaLink,
  image,
  backgroundColor,
  reverse,
}) => (
  <SideBySideBackground backgroundColor={backgroundColor}>
    <SideBySideWrapper reverse={reverse}>
      <TextContainer reverse={reverse}>
        <HeaderWrapper headerStyle={headerStyle}>{header}</HeaderWrapper>
        {subheader && <SubheaderWrapper>{subheader}</SubheaderWrapper>}
        {paragraphs &&
          paragraphs.map(paragraphText => (
            <ParagraphWrapper key={paragraphText}>
              {paragraphText}
            </ParagraphWrapper>
          ))}
        {cta && (
          <CtaWrapper>
            <StyledLink to={ctaLink}>{`${cta} ➞`}</StyledLink>
          </CtaWrapper>
        )}
      </TextContainer>
      <ImageContainer>
        <Img fluid={image} />
      </ImageContainer>
    </SideBySideWrapper>
  </SideBySideBackground>
);

export default SideBySide;
