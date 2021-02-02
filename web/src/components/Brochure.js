import React from 'react';
import { Link } from 'gatsby';
import { Card } from 'react-bootstrap';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  box-shadow: 0px 3px 6px #00000029;
`;

function Brochure({ title, image, imageAlt, filename, url }) {
  return (
    <Link to={`/${url}`} className="text-dark">
      <StyledCard className="border-0">
        {/* {image && <Card.Img alt={imageAlt} src={image} />} */}
        {image && <Img alt={imageAlt} fluid={image} className="card-img-top" title={filename} />}
        <Card.Body>{title && <Card.Title>{title}</Card.Title>}</Card.Body>
      </StyledCard>
    </Link>
  );
}

export default Brochure;
