import React from 'react';
import { Row, Jumbotron, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledJumbo = styled(Jumbotron)`
  background-color: #193753;
  color: white;
  border-radius: 0;
  padding: 2rem;
  margin: 0;
`;

const StyledDiv = styled.div`
  border: 1px solid white;
  text-align: center;
  padding: 1rem;
`;

function LrHeader() {
  return (
    <StyledJumbo className="fluid">
      <Row>
        <Col className="c-footer__brand col-lg-6 col-12 p-3">
          <a href="https://votidetection.com">
            <img
              src="https://votidetection.com/wp-content/uploads/2020/04/logo-white-1.png"
              alt="Voti Detection Main Logo"
            />
          </a>
        </Col>
        <Col className="col-lg-6 col-12 p-3">
          <StyledDiv>CONTACT AN EXPERT TODAY: 1-800-555-5555</StyledDiv>
        </Col>
      </Row>
    </StyledJumbo>
  );
}

export default LrHeader;
