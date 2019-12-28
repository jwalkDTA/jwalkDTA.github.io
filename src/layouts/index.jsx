import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import "./reset.css";

import Header from "./header";
import Footer from "./footer";

const SiteWrapper = styled.div`
  body {
    margin: 0;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <SiteWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </SiteWrapper>
  );
};

export default Layout;
