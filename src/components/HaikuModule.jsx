import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Typography, Palette } from "../utils";

const HaikuModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  aline-items: center;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${Palette.evergreenBackground};
  padding: 96px 252px;
`;

const Line = styled.div`
  ${Typography.HeaderMedium}
  color: ${Palette.evergreen};
  text-align: center;
  margin-bottom: 24px;
`;

const FirstLine = styled(Line)`
  margin-left: -512px;
`;

const SecondLine = styled(Line)``;

const ThirdLine = styled(Line)`
  margin-right: -512px;
`;

const HaikuModule = ({ firstLine, secondLine, thirdLine }) => (
  <HaikuModuleWrapper>
    <FirstLine>{firstLine}</FirstLine>
    <SecondLine>{secondLine}</SecondLine>
    <ThirdLine>{thirdLine}</ThirdLine>
  </HaikuModuleWrapper>
);

export default HaikuModule;
