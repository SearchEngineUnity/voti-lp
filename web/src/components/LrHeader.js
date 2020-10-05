import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  background-color: #193753;
  color: white;

  @media (max-width: 991px) {
    padding: 1.5rem;
    width: auto;
  }

  @media screen and (max-width: 575px) {
    padding 1.5rem;
    width: auto;
  }
`;

const StyledDiv = styled.div`
  border: 1px solid white;
  text-align: center;
  padding: 1rem;

  @media screen and (max-width: 575px) {
    padding 0.5rem;
   
  }
`;

function LrHeader() {
  return (
    <StyledContainer fluid className="p-5">
      <Row>
        <Col className="col-md-7 col-12">
          <a href="https://votidetection.com">
            <img
              className="img-fluid"
              src="https://votidetection.com/wp-content/uploads/2020/04/logo-white-1.png"
              alt="Voti Detection Main Logo"
            />
          </a>
        </Col>
        <Col className="col-md-5 col-12">
          <StyledDiv>CONTACT AN EXPERT TODAY: 1-800-555-5555</StyledDiv>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default LrHeader;
