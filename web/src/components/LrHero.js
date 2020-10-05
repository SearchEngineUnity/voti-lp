import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import votiBrochure from '../images/voti-brochure-mockup.png';

const StyledContainer = styled(Container)`
  background-color: #193753;
  color: white;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LrHeader() {
  return (
    <StyledContainer fluid className="p-5">
      <Row>
        <Col className="col-md-6 col-12">
          <h1>Download the VOTI Product Brochure</h1>
          <br />
          <h2>
            Learn about each of VOTI’s unique products, and how they can help you detect threats —
            no matter what industry you operate in.
          </h2>
        </Col>
        <StyledCol className="col-md-6 col-12">
          <img src={votiBrochure} alt="Voti Support" className="img-fluid" />
        </StyledCol>
      </Row>
    </StyledContainer>
  );
}

export default LrHeader;
