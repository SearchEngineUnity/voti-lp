import React from 'react';
import { Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import competitor from '../images/competitor-vs-voti.png';

const PaddedRow = styled(Row)`
  margin: 3rem 1rem 3rem 1rem;
`;

function LrContentBlock() {
  return (
    <Container>
      <PaddedRow>
        <div className="col-lg-6 col-12">
          <h2>
            Discover the 3D Perspective™ <br /> Advantage
          </h2>
          <br />
          <p>
            Our proprietary 3D Perspective™ technology evolves geometries and detection algorithms
            to remove blind spots and increase the visibility of threats for easier identification.
            We maximize the screening area and produce revealing images that capture unparalleled
            depth and detail. Our competition doesn’t even come close, see for yourself!
          </p>
        </div>

        <div className="col-lg-6 col-12">
          <img src={competitor} alt="Competitor vs Voti" heigh="auto" width="500" />
        </div>
      </PaddedRow>
    </Container>
  );
}

export default LrContentBlock;
