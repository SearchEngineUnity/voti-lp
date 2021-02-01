import React from 'react';
import { Card } from 'react-bootstrap';

function Video({ title, image, imageAlt }) {
  return (
    <Card>
      {image && <Card.Img alt={imageAlt} src={image} />}
      <Card.Body>{title && <Card.Title>{title}</Card.Title>}</Card.Body>
    </Card>
  );
}
export default Video;
