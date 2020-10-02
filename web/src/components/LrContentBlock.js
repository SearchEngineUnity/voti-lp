import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import competitor from '../images/competitor-vs-voti.png';

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LrContentBlock() {
  return (
    <Container className="fluid">
      <Row>
        <Col className="col-lg-5 col-12 p-3">
          <h2>Discover the 3D Perspective™ Advantage</h2>
          <br />
          <p>
            Our proprietary 3D Perspective™ technology evolves geometries and detection algorithms
            to remove blind spots and increase the visibility of threats for easier identification.
            We maximize the screening area and produce revealing images that capture unparalleled
            depth and detail. Our competition doesn’t even come close, see for yourself!
          </p>
        </Col>
        <StyledCol className="col-lg-7 col-12 p-3">
          <img className="responsive" src={competitor} alt="Competitor vs Voti" />
        </StyledCol>
      </Row>
    </Container>
  );
}

export default LrContentBlock;
