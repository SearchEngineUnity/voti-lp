import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import HeroBlock from './HeroBlock';
// import ImageBlock from './ImageBlock';
import PardotForm from './PardotForm';
// import {
// //   mapHeroBlockToProps,
// //   mapImageBlockToProps,
// //   mapCfFormBlockToProps,
// } from '../lib/mapToProps';

function LrSegment({ layout, blocks, idTag }) {
  const colArr = layout.split(':').map((el) => parseInt(el, 10));
  const colDivisor = colArr[0] + colArr[1];
  const colCalculator = (dividen, divisor) => {
    switch (divisor) {
      case 2:
        return 'col-6';

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
    <section id={idTag}>
      <div className="container">
        <Row style={{ alignItems: 'center', width: 'auto' }}>
          {blocks.map((block, index) => {
            const { _type } = block;
            const col = colCalculator(colArr[index], colDivisor);
            switch (_type) {
              case 'hero':
                // return <HeroBlock {...mapHeroBlockToProps(col, block)} key={block._key} />;
                return <h1>This is Hero</h1>;

              case 'illustration':
                // return <ImageBlock {...mapImageBlockToProps(col, block)} key={block._key} />;
                return <h1>This is ImageBlock</h1>;

              case 'pardotForm':
                return <PardotForm {...block} key={block._key} />;

              default:
                return <div key="default"> LR block still under development</div>;
            }
          })}
        </Row>
      </div>
    </section>
  );
}

LrSegment.propTypes = {
  layout: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  blocks: PropTypes.array.isRequired,
};

export default LrSegment;
