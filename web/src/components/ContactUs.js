import React from 'react';
import { Jumbotron, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledJumbo = styled(Jumbotron)`
  background-color: #3c6286;
  color: white;
  height: 18rem;
  font-size: 2.75rem;
  font-weight: bold;
`;

const StyledDiv = styled.div`
  padding-right: 12rem;
  padding-top: 1.5rem;
  font-size: 14px;
`;

function ContactUs() {
  return (
    <StyledJumbo className="fluid p-8 m-0 rounded-0">
      <Row className="m-0 p-6">
        <p className="mx-auto m-0">
          Interested in <br /> more Information?
        </p>
        <StyledDiv className="mx-auto">
          <button type="button" className="btn btn-outline-light px-5 py-4 rounded-0">
            CONTACT US
          </button>
        </StyledDiv>
      </Row>
    </StyledJumbo>
  );
}

export default ContactUs;
