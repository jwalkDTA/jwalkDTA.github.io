import React from "react";
import { Link } from "gatsby";

import HeroTextModule from "../components/HeroTextModule";
import TriPanel from "../components/TriPanel";
import Divider from "../components/Divider";
import SideBySide from "../components/SideBySide";
import { Palette, Typography } from "../utils";
import CtaSandwich from "../components/CtaSandwich";

const OurStory = ({ data }) => (
  <>
    <HeroTextModule
      backgroundColor={Palette.evergreenBackground}
      header="One Summer's Day"
      paragraphs={[
        "Jess and Jacy first met in Eugene, Oregon at University of Oregon’s Summer Music Camp in July 2008.",
        "They were both band geeks music aficionados who loved playing the alto saxophone so much that they attended the same week-long program three years in a row.",
      ]}
    />
    <TriPanel
      header="In it for the long haul"
      cards={[
        {
          image: data.headingEastImage.childImageSharp.fluid,
          dates: "2010 - 2011",
          header: "East meets west",
          paragraphs: [
            "Jacy asked Jess out over the phone on August 12, 2010 — two weeks before he moved across the country from Oregon to Pennsylvania for college. Jess was in New York, about to start her last year of high school.",
            "Neither of them had been in a long distance relationship before and wanted to give it a shot.",
          ],
        },
        {
          image: data.keystoneImage.childImageSharp.fluid,
          dates: "2011 - 2016",
          header: "Keystone chronicles",
          paragraphs: [
            "Jess also decided to attend college in PA, but on the opposite side of the state. Despite the increased distance, they always made time to see each other in-person least once a month.",
            "In 2014, Jacy graduated and traded the City of Brotherly love for the Steel City where he began his career. They could finally be together in the same city. Long distance no more!",
          ],
        },
        {
          image: data.newYorkImage.childImageSharp.fluid,
          dates: "2016 - present",
          header: "There and back again",
          paragraphs: [
            "Jess, Jacy, and Kaya bid a bittersweet farewell to the city they first called “home” and made their way to Brooklyn.",
            "They both started working in NYC’s tech scene, Jacy as a software engineer and Jess as a product designer, and have made dear friends along the way.",
          ],
        },
      ]}
    />
    <Divider image={data.jigokudaniDividerImage.childImageSharp.fluid} />
    <SideBySide
      header="A match made in Hell (Valley)"
      paragraphs={[
        "While vacationing in Japan last fall, Jacy asked Jess during their stay at a ryokan in Noboribetsu to which she said, “Yes!”",
        "Noboribetsu is known for its hot springs and Jigokudani (地獄谷), which literally translates to “Hell Valley”.",
      ]}
      image={data.jigokudaniImage.childImageSharp.fluid}
      imageWidth="750"
      backgroundColor={Palette.salmonBackground}
      headerStyle="Medium"
      reverse
    />
    <CtaSandwich
      header="Jess & Jacy are getting married"
      subheader="Celebrate with them as they kick off married life together in style."
      cta="View Event Details"
      ctaLink="/event-details"
      leftImage={data.jacyImage.childImageSharp.fluid}
      rightImage={data.jessImage.childImageSharp.fluid}
    />
  </>
);

export const query = graphql`
  query OurStoryQuery {
    headingEastImage: file(relativePath: { eq: "headingEast.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    keystoneImage: file(relativePath: { eq: "keystone.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newYorkImage: file(relativePath: { eq: "newYork.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jigokudaniDividerImage: file(
      relativePath: { eq: "jigokudaniDivider.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jigokudaniImage: file(relativePath: { eq: "jigokudani.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jacyImage: file(relativePath: { eq: "jacy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jessImage: file(relativePath: { eq: "jess.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default OurStory;
