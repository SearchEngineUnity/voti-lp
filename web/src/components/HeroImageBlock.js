import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Img from 'gatsby-image/withIEPolyfill';

function HeroImageBlock({ col, image, alt, title, width, height }) {
  const maxHeight = height > 430 ? 430 : height;
  console.log(width, height);
  return (
    <div className={col}>
      {/* <Row>
        <Col sm={6} md={8} lg={6} className="mx-auto">
          <Img fluid={image} alt={alt} title={title} loading="eager" fadeIn={false} />
        </Col>
      </Row> */}
      <Img
        fluid={image}
        alt={alt}
        title={title}
        loading="eager"
        fadeIn={false}
        objectFit="contain"
        style={{
          maxHeight,
          maxWidth: width,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
    </div>
  );
}

export default HeroImageBlock;
