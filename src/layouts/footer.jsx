import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import globalContext from "window-or-global";

import { Palette, Typography } from "../utils";

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Palette.lightText};
`;

const FooterText = styled.div`
  margin: 0 auto;
  padding: 24px;
  ${Typography.BodySmall}
`;

const Footer = () => (
  <>
    {globalContext.location &&
      !globalContext.location.pathname.match(/event-details/) && (
        <FooterWrapper>
          <FooterText>Made with ❤️ by Jess & Jacy</FooterText>
        </FooterWrapper>
      )}
  </>
);

export default Footer;
