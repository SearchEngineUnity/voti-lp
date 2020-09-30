import React from 'react';
import { Row, Container } from 'react-bootstrap';

function LrHero() {
  return (
    <Container>
      <Row>
        <div className="c-footer__brand">
          <a href="https://votidetection.com">
            <img
              src="https://votidetection.com/wp-content/uploads/2020/04/logo-white-1.png"
              alt="Voti Detection Main Logo"
            />
          </a>
        </div>
        <div className="col-lg-6 col-12">This is for Hero image</div>
      </Row>
    </Container>
  );
}

export default LrHero;
