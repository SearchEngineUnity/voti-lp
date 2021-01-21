import React from 'react';
import Img from 'gatsby-image';
import { getFixedGatsbyImage } from 'gatsby-source-sanity';
import styled from 'styled-components';
import sanityConfig from '../../../sanityConfig';

function Logo({ logo }) {
  const image = logo?.logo?.asset?.id;
  const fixedProps = getFixedGatsbyImage(
    image,
    {
      width: logo?.logo?.asset?.metadata?.dimensions?.width,
      height: logo?.logo?.asset?.metadata?.dimensions?.height,
    },
    sanityConfig,
  );
  const imageFilename = logo?.logo?.asset?.originalFilename || 'image';

  return (
    // <div style={{ marginBottom: '16px' }}>
    <div className="text-center">
      <Img fixed={fixedProps} alt={logo?.logo?.alt} title={imageFilename} />
    </div>
    // </div>
  );
}

export default Logo;
