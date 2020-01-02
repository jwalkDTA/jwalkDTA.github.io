import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const DividerWrapper = styled.div``;

const JigokudaniDivider = ({ image }) => (
  <DividerWrapper>
    <Img fluid={image} />
  </DividerWrapper>
);

export default JigokudaniDivider;
