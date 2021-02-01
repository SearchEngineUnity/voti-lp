import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Landing from './Landing';
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

      case 'Landing':
        return <Landing key={card._id} {...mapCardToProps(card)} />;

      default:
        return <div>List undefined</div>;
    }
  };

  return (
    <SegmentContainer idTag={idTag} textColor={textColor} bgColor={bgColor}>
      <Container>
        <i className={icon} />
        <h2 className="text-center">{title}</h2>
        <Row>{cards.map((card) => componentTypeSwitch(cardType, card))}</Row>
      </Container>
    </SegmentContainer>
  );
}

export default ListSegment;
