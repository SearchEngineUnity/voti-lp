import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Landing from './LandingCard';
import Brochure from './Brochure';
import Video from './Video';
import { mapCardToProps } from '../lib/mapToProps';
import SegmentContainer from './SegmentContainer';

function ListSegment({ idTag, title, icon, cards, cardType, textColor, bgColor }) {
  const componentTypeSwitch = (type, card) => {
    switch (type) {
      case 'Brochure':
        return <Brochure key={card._id} {...mapCardToProps(card)} />;

      case 'Video':
        return <Video key={card._id} {...mapCardToProps(card)} />;

      case 'Landing Page':
        return (
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Landing key={card._id} {...mapCardToProps(card)} />
          </Col>
        );

      default:
        return <div>List undefined</div>;
    }
  };

  return (
    <SegmentContainer idTag={idTag} textColor={textColor} bgColor={bgColor}>
      <h2 className="mb-3 h3">
        <i className={`mr-3 ${icon}`} />
        {title}
      </h2>
      <Row>{cards.map((card) => componentTypeSwitch(cardType, card))}</Row>
    </SegmentContainer>
  );
}

export default ListSegment;
