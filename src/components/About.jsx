import React from "react";
import styled from "styled-components";

const AboutDiv = styled.div`
  margin: 0px 10%;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7d7d7d;
  min-height: 437px;
  border: 1px solid #e6e1df;
  max-width: 500px;
  max-width: 400px;
  font-size: 10px;
`;

const Data = styled.div`
  color: #7d7d7d;
  justify-content: end;
  display: flex;
  border: 1px solid #e6e1df;
  max-width: 500px;
  max-width: 400px;
  min-height: 33px;
  font-size: 10px;
`;

const About = () => {
  return (
    <AboutDiv>
      <Description>This is a description of my todo application</Description>
      <Data>20.08.20</Data>
    </AboutDiv>
  );
}

export default About;
