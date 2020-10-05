import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import bioSans from '../images/biosans-os-screen.png';
import bioLogo from '../images/biosans-logo.png';

const StyledContainer = styled(Container)`
  background-color: #193753;
  color: white;
`;

const PadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Banner() {
  return (
    <StyledContainer fluid>
      <Row>
        <Col className="col-md-6 col-12 ">
          <PadDiv>
            <img className="img-fluid" src={bioSans} alt="Bio Sans" />
          </PadDiv>
        </Col>
        <Col className="col-md-6 col-12">
          <h2 className="mx-auto">See the Difference the BioSans™ OS Makes</h2>
          <p>
            Our innovative BioSans™ operating system runs on all VOTI detection products, merging
            multiple shots into a single 3D image. Now, your operators only need to look at one
            image, can easily cycle through different densities, have a one-touch view of the last 5
            scans at their fingertips, and will miss fewer threats.
          </p>
          <PadDiv>
            <img src={bioLogo} alt="Biosans Logo" className="mx-auto" />
          </PadDiv>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default Banner;
