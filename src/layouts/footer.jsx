import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Typography } from "../utils";

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterText = styled.div`
  margin: 0 auto;
  padding: 24px;
  ${Typography.BodySmall}
`;

const Footer = () => (
  <FooterWrapper>
    <FooterText>Made with  ❤️ by Jess & Jacy</FooterText>
  </FooterWrapper>
);

export default Footer;
