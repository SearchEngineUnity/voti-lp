import React from 'react';
import { Row, Container } from 'react-bootstrap';
import styled from 'styled-components';

const FormDiv = styled.div`
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

function LrForm() {
  return (
    <Container>
      <Row>
        <div className="col-lg-6 col-12">
          <h2>
            Threats Aren’t Working 9-5 &amp; <br /> Neither Are We
          </h2>
          <br />
          <p>
            We know the issues you deal with have a knack for occurring outside of regular working
            hours. We stand behind our products, and are here to support you however you need it,
            with:
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
        </div>
        <FormDiv className="col-lg-6 col-12">
          <embed
            type="text/html"
            src="https://marketing.votidetection.com/l/856933/2020-09-29/5qp26"
            height="750"
            width="100%"
          />
        </FormDiv>
      </Row>
    </Container>
  );
}

export default LrForm;
