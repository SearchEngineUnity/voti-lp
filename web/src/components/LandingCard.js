import React from 'react';
import { Card } from 'react-bootstrap';
import Img from 'gatsby-image/withIEPolyfill';
import style from 'styled-components';

function Landing({ title, image, imageAlt, filename }) {
  return (
    <Card className="border-0 shadow">
      {/* {image && <Card.Img alt={imageAlt} src={image} />} */}
      {image && <Img alt={imageAlt} fluid={image} className="card-img-top" title={filename} />}
      <Card.Body>{title && <Card.Title>{title}</Card.Title>}</Card.Body>
    </Card>
  );
}

export default Landing;
