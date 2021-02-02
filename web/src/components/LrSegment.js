import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import SegmentBlock from './SegmentBlock';
import ImageBlock from './ImageBlock';
import PardotForm from './PardotForm';
import SegmentContainer from './SegmentContainer';
import { mapImageBlockToProps } from '../lib/mapToProps';

function LrSegment({ layout, blocks, idTag, textColor, bgColor }) {
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
    <SegmentContainer
      id={idTag}
      className={`${bgColor === '#ffffff' ? 'my-5' : 'py-5'}`}
      color={textColor}
      bgColor={bgColor}
    >
      <Row className="align-items-center">
        {blocks.map((block, index) => {
          const { _type } = block;
          const col = colCalculator(colArr[index], colDivisor);
          switch (_type) {
            case 'segmentBlock':
              return <SegmentBlock {...block} col={col} key={block._key} />;

            case 'illustration':
              return <ImageBlock {...mapImageBlockToProps(block)} key={block._key} col={col} />;

            case 'pardotForm':
              return <PardotForm {...block} key={block._key} col={col} />;

            default:
              return <div key="default"> LR block still under development</div>;
          }
        })}
      </Row>
    </SegmentContainer>
  );
}

LrSegment.propTypes = {
  layout: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  blocks: PropTypes.array.isRequired,
};

export default LrSegment;
