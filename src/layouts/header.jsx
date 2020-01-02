import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import { Palette, Typography } from "../utils";

const HeaderContainer = styled.div`
  background-color: ${Palette.siteBackground};
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1440px;
  margin: 0 auto;
`;

const Wordmark = styled(Link)`
  ${Typography.MainHeading};
  line-height: 48px;
  text-decoration: none;
  padding: 20px 0;
`;

const Links = styled.div`
  display: flex;
`;

const LinkStyle = css`
  ${Typography.Body};
  text-decoration: none;
  margin-right: 32px;

  &:last-of-type {
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  ${LinkStyle}
`;

const StyledExternalLink = styled.a`
  ${LinkStyle}
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <TextContainer>
      <Wordmark to="/">Jess & Jacy</Wordmark>
      <Links>
        <StyledLink to="our-story">Our Story</StyledLink>
        <StyledLink to="event-details">Event Details</StyledLink>
        <StyledLink to="senbazuru">Senbazuru</StyledLink>
        <StyledExternalLink href="https://www.zola.com/registry/jwalkdowntheaisle">
          Registry
        </StyledExternalLink>
        <StyledLink to="contact-us">Contact Us</StyledLink>
      </Links>
    </TextContainer>
  </HeaderContainer>
);

export default Header;
