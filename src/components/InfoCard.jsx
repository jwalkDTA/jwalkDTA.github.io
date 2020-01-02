import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const InfoCardWrapper = styled.div`
  margin-right: 24px;

  &:last-of-type {
    margin: 0;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 24px;
`;

const DateTextWrapper = styled.div`
  ${Typography.AccentSmall}
  margin-bottom: 4px;
`;

const HeaderWrapper = styled.div`
  ${Typography.MainHeading}
  margin-bottom: 16px;
`;

const TextWrapper = styled.div`
  ${Typography.BodyMedium}
  max-width: 744px;
  margin-bottom: 32px;

  &:last-of-type {
    margin: 0;
  }
`;

const InfoCard = ({ image, dates, header, paragraphs }) => (
  <InfoCardWrapper>
    <ImageWrapper>
      <Img fluid={image} />
    </ImageWrapper>
    <DateTextWrapper>{dates}</DateTextWrapper>
    <HeaderWrapper>{header}</HeaderWrapper>
    {paragraphs.map(paragraphText => (
      <TextWrapper key={paragraphText}>{paragraphText}</TextWrapper>
    ))}
  </InfoCardWrapper>
);

export default InfoCard;
