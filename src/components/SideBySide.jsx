import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled, { css } from "styled-components";
import { Typography, Palette } from "../utils";
import LinkIcon from "../images/open_in_new-24px.svg";

const SideBySideBackground = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const SideBySideWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  padding: 64px 0 120px 0;
  align-items: center;
`;

const TextContainer = styled.div`
  max-width: 400px;
  padding-left: ${({ reverse }) => (reverse ? "72px" : "32px")};
  padding-right: ${({ reverse }) => (reverse ? "32px" : "72px")};
`;

const ImageContainer = styled.div`
  width: ${({ imageWidth }) => `${imageWidth}px`};
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

const LinkStyle = css`
  ${Typography.BodyMediumBold}
  color: ${Palette.evergreen};
  text-decoration: none;
  margin-right: 8px;
`;

const StyledLink = styled(Link)`
  ${LinkStyle}
`;

const ExternalLinkContainer = styled.div`
  position: relative;
`;

const StyledExternalLink = styled.a`
  ${LinkStyle}
`;

const StyledLinkIcon = styled(LinkIcon)`
  width: 16px;
  position: absolute;
  top: 2px;
  path {
    fill: ${Palette.evergreen};
  }
`;

const SideBySide = ({
  header,
  headerStyle,
  subheader,
  paragraphs,
  cta,
  ctaLink,
  image,
  imageWidth,
  backgroundColor,
  reverse,
  externalLink
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
            {externalLink ? (
              <ExternalLinkContainer>
                <StyledExternalLink href={ctaLink}>{cta}</StyledExternalLink>
                <StyledLinkIcon />
              </ExternalLinkContainer>
            ) : (<StyledLink to={ctaLink}>{`${cta} ➞`}</StyledLink>)}
          </CtaWrapper>
        )}
      </TextContainer>
      <ImageContainer imageWidth={imageWidth}>
        <Img fluid={image} />
      </ImageContainer>
    </SideBySideWrapper>
  </SideBySideBackground>
);

export default SideBySide;
