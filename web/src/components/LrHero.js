import React from 'react';
import { Row, Jumbotron, Col } from 'react-bootstrap';
import styled from 'styled-components';
import votiBrochure from '../images/voti-brochure-mockup.png';

const StyledJumbo = styled(Jumbotron)`
  background-color: #193753;
  color: white;
  border-radius: 0;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LrHeader() {
  return (
    <StyledJumbo className="fluid">
      <Row>
        <Col className="col-lg-6 col-12 p-3">
          <h1>Download the VOTI Product Brochure</h1>
          <br />
          <h2>
            Learn about each of VOTI’s unique products, and how they can help you detect threats —
            no matter what industry you operate in.
          </h2>
        </Col>
        <StyledCol className="col-lg-6 col-12 p-3">
          <img src={votiBrochure} alt="Voti Support" className="responsive" />
        </StyledCol>
      </Row>
    </StyledJumbo>
  );
}

export default LrHeader;
