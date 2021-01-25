import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';

function CtaSegment() {
  return (
    <section className="p-5" style={{ background: '#3c6286' }}>
      <Container>
        <Row>
          <Col className="col-md-6 col-12" style={{ color: 'white' }}>
            <p>
              Interested in <br /> more Information?
            </p>
          </Col>

          <Col className="col-md-6 col-12 text-center font-weight-light text-dark">
            <a href="https://votidetection.com/contact-us/" className="d-table table-hover">
              <span className="p-2 border">T</span>
              <p className="p-2 d-inline border">CONTACT US</p>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CtaSegment;
