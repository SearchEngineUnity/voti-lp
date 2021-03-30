import React from 'react';
import { Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import SegmentContainer from './SegmentContainer';
import ImageBlock from './HeroImageBlock';
import HeroBlock from './HeroBlock';
import HeroBlockPT from './HeroBlockPT';
import VideoBlock from './VideoBlock';
import {
  mapHeroBlockToProps,
  mapImageBlockToProps,
  mapHeroBlockPTToProps,
  mapVideoBlockToProps,
} from '../lib/mapToProps';

function LrHeroSegment({ layout, blocks, idTag, textColor, bgColor }) {
  const colArr = layout.split(':').map((el) => parseInt(el, 10));
  const colDivisor = colArr[0] + colArr[1];
  const colCalculator = (dividen, divisor) => {
    switch (divisor) {
      case 2:
        return 'col-lg-6 col-md-6 col-12';

      case 3:
        if (dividen === 1) {
          return 'col-lg-4 col-md-6 col-12';
        }
        return 'col-lg-8 col-md-6 col-12';

      case 4:
        if (dividen === 1) {
          return 'col-lg-3 col-md-6 col-12';
        }
        return 'col-lg-9 col-md-6 col-12';

      case 12:
        switch (dividen) {
          case 7:
            return 'col-lg-7 col-md-6 col-12';
          case 5:
            return 'col-lg-5 col-md-6 col-12';

          default:
            console.log('invalid dividen');
            return null;
        }
      default:
        console.log('calculator missing');
        return null;
    }
  };

  return (
    <SegmentContainer id={idTag} color={textColor} bgColor={bgColor}>
      <Row className="align-items-center">
        {blocks.map((block, index) => {
          const { _type } = block;
          const col = colCalculator(colArr[index], colDivisor);
          switch (_type) {
            case 'illustration':
              return <ImageBlock {...mapImageBlockToProps(block)} key={block._key} col={col} />;

            case 'heroBlock':
              return <HeroBlock {...mapHeroBlockToProps(block)} key={block._key} col={col} />;

            case 'heroBlockPT':
              return <HeroBlockPT {...mapHeroBlockPTToProps(block)} key={block._key} col={col} />;

            case 'video':
              return <VideoBlock {...mapVideoBlockToProps(block)} key={block._key} col={col} />;

            default:
              return <div key="default"> LR block still under development</div>;
          }
        })}
      </Row>
    </SegmentContainer>
  );
}

export default LrHeroSegment;
