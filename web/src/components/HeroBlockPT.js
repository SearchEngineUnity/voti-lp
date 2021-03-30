import React from 'react';
import styled from 'styled-components';
import IllustrationFixed from './IllustrationFixed';
import Subtitle from './block-contents/SegmentSerializer';

const StyledH1 = styled.h1`
  font-weight: 500;
`;

function HeroBlockPT({ col, title, text, image }) {
  return (
    <div className={col}>
      {image && (
        <a href="https://votidetection.com/" className="mb-4 d-block">
          <IllustrationFixed image={image} loading="eager" />
        </a>
      )}
      <StyledH1 className="mb-4">{title.replace(/-/g, '‑')}</StyledH1>
      <Subtitle blocks={text} />
    </div>
  );
}

export default HeroBlockPT;
