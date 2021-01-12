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
    <Container fluid className="px-5 pb-5 pt-0">
      <Row>
        <Col className="col-md-6 col-12">
          <h2>Discover the 3D Perspective™ Advantage</h2>
          <br />
          <p>
            Our proprietary 3D Perspective™ technology evolves geometries and detection algorithms
            to remove blind spots and increase the visibility of threats for easier identification.
            We maximize the screening area and produce revealing images that capture unparalleled
            depth and detail. Our competition doesn’t even come close, see for yourself!
          </p>
        </Col>
        <StyledCol className="col-md-6 col-12">
          <img className="img-fluid" src={competitor} alt="Competitor vs Voti" />
        </StyledCol>
      </Row>
    </Container>
  );
}

export default LrContentBlock;
