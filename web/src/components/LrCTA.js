import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import votiSupport from '../images/voti-support.png';

const ListUl = styled.ul`
  font-size: 1rem;
  margin-left: 1rem;
  list-style-type: disc;
  line-height: 2rem;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LrCTA() {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col className="col-md-6 col-12">
          <h2>Threats Aren’t Working 9-5 &amp; Neither Are We</h2>
          <br />
          <p>
            We know the issues you deal with have a knack for occurring outside of regular working
            hours. We stand behind our products, and are here to support you however you need it,
            with:
          </p>
          <br />
          <ListUl>
            <li>24/7 service &amp; support over the phone</li>
            <li>1-year parts and factory labor warranty</li>
            <li>Remote diagnostics &amp; servicing</li>
            <li>Online service portal to track &amp; manage your requests</li>
            <li>Training (on-site, online, or in-class) for your operators</li>
            <li>Market-responsive aftercare for products</li>
          </ListUl>
        </Col>

        <StyledCol className="col-md-6 col-12">
          <img src={votiSupport} alt="Voti Support" className="img-fluid" />
        </StyledCol>
      </Row>
    </Container>
  );
}

export default LrCTA;
