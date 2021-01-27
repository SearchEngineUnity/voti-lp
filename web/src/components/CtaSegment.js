import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import FixedImage from './IllustrationFixed';
// import styled from 'styled-components';

function CtaSegment({ ctaText, buttonText, buttonIcon, buttonLink, id }) {
  return (
    <section id={id} className="p-5" style={{ color: 'white', backgroundColor: '#3c6286' }}>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <p className="font-weight-bold">{ctaText}</p>
          </Col>
          <Col md={6} sm={12} className="text-center font-weight-light text-dark">
            <a href={buttonLink} className="d-table table-hover mx-auto text-white">
              <span className="p-2 border">
                <FixedImage image={buttonIcon} />
              </span>
              <p className="p-2 d-inline border">{buttonText}</p>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CtaSegment;
