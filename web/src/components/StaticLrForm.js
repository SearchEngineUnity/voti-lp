import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FormCol = styled(Col)`
  background-color: #f5f5f5;
`;

const StyledUl = styled.ul`
  font-size: 1rem;
  list-style-type: disc;
  line-height: 2rem;
  margin-left: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LrForm() {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col className="col-md-6 col-12">
          <h2>Discover the VOTI Detection difference</h2>
          <br />
          <p>
            Here are some of the advantages that using VOTI Detection scanners can make for you and
            your team:
          </p>
          <br />
          <StyledUl>
            <li>3D Perspective™ technology eliminates blind spots in threat detection</li>
            <li>Our BioSans™ OS renders multiple shots into a single 3D image</li>
            <li>We offer up-to-the-minute information on fleet health &amp; remote diagnostics</li>
            <li>
              VOTI products are available in English, French, Spanish, Arabic, &amp; many other
              languages
            </li>
            <li>Our staff is on call 24/7 to support you anytime you need it</li>
          </StyledUl>
          <br />
          <p>
            Looking for more information? Our product catalogue highlights product and software
            specifications and discusses our approach to securing a variety of different industries.
          </p>
        </Col>
        <FormCol className="col-md-6 col-12">
          <StyledDiv className="mx-auto">
            <embed
              type="text/html"
              src="https://marketing.votidetection.com/l/856933/2020-09-29/5qp26"
              height="775"
              width="500"
            />
          </StyledDiv>
        </FormCol>
      </Row>
    </Container>
  );
}

export default LrForm;
