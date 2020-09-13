import React from "react";
import { Link } from "gatsby";
import { Palette } from "../utils";
import HeroTextModule from "../components/HeroTextModule";
import SideBySide from "../components/SideBySide";
import Divider from "../components/Divider";
import SenbazuruProgress from "../components/SenbazuruProgress";

const Senbazuru = ({ data }) => (
  <>
    <HeroTextModule
      backgroundColor={Palette.pinkBackground}
      header="One thousand origami cranes"
      paragraphs={[
        "千羽鶴 (senbazuru), or 1000 paper cranes, is a revered symbol of happiness in Japanese culture. Help us fold cranes to wish us good luck in our upcoming marriage.",
      ]}
    />
    <SideBySide
      header="How to participate"
      cta="Sign up form"
      ctaLink="https://google.com"
      paragraphs={[
        "We’re delighted you’re interested in lending a hand. Thank you! Before you get started, fill out the sign up form. This will help us keep track of our collective progress.",
        "Don’t know how to fold origami cranes? Not a problem! Check out this handy tutorial.",
      ]}
      image={data.senbazuruImage.childImageSharp.fluid}
      imageWidth="522"
      headerStyle="Medium"
      reverse
      externalLink
    />
    <Divider image={data.paperDividerImage.childImageSharp.fluid} />
    <SenbazuruProgress />
  </>
);

export const query = graphql`
  query SenbazuruQuery {
    senbazuruImage: file(relativePath: { eq: "senbazuru.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    paperDividerImage: file(relativePath: { eq: "paperDivider.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Senbazuru;
