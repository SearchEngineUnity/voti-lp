import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import ImageBlock from './ImageBlock';
import SegmentContainer from './SegmentContainer';
import { mapImageBlockToProps } from '../lib/mapToProps';

function GuideHero({ title, subtitle, date, author, image }) {
  const textColor = '#fff';
  const bgColor = '#494949';

  const lastUpdatedDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  console.log(lastUpdatedDate);

  return (
    <SegmentContainer id="hero" color={textColor} bgColor={bgColor}>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          <p>Last Updated: {lastUpdatedDate.toLocaleDateString('en-US', options)}</p>
          <p>By {author}</p>
        </Col>
        <ImageBlock {...mapImageBlockToProps(image)} col="col-lg-6 col-md-6 col-12" />
      </Row>
    </SegmentContainer>
  );
}

export default GuideHero;
