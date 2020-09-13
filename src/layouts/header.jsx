import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import LinkIcon from "../images/open_in_new-24px.svg";
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

const ExternalLinkWrapper = styled.div`
  display: flex;
  margin-right: 32px;
`;

const StyledLinkIcon = styled(LinkIcon)`
  width: 16px;
  path {
    fill: ${Palette.textBrown};
  }
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
  margin-right: 8px !important;
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
        <ExternalLinkWrapper>
          <StyledExternalLink href="https://www.zola.com/registry/jwalkdowntheaisle">
            Registry
          </StyledExternalLink>
          <StyledLinkIcon />
        </ExternalLinkWrapper>
        <StyledExternalLink href="mailto:jwalkdowntheaisle@gmail.com">Contact Us</StyledExternalLink>
      </Links>
    </TextContainer>
  </HeaderContainer>
);

export default Header;
