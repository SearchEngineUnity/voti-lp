import React from 'react';
import { Jumbotron, Row } from 'react-bootstrap';
import styled from 'styled-components';
import bioSans from '../images/biosans-os-screen.png';
import bioLogo from '../images/biosans-logo.png';

const StyledJumbo = styled(Jumbotron)`
  background-color: #193753;
  color: white;
`;

const PadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

function Banner() {
  return (
    <StyledJumbo className="fluid p-8 m-0 rounded-0">
      <Row className="m-0 p-6">
        <div className="col-lg-6 col-12">
          <PadDiv>
            <img src={bioSans} alt="Bio Sans" height="auto" width="500" />
          </PadDiv>
        </div>
        <div className="col-lg-6 col-12">
          <h2 className="mx-auto m-0">
            See the Difference the BioSans™ <br /> OS Makes
          </h2>
          <p>
            Our innovative BioSans™ operating system runs on all VOTI detection products, merging
            multiple shots into a single 3D image. Now, your operators only need to look at one
            image, can easily cycle through different densities, have a one-touch view of the last 5
            scans at their fingertips, and will miss fewer threats.
          </p>
          <PadDiv>
            <img src={bioLogo} alt="Biosans Logo" className="mx-auto" />
          </PadDiv>
        </div>
      </Row>
    </StyledJumbo>
  );
}

export default Banner;
