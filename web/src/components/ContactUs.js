import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  background-color: #3c6286;
  color: white;
  font-size: 2.75rem;
  font-weight: bold;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ContactUs() {
  return (
    <StyledContainer fluid>
      <Row>
        <StyledCol className="col-md-6 col-12">
          <p>
            Interested in <br /> more Information?
          </p>
        </StyledCol>

        <StyledCol className="col-md-6 col-12">
          <button type="button" className="btn btn-outline-light px-5 py-4 rounded-0">
            CONTACT US
          </button>
        </StyledCol>
      </Row>
    </StyledContainer>
  );
}

export default ContactUs;
