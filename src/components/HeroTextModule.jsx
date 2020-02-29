import React from "react";
import styled from "styled-components";
import { Typography } from "../utils";

const HeroTextModuleBackground = styled.div`
  background-color: ${({ color }) => color};
`;

const HeroTextModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 120px 348px;
`;

const HeaderWrapper = styled.div`
  ${Typography.HeaderMedium}
  margin-bottom: 32px;
`;

const TextWrapper = styled.div`
  ${Typography.BodyLarge}
  max-width: 744px;
  margin-bottom: 32px;

  &:last-of-type {
    margin: 0;
  }
`;

const HeroTextModule = ({ backgroundColor, header, paragraphs }) => (
  <HeroTextModuleBackground color={backgroundColor}>
    <HeroTextModuleWrapper>
      <HeaderWrapper>{header}</HeaderWrapper>
      {paragraphs.map(paragraphText => (
        <TextWrapper key={paragraphText}>{paragraphText}</TextWrapper>
      ))}
    </HeroTextModuleWrapper>
  </HeroTextModuleBackground>
);

export default HeroTextModule;
