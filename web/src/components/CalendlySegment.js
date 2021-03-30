import React, { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import SegmentContainer from './SegmentContainer';

function CalendlySegment({ idTag, textColor, bgColor, title, subtitle, url }) {
  // consider setting height programedically based on window size to make this responsive
  // see https://betterprogramming.pub/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97

  // height cannot be set based on the iframe content height as it isn't on the same domain.
  return (
    <SegmentContainer id={idTag} className="py-5" color={textColor} bgColor={bgColor}>
      <h2 className="mb-4 text-break text-center">{title.replace(/-/g, '‑')}</h2>
      {subtitle && <p className="text-break text-center">{subtitle.replace(/-/g, '‑')}</p>}
      <InlineWidget
        styles={{
          height: 646,
        }}
        url={url}
      />
    </SegmentContainer>
  );
}

export default CalendlySegment;
