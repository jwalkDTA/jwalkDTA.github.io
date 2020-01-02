import React from "react";
import styled from "styled-components";
import { Typography } from "../utils";

import InfoCard from "./InfoCard";

const TriPanelWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 120px 156px;
`;

const HeaderWrapper = styled.div`
  ${Typography.HeaderMedium}
  margin-bottom: 48px;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TriPanel = ({ header, cards }) => (
  <TriPanelWrapper>
    <HeaderWrapper>{header}</HeaderWrapper>
    <CardsWrapper>
      {cards.map(card => (
        <InfoCard key={card.header} {...card} />
      ))}
    </CardsWrapper>
  </TriPanelWrapper>
);

export default TriPanel;
