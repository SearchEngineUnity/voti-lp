import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';

function IllustrationFixed({ image }) {
  return (
    <Img
      fixed={image.asset.fixed}
      style={{
        width: image.asset.metadata.dimensions.width,
        height: image.asset.metadata.dimensions.height,
      }}
      objectFit="contain"
      alt={image.alt}
      title={image.asset.originalFilename}
    />
  );
}

export default IllustrationFixed;
