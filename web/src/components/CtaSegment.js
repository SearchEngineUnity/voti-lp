import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';

function ContactUs() {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col className="col-md-6 col-12">
          <p>
            Interested in <br /> more Information?
          </p>
        </Col>

        <Col className="col-md-6 col-12">
          <a href="https://votidetection.com/contact-us/">
            <button type="button" className="btn btn-outline-light px-5 py-4 rounded-0">
              CONTACT US
            </button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
