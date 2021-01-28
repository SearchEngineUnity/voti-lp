import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image/withIEPolyfill';

function HeroImageBlock({ col, image, alt, title }) {
  return (
    <div className={col}>
      <Row>
        <Col sm={6} md={8} lg={6} className="mx-auto">
          <Img fluid={image} alt={alt} title={title} loading="eager" />
        </Col>
      </Row>
    </div>
  );
}

export default HeroImageBlock;
