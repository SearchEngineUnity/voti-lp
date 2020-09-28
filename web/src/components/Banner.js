import React from 'react';
import { Row, Container } from 'react-bootstrap';

function Banner() {
  return (
    <Container>
      <Row>
        <div className="col-lg-6 col-12">This is for the banner</div>
        <div className="col-lg-6 col-12">This is for the banner</div>
      </Row>
    </Container>
  );
}

export default Banner;
