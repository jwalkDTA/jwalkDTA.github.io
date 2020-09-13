import React from "react";
import styled from "styled-components";

import SideBySide from "../components/SideBySide";
import IllustrationModule from "../components/IllustrationModule";
import Divider from '../components/Divider'
import HaikuModule from "../components/HaikuModule";

const SideBySideWrapper = styled.div`
  margin-bottom: 80px;
`;

const IllustrationModuleWrapper = styled.div`
  margin-bottom: 120px;
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
        imageWidth="500"
        headerStyle="Large"
      />
    </SideBySideWrapper>
    <IllustrationModuleWrapper>
      <IllustrationModule
        header="Spreading love from coast to coast"
        subheader="Get ready, ‘cause we’re bringing the party to you!"
        image={data.subaruImage.childImageSharp.fluid}
        text="Our wedding festivities begin in May with a road trip to Oregon where we’ll put a ring on it. We’ll then make our way back home to celebrate with our east coast crew."
        cta="View event details"
        ctaLink="/event-details"
      />
    </IllustrationModuleWrapper>
    <Divider image={data.evergreenDividerImage.childImageSharp.fluid}/>
    <HaikuModule
      firstLine="Together we stand"
      secondLine="Grounded and resilient"
      thirdLine="As evergreens do"
    />
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
    subaruImage: file(relativePath: { eq: "subaru.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    evergreenDividerImage: file(
      relativePath: { eq: "evergreenDivider.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
