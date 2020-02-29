import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import SideBySide from "../components/SideBySide";
import IllustrationModule from "../components/IllustrationModule";
import HaikuModule from "../components/HaikuModule";

const SideBySideWrapper = styled.div`
  margin: 120px 0 240px 0;
`;

const IllustrationModuleWrapper = styled.div`
  margin-bottom: 120px;
`;

const HaikuModuleWrapper = styled.div`
  margin-bottom: 24px;
`;

const IndexPage = ({ data }) => (
  <>
    <SideBySideWrapper>
      <SideBySide
        header="Jess & Jacy walk down the aisle"
        subheader="“It’s about time!” – everyone who’s known us since we started dating"
        cta="Learn about us"
        ctaLink="/our-story"
        image={data.heroImage.childImageSharp.fluid}
        imageWidth="750"
        headerStyle="Large"
      />
    </SideBySideWrapper>
    <IllustrationModuleWrapper>
      <IllustrationModule
        header="Spreading love from coast to coast"
        subheader="Get ready, ‘cause we’re bringing the party to you!"
        image={data.illustrationImage.childImageSharp.fluid}
        text="Our wedding festivities begin in May with a road trip to Oregon where we’ll put a ring on it. We’ll then make our way back home to celebrate with our east coast crew."
        cta="View event details"
        ctaLink="/event-details"
      />
    </IllustrationModuleWrapper>
    <HaikuModuleWrapper>
      <HaikuModule
        firstLine="Together we stand"
        secondLine="Grounded and resilient"
        thirdLine="As evergreens do"
      />
    </HaikuModuleWrapper>
  </>
);

export const query = graphql`
  query HomepageQuery {
    heroImage: file(relativePath: { eq: "walking.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrationImage: file(relativePath: { eq: "illustration.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
