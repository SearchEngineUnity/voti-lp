import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import bioSans from '../images/lr-row-1-segment-image.png';
import bioLogo from '../images/biosans-logo.png';

const StyledContainer = styled(Container)`
  background-color: #193753;
  color: white;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Banner() {
  return (
    <StyledContainer fluid className="p-5">
      <Row>
        <Col className="col-md-6 col-12 ">
          <StyledDiv>
            <img className="img-fluid" src={bioSans} alt="Bio Sans" />
          </StyledDiv>
        </Col>
        <Col className="col-md-6 col-12">
          <h2 className="mx-auto">See the Difference the BioSans™ OS Makes</h2>
          <br />
          <p>
            Our innovative BioSans™ operating system runs on all VOTI detection products, merging
            multiple shots into a single 3D image. Now, your operators only need to look at one
            image, can easily cycle through different densities, have a one-touch view of the last 5
            scans at their fingertips, and will miss fewer threats.
          </p>
          <br />
          <StyledDiv>
            <img src={bioLogo} alt="Biosans Logo" className="mx-auto" />
          </StyledDiv>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default Banner;
