import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FormCol = styled(Col)`
  background-color: #f5f5f5;
`;

const ListUl = styled.ul`
  font-size: 1rem;
  list-style-type: disc;
  line-height: 2rem;
  margin-left: 1rem;
`;

const StyledText = styled.p`
  font-weight: bold;
`;

const PadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

function LrForm() {
  return (
    <Container fluid>
      <Row>
        <Col className="col-md-6 col-12">
          <h2>Could your threat detection system be doing more of the work for you?</h2>
          <br />
          <p>
            Here are some of the differences using VOTI detection can make for you and your team:
          </p>
          <br />
          <ListUl>
            <li>3D Perspective™ technology eliminates blind spots in threat detection</li>
            <li>Our BioSans™ OS renders multiple shots into a single 3D image</li>
            <li>We offer up-to-the-minute information on fleet health &amp; remote diagnostics</li>
            <li>
              VOTI products are available in English, French, Spanish, Arabic, &amp; many other
              languages
            </li>
            <li>Our staff is on call 24/7 to support you anytime you need it</li>
          </ListUl>
          <br />
          <StyledText>
            If this sounds like something you need, our full product catalogue can give you the
            details on the exact detection product that fits your needs.
          </StyledText>
        </Col>
        <FormCol className="col-md-6 col-12">
          <PadDiv className="mx-auto">
            <embed
              type="text/html"
              src="https://marketing.votidetection.com/l/856933/2020-09-29/5qp26"
              height="740"
              width="450"
            />
          </PadDiv>
        </FormCol>
      </Row>
    </Container>
  );
}

export default LrForm;
