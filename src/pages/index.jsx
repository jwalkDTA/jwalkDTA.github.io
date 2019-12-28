import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={data.heroImage.childImageSharp.fluid} />
      </div>
    </>
  );
};

export const query = graphql`
  query HomepageQuery {
    heroImage: file(relativePath: { eq: "walking.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
