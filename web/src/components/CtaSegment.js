import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FixedImage from './IllustrationFixed';
// import styled from 'styled-components';

function CtaSegment({ ctaText, buttonText, buttonIcon, buttonLink, id }) {
  return (
    <section id={id} className="p-5" style={{ background: '#3c6286' }}>
      <Container>
        <Row>
          <Col className="col-md-6 col-12" style={{ color: 'white' }}>
            <p className="font-weight-bold">{ctaText}</p>
          </Col>
          <Col className="col-md-6 col-12 text-center font-weight-light text-dark">
            <a href={buttonLink} className="d-table table-hover mx-auto">
              <span className="p-2 border">
                <FixedImage image={buttonIcon} />
                {/* <img src={buttonIcon.url} alt="placeholder" /> */}
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
