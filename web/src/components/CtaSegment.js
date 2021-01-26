import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';

function CtaSegment(ctaText, buttonText, buttonIcon, buttonLink, id) {
  return (
    <section id={id} className="p-5" style={{ background: '#3c6286' }}>
      <Container>
        <Row>
          <Col className="col-md-6 col-12" style={{ color: 'white' }}>
            <p ctaText={ctaText} />
          </Col>
          <Col className="col-md-6 col-12 text-center font-weight-light text-dark">
            <a href={buttonLink} className="d-table table-hover">
              <span buttonIcon={buttonIcon} className="p-2 border" />
              <p buttonText={buttonText} className="p-2 d-inline border" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CtaSegment;
