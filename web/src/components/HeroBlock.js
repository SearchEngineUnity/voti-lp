import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import IllustrationFixed from './IllustrationFixed';

function HeroBlock({ col, title, text, image }) {
  return (
    <div className={col}>
      <a href="https://votidetection.com/" className="pb-4 d-block">
        <IllustrationFixed image={image} />
      </a>
      <h1 className="pb-3">{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default HeroBlock;
