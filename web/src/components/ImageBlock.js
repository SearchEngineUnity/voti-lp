import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image/withIEPolyfill';

const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

function ImageBlock({ col, image, alt, title }) {
  return (
    <div className={col}>
      <Row>
        <Col sm={12} xl={11} className="mx-auto">
          <Img fluid={image} alt={alt} title={title} />
        </Col>
      </Row>
    </div>
  );
}

ImageBlock.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageBlock;
