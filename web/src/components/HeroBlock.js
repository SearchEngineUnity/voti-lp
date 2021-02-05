import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import IllustrationFixed from './IllustrationFixed';

const StyledH1 = styled.h1`
  font-weight: 500;
`;

function HeroBlock({ col, title, text, image }) {
  return (
    <div className={col}>
      {image && (
        <a href="https://votidetection.com/" className="mb-4 d-block">
          <IllustrationFixed image={image} loading="eagar" />
        </a>
      )}
      <StyledH1 className="mb-4">{title.replace(/-/g, '‑')}</StyledH1>
      <p>{text.replace(/-/g, '‑')}</p>
    </div>
  );
}

export default HeroBlock;
