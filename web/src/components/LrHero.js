import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import votiBrochure from '../images/VO-product-brochure-graphic.png';

const StyledContainer = styled(Container)`
  background-color: #193753;
  color: white;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.p`
  font-size: 22px;
  }
`;

function LrHeader() {
  return (
    <StyledContainer fluid className="p-5">
      <Row>
        <Col className="col-md-6 col-12">
          <a href="https://votidetection.com">
            <img
              className="img-fluid"
              src="https://votidetection.com/wp-content/uploads/2020/04/logo-white-1.png"
              alt="Voti Detection Main Logo"
            />
          </a>
          <br />
          <br />
          <br />
          <h1>Download the VOTI Product Brochure</h1>
          <br />
          <StyledText>
            Learn about VOTI’s range of X-Ray Security scanners and the sophisticated screening
            solutions they employ. Our scanners can help you protect, detect, and prevent — no
            matter what industry you operate in.
          </StyledText>
        </Col>
        <StyledCol className="col-md-6 col-12">
          <img src={votiBrochure} alt="Voti Support" className="img-fluid" />
        </StyledCol>
      </Row>
    </StyledContainer>
  );
}

export default LrHeader;
