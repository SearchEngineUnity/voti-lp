import React from 'react';
import { Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import ImageBlock from './HeroImageBlock';
import PardotForm from './PardotForm';
import HeroBlock from './HeroBlock';
import { mapHeroBlockToProps, mapImageBlockToProps } from '../lib/mapToProps';

function LrHeroSegment({ layout, blocks, idTag }) {
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
    <section id={idTag}>
      <div className="container">
        <Row style={{ alignItems: 'center', width: 'auto' }}>
          {blocks.map((block, index) => {
            const { _type } = block;
            const col = colCalculator(colArr[index], colDivisor);
            switch (_type) {
              case 'pardotForm':
                return <PardotForm {...block} col={col} key={block._key} />;

              case 'illustration':
                return <ImageBlock {...mapImageBlockToProps(block)} key={block._key} col={col} />;

              case 'heroBlock':
                return <HeroBlock {...mapHeroBlockToProps(block)} key={block._key} col={col} />;

              default:
                return <div key="default"> LR block still under development</div>;
            }
          })}
        </Row>
      </div>
    </section>
  );
}

export default LrHeroSegment;
