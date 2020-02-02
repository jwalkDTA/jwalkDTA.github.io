import React, { useState } from "react";
import styled from "styled-components";
import AnimateHeight from "react-animate-height";
import { Typography, Palette } from "../utils";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Trigger = styled.div`
  ${Typography.BodyMediumButton}
  text-transform: none;
  color: ${Palette.evergreen};
  margin-top: ${({ isOpen }) => (isOpen ? "32px" : "0")};
`;

const Arrow = styled.span`
  font-size: 10px;
  margin-left: 8px;
`;

class Toggle extends React.Component {
  state = {
    isOpen: false,
  };

  handleTriggerClick = () =>
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    const detailsText = isOpen ? "Hide" : "See";
    const arrow = isOpen ? "▲" : "▼";

    return (
      <Wrapper>
        <Trigger onClick={this.handleTriggerClick} isOpen={isOpen}>
          {`${detailsText} Details`}
          <Arrow>{arrow}</Arrow>
        </Trigger>
        <AnimateHeight duration={500} height={isOpen ? "auto" : "0"}>
          {children}
        </AnimateHeight>
      </Wrapper>
    );
  }
}

export default Toggle;
