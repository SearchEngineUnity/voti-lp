import React from 'react';
import { Card } from 'react-bootstrap';
import Img from 'gatsby-image/withIEPolyfill';

function Landing({ title, image, imageAlt, filename }) {
  return (
    <Card className="shadow border-0">
      {/* {image && <Card.Img alt={imageAlt} src={image} />} */}
      {image && <Img alt={imageAlt} fluid={image} className="card-image" title={filename} />}
      <Card.Body>{title && <Card.Title>{title}</Card.Title>}</Card.Body>
    </Card>
  );
}
export default Landing;
